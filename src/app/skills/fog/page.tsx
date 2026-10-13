import SectionTitle from "@/components/SectionTitle";
import PageSummary from "@/components/PageSummary";
import GuideList from "@/components/GuideList";
import SkillPropertyList from "@/components/SkillPropertyList";
import { Skill } from "@/components/SkillPropertyList";
import { skillLinks } from "@/constants";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "fog";
const title = skillLinks[pageKey].title;
const canonical = skillLinks[pageKey].path;
const description = skillLinks[pageKey].seoDesc;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
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
      name: "ダークイレイザー",
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
    <Main title={title}>
      <article>
        <PageSummary>
          <div className="mb-2">
            <p>
              フォッグの特技一覧ページです。各スキルを習得するために必要なサブイベントの発生手順や詳細情報については、専用のサブイベント解説ページをご確認ください。
            </p>
          </div>
          <GuideList
            items={[
              {
                title: "フォッグの特技習得サブイベント一覧",
                href: "/subevents/skill-fog",
              },
            ]}
          ></GuideList>
        </PageSummary>

        <Section>
          <SectionTitle>おすすめ特技</SectionTitle>
          <div className="mb-8">
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="アクアスパイラル">
                詠唱時間が短いキャンセルLv1の技。攻撃範囲とダメージが大きく、アクアスパイラル連発だけでも敵を薙ぎ倒せます。
              </RoundedItem>
              <RoundedItem title="レイジレーザー">
                ダークイレイザーが使いづらさがあるためキャンセルLv2としてレイジレーザーがおすすめです。
              </RoundedItem>
              <RoundedItem title="エレメンタルマスター">
                画面ほぼ全域に強力な攻撃ができる技。エレメンタルマスター単体で強力ですが、アクアスパイラル、レイジレーザーと連携するとさらに強力。
              </RoundedItem>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle type="skill">フォッグの特技一覧</SectionTitle>
          <SkillPropertyList skills={skills} />
        </Section>
      </article>
    </Main>
  );
}
