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
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "jiini";
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
  const lensesData = await getLocationLensesData();

  const classes = {
    header: "border-b border-gray-300 py-1",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 font-bold",
    list: "bg-gray-50 border border-gray-200 rounded-lg py-2 px-3 transition-colors text-sm",
  };
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          隠しタウン「ジイニ」の攻略情報について、行き方や昼夜の仕組み、オークションでの効率的なジイニ稼ぎ（アイテム出品・リセット手法）、および購入できるアイテムのステップ一覧を網羅的に解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ジイニ</SectionTitle>
        <EventCondition category="period">潜水艇入手後から</EventCondition>
        <div className="mb-4">
          <p>
            潜水艇入手後からセレスティアの隠しタウンであるジイニに行くことができます。ジイニではオークションの開催、フォッグの最強技「エレメントマスター」の習得などさまざまなイベントが発生します。
          </p>
        </div>
        <h3>ジイニへの行き方</h3>
        <p>
          ジイニへの行き方は2通りあります。最初は潜水艇でセレスティアの海底から向かうことしかできませんが、飛行艇を入手すると空から直接ジイニに降りることも可能となります。
        </p>
        <ResponsiveImage src="/extras/secret-jiini-location1.jpg" />
        <p>
          潜水艇ではティンシアから北東に進みGPS(35,
          13)付近にある洞窟からジイニへ行くことができます。実際のジイニの場所からはかなり離れているので意外と気づきにくいです。
        </p>
        <ResponsiveImage src="/extras/secret-jiini-location2.jpg" />
        <p>
          飛行艇があれば空中から直接ジイニへ向かうことができます。アイメンから南方向へ進んだGPS(66,
          152)付近にジイニがあります。
        </p>
      </section>

      <section className="mb-12">
        <SectionTitle>ジイニの昼と夜</SectionTitle>
        <div className="mb-4">
          <h3>昼の状態</h3>
          {/* <ResponsiveImage src="/extras/secret-jiini-first.jpg" /> */}
          <ResponsiveImage src="/extras/secret-jiini-inn.jpg" />
          <p>
            昼間のジイニは人がいなく店も閉まっていますが、唯一空いている宿屋で宿泊すると夜の状態へと変化します。宿泊には5ジイニが必要で、潜水艇ではじめてジイニにきた時には10ジイニを入手できるのでそれで宿泊しましょう。なお潜水艇によってジイニにきた場合は必ず昼間のジイニとなります。
          </p>
        </div>
        <div className="mb-4">
          <h3>夜の状態</h3>
          <ResponsiveImage src="/extras/secret-jiini-night.jpg" />
          <p>
            夜になるとカジノ、オークション会場、ダンスホールなどがオープンします。フォッグやリシテアのサブイベントの夜のジイニでのみ発生します。
            ジイニの町のマップは少しわかりづらく町の外へ出ると強制的に夜のジイニが終了するので注意しましょう。
          </p>
          <Information type="warning" title="最初にジイニを確保することを推奨">
            <ResponsiveImage src="/extras/secret-jiini-rate.jpg" />
            ジイニのカジノには換金場があり、ガルドをジイニに変換できます。しばらく宿に泊まるジイニに困らないように、200ジイニ程度は換金しておきましょう。
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
            オークション会場では所有しているアイテムをオークションに出品できます。ジイニを稼ぐにはこのオークションが圧倒的におすすめです。高値がつくアイテムを出品してジイニを効率的に増やしましょう。
          </p>
        </div>
        <h3>値段決定の仕組み</h3>
        <div className="mb-4">
          <p>
            アイテム出品後まず初回の値段がつきます。その後、一晩以上空けてから再度ジイニのオークションに訪れると価格が変動する仕組みとなっています。町の中から出ず、宿屋に泊まってオークション会場へ行くのが一番効率よく価格変動できる方法です。
          </p>
          <ResponsiveImage src="/extras/secret-jiini-about-pull-up.jpg" />
          <p>
            出品したアイテムは「最低落札価格を上げる」「様子見する」を選べます。どちらでも一晩空けると価格が変動しますが、最低価格を上げる方が価格上昇率は高いです。ただし買い手がつかなくなる可能性も上がります。
          </p>
        </div>
        <h4>いちごの現在値が9ジイニの場合</h4>
        <div className="mb-8">
          <CardList
            list={[
              "様子見した場合は翌日11ジイニへ上昇",
              "最低価格を14に引き上げてた場合は翌日39ジイニへ上昇",
            ]}
          />
        </div>
        <h3>オークションで高値がつくアイテム例</h3>
        <div className="mb-8">
          <CardList
            list={[
              "なべのふた",
              "うちわ",
              "ロザニアのドレス",
              "ドエニスのポプリ",
              "ウインドベル",
            ]}
          />
        </div>
        <Information title="リセットを用いた価格引き上げ">
          <ResponsiveImage src="/extras/secret-jiini-pull-up.jpg" />
          <p>
            オークションに出品したあと、価格を引き上げる前にセーブ。その後宿屋で泊まって値段を確認していき、価格が上がらなかったらリセットする。
            これを繰り返すと効率よくオークション価格を引き上げていくことができます。良い例ですが「うちわ」も30分ほどでこの値段になることもあります。
          </p>
        </Information>
      </section>

      <section className="mb-12">
        <SectionTitle>オークションでのアイテム購入</SectionTitle>
        <ResponsiveImage src="/extras/secret-jiini-buy.jpg" />
        <p>
          アイテムの購入はオークション形式ではなく定額で購入できます。宿に泊まるなどして1晩以上空けることで次のSTEPになっていきループします。
        </p>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP1</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/235">レジュームリング (50,000ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/48">エリクシール (6,000ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/299">マジカルリボン (2,600ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP2</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/232">ミョルニル (11,000ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/227">クリスダガー (9,800ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/231">ハヌマンシャフト (13,200ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP3</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/233">リフレックス (7,880ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/234">レアヘルム (5,620ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/299">マジカルリボン (2,600ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP4</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/225">エンジェルブレス (3,400ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/37">リバースドール (4,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/229">テクニカルリング (3,000ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP5</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/39">すいしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/42">りょくしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/228">せきしょうせき (1,500ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP6</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/226">きしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/300">せいしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/118">ししょうせき (1,500ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP7</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/230">はくしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/117">こくしょうせき (1,500ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/48">エリクシール (6,000ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
        <RoundedContainer>
          <h4 className={classes["header"]}>STEP8</h4>
          <ul className={classes["grid"]}>
            <li className={classes["list"]}>
              <a href="/systems/item/232">ミョルニル (11,000ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/234">レアヘルム (5,620ジイニ)</a>
            </li>
            <li className={classes["list"]}>
              <a href="/systems/item/233">リフレックス (7,880ジイニ)</a>
            </li>
          </ul>
        </RoundedContainer>
      </section>
    </article>
  );
}
