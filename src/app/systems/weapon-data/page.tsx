import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import {
  getRecipesData,
  getRecipeItemsData,
  getLocationRecipesData,
  Item,
} from "@/lib/db";
import RecipePropertyList from "@/components/RecipePropertyList";
import Image from "next/image";
import { systemLinks, itemTypeMap, elementMap } from "@/constants";
import { getItemsData } from "@/lib/db";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Tag from "@/components/Tag";
import Link from "next/link";
import InlineList from "@/components/InlineList";
import RoundedInlineList from "@/components/RoundedInlineList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "weapon-data";
const title = systemLinks[pageKey].title;
const description = systemLinks[pageKey].seoDesc;
const canonical = systemLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

const createTagList = (item: Item) => {
  const result = [];
  const { isBuy, isDrop, isTreasure, isEvent } = item;
  if (isBuy) result.push("ショップ購入");
  if (isDrop) result.push("ドロップ");
  if (isTreasure) result.push("宝箱");
  if (isEvent) result.push("イベント入手");
  if (result.length === 0) result.push("その他");
  return result;
};

const createList = (arr: Item[]) => {
  const sort = arr.sort((a, b) => Number(a.sell) - Number(b.sell));
  const result = sort.map((item, index) => {
    const { id, name, effect, isBuy, isDrop, special, type } = item;
    const element = (item.element as string) === "" ? "normal" : item.element;
    const shopBuy = isBuy ? "購入可能" : "宝箱から入手";
    const tagList = createTagList(item);
    const specialText = special === "" ? "" : <div>特殊: {special}</div>;
    return (
      <Link href={`/systems/item/${id}`} key={index} className="group block">
        <RoundedContainer className="">
          <div className="flex">
            <h3 className="text-base font-bold flex-1">
              {name}&nbsp;
              <Tag element={element}>{elementMap[element].name}</Tag>
            </h3>
            <div>
              <span
                className="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-3 py-1
                   text-xs font-bold text-slate-400 transition
                   group-hover:bg-blue-500 group-hover:text-white"
              >
                詳細を見る
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-2">
            <RoundedInlineList title="入手">
              <div className="">{tagList.join("/")}</div>
            </RoundedInlineList>
          </div>

          <RoundedItem title="効果/説明">
            <div className="flex py-1">
              <div className="flex-1">
                {effect}
                {specialText}
              </div>
            </div>
          </RoundedItem>
        </RoundedContainer>
      </Link>
    );
  });
  return result;
};

export default async function HomePage() {
  const itemsData = await getItemsData();
  const filterData = itemsData
    .filter(
      (item) =>
        item.type === "sword" ||
        item.type === "halbert" ||
        item.type === "knuckle" ||
        item.type === "ax" ||
        item.type === "whistle" ||
        item.type === "shortSword" ||
        item.type === "spear" ||
        item.type === "cane" ||
        item.type === "greatSword" ||
        item.type === "bag" ||
        item.type === "mace" ||
        item.type === "gun",
    )
    .reduce(
      (acc, item) => {
        if (acc[item.type]) {
          acc[item.type].push(item);
        } else {
          acc[item.type] = [];
          acc[item.type].push(item);
        }

        return acc;
      },
      {} as Record<string, Item[]>,
    );
  const swordList = createList(filterData.sword);
  const shortSwordList = createList(filterData.shortSword);
  const spearList = createList(filterData.spear);
  const axList = createList(filterData.ax);
  const halbertList = createList(filterData.halbert);
  const knuckleList = createList(filterData.knuckle);
  const whistleList = createList(filterData.whistle);
  const caneList = createList(filterData.cane);
  const maceList = createList(filterData.mace);
  const bagList = createList(filterData.bag);
  const gunList = createList(filterData.gun);

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアの武器アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>武器: 剣</SectionTitle>
          <p>装備可能: リッド</p>
          {swordList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 短剣</SectionTitle>
          <p>装備可能: リッド</p>
          {shortSwordList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 槍</SectionTitle>
          <p>装備可能: リッド</p>
          {spearList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 斧</SectionTitle>
          <p>装備可能: リッド</p>
          {axList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ハルバート</SectionTitle>
          <p>装備可能: リッド</p>
          {halbertList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ナックル</SectionTitle>
          <p>装備可能: ファラ</p>
          {knuckleList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ホイッスル</SectionTitle>
          <p>装備可能: メルディ</p>
          {whistleList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 杖</SectionTitle>
          <p>装備可能: キール</p>
          {caneList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: メイス</SectionTitle>
          <p>装備可能: キール</p>
          {maceList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: バッグ</SectionTitle>
          <p>装備可能: チャット</p>
          {bagList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 銃</SectionTitle>
          <p>装備可能: フォッグ</p>
          {gunList}
        </div>
      </section>
    </article>
  );
}
