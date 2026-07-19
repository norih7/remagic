import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import Image from "next/image";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "きらめきの塔";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        強力な装備品を入手できる隠しダンジョン「きらめきの塔」について紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>きらめきの塔</SectionTitle>
        <p>
          隠しダンジョンの1つ。飛行艇を入手するとインフェリアにあるきらめきの塔に行くことができます。きらめきの塔はナムコの「ワルキューレの伝説」のBMGが流れるダンジョンで、最上階にはボス「ワルキューレ」がいます。
          飛行艇を入手するとインフェリアのフィールドマップにある「きらめきの塔」GPS
          (200,200)に入ることができます。ここは岩に囲まれたところなので飛行艇でしか着陸することができません。
        </p>
        <p>
          このダンジョンではボス「ワルキューレ」がいて、勝利後はリッドの装備品「S・D」を入手するキーアイテムを入手したり強力な防具を入手することができます。このダンジョンは7階構成となっており、ワルキューレを倒すまではダンジョンを移動していても戦闘が発生しません。ワルキューレを倒したあとから敵と遭遇するようになります。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-4">
          <h3>1階</h3>
          <p>
            星型の三角形のスイッチを特定の以下の順番に踏んでいけば2階へ行くためのワープが起動します。
            <br />
            <Image
              src="/maps/valkyrie_01.jpg"
              alt="きらめきの塔 1階のスイッチ"
              width={230}
              height={230}
            />
          </p>
        </div>
        <div className="mb-4">
          <h3>2階</h3>
          <p>
            中央までいくと四方にある球体が光る。その後、光った順番に球体を調べていき全部正解すると次の階へと進めるワープが起動します。失敗すると「ブー」というSE音がなります。
          </p>
          <p>
            合計11回光り、順番は毎回ランダムになるためメモをとったほうがいいです。
          </p>
        </div>
        <div className="mb-4">
          <h3>3階</h3>
          <p>
            ここでは灯台にソーサラーリングで火を灯せばOKですが、最初の状態では双方の壁から風が吹いているのでフリーズリングで凍らせて風を止める必要があります。
          </p>
          <p>
            2つの灯台に火を灯すと床が出現し、その床で2〜3秒ほど立ち止まると階段があわられて次に進むことができます。
          </p>
        </div>
        <div className="mb-4">
          <h3>4階</h3>
          <p>
            この階では水晶にソーサラーリングを放ち、すべての水晶に光を灯せばいいが順番が決まっています。
          </p>
          <p>
            順番は以下の図を参照してください。なおソーサラリングを打つ際のキャラクター位置調整には「□ボタン」を押しながら方向キーを動かして調整してみください。
            <br />
            <Image
              src="/maps/valkyrie_02.jpg"
              alt="きらめきの塔 4階の水晶"
              width={403}
              height={396}
            />
          </p>
        </div>
        <div className="mb-4">
          <h3>5階</h3>
          <p>
            この階では自分が乗って動かす床に連動して動く半透明の床があり、その床で「赤」、「青」、「緑」の光を集める必要があります。半透明の床は自分の操作と鏡写りの状態で動くのでそれを意識しましょう。
          </p>
        </div>
        <div className="mb-4">
          <h3>6階</h3>
          <p>
            このフロアは色のついた床があり、色によって動くける制約があります。その中で、この階に存在する3つの柱を調べて光を灯すことで次の階に進むことができます。
          </p>
        </div>
        <div className="mb-4">
          <h3>7階</h3>
          <p>
            最初のフロアを経由してそのままワープ先に行くことができるがここは最初のフロアにある火柱を同じ色にしないと突破できない。7階の火柱はソーサラーリングかフリーズリングを当てることで「赤」「青」「緑」と変化しますが統一する色はどれでもOK。
          </p>
          <p>
            最初のフロアの火柱を同じ色に統一した状態でワープ先にいくと、床がその統一した色と透明の2色になっている。この状態で以下の図の順番で進めば最上階へと行ける。
            <br />
            <Image
              src="/maps/valkyrie_03.jpg"
              alt="きらめきの塔 7階の順番"
              width={203}
              height={203}
            />
          </p>
        </div>
        <div className="mb-4">
          <h3>最上階</h3>
          <p>
            最上階に行くとロードポイントがあり、奥に進むとイベントが発生してリッド一人でボス「ワルキューレ」と戦闘になります。勝利後はワルキューレから見えない鍵を受け取り、奥にある宝箱を入手できるようになります。
          </p>
          <p>
            見えない鍵は「S・D」を入手するためのもの。なお、ワルキューレを倒したあと部屋を出ると1階にたどり着き、これ以降このダンジョンでモンスターと戦闘が発生するようになります。
          </p>
        </div>
        <div className="mb-4">
          <h3>ワルキューレとの戦闘</h3>
          <p>BOSS：『ワルキューレ』</p>
          <p>
            リッド一人で戦うこととなります。連続斬りの特技を使ってくるので要注意。列空斬を空中発動できるようにしておいて、回避できるようにしておくのがおすすめ。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[59]} />
        </div>
      </section>
    </article>
  );
}
