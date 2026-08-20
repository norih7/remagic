import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "grip-sword";
const title = "グリップソード";
// const title = subeventLinks[pageKey].title;
// const description = subeventLinks[pageKey].seoDesc;
// const canonical = subeventLinks[pageKey].path;
export const metadata = {
  title,
  description: "",
  // alternates: {
  //   canonical,
  // },
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
      <PageSummary>
        アイテム「スマッシュマント」を入手できるグリップソート探しについて解説。イベントには時間制限がありませんが、スマッシュマントは非常に有用なアクセサリなので王都インフェリア到着後すぐにやっておくことを推奨します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>クリップソード探し</SectionTitle>
        <p>-</p>
      </section>
      <section className="mb-12">
        <SectionTitle>イベントの詳細</SectionTitle>
        <div className="mb-4">
          <p>
            まずはレイス加入後〜セレスティア突入前までにバロールの町に隠れているベッポに話しかけることでイベントがスタートします。
          </p>
          <Information
            type="warning"
            title="このサブイベント発生のラストチャンス"
          >
            <p>
              ベッポとのかくれんぼはセレスティアへ突入すると発生しなくなります。セレスティア突入前の霊峰ファロースでは別れたファラと合流した直後が、再度バロールに戻って来れるラストチャンスとなります。ファロースから下山するのも大変なので、なるべくならバロール到着時点でこのサブイベントをやっておくことを推奨します。
            </p>
          </Information>
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>No1. イベント開始</h3>
          <ResponsiveImage src="/subevents/beppo-1.jpg" />
          <RoundedItem title="説明">
            噴水のあるエリアのテントに隠れているベッポに話かけるとかくれんぼがスタートします。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>No2. アイテム屋のテント</h3>
          <ResponsiveImage src="/subevents/beppo-2.jpg" />
          <RoundedItem title="説明">
            逃げていった方向にあるフロアではアイテム屋のテントに隠れていて、また頭が少しはみ出ています。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>No3. 宿屋</h3>
          <ResponsiveImage src="/subevents/beppo-3.jpg" />
          <RoundedItem title="説明">
            宿屋の中に入り、右手側の棚のところに隠れています。結構わかりにくいのですが少しだけ頭がはみ出ています。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>No4. 町の入り口</h3>
          <ResponsiveImage src="/subevents/beppo-4.jpg" />
          <RoundedItem title="説明">
            町の入り口フロアのテントに移動して隠れています。ここは完全にベッポの姿がないため画像付近を○ボタン連打して歩き回りましょう。
            その後、おいかけっことなり捕まえるとかくれんぼイベントは終了です。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>No5. 宿屋の前</h3>
          <ResponsiveImage src="/subevents/beppo-5.jpg" />
          <RoundedItem title="説明">
            No4でベッポを見逃したあとに宿屋の前にいくとベッポが立っており、話しかけるとルーンボトルを入手します。ベッポのイベントは一旦はここで終わりで、ストーリー後半になるとまた進行します。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section>
        <SectionTitle>インフェリア帰還後</SectionTitle>
        <div className="mb-4">
          <p>
            ストーリー後半でインフェリア帰還後にベッポを尋ねると「ドニエスのポプリ」をもらえます
          </p>
        </div>
      </section>
    </article>
  );
}
