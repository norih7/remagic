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

const pageKey = "fog-gun";
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
          フォッグの武器開発について解説しています。フォッグの最強武器も開発で入手するためお見逃しなく。
        </PageSummary>
        <Section>
          <SectionTitle>フォッグの武器開発</SectionTitle>
          <EventCondition category="period">
            ティンシア到着後から
          </EventCondition>
          <ResponsiveImage src="/subevents/fog-gun-assistance.jpg" />
          <p>
            フォッグの武器すべてティンシアのアジトでのサブイベントから入手します。フォッグをパーティに加入させた状態でアジトの部下に話かけると1回20,000ガルドの支援金を渡し、総額が一定以上となる武器を入手できます。また武器の受け取りは合計金額を満たせばよく、この部屋から出入りせずとも「寄付→話す」を繰り返せばよいです。
          </p>
          <Information type="warning" title="支援額について">
            <ResponsiveImage src="/subevents/fog-gun-notice.jpg" />
            武器の開発支援は1回に20,000ガルドしか渡せません。まとめた金額を支援できないため、最後のメガグランチャーの開発には合計32回の支援が必要です。もしストーリーを最後のシゼル城まで進めているなら開発の部下にひたすら⚪︎ボタン連打で支援を繰り返しましょう。
          </Information>
        </Section>

        <Section>
          <SectionTitle>フォッグの武器一覧と開発可能タイミング</SectionTitle>
          <RoundedContainer>
            <h3>プラズマカノン</h3>
            <EventCondition category="period">
              ティンシア到着後から
            </EventCondition>
            <RoundedItem title="支援総額" className="mb-3">
              40,000ガルド
            </RoundedItem>
            <RoundedItem title="効果">攻撃+525 特殊: 雷属性武器</RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3>グランマグナム</h3>
            <EventCondition category="period">
              アイフリードの洞窟クリア後から
            </EventCondition>
            <RoundedItem title="支援総額" className="mb-3">
              80,000ガルド
            </RoundedItem>
            <RoundedItem title="効果">攻撃+610</RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3>インパルスカノン</h3>
            <EventCondition category="period">
              セイファート観測所到着後から
            </EventCondition>
            <RoundedItem title="支援総額" className="mb-3">
              160,000ガルド
            </RoundedItem>
            <RoundedItem title="効果">
              攻撃+700 特殊: 攻撃ヒット時、稀に敵を吹き飛ばす
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3>フォトンイレイズ</h3>
            <EventCondition category="period">
              レグルスの丘クリア後から
            </EventCondition>
            <RoundedItem title="支援総額" className="mb-3">
              320,000ガルド
            </RoundedItem>
            <RoundedItem title="効果">
              攻撃+840 特殊: 攻撃ヒット時、稀に敵の防御を低下させる
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3>メガグランチャー</h3>
            <EventCondition category="period">
              シゼル城到着後から
            </EventCondition>
            <RoundedItem title="支援総額" className="mb-3">
              640,000ガルド
            </RoundedItem>
            <RoundedItem title="効果">
              攻撃+955 特殊: 攻撃ヒット時、稀に敵を気絶させる
            </RoundedItem>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
