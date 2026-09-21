import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import {
  getEnemyData,
  getShopItemsData,
  getLocationItemsData,
  getEnemyItemsData,
  getEnemyLocationsData,
} from "@/lib/db";
import SectionTitle from "@/components/SectionTitle";
import {
  LuGift,
  LuShoppingBag,
  LuGem,
  LuShieldHalf,
  LuMapPin,
} from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { Metadata } from "next";
import SetPageTitle from "@/components/SetPageTitle";
import { enemyTypeMap, elementMap } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Tag from "@/components/Tag";
import Link from "next/link";

// 静的生成（SSG）用：全アイテムのIDをURLとして登録する
export async function generateStaticParams() {
  const enemies = await getEnemyData();
  return enemies.map((item) => ({ slug: String(item.id) }));
}
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const enemyId = Number(slug);
  // ここでAPIやCMSからデータを取得する（SSGなのでビルド時に実行されます）
  const enemies = await getEnemyData();
  const enemy = enemies.find((item) => item.id === enemyId);
  const title = `敵データ - ${enemy?.name}`;
  return {
    title,
    robots: {
      index: false,
      follow: true,
    },
  };
}

const convertElementMap = (element: string) => {
  return element.split(", ").map((item, index) => (
    <Tag key={index} element={item as keyof typeof elementMap}>
      {elementMap[item as keyof typeof elementMap].name}
    </Tag>
  ));
};

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const enemyId = Number(slug);

  // 1. items.json を読み込む
  const enemies = await getEnemyData();
  const enemyItems = await getEnemyItemsData();
  const enemyLocations = await getEnemyLocationsData();

  // 2. slug (ID) に一致するアイテムを探す
  const enemy = enemies.find((item) => item.id === enemyId);
  if (!enemy) {
    notFound(); // なければ404
  }

  const style =
    "bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 text-slate-700";
  const wrapStyle = "mb-8 px-3 pt-1 pb-3 border border-gray-300 rounded-lg";
  const headerStyle =
    "flex items-center pb-2 !mb-3 text-base border-b border-gray-300";

  const drop = enemyItems.filter(
    (item) => item.enemyId === enemyId && item.type === "drop",
  );
  const dropInfo =
    drop.length > 0
      ? drop.map((item, index) => (
          <li key={index} className={style}>
            <Link href={`/systems/item/${item.itemId}`}>
              <strong className="flex items-center">{item.itemName}</strong>
              <span className="text-xs text-gray-700">
                確率: {item.probability}%
              </span>
            </Link>
          </li>
        ))
      : "なし";

  const steal = enemyItems.filter(
    (item) => item.enemyId === enemyId && item.type === "steal",
  );
  const stealInfo =
    steal.length > 0
      ? steal.map((item, index) => (
          <li key={index} className={style}>
            <Link href={`/systems/item/${item.itemId}`}>
              <strong className="flex items-center">{item.itemName}</strong>
              <span className="text-xs text-gray-700">
                確率: {item.probability}%
              </span>
            </Link>
          </li>
        ))
      : "なし";

  const location = enemyLocations.filter((item) => item.enemyId === enemyId);
  const locationInfo =
    location.length > 0
      ? location.map((item, index) => (
          <li key={index} className={style}>
            <strong className="flex items-center text-gray-700 ">
              {item.locationName}
            </strong>
            <span className="text-xs">{item.remarks}</span>
          </li>
        ))
      : "なし";
  const title = `モンスターデータ: ${enemy.name}`;

  return (
    <section>
      <SetPageTitle title={title} />
      <div className="mb-3">
        <SectionTitle>{enemy.name}</SectionTitle>
        <Tag>{enemyTypeMap[enemy.type as keyof typeof enemyTypeMap]}</Tag>
      </div>
      <RoundedContainer>
        <div className="grid grid-cols-2 gap-3">
          <RoundedItem title="HP">{enemy.hp}</RoundedItem>
          <RoundedItem title="経験値">{enemy.exp}</RoundedItem>
          <RoundedItem title="獲得ガルド">{enemy.gald}</RoundedItem>
          <RoundedItem title="攻撃属性">
            <Tag element={enemy.attack}>{elementMap[enemy.attack].name}</Tag>
          </RoundedItem>
          <RoundedItem title="弱点属性">
            {convertElementMap(enemy.weak)}
          </RoundedItem>
          <RoundedItem title="攻撃耐性">
            {convertElementMap(enemy.resist)}
          </RoundedItem>
        </div>
      </RoundedContainer>

      <RoundedContainer>
        <h3 className={headerStyle}>
          <LuGem className="mr-1" />
          アイテムドロップ
        </h3>
        <ul className="grid grid-cols-2 gap-3">{dropInfo}</ul>
      </RoundedContainer>
      <RoundedContainer>
        <h3 className={headerStyle}>
          <LuGem className="mr-1" />
          盗めるアイテム
        </h3>
        <ul className="grid grid-cols-2 gap-3">{stealInfo}</ul>
      </RoundedContainer>
      <RoundedContainer>
        <h3 className={headerStyle}>出現場所</h3>
        <ul className="grid grid-cols-2 gap-3">{locationInfo}</ul>
      </RoundedContainer>
    </section>
  );
}
