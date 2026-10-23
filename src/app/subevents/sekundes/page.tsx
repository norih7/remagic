import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";
import Section from "@/components/Section";
import GuideList from "@/components/GuideList";
import Main from "@/components/SiteLayout/Main";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";
import RoundedInlineList from "@/components/RoundedInlineList";
import Title from "@/components/Title";
import SkillIcon from "@/components/Icons/SkillIcon";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "sekundes";
const title = subeventLinks[pageKey].title;
const description = subeventLinks[pageKey].seoDesc;
const canonical = subeventLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <Main title={title}>
      <article>
        <Section>
          <Title>
            <SkillIcon />
            ゼクンドゥス
          </Title>
          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="報酬">
              大晶霊「ゼクンドゥス」、デリスエンブレム
            </RoundedInlineList>
            <RoundedInlineList title="場所">シゼル城</RoundedInlineList>
            <RoundedInlineList title="発生">
              シゼル城到着後から
            </RoundedInlineList>
          </div>
          <p>
            ラストダンジョン「シゼル城」には大晶霊ゼクンドゥスがいて契約することができます。ゼクンドゥスは非常に強力で、特定の場所に辿り着けば簡単に契約できるためシゼル城に到着してから早めに契約することを推奨します。
          </p>
        </Section>
        <Section>
          <SectionTitle>ゼクンドゥスの場所と契約</SectionTitle>
          <div className="mb-8">
            <h3>ゼクンドゥスの場所</h3>
            <ResponsiveImage src="/subevents/sekundes-location.jpg" />
            <div className="pt-3">
              <ResponsiveImage src="/subevents/sekundes-chart.jpg" />
            </div>
            <p>
              ゼクンドゥスはシゼル城入り口から左側の扉（ショートカット）を進み、エレベータで下へ行った「時の間」にいます。初回時は右側から進む必要があり、ショートカット開放までの進み方は攻略チャートのマップをご確認ください。
            </p>
            <GuideList
              items={[
                {
                  title: "シゼル城のショートカット開放はこちら",
                  href: "/stories/guide5",
                },
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>ゼクンドゥスとの契約</h3>
            <p>
              ゼンクドゥスは時の間の会話のイベントだけで契約することができます。シゼル城に到着後すぐにゼクンドゥスと契約するようにしましょう。ゼクンドゥスとはその後再び時の間を訪れると戦うことができ、勝利すると「デリスエンブレム」を入手できます。デリスエンブレムは物理攻撃の1撃目の命中率を100%にするもので闘技場のクレス戦など強敵との戦いで非常に強力なアクセサリです。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>ゼクンドゥスの活用</SectionTitle>
          <p>
            ゼクンドゥスと契約後、フリンジで以下の術を習得可能です。ディストーションとシューティングスターが特に強力です。
          </p>
          <RoundedContainer className="grid grid-cols-2 gap-3">
            <RoundedItem title="ディストーション">ゼクンドゥスLv1</RoundedItem>
            <RoundedItem title="シューティングスター">
              マクスウェルLv26 × ゼクンドゥスLv26
            </RoundedItem>
            <RoundedItem title="レイズデッド">
              ウンディーネLv20 × ゼクンドゥスLv1
            </RoundedItem>
            <RoundedItem title="ブラッディハウリング">
              シャドウLv23 × ゼクンドゥスLv18
            </RoundedItem>
            <RoundedItem title="スクラグネイション">
              ゼクンドゥスLv5 × セルシウスLv30
            </RoundedItem>
            <RoundedItem title="ディレイ">
              ゼクンドゥスLv20 × ノームLv30
            </RoundedItem>
            <RoundedItem title="+メンタルアップ">
              ゼクンドゥスLv10 × イフリートLv10
            </RoundedItem>
            <RoundedItem title="+ドレインガード">
              ゼクンドゥスLv10 × マクスウェルLv10
            </RoundedItem>
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>ゼクンドゥスとの戦闘</SectionTitle>
          <p>準備中</p>
        </Section>
      </article>
    </Main>
  );
}
