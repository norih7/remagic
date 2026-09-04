import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import Image from "next/image";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";
import { extraLinks } from "@/constants";
import ResponsiveImage from "@/components/ResponsiveImage";
import ValkyrieButton from "@/components/ValkyrieButton";
import Information from "@/components/Information";
import EventCondition from "@/components/EventCondition";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "valkyrie";
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

const Buttons: React.ReactNode[] = [];
for (let i = 1; i <= 10; i++) {
  Buttons.push(
    <li className="" key={i}>
      <div className="bg-gray-100 border border-gray-300 mb-5 font-bold text-center text-gray-600 text-xs">
        {i}回目
      </div>
      <ValkyrieButton />
    </li>,
  );
}

export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          ナムコの名作『ワルキューレの伝説』をモチーフにしたBGMが響き渡る隠しダンジョン「きらめきの塔」の攻略情報ページです。飛行艇によるアクセス方法や、各フロアを悩ませる難解な仕掛けの数々、ワルキューレとのタイマン勝負のコツ、入手できる強力な装備やアイテムのデータを徹底解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>きらめきの塔</SectionTitle>
        <EventCondition category="period">飛行艇を入手後から</EventCondition>
        <p>
          物語終盤で「飛行艇」を入手したあとから挑戦できる隠しダンジョンのひとつです。ダンジョン内では『ワルキューレの伝説』のアレンジBGMが流れるファン必見のスポットとなっています。
        </p>
        <p>
          この塔は全7階層で構成されていますが、ワルキューレを撃破するまではフロアを移動しても一切ザコ敵とのエンカウントが発生しない仕様になっています。ボスを倒したあと再度ダンジョンに入った時から敵が出現するようになる仕様のため、探索自体はじっくり腰を据えて進められます。
        </p>
        <h3>報酬</h3>
        <p>
          最上階には謎の剣士「ワルキューレ」が待ち受けており、勝利すると「S.D（ソーディアン・ディムロス）」を入手するための「見えない鍵」や、数々の強力な装備品を手に入れることができます。「BCロッド」はキールの最強武器、「ゴールドアーマー」はリッドの最強防具の1つです。ダンジョンの仕掛けが難しく、ボスのワルキューレも強敵ですが報酬が豪華なのでぜひ挑戦してみてください。
        </p>
        <h3>きらめきの塔への行き方</h3>
        <ResponsiveImage src="/extras/secret-valkyrie-location.jpg" />

        <p>
          ミンツから飛行艇で南にずっとすすんだ岩山に囲まれたエリア（GPS座標：200,
          200付近）に佇んでおり、飛行艇を使用することで初めて着陸・侵入することが可能です。
        </p>
      </section>

      <section className="mb-12">
        <SectionTitle>ダンジョンフロア別攻略・謎解き手順</SectionTitle>
        <div className="mb-4">
          <h3>1階：星型スイッチの踏破ギミック</h3>
          <p>
            フロアにある星型（三角形を組み合わせた形状）の床スイッチを、特定の正しい順番通りに踏んでいくことで、2階へ進むためのワープ装置が起動します。
            <br />
            <Image
              src="/maps/valkyrie_01.jpg"
              alt="きらめきの塔 1階のスイッチ踏む順番"
              width={230}
              height={230}
              className="mt-2 mb-2"
            />
          </p>
        </div>
        <div className="mb-4">
          <h3>2階：光る球体の記憶パズル</h3>
          <ResponsiveImage src="/extras/secret-valkyrie-2f.jpg" />
          <p>
            中央のエリアへ進むと、四方に配置された球体が次々と光り始めます。そのあと、光った通りの正確な順番通りに各球体を調べていき、すべての正解を導き出すと次の階層へのワープが解放されます。途中で順番を間違えると「ブー」というエラー音が鳴り、最初からやり直しになります。
          </p>
          <p>
            球体は合計10回もの長いパターンでランダムに発光するため、うろ覚えではなく手元にメモを取りながら確実に挑むのがおすすめです。
          </p>
          <Information title="発光の記録">
            <p>
              紙やスマホでメモを取るのも大変なので光った色を記録する機能を作りました。四方の球体をタップすることで光った箇所の記録を取ることができます。やり直す場合はページのリロードをお願いします。
            </p>
            <ul className="flex flex-wrap justify-center gap-9 py-6 rounded-sm bg-white border">
              {Buttons}
            </ul>
          </Information>
        </div>
        <div className="mb-4">
          <h3>3階：風を止めて灯台に火を灯す仕掛け</h3>
          <ResponsiveImage src="/extras/secret-valkyrie-3f.jpg" />

          <p>
            このフロアでは、両側の灯台に「ソーサラーリング」で火を灯すのが目的ですが、初期状態では左右の壁から激しい風が吹きつけていて炎がかき消されてしまいます。あらかじめ「フリーズリング」を壁に向かって撃ち、氷結させて風を完全に止めてからソーサラーリングで点火しましょう。
          </p>
          <p>
            2つの灯台の両方に火を灯すと隠し床が出現します。その出現した床の上で2〜3秒ほどじっと立ち止まっていると、先に進むための階段が現れます。
          </p>
        </div>
        <div className="mb-4">
          <h3>4階：水晶へのソーサラーリング照射順序</h3>
          <ResponsiveImage
            src="/extras/secret-valkyrie-gem.jpg"
            alt="きらめきの塔 4階の水晶を撃つ順番"
          />
          <p>
            この階層では、部屋に散らばる水晶に対してソーサラーリングの光弾を放ち、すべての水晶に明かりを灯す必要がありますが、点灯させるための厳格な順番が決められています。
          </p>
          <p>
            正しい手順は下の図を参照してください。なお、ソーサラーリングを撃つ際の細かな立ち位置・キャラクターの向きを微調整する際は、コントローラーの「□ボタン」を押しながら方向キーを入力する微移動テクニックを活用するとスムーズに合わせられます。
          </p>
        </div>
        <div className="mb-4">
          <h3>5階：半透明の床と光の回収パズル</h3>
          <ResponsiveImage src="/extras/secret-valkyrie-5f.jpg" />
          <p>
            自分が乗って動かす足場に完全に連動して動く「半透明の床」を利用し、床のうえで「赤」「青」「緑」の3色の光をすべて集めるフロアです。半透明の床は自分の移動操作に対して鏡写し（反転）の動きをするため、頭の中で軌道をしっかりイメージしながら動かすことが求められます。
          </p>
        </div>
        <div className="mb-4">
          <h3>6階：床のカラー制限と3つの柱の起動</h3>
          <ResponsiveImage src="/extras/secret-valkyrie-6f-1.jpg" />
          <ResponsiveImage src="/extras/secret-valkyrie-6f-2.jpg" />
          <p>
            色分けされた特殊な床が敷き詰められており、足場の色によって通行できる制限が設けられています。その複雑な通路を縫うように進みながら、フロア内に点在する3本の柱を調べて光をすべて灯すことで、次の階層への道が開きます。
          </p>
          <p>上記画像のルートで3つの柱を起動させ次の階へ進むことができます。</p>
        </div>
        <div className="mb-4">
          <h3>7階：火柱の色合わせと床の進行ルート</h3>
          <p>
            最初の小部屋を経由して奥のワープ先へ進む構造ですが、手前のエリアにある火柱をあらかじめ同じ色に統一しておかないと先へ進めません。火柱はソーサラーリングまたはフリーズリングを当てることで「赤」「青」「緑」へと変化させられます（統一する色はどの色でも問題ありません）。
          </p>
          <p>
            火柱の色をすべて同じに揃えた状態でワープ先に進むと、床が「統一した色」と「透明」の2色で構成された足場に変化します。この状態のとき、以下の図に示された安全なルートの順番通りに歩みを進めることで最上階へたどり着けます。
            <br />
            <Image
              src="/maps/valkyrie_03.jpg"
              alt="きらめきの塔 7階の進む順番ルート"
              width={203}
              height={203}
              className="mt-2 mb-2"
            />
          </p>
        </div>
        <div className="mb-4">
          <h3>最上階のイベントとワルキューレ戦</h3>
          <ResponsiveImage src="/extras/secret-valkyrie-top.jpg" />
          <p>
            最上階に足を踏み入れるとロードポイントがあり、さらに奥へ進むとイベントが発生して主人公・リッド1人きりでのボス「ワルキューレ」とのタイマン勝負に突入します。見事勝利すると、ワルキューレから最強武器「S.D」の入手に必要な「見えない鍵」を受け取ることができ、背後にある宝箱を自由に回収できるようになります。
          </p>
          <p>
            なお、ワルキューレを撃破したあとに一度きらめきの塔の外部や別のフロアへ出ると、それ以降はこのダンジョン内で通常のモンスターエンカウントが発生するようになります。
          </p>
        </div>
        <div className="mb-4">
          <h3>ボス「ワルキューレ」との戦闘攻略</h3>
          <p>
            <strong>BOSS：『ワルキューレ』</strong>
          </p>
          <p>
            リッド単体での1対1バトルとなるため、相手の隙を突く立ち回りが重要になります。ワルキューレは素早い連続斬りの特技を繰り出してくるため非常に強力です。あらかじめリッドの「列空斬」などを空中発動できるようにスキルやリングを調整しておき、相手の猛攻を華麗に飛び越えて回避しつつ、手堅くダメージを重ねていく戦術がおすすめです。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内で入手できるアイテム一覧</h3>
          <LocationItems data={itemsData} locationIds={[59]} />
        </div>
      </section>
    </article>
  );
}
