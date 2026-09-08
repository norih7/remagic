import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

// const pageKey = "coliseum";
// const title = subeventLinks[pageKey].title;
// const description = subeventLinks[pageKey].seoDesc;
// const canonical = subeventLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
const title = "闘技場";
export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>準備中</PageSummary>
      <section className="mb-12">
        <SectionTitle>闘技場</SectionTitle>
        <EventCondition category="period">
          王都インフェリアに到着後いつでも
        </EventCondition>
        <p>
          王都インフェリアには闘技場があり、連戦を勝ち抜くことで報酬を獲得できます。
          闘技場には「王都一決定戦」「王国一決定戦」「世界一決定戦」の3つのランクが用意されており、いずれもリッドが単独で3連戦に挑む形式です。ランクの3試合すべてに勝利すると優勝となり、報酬を手に入れることができます。
        </p>
        <p>
          また「世界一決定戦」で初めて優勝すると、テイルズオブファンタジアの「クレス」が参戦するイベントが発生します。クレスは強敵ですが倒すとリッドの最強武器の1つ「エターナルソード」を入手できます。
        </p>
        <Information type="warning" title="難易度">
          闘技場は最初に王都インフェリアにきた時から挑戦できますが難易度が高いです。
        </Information>
      </section>
      <section className="mb-12">
        <SectionTitle>王都一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 20,000ガルド、お薬セット（セージ、セボリー）",
              "2回目以降の報酬: 15,000ガルド、グミセット（レモングミ、パイングミ）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ピーケー×2、レンジャー、セージ
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            クラーケン×2、トリトン×2
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ビーストオーガ×2、ファイアクラウド
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
        <SectionTitle>王国一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 50,000ガルド、もっとお薬セット（レッドセージ、レッドセボリー）",
              "2回目以降の報酬: 20,000ガルド、続グミセット（レモングミ×2、パイングミ×2）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            レヴナント×2、メタリカ、メガデス
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ミスリルゴーレム×2、フリーズキーパー
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            イビルリッパー×2、デリブルテンタクル×2
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
        <SectionTitle>世界一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 80,000ガルド、どきどきセット（エリクシール×2、レッドセージ、レッドセボリー、レッドベルベーヌ、レッドラベンダー）",
              "2回目以降の報酬: 50,000ガルド、超グミセット（ミラクルグミ×2、ミックスグミ×2）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            デュエリスト、ウィーザード×2
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ヘルカイト、フェニックス×2
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            レッドドラゴン、ヘルカイト×2
          </RoundedItem>
          <RoundedItem title="説明">準備中</RoundedItem>
        </RoundedContainer>
      </section>
      <section>
        <SectionTitle>クレス乱入</SectionTitle>
        <div className="mb-4">
          <p>準備中</p>
        </div>
      </section>
    </article>
  );
}
