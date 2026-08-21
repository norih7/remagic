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

const pageKey = "grip-sword";
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
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        アイテム「スマッシュマント」を入手できるグリップソート探しについて解説。イベントには時間制限がありませんが、スマッシュマントは非常に有用なアクセサリなので王都インフェリア到着後すぐにやっておくことを推奨します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>クリップソード探し</SectionTitle>
        <EventCondition category="period">
          王都インフェリアに到着後いつでも
        </EventCondition>
        <ResponsiveImage src="/subevents/grid-sword-end.jpg" />
        <p>
          王都インフェリアの闘技場の前にいる老人に話しかけると「グリップソード」を探してほしいと頼まれます。グリップソードはインフェリアの街中にあり、簡単に探し出せるのとイベントの最後にはアクセサリ「スマッシュマント」を入手できます。スマッシュマントはアイテムドロップ率をアップする貴重なアイテムなのでぜひ入手してみてください。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>イベントの詳細</SectionTitle>

        <RoundedContainer>
          <h3 className={styles.header}>No1. イベント開始</h3>
          <ResponsiveImage src="/subevents/grid-sword-start.jpg" />
          <RoundedItem title="説明">
            まずは闘技場前にいる老人に話しかけることでイベントがスタートします。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>
            No2. 街の探索（防具屋前の男性〜闘技場内の兵士）
          </h3>
          <ResponsiveImage src="/subevents/grid-sword-search.jpg" />
          <RoundedItem title="説明" className="mb-4">
            <p>
              インフェリアの町では下記の順番でグリップソードを探していきます。
            </p>
          </RoundedItem>
          <CardList
            list={[
              "(1) 防具屋の前にいる男性に話しかけ、グリップソードの情報を聞く",
              "(2) 城門前にいる兵士に話しかけ、グリップソードの情報を聞く",
              "(3) 闘技場にいる兵士に話しかけ、グリップソードを返してもらう",
            ]}
          />
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>No3. イベントの最後</h3>
          <ResponsiveImage src="/subevents/grid-sword-end.jpg" />
          <RoundedItem title="説明">
            グリップソードを入手してから老人に話しかけるとアクセサリ「スマッシュマント」を入手します。
          </RoundedItem>
          <Information type="warning" title="機種による違い">
            イベントの結末はPSP版のものです。PS版では「エタポケ1」を入手し、その後のポケットステーションでのミニゲームをクリアするとスマッシュマントを入手します。（PSP版はポケットステーションがないので手順が省略されている）2026年のリマスター版ではPSP版と同じ結果となる予想です。
          </Information>
        </RoundedContainer>
      </section>
    </article>
  );
}
