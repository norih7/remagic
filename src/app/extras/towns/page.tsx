import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";
import { extraLinks } from "@/constants";
import ResponsiveImage from "@/components/ResponsiveImage";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "towns";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
const canonical = extraLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>準備中 </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ねこにんの里/晶霊温泉</SectionTitle>
        <EventCondition category="period">飛行艇を入手後から</EventCondition>
        <div className="mb-4">
          <p>
            インフェリアとセレスティアそれぞれに隠されたタウンがあり、飛行艇を入手後から行くことができます。ねこにんの里はセレスティア、晶霊温泉はインフェリアにあります。サブイベントや貴重な食材購入もできるのでぜひ覚えておいてください。
          </p>
        </div>
        <h3>主な目的</h3>
        <CardList
          list={[
            "ねこにんの里: マスター料理の食材である「パープルソディ」の購入",
            "晶霊温泉: チャットの特技習得サブイベントなど",
          ]}
        />
      </section>

      <section className="mb-12">
        <SectionTitle>ねこにんの里</SectionTitle>
        <div className="mb-4">
          <p>準備中</p>
        </div>
      </section>
    </article>
  );
}
