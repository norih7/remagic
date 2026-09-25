import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import {
  getEnemyData,
  getEnemyItemsData,
  getLocationRecipesData,
  Item,
  Enemies,
  EnemyItems,
} from "@/lib/db";
import RecipePropertyList from "@/components/RecipePropertyList";
import Image from "next/image";
import { systemLinks, elementMap } from "@/constants";
import { getItemsData } from "@/lib/db";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Tag from "@/components/Tag";
import Link from "next/link";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "enemy-data";
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

const convertElementMap = (element: string, prefix = "") => {
  return element.split(", ").map((item, index) => (
    <Tag key={index} element={item as keyof typeof elementMap}>
      {prefix}
      {elementMap[item as keyof typeof elementMap].name}
    </Tag>
  ));
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

const createList = (arr: Enemies[], enemyItemData: EnemyItems[]) => {
  const result = arr.map((item, index) => {
    const { id, name, type, hp, exp, gald, attack, weak, resist } = item;
    const enemyType =
      type === "normal"
        ? "通常モンスター"
        : type === "boss"
          ? "BOSS"
          : "その他";

    const filterData = enemyItemData.filter(
      (item) => item.enemyId === id && item.type === "drop",
    );

    const dropItem =
      filterData.length > 0
        ? filterData.map((item, index) => {
            return <li key={index}>{item.itemName}</li>;
          })
        : "なし";

    return (
      <Link href={`/systems/enemy/${id}`} key={index} className="group block">
        <RoundedContainer className="">
          <div className="flex">
            <h3 className="text-base font-bold flex-1">
              No.{id} {name}
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
          <div className="flex flex-wrap mb-3">
            <Tag>{enemyType}</Tag>
            {convertElementMap(attack, "攻撃: ")}
            {convertElementMap(weak, "弱点: ")}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <RoundedItem title="HP">
              <div className="flex-1">{hp}</div>
            </RoundedItem>
            <RoundedItem title="経験値/ガルド">
              {exp}exp / {gald}ガルド
            </RoundedItem>
          </div>
          <RoundedItem title="アイテムドロップ">
            <ul className="flex flex-wrap gap-2">{dropItem}</ul>
          </RoundedItem>
        </RoundedContainer>
      </Link>
    );
  });
  return result;
};

export default async function HomePage() {
  const enemyData = await getEnemyData();
  const enemyItemData = await getEnemyItemsData();
  const list = createList(enemyData, enemyItemData);

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          エターニアのモンスター覧データを掲載しています。出現場所や耐性などは詳細ページをご確認ください。
        </p>
      </PageSummary>
      {/* <section className="mb-12">
        <SectionTitle>料理と習得方法</SectionTitle>
        <p>準備中</p>
      </section> */}
      <section className="mb-12">
        <SectionTitle>モンスター一覧データ</SectionTitle>
        {list}
      </section>
    </article>
  );
}
