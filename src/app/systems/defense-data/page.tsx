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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "item-data";
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
  if (isBuy) result.push(<Tag key="buy">ショップ購入</Tag>);
  if (isDrop) result.push(<Tag key="drop">ドロップ</Tag>);
  if (isTreasure) result.push(<Tag key="Treasure">宝箱</Tag>);
  if (isEvent) result.push(<Tag key="event">イベント入手</Tag>);
  if (result.length === 0) result.push(<Tag key="other">その他</Tag>);
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
            <h3 className="text-base font-bold flex-1">{name}</h3>
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
          <div className="flex flex-wrap mb-3">{tagList}</div>

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
        item.type === "armor" ||
        item.type === "cloak" ||
        item.type === "robe" ||
        item.type === "shield" ||
        item.type === "bracelet" ||
        item.type === "helmet" ||
        item.type === "ribbon" ||
        item.type === "circlet" ||
        item.type === "hat",
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
  const armorList = createList(filterData.armor);
  const cloakList = createList(filterData.cloak);
  const robeList = createList(filterData.robe);
  const shieldList = createList(filterData.shield);
  const braceletList = createList(filterData.bracelet);
  const helmetList = createList(filterData.helmet);
  const ribbonList = createList(filterData.ribbon);
  const circletList = createList(filterData.circlet);
  const hatList = createList(filterData.hat);

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアの防具アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載しています。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 鎧</SectionTitle>
          <p>装備可能: リッド</p>
          {armorList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 盾</SectionTitle>
          <p>装備可能: リッド</p>
          {shieldList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 兜</SectionTitle>
          <p>装備可能: リッド</p>
          {helmetList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: クローク</SectionTitle>
          <p>装備可能: ファラ、メルディ、チャット</p>
          {cloakList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: ローブ</SectionTitle>
          <p>装備可能: キール、フォッグ</p>
          {robeList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: リボン</SectionTitle>
          <p>装備可能: ファラ、メルディ</p>
          {ribbonList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: ブレスレット</SectionTitle>
          <p>装備可能: ファラ、メルディ、チャット、フォッグ</p>
          {braceletList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: サークレット</SectionTitle>
          <p>装備可能: キール ※「クレスのバンダナ」のみリッドが装備可能</p>
          {circletList}
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>防具: 帽子</SectionTitle>
          <p>装備可能: チャット</p>
          {hatList}
        </div>
      </section>
    </article>
  );
}
