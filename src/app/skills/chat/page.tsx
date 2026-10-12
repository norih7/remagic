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

const pageKey = "chat";
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
      name: "ピコハン",
      description:
        "お馴染みのピコピコハンマーを投げて標的を攻撃するチャットの代名詞的な特技。見事命中すると、一定確率で相手を気絶（スタン）状態にさせることができます。",
      requirement: "チャット加入時に初期習得",
      tp: 12,
      hit: 4,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "ローバーアイテム",
      description:
        "射出式のワイヤーを敵めがけて打ち込み、所持しているアイテムを巻き取って盗み出すぶんどり系スキル。敵から貴重な戦利品を獲得したいときに重宝します。",
      requirement: "チャット加入時に初期習得",
      tp: 15,
      hit: 2,
      element: ["normal"],
      type: "特技",
    },
    {
      name: "ポイハン",
      description:
        "猛毒をたっぷりと染み込ませた特殊なハンマーを投げつける水属性の特技。ヒットした相手を確率で毒状態に陥れます。",
      requirement: "特定のサブイベントで習得",
      tp: 16,
      hit: 4,
      element: ["water"],
      type: "特技",
    },
    {
      name: "コチハン",
      description: (
        <>
          <p>
            カチカチに凍りついた冷たいハンマーを投げつけて攻撃する氷属性の特技。運が良ければ相手を凍結状態にして足止めできます。
          </p>
        </>
      ),
      requirement: "特定のサブイベントで習得",
      tp: 20,
      hit: 4,
      element: ["ice"],
      type: "特技",
    },
    {
      name: "パラライボール",
      description:
        "強力な電撃を宿した特殊なボールを敵へ投げつける雷属性の特技。命中した相手を麻痺させて動きを制限する効果を持ちます。",
      requirement: "特定のサブイベントで習得",
      tp: 20,
      hit: 3,
      element: ["thunder"],
      type: "特技",
    },
    {
      name: "エターナルスロー",
      description:
        "凄まじい勢いでTPがぐんぐん減っていく中、チャットが制限時間（最大1分間）またはTPが枯渇するまで延々とハンマーを乱れ投げ続ける豪快な大技。アイテムの「パイングミ」などを大量に用意して維持できれば、非常に高い火力を叩き出せます。",
      requirement: "特定のサブイベントで習得",
      tp: 60,
      hit: 3,
      element: ["normal"],
      type: "特技",
    },
  ] as Skill[];

  return (
    <Main title={title}>
      <article>
        <PageSummary>
          <div className="mb-2">
            <p>
              海賊チャットが習得するすべての特技一覧ページです。各スキルを習得するために必要なサブイベントの発生手順や詳細については、専用の攻略ガイドページをご確認ください。
            </p>
          </div>
          <GuideList
            items={[
              {
                title: "チャットの特技習得サブイベント一覧",
                href: "/subevents/skill-chat",
              },
            ]}
          ></GuideList>
        </PageSummary>

        <Section>
          <SectionTitle>おすすめ特技</SectionTitle>
          <div className="mb-8">
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="ローバーアイテム">
                チャットだけが使える敵からアイテムを盗む技。図鑑コンプリートのためには必須で、セージを落とす敵もいるので活用の場面は多め。
              </RoundedItem>
              <RoundedItem title="コチハン">
                攻撃力が高い攻撃。Lv70ほどになると一発3000以上のダメージを与えることも。凍結効果も強く、凍結した場合は大ダメージを狙えます。
              </RoundedItem>
              <RoundedItem title="パラライボール">
                コチハンよりもさらに攻撃力が高い攻撃。麻痺効果はリッドの風刃縛封を合わせて無限コンボを組むこともできます。
              </RoundedItem>
              <RoundedItem title="エターナルスロー">
                TPの限り攻撃し続ける技。攻撃力もコチハンより高いため敵に攻撃の暇を与えず一方的に攻撃を続けることができます。
              </RoundedItem>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle type="skill">チャットの特技一覧</SectionTitle>
          <SkillPropertyList skills={skills} />
        </Section>
      </article>
    </Main>
  );
}
