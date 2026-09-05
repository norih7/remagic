import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import LocationLenses from "@/components/LocationLenses";
import { getLocationItemsData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import ResponsiveImage from "@/components/ResponsiveImage";
import { extraLinks } from "@/constants";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

// const pageKey = "jiini";
// const title = extraLinks[pageKey].title;
// const description = extraLinks[pageKey].seoDesc;
// const canonical = extraLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
const title = "ジイニ";
export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>準備中</p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ジイニ</SectionTitle>
        <EventCondition category="period">潜水艇入手後から</EventCondition>
        <div className="mb-4">
          <p>
            潜水艇入手後からセレスティアの隠しタウンであるジイニに行くことができます。ジイニではオークションが開催されていたり、フォッグの最強技「エレメントマスター」に関わるイベントなどが発生します。
          </p>
          <p>
            ジイニでは専用通貨「ジイニ」が使われます。ジイニでの宿泊やオークション会場でのアイテムの購入などはこのジイニで取引されます。
          </p>
        </div>
        <h3>ジイニへの行き方</h3>
        <p>
          ジイニへの行き方は2通りあります。最初は潜水艇でセレスティアの海底から向かうしかできませんが、飛行艇を入手すると空から直接ジイニに降りることもできるようになります。
        </p>
        <ResponsiveImage src="/extras/secret-jiini-location1.jpg" />
        <p>
          潜水艇ではティンシアから北東に進みGPS(35,
          13)付近にある洞窟からジイニへ行くことができます。実際のジイニの場所からはかなり離れているので意外と気づきにくいです。
        </p>
        <h4>飛行艇での行き方</h4>
        <p></p>
      </section>

      <section className="mb-12">
        <SectionTitle>ジイニの昼と夜</SectionTitle>
        <div className="mb-4">
          <h3>昼の状態</h3>
          {/* <ResponsiveImage src="/extras/secret-jiini-first.jpg" /> */}
          <ResponsiveImage src="/extras/secret-jiini-inn.jpg" />
          <p>
            昼間のジイニは人がいなく店も閉まっていますが、唯一空いている宿屋で宿泊すると夜のジイニへ変化します。ただし宿屋に宿泊するには5ジイニが必要です。潜水艇ではじめてジイニにきた時には10ジイニを入手できるのでそれで宿泊しましょう。なお潜水艇によってジイニにきた場合は必ず昼間のジイニとなります。
          </p>
        </div>
        <div className="mb-4">
          <h3>夜の状態</h3>
          <Information type="warning" title="最初にジイニを確保する">
            ジイニのカジノには換金場があり、ガルドをジイニに変換できます。しばらく宿に泊まるジイニに困らないように、200ジイニ程度は確保しておきましょう。
          </Information>
          <Information title="フィールドマップから夜のジイニに入る方法も">
            フィールドマップで夜になってからジイニに入ると夜の状態になっています。どうしてもジイニが尽きてしまい、宿泊もできない場合はこの方法を利用してください。
          </Information>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>オークションへの出品</SectionTitle>
        <div className="mb-4">
          <p>
            オークション会場では所有しているアイテムをオークションに出品できます。ジイニを稼ぐにはこのオークションが圧倒的におすすめです。高値がつくアイテムを出品してジイニを効率的に増やしてください。
          </p>
          <h3>オークションで高値がつくアイテム</h3>
          <div className="mb-4">
            <CardList list={["うちわ"]} />
          </div>
          <h3>リセットを用いた価格引き上げ</h3>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>オークションでのアイテム購入</SectionTitle>
        <p>アイテムの購入はオークション形式ではなく定額で購入できます。</p>
      </section>
    </article>
  );
}
