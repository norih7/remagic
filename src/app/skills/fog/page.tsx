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
  description:
    "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。フォッグが操るすべての特技や銃弾スキルを網羅。各スキルの効果、属性、消費TP、ヒット数に加え、キャンセルレベルやサブイベントによる習得手順などの詳細情報を一覧で紹介しています。",
};

export default async function HomePage() {
  const skills = [
    {
      name: "バーニングフォース",
      description:
        "熱を帯びた強力な火属性の銃弾を放つ特技。キャンセルLv1に対応しており、コンボの起点として扱いやすい基本スキルです。",
      requirement: "フォッグ加入時に初期習得",
      tp: 20,
      hit: 2,
      element: ["fire"],
      type: "特技",
    },
    {
      name: "アクアスパイラル",
      description:
        "螺旋状の水流を纏った銃弾を浴びせる水属性の特技。こちらもキャンセルLv1に対応しており、多段ヒットで手数を稼げます。",
      requirement: "特定のサブイベントで習得",
      tp: 28,
      hit: 6,
      element: ["water"],
      type: "特技",
    },
    {
      name: "エアブレイド",
      description:
        "鋭い真空の刃を内包した銃弾を撃ち出す風属性の特技。キャンセルLv1の軽快なモーションで敵を切り裂きます。",
      requirement: "特定のサブイベントで習得",
      tp: 24,
      hit: 6,
      element: ["wind"],
      type: "特技",
    },
    {
      name: "レイジレーザー",
      description:
        "眩い光のエネルギーを収束させた銃弾を放つ光属性の特技。キャンセルLv2に対応しており、より強力な連携に組み込めます。",
      requirement: "特定のサブイベントで習得",
      tp: 34,
      hit: 8,
      element: ["light"],
      type: "特技",
    },
    {
      name: "ダークレイザー",
      description:
        "漆黒の闇を纏った特殊な銃弾を連続発射する闇属性の特技。キャンセルLv2に対応し、多数のヒット数で相手を圧倒します。",
      requirement: "特定のサブイベントで習得",
      tp: 40,
      hit: 12,
      element: ["dark"],
      type: "特技",
    },
    {
      name: "エレメンタルマスター",
      description:
        "全属性の銃弾を次々と乱射して総攻撃を加えるフォッグの極致とも言える大技。キャンセルLv3に対応しています。単品でそのまま発動しようとすると長い硬直（詠唱）が発生してしまいますが、キャンセルの仕組みを利用して「Lv1 → Lv2 → Lv3」と段階を踏んで繋げていくことで、発動時間を大幅に短縮して実用的に組み込むことが可能です。",
      requirement: "特定のサブイベントで習得",
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
          豪快な銃撃を得意とするフォッグの特技一覧ページです。各スキルをアンロックするために必要なサブイベントの発生手順や詳細情報については、専用の攻略ガイドページをご用意していますのでそちらをご確認ください。
        </p>
        <div className="mb-4">
          <GuideList
            items={[
              {
                title: "フォッグの特技習得サブイベント一覧",
                href: "/subevents/skill-fog",
              },
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
        <SectionTitle type="skill">フォッグの特技一覧</SectionTitle>
        <SkillPropertyList skills={skills} />
      </section>
    </article>
  );
}
