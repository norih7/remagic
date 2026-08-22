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
import { systemLinks } from "@/constants";
import { getItemsData } from "@/lib/db";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";

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

const createList = (arr: Item[]) => {
  const result = arr.map((item, index) => {
    const { id, name, effect, isBuy, special } = item;
    const shopBuy = isBuy ? "購入可能" : "できない";
    const specialText = special === "" ? "" : <div>特殊: {special}</div>;
    return (
      <RoundedContainer key={index} className="font-bold">
        <h3>{name}</h3>
        <div className="flex mb-3">
          {/* <div className="flex w-[100px] h-[100px] bg-gray-500 mr-3"></div>
          <div className="flex-1">
            <RoundedItem title="効果、特殊効果" className="h-full">
              {effect}
              {specialText}
            </RoundedItem>
          </div> */}
          <div className="flex-1">
            <RoundedItem title="効果、特殊効果" className="h-full">
              {effect}
              {specialText}
            </RoundedItem>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <RoundedItem title="ショップ購入">{shopBuy}</RoundedItem>
          <RoundedItem title="購入/入手場所">
            <a href={`/systems/item/${id}`}>{name}の詳細ページ</a>
          </RoundedItem>
        </div>
      </RoundedContainer>
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
        item.type === "bag",
    )
    .reduce(
      (acc, item) => {
        if (acc[item.type]) {
          acc[item.type].push(item);
        } else {
          acc[item.type] = [];
        }

        return acc;
      },
      {} as Record<string, Item[]>,
    );

  const swordList = createList(filterData.sword);
  const shortSwordList = createList(filterData.shortSword);
  const axList = createList(filterData.ax);
  const halbertList = createList(filterData.halbert);

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアの消費アイテム一覧データを掲載しています。購入場所、入手可能ダンジョンなどは詳細ページにて一覧を掲載していますのでぜひご確認ください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <div className="mb-8">
          <SectionTitle>武器: 剣</SectionTitle>
          {swordList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 短剣</SectionTitle>
          {shortSwordList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: 斧</SectionTitle>
          {axList}
        </div>
        <div className="mb-8">
          <SectionTitle>武器: ハルバート</SectionTitle>
          {halbertList}
        </div>
      </section>
    </article>
  );
}
