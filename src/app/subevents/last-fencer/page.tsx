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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "last-fencer";
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
        <PageSummary>
          リッドの強力な武器「ラストフェンサー」の入手手順と性能を解説しています
        </PageSummary>
        <Section>
          <SectionTitle>ラストフェンサー</SectionTitle>
          <EventCondition category="period">
            バリル城でヒアデス撃破後
          </EventCondition>
          <p>
            ストーリー後半で再び訪れたバリル城でヒアデスを撃破したあとからリッドの最強武器の1つ「ラストフェンサー」を入手することができます。ラストフェンサーは簡単に入手でき、攻撃力は控えめですが特殊効果が多いため最終盤でも活躍する武器なのでぜひ入手してください。
          </p>
        </Section>

        <Section>
          <SectionTitle>ラストフェンサー作成の流れ</SectionTitle>
          <RoundedContainer>
            <h3>1. バリル城でゾシモスに話しかける</h3>
            <ResponsiveImage src="/subevents/last-fencer-zosimos.jpg" />
            <p>
              ヒアデス撃破後にフリンジ砲のエリアにいるゾシモスに話しかけて「リヴァイウス鉱石を使って武器を作れないか」という話を聞きます。
            </p>
            <GuideList
              items={[
                {
                  title: "攻略チャート5 (バリル城〜セイファート観測所)",
                  href: "/stories/guide5",
                },
              ]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3>2. アイメンの武器工房で武器開発を開始する</h3>
            <ResponsiveImage src="/subevents/last-fencer-imen.jpg" />
            アイメンの武器屋に行くとゾシモスが移動しています。ゾシモスたちに話かけて武器開発をしている話を聞きます。
          </RoundedContainer>
          <RoundedContainer>
            <h3>3. 武器完成を待つ</h3>
            <ResponsiveImage src="/subevents/last-fencer-last.jpg" />
            武器開発はアイメンの出入りで進行します（町を出てフィールドから入る）。出入りを5回した上でアイメンの武器屋へ行ってゾシモスたちに話しかけると「ラストフェンサー」を入手します。
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>ラストフェンサーの効果</SectionTitle>
          <p>
            ラストフェンサーの攻撃力は「斬り+765、突き+758」で「エターナルソード」や「せいりゅうとう」の方が攻撃力は上です。ただしラストフェンサーは「命中+10、回避+3、知力+2、幸運+5」の複数バフが付与され、攻撃ヒット時に稀にHPが回復します。
          </p>
          <p>
            エターニアの武器において1つの武器でこれだけ効果を持っているのはラストフェンサーだけなので、物理攻撃で不利にならない場合はラストフェンサーがリッドの最強武器となることがあります。
          </p>
          <GuideList
            items={[
              { title: "ラストフェンサーの詳細", href: "/systems/item/305" },
            ]}
          />
        </Section>
      </article>
    </Main>
  );
}
