import SetPageTitle from "@/components/SetPageTitle";
import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "チャットの特技";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const skills = [
    {
      name: "ピコハン",
      description:
        "ハンマーを投げて敵を攻撃する特技。命中すると相手が気絶状態になることがあります。",
      requirement: "チャット加入時に習得済み",
      tp: 12,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "ローバーアイテム",
      description:
        "飛び道具のワイヤーを敵にぶつけてアイテムを盗むことができる特技。ぶんどる的特技。",
      requirement: "チャット加入時に習得済み",
      tp: 15,
      hit: 2,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "ポイハン",
      description:
        "毒のついたハンマーを投げる特技。命中すると相手が毒状態になることがあります。",
      requirement: "サブイベント",
      tp: 16,
      hit: 4,
      element: ["water"],
      type: "特技",
    },
    {
      name: "コチハン",
      description:
        "凍ったハンマーを投げて敵を攻撃する特技。命中すると敵が凍結状態になることがあります。",
      requirement: "サブイベント",
      tp: 20,
      hit: 4,
      element: ["ice"],
      type: "特技",
    },
    {
      name: "パラライボール",
      description:
        "雷を宿したボールを敵にぶつける特技。命中すると敵が麻痺状態になることがあります。",
      requirement: "サブイベント",
      tp: 20,
      hit: 3,
      element: ["thunder"],
      type: "特技",
    },
    {
      name: "エターナルスロー",
      description:
        "すごいスピードでTPが減っていき、チャットのTPが尽きるか1分間経過するまでハンマーを投げ続けます。パイングミがたくさんあるとかなり強い特技。",
      requirement: "サブイベント",
      tp: 60,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
  ] as Skill[];
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          チャットの特技一覧ページです。習得できるサブイベントは別ページがありますので参照ください。
        </p>
        <GuideList
          items={[
            { title: "チャットの特技習得", href: "/subevents/skill-chat" },
          ]}
        ></GuideList>
      </PageSummary>
      {/* 
      <section className="mb-12">
        <SectionTitle type="data">おすすめの特技</SectionTitle>
        <div className="advice">
          <p>準備中</p>
        </div>
      </section> */}

      <section className="mb-12">
        <SectionTitle type="skill">チャットの特技</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
