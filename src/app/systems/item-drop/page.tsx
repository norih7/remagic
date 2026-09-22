import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
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
const title = deepLinks[pageKey].title;
const description = deepLinks[pageKey].seoDesc ?? "";
const canonical = deepLinks[pageKey].path;

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
  const test = Object.keys(result).map((key, index) => {
    const itemId = Number(key);
    const data = result[itemId];
    const enemies = [...data.enemysMap.values()].map((enemy, enemyIndex) => (
      <Link
        href={`/systems/enemy/${enemy.enemyId}`}
        className="text-xs font-bold inline-block bg-white p-1 border border-gray-500 rounded-md"
        key={enemyIndex}
      >
        {enemy.enemyName}
      </Link>
    ));
    const item = items.find((item) => item.id === itemId);
    return (
      <RoundedContainer key={index}>
        <h3>{data.itemName}</h3>
        <div className="text-xs grid grid-cols-1 gap-3">
          <RoundedItem title="説明">
            {item && item.effect}
            {item && item.special}
          </RoundedItem>
          <RoundedItem title="ドロップ">
            <div className="flex flex-wrap gap-2">{enemies}</div>
          </RoundedItem>
        </div>
      </RoundedContainer>
    );
  });

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        エターニアでは、購入や宝箱では手に入らない武器や防具があり、敵のドロップでしか入手できないものも少なくありません。収集の優先順位を意識して、序盤・中盤・終盤で効率よく強化していくのが安定したプレイにつながります。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ドロップアイテム一覧</SectionTitle>
        {test}
      </section>
    </article>
  );
}
