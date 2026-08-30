import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";
import { extraLinks } from "@/constants";
import ResponsiveImage from "@/components/ResponsiveImage";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "towns";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
const canonical = extraLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          隠しタウン「ねこにんの里」と「晶霊温泉」の攻略情報ページです。それぞれのタウンへの行き方、マスター料理の必須食材「パープルソディ」の購入方法、チャットの特技「パラライボール」を習得できる温泉イベントなど、役立つサブイベントの情報をまとめています。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ねこにんの里/晶霊温泉</SectionTitle>
        <EventCondition category="period">飛行艇を入手後から</EventCondition>
        <div className="mb-4">
          <p>
            インフェリアとセレスティアそれぞれに隠されたタウンがあり、飛行艇を入手後から行くことができます。ねこにんの里はセレスティア、晶霊温泉はインフェリアにあります。サブイベントや貴重な食材購入もできるのでぜひ覚えておいてください。
          </p>
        </div>
        <h3>主な目的</h3>
        <CardList
          list={[
            "ねこにんの里: マスター料理の食材である「パープルソディ」の購入",
            "晶霊温泉: チャットの特技習得サブイベントなど",
          ]}
        />
      </section>

      <section className="mb-12">
        <SectionTitle>ねこにんの里</SectionTitle>
        <div className="mb-4">
          <p>
            セレスティアにある隠しタウン。可愛いねこにんが住んでいる村でマスター料理の共通食材である「パープルソディ」を購入できる場所です。パープルソディを入手できるのはねこにんの里と、ノームの集落の2箇所だけです。
          </p>
        </div>
        <div className="mb-4">
          <h3>ねこにんの里への行き方</h3>
          <ResponsiveImage src="/extras/secret-town-nekonin-location.jpg" />
          <p>
            セレスティアで飛行艇に乗ってルイシカから南方向に進み、GPS(120,
            109)にある山に囲まれた場所へ向かいます。上記のように丸い森が「ねこにんの里」です。
          </p>
        </div>
        <div className="mb-4">
          <h3>パープルソディの購入</h3>
          <p>
            ねこにんの里は初めて訪れるとリッドたちが夜通しねこにんたちに話をするイベントが発生します。このイベント中は村を探索できず、再度ねこにんの里へ訪れると自由に探索できるようになります。
          </p>
          <ResponsiveImage src="/extras/secret-town-nekonin-purple.jpg" />
          <p>
            貴重な食材である「パープルソディ」は入り口付近の青色のねこにんから購入できます。パープルソディはマスター料理で必ず使う食材で、他にはノームの集落でしか購入できません。購入場所としてぜひ覚えておいてください。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>晶霊温泉</SectionTitle>
        <div className="mb-4">
          <p>
            インフェリアにある隠しタウン。温泉があり入浴ができる場所です。ここではアイテムの購入などはありませんがチャットの特技習得などのサブイベントが発生します。
          </p>
        </div>
        <div className="mb-4">
          <h3>晶霊温泉への行き方</h3>
          <ResponsiveImage src="/extras/secret-town-onsen-location.jpg" />
          <p>
            インフェリアで飛行艇に乗って王都インフェリアから東方面に向かい、GPS(208,
            106)にある山に囲まれた場所へ向かいます。ゲーム画像にある丸い森が晶霊温泉です。
          </p>
        </div>
        <div className="mb-4">
          <h3>チャットの特技「パラライボール」の習得</h3>
          <ResponsiveImage src="/extras/secret-town-onsen-chat.jpg" />

          <p>
            チャットを仲間にした状態で晶霊温泉に入浴するとチャットが特技「パラライボール」を習得します。パラライボールもチャットの特技として強力で、簡単なのでぜひ習得してください。
          </p>
        </div>
        {/* <div className="mb-4">
          <h3>おまけ: 入浴</h3>
          <p>準備中</p>
        </div> */}
      </section>
    </article>
  );
}
