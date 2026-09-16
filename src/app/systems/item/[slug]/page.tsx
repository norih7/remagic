import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import {
  getItemsData,
  getShopItemsData,
  getLocationItemsData,
  getEnemyItemsData,
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
import { itemTypeMap } from "@/constants";

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

  // 2. slug (ID) に一致するアイテムを探す
  const item = allItems.find((item) => item.id === itemId);
  if (!item || item.type === "money") {
    notFound(); // なければ404
  }
  const style =
    "bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 text-slate-700";
  const itemDescStyle =
    "block flex items-center mb-1 text-xs text-gray-500 border-b pb-1 border-gray-300";
  const wrapStyle = "mb-8 px-3 pt-1 pb-3 border border-gray-300 rounded-lg";
  const headerStyle =
    "flex items-center py-3 !mb-3 text-base border-b border-gray-300";
  const filterItem = shopItems.filter((item) => item.itemId === itemId);
  const ShopInfo =
    filterItem.length > 0 ? (
      filterItem.map((item, index) => {
        return (
          <li key={index} className={style}>
            <strong className="flex items-center">{item.locationName}</strong>
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
            <strong className="flex items-center text-gray-700 ">
              {item.locationName}
            </strong>
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
          <li key={index} className={style}>
            <strong className="flex items-center text-gray-700 ">
              {item.enemyName}
            </strong>
            <span className="text-xs">確率: {item.probability}%</span>
          </li>
        ))
      : "なし";

  const filterEnemyItemSteal = enemyItems.filter(
    (item) => item.itemId === itemId && item.type === "steal",
  );

  const stealInfo =
    filterEnemyItemSteal.length > 0
      ? filterEnemyItemSteal.map((item, index) => (
          <li key={index} className={style}>
            <strong className="flex items-center text-gray-700 ">
              {item.enemyName}
            </strong>
            <span className="text-xs">確率: {item.probability}%</span>
          </li>
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
    <section>
      <SetPageTitle title={title} />
      <SectionTitle>{item.name}</SectionTitle>
      <div className={`${style} font-bold mb-2`}>
        <strong className={itemDescStyle}>効果</strong>
        {item.effect}
      </div>
      <div className="mb-8 grid grid-cols-2 gap-2 font-bold">
        <div className={style}>
          <strong className={itemDescStyle}>種別</strong>
          {itemTypeMap[item.type as keyof typeof itemTypeMap]}
        </div>
        <div className={style}>
          <strong className={itemDescStyle}>購入</strong>
          {price}
        </div>
        <div className={style}>
          <strong className={itemDescStyle}>売却</strong>
          {item.sell} ガルド
        </div>
        <div className={style}>
          <strong className={itemDescStyle}>特殊効果</strong>
          {Supcial}
        </div>
      </div>
      <div className={wrapStyle}>
        <h4 className={headerStyle}>
          <LuShoppingBag className="mr-1" />
          購入可能ショップ
        </h4>
        <ul className="grid grid-cols-2 gap-3">{ShopInfo}</ul>
      </div>
      <div className={wrapStyle}>
        <h4 className={headerStyle}>
          <LuGift className="mr-1" />
          タウンやダンジョンの宝箱
        </h4>
        <ul className="grid grid-cols-2 gap-3">{TreasureInfo}</ul>
      </div>
      <div className={wrapStyle}>
        <h4 className={headerStyle}>
          <LuGem className="mr-1" />
          ドロップするモンスター
        </h4>
        <ul className="grid grid-cols-2 gap-3">{dropInfo}</ul>
      </div>
      <div className={wrapStyle}>
        <h4 className={headerStyle}>
          <LuGem className="mr-1" />
          盗めるモンスター
        </h4>
        <ul className="grid grid-cols-2 gap-3">{stealInfo}</ul>
      </div>
    </section>
  );
}
