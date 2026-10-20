import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import {
  getItemsData,
  getShopItemsData,
  getLocationItemsData,
  getEnemyItemsData,
  getSubEventItemsData,
} from "@/lib/db";
import SectionTitle from "@/components/SectionTitle";
import {
  LuGift,
  LuShoppingBag,
  LuGem,
  LuShieldHalf,
  LuZap,
} from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { Metadata } from "next";
import { itemTypeMap } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import Main from "@/components/SiteLayout/Main";
import Link from "next/link";
import RoundedItem from "@/components/RoundedItem";
import LinkItem from "@/components/LinkItem";

// 静的生成（SSG）用：全アイテムのIDをURLとして登録する
export async function generateStaticParams() {
  const items = await getItemsData();
  return items.map((item) => ({ slug: String(item.id) }));
}
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const itemId = Number(slug);
  // ここでAPIやCMSからデータを取得する（SSGなのでビルド時に実行されます）
  const allItems = await getItemsData();
  const item = allItems.find((item) => item.id === itemId);
  const title = `アイテムデータ - ${item?.name}`;
  return {
    title,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itemId = Number(slug);

  // 1. items.json を読み込む
  const allItems = await getItemsData();
  const shopItems = await getShopItemsData();
  const locationItems = await getLocationItemsData();
  const enemyItems = await getEnemyItemsData();
  const subEventItems = await getSubEventItemsData();

  // 2. slug (ID) に一致するアイテムを探す
  const item = allItems.find((item) => item.id === itemId);
  if (!item || item.type === "money") {
    notFound(); // なければ404
  }
  const style =
    "bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 text-slate-700";
  const itemDescStyle =
    "block flex items-center mb-1 text-xs text-gray-500 border-b pb-1 border-gray-300 font-bold";
  const wrapStyle = "mb-8 px-3 pt-1 pb-3 border border-gray-300 rounded-lg";
  const headerStyle =
    "flex items-center pb-2 !mb-3 text-base border-b border-gray-300";

  const filterItem = shopItems.filter((item) => item.itemId === itemId);
  const ShopInfo =
    filterItem.length > 0 ? (
      filterItem.map((item, index) => {
        return (
          <li key={index} className={style}>
            <div className="flex items-center font-bold">
              {item.locationName}
            </div>
            <span className="text-xs">{item.shopName}</span>
          </li>
        );
      })
    ) : (
      <li>なし</li>
    );

  const filterTreasureItem = locationItems.filter(
    (item) => item.itemId === itemId,
  );
  const TreasureInfo =
    filterTreasureItem.length > 0
      ? filterTreasureItem.map((item, index) => (
          <li key={index} className={style}>
            <div className="flex items-center text-gray-700 font-bold">
              {item.locationName}
            </div>
            <span className="text-xs">{item.remarks}</span>
          </li>
        ))
      : "なし";

  const filterEnemyItemDrop = enemyItems.filter(
    (item) => item.itemId === itemId && item.type === "drop",
  );
  const dropInfo =
    filterEnemyItemDrop.length > 0
      ? filterEnemyItemDrop.map((item, index) => (
          <LinkItem
            name={item.enemyName}
            href={`/systems/enemy/${item.enemyId}`}
            remarks={`確率: ${item.probability}%`}
            key={index}
          />
        ))
      : "なし";

  const filterEnemyItemSteal = enemyItems.filter(
    (item) => item.itemId === itemId && item.type === "steal",
  );

  const stealInfo =
    filterEnemyItemSteal.length > 0
      ? filterEnemyItemSteal.map((item, index) => (
          <LinkItem
            name={item.enemyName}
            href={`/systems/enemy/${item.enemyId}`}
            remarks={`確率: ${item.probability}%`}
            key={index}
          />
        ))
      : "なし";

  const filterSubEventItem = subEventItems.filter(
    (item) => item.itemId === itemId,
  );
  const subEventInfo =
    filterSubEventItem.length > 0
      ? filterSubEventItem.map((item, index) => (
          <LinkItem
            name={item.subEventName}
            href={item.subEventPath}
            remarks={item.remarks}
            key={index}
          />
        ))
      : "なし";

  const Supcial = item.special === "" ? "なし" : item.special;

  const title = `アイテムデータ: ${item.name}`;
  const price =
    String(item.buy) === "-" || String(item.buy)
      ? "購入不可"
      : `${item.buy} ガルド`;
  // 3. 表示処理
  return (
    <Main title={title}>
      <article>
        <SectionTitle>{item.name}</SectionTitle>
        <RoundedContainer>
          <RoundedItem title="効果" className="mb-3">
            {item.effect}
          </RoundedItem>
          <div className="grid grid-cols-2 gap-3">
            <RoundedItem title="種別">
              {itemTypeMap[item.type as keyof typeof itemTypeMap]}
            </RoundedItem>
            <RoundedItem title="購入">{price}</RoundedItem>
            <RoundedItem title="売却">{item.sell} ガルド</RoundedItem>
            <RoundedItem title="特殊効果">{Supcial}</RoundedItem>
          </div>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={headerStyle}>
            <LuShoppingBag className="mr-1" />
            購入可能ショップ
          </h3>
          <ul className="grid grid-cols-2 gap-3">{ShopInfo}</ul>
        </RoundedContainer>

        <RoundedContainer>
          <h3 className={headerStyle}>
            <LuGift className="mr-1" />
            タウンやダンジョンの宝箱
          </h3>
          <ul className="grid grid-cols-2 gap-3">{TreasureInfo}</ul>
        </RoundedContainer>

        <RoundedContainer>
          <h3 className={headerStyle}>
            <LuGem className="mr-1" />
            ドロップするモンスター
          </h3>
          <ul className="grid grid-cols-2 gap-3">{dropInfo}</ul>
        </RoundedContainer>

        <RoundedContainer>
          <h3 className={headerStyle}>
            <LuGem className="mr-1" />
            盗めるモンスター
          </h3>
          <ul className="grid grid-cols-2 gap-3">{stealInfo}</ul>
        </RoundedContainer>

        <RoundedContainer>
          <h3 className={headerStyle}>
            <LuZap className="mr-1" />
            サブイベント
          </h3>
          <ul className="grid grid-cols-2 gap-3">{subEventInfo}</ul>
        </RoundedContainer>
      </article>
    </Main>
  );
}
