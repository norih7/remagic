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
import Tag from "@/components/Tag";

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
          <div className="mb-8">
            <h3>基本情報</h3>
            <RoundedContainer title="ゼクンドゥスの情報">
              <div className="grid grid-cols-2 gap-3 pt-3">
                <RoundedItem title="HP">200000</RoundedItem>
                <RoundedItem title="攻撃属性">
                  <div className="py-1">
                    <Tag element="normal">物理</Tag>
                  </div>
                </RoundedItem>
                <RoundedItem title="弱点属性">
                  <div className="py-1">
                    <Tag element="thunder">雷</Tag>
                  </div>
                </RoundedItem>
                <RoundedItem title="攻撃耐性">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <Tag element="normal">物理</Tag>
                    <Tag element="fire">火</Tag>
                    <Tag element="water">水</Tag>
                    <Tag element="ice">氷</Tag>
                    <Tag element="wind">風</Tag>
                    <Tag element="earth">土</Tag>
                    <Tag element="light">光</Tag>
                    <Tag element="dark">闇</Tag>
                    <Tag element="origin">元</Tag>
                    <Tag element="time">時</Tag>
                  </div>
                </RoundedItem>
              </div>
            </RoundedContainer>

            <RoundedContainer title="おすすめ装備">
              <div className="grid grid-cols-2 gap-3 pt-3">
                <RoundedItem title="ボルテックソード">
                  リッドの雷属性武器
                </RoundedItem>
                <RoundedItem title="ストライクアクス">
                  リッドの雷属性武器
                </RoundedItem>
                <RoundedItem title="ピヨハン">
                  気絶対策: 気絶時間を1/2にする
                </RoundedItem>
                <RoundedItem title="クローナシンボル">
                  気絶対策: 全ステータス異常を防止（気絶含む）
                </RoundedItem>
              </div>
            </RoundedContainer>
          </div>
          <div className="mb-8">
            <div className="mb-3">
              <h3>インディグネイションの特殊演出</h3>
              <Tag>おすすめ攻略法</Tag>
            </div>
            <ResponsiveImage src="/subevents/sekundes-buttle-triger.jpg" />
            <p>
              ゼクンドゥスのHPが1/2以下（ノーマルでは100,000以下）で、インディグネイションを発動させると特殊演出が発生してゼクンドゥスを1撃で倒すことができます。インディグネイションは「ヴォルトLv15
              ×
              レムLv10」のフリンジで習得します。HPが1/2以下になるとゼクンドゥスがさらに強力な技を使ってくるため、この方法で倒すのを推奨します。
            </p>
            <Information title="特殊演出">
              インディグネイションはキールとメルディでそれぞれ演出が用意されており、専用カットインがここだけで見れます。誰にインディグネイションを習得させるかは事前に調整しておきましょう。
            </Information>
          </div>
          <div className="mb-8">
            <div className="mb-3">
              <h3>攻略法</h3>
            </div>
            <p>準備中</p>
          </div>
        </Section>
      </article>
    </Main>
  );
}
