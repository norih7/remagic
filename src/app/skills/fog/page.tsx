import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "フォッグの特技";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const skills = [
    {
      name: "バーニングフォース",
      description: "火属性の銃弾攻撃。キャンセルLv1。",
      requirement: "フォッグ加入時に習得済み",
      tp: 20,
      hit: 2,
      element: ["fire"],
      type: "特技",
    },
    {
      name: "アクアスパイラル",
      description: "水属性の銃弾攻撃。キャンセルLv1。",
      requirement: "サブイベント",
      tp: 28,
      hit: 6,
      element: ["water"],
      type: "特技",
    },
    {
      name: "エアブレイド",
      description: "風属性の銃弾攻撃。キャンセルLv1。",
      requirement: "サブイベント",
      tp: 24,
      hit: 6,
      element: ["wind"],
      type: "特技",
    },
    {
      name: "レイジレーザー",
      description: "光属性の銃弾攻撃。キャンセルLv2。",
      requirement: "サブイベント",
      tp: 34,
      hit: 8,
      element: ["light"],
      type: "特技",
    },
    {
      name: "ダークレイザー",
      description: "闇属性の銃弾攻撃。キャンセルLv2。",
      requirement: "サブイベント",
      tp: 40,
      hit: 12,
      element: ["dark"],
      type: "特技",
    },
    {
      name: "エレメンタルマスター",
      description:
        "全属性の銃弾をそれぞれ放つ攻撃。キャンセルLv3。この技をそのまま出そうとするとかなり詠唱時間がかかりますが、キャンセラーによりLv1→Lv2とつなげていくと発動がかなり短縮できます。",
      requirement: "サブイベント",
      tp: 72,
      hit: 12,
      element: ["fire", "wind", "water", "earth", "dark", "light"],
      type: "特技",
    },
  ] as Skill[];
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          フォッグの特技一覧ページです。習得できるサブイベントは別ページがありますので参照ください。
        </p>
        <div className="mb-4">
          <GuideList
            items={[
              { title: "フォッグの特技習得", href: "/subevents/skill-fog" },
            ]}
          ></GuideList>
        </div>
      </PageSummary>
      {/* 
      <section className="mb-12">
        <SectionTitle type="data">おすすめの特技</SectionTitle>
        <div className="advice">
          <p>準備中</p>
        </div>
      </section> */}

      <section className="mb-12">
        <SectionTitle type="skill">フォッグの特技</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
