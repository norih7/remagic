import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { systemLinks, itemTypeMap } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import {
  getEnemyItemsData,
  getItemsData,
  getEnemyLocationsData,
} from "@/lib/db";
export const dynamic = "force-static";
import Link from "next/link";

const pageKey = "item-drop";
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

type EnemyInfo = {
  enemyId: number;
  enemyName: string;
};

export default async function HomePage() {
  const enemyItems = await getEnemyItemsData();
  const items = await getItemsData();

  const result = enemyItems.reduce<
    Record<number, { itemName: string; enemysMap: Map<number, EnemyInfo> }>
  >((acc, curr) => {
    if (!acc[curr.itemId]) {
      acc[curr.itemId] = {
        itemName: curr.itemName,
        enemysMap: new Map<number, EnemyInfo>(),
      };
    }

    // 敵の重複を防止
    acc[curr.itemId].enemysMap.set(curr.enemyId, {
      enemyId: curr.enemyId,
      enemyName: curr.enemyName,
    });

    return acc;
  }, {});
  const itemDropList = Object.keys(result).map((key, index) => {
    const itemId = Number(key);
    const data = result[itemId];
    const enemies = [...data.enemysMap.values()].map((enemy, enemyIndex) => (
      <Link
        href={`/systems/enemy/${enemy.enemyId}`}
        className="text-xs font-bold inline-block bg-white py-1 px-2 border border-gray-300 rounded-md"
        key={enemyIndex}
      >
        {enemy.enemyName}
      </Link>
    ));
    const item = items.find((item) => item.id === itemId);
    return (
      <RoundedContainer key={index}>
        <div className="mb-3">
          <h3>{data.itemName}</h3>
          <Tag>
            {item && itemTypeMap[item.type as keyof typeof itemTypeMap]}
          </Tag>
        </div>
        <div className="text-xs grid grid-cols-1 gap-3">
          <RoundedItem title="説明">
            {item && item.effect}
            {item && item.special}
          </RoundedItem>
          <RoundedItem title="ドロップ">
            <div className="flex flex-wrap gap-2 pt-1">{enemies}</div>
          </RoundedItem>
        </div>
      </RoundedContainer>
    );
  });

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        エターニアの敵がドロップするアイテム（消費アイテム、装備品）の一覧ページです。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ドロップアイテム一覧</SectionTitle>
        {itemDropList}
      </section>
    </article>
  );
}
