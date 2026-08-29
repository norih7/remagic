import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import LocationItems from "@/components/LocationItems";
import LocationRecipes from "@/components/LocationRecipes";
import LocationLenses from "@/components/LocationLenses";
import LocationSubEvents from "@/components/LocationSubEvents";
import { getLocationItemsData } from "@/lib/db";
import { getLocationRecipesData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import { getLocationSubEventsData } from "@/lib/db";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { storyLinks } from "@/constants";
import Information from "@/components/Information";
import ResponsiveImage from "@/components/ResponsiveImage";
import GifPlayer from "@/components/GifPlayer";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "guide5";
const title = storyLinks[pageKey].title;
const description = storyLinks[pageKey].seoDesc;
const canonical = storyLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const recipesData = await getLocationRecipesData();
  const lensesData = await getLocationLensesData();
  const subEventData = await getLocationSubEventsData();

  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          物語の終盤からエンディングまでの流れを丁寧に解説！ラストダンジョンとなる「シゼル城」のマップや仕掛けの攻略手順も詳しく掲載しています。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.セイファート神殿</SectionTitle>
        <div className="mb-4">
          <p>
            ストーリーが進行すると、セイファートの試練に挑むことになります。神殿内でのイベントを終えると、リッドが「極光壁」を習得します。
          </p>
          <p>
            次の試練の場所を示す導きとしてインフェリアが指し示されます。手がかりを求めるため、まずはチャットの小屋へ向かいましょう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[30]} />
        <LocationRecipes data={recipesData} locationIds={[30]} />
        <LocationLenses data={lensesData} locationIds={[30]} />
        <LocationSubEvents data={subEventData} locationIds={[30]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2.チャットの小屋</SectionTitle>
        <div className="mb-4">
          <p>
            小屋に到着してイベントをクリアすると「GPS」が入手でき、フィールド上で現在の緯度と経度が確認できるようになります。
          </p>
          <p>
            イベント内で示された座標（204,
            98）を目印に、バンエルティア号で海を進みましょう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.アイフリードの洞窟</SectionTitle>
        <div className="mb-4">
          <p>
            バンエルティア号で座標（204,
            98）周辺に近づくとフィールドが変化し、アイフリードの台座へと続く洞窟が出現します。
          </p>
          <p>
            ダンジョン内はボードゲーム風のスゴロク形式になっています。なお、道中で発生するフェイク戦は勝利しても特に報酬等はないため、苦戦する場合は避けて進むのも手です。
          </p>
          <p>
            ゴール付近にある石像を調査すると扉が開き、奥へ進めるようになります。イベント後、バンエルティア号に海中探索の機能が追加されます。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[31]} />
        <LocationRecipes data={recipesData} locationIds={[31]} />
        <LocationLenses data={lensesData} locationIds={[31]} />
        <LocationSubEvents data={subEventData} locationIds={[31]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.海底のアジト探し</SectionTitle>
        <div>
          <p>
            ストーリーを進めるには、海底の「アイフリードの台座（99,
            93）」に5つのシルバーソケットをはめ込む必要があります。周辺にはシャドウと契約できる「闇の洞窟」などの隠しエリアもあるため、育成を兼ねて探索を進めるのがおすすめです。
          </p>
          <p>
            シルバーソケットは、以下5カ所のアジトの最深部に隠されています。
            <br />
            ※アジトにある剣は後の隠し要素に関係するため、この時点では回収できません。
          </p>
        </div>
        <div className="mb-4">
          <table>
            <thead>
              <tr>
                <th>場所</th>
                <th>GPS座標</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>アジト1</td>
                <td> (56, 113)</td>
              </tr>
              <tr>
                <td>アジト2</td>
                <td> (153, 164)</td>
              </tr>
              <tr>
                <td>アジト3</td>
                <td> (167, 112)</td>
              </tr>
              <tr>
                <td>アジト4</td>
                <td> (228, 42)</td>
              </tr>
              <tr>
                <td>アジト5</td>
                <td> (3, 151)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <p>
            台座に5つのソケットをセットすると海上に「遠征の橋」が出現します。以降はフィールドで□ボタンを押して「中継基地へ」を選ぶことで、セレスティアとインフェリアを自由に行き来できるようになります。
          </p>
          <p>起動直後はイベントにより、自動的にインフェリア側へ移動します。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[38]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.セイファート庭園</SectionTitle>
        <div className="mb-4">
          <p>インフェリアの海中（GPS座標：169, 18）に位置しています。</p>
          <p>
            最深部で試練のイベントをクリアすると、リッドが「極光剣」を習得します。庭園から出るとイベントが連鎖し、自動的にインフェリア城へと移動します。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[33]} />
        <LocationRecipes data={recipesData} locationIds={[33]} />
        <LocationLenses data={lensesData} locationIds={[33]} />
        <LocationSubEvents data={subEventData} locationIds={[33]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          6.インフェリア城〜セイファートリング
        </SectionTitle>
        <div>
          <p>
            牢屋でのイベントを消化したあとインフェリア城を脱出し、インフェリア港へ向かいましょう。
          </p>
          <p>
            港でバンエルティア号を回収したら遠征の橋を経由し、セレスティアポート側からのみアクセス可能な「セイファート観測所」を目指します。
          </p>
          <p>
            ※インフェリアからのルート例:
            遠征の橋で「中継基地へ」→「反転ドーム」→「反転する」→「セレスティアポート」→「界面」
          </p>
          <p>
            観測所では最後の試練に挑みます。ここではシゼルを操作しての戦闘になり、×ボタンに割り当てられたサンダースパークで敵の動きを止めつつダメージを稼ぐのがポイントです。
          </p>
          <p>
            試練突破後にリッドが「極光波」を習得。その後イベントでセイファートリングが崩壊するため、界面のフィールドから突入するとティンシアへ自動転送されます。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[34]} />
        <LocationRecipes data={recipesData} locationIds={[34]} />
        <LocationLenses data={lensesData} locationIds={[34]} />
        <LocationSubEvents data={subEventData} locationIds={[34]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.ティンシア〜バリル城</SectionTitle>
        <div className="mb-4">
          <p>
            ティンシアで自由に動けるようになったら、アジトにいるフォッグのもとへ向かいます。
          </p>
          <p>
            会話イベント後、バリル城の破損した壁面から内部へ侵入します。奥で待ち受けるボス「ヒアデス」を撃破すると、自動でティンシアへ戻ります。
          </p>
          <p>
            晶霊砲を強化するための「リヴァイウス鉱石」を求め、遠征の橋を使ってインフェリアの「レグルスの丘」へ向かいましょう。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ヒアデス』HP：128000（NORMAL）</h4>
          <p>
            特に弱点はありません。詠唱に入ったらすぐに攻撃を当てて妨害しましょう。ファラなどの前衛キャラで挟み込むように立ち回ると比較的安定します。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">8.レグルスの丘</SectionTitle>
        <div className="mb-4">
          <p>
            ダンジョンは長いですが複雑な謎解きはありません。行き止まりやくぼみがある場所は、別の通路から岩を落として足場を作ることで先に進めるようになります。
          </p>
          <p>
            最深部でボス「レム」に勝利すると契約が結べます。その奥でリヴァイウス鉱石を入手できるので、バリル城の晶霊砲の場所へ持ち帰りましょう。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『レム』HP：100000（NORMAL）</h4>
          <p>
            闇属性が弱点です。弱点を突ける装備や晶霊術で攻めるとスムーズに討伐できます。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[35]} />
        <LocationRecipes data={recipesData} locationIds={[35]} />
        <LocationLenses data={lensesData} locationIds={[35]} />
        <LocationSubEvents data={subEventData} locationIds={[35]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">9.バリル城〜セイファート観測所</SectionTitle>
        <div className="mb-4">
          <p>
            バリル城の壊れた壁の先にある晶霊砲に近づくとイベントが発生します。その後、遠征の橋を経由してセイファート観測所へ向かいます。なお、晶霊砲のそばにいるゾシモスに話しかけて鉱石加工の話を聞いておくことが、リッドの最強武器「ラストフェンサー」入手のフラグになります。
          </p>
          <p>
            観測所での最終決戦前イベントを終えたら、界面フィールドからセイファートリングへ突入します。
            リング内に内部の「シゼル城」が出現するため、そのまま乗り込みましょう。ここからが最後のダンジョンとなります。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[36]} />
        <LocationRecipes data={recipesData} locationIds={[36]} />
        <LocationLenses data={lensesData} locationIds={[36]} />
        <LocationSubEvents data={subEventData} locationIds={[36]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">10.シゼル城</SectionTitle>
        <p>
          いよいよラストダンジョンです。マップ自体はコンパクトですが仕掛けが複雑なため、アイテムを十分に買い揃えてから挑みましょう。
        </p>
        <div className="mb-4">
          <h3>シゼル城 概要マップ</h3>
          <Image
            src="/maps/sizelu_map1.jpg"
            alt="シゼル城マップ"
            width={598}
            height={515}
          />
          <p>
            本ダンジョンの最初の目標は「C」のキャンプ場へ到達することです。ここにある柱を調べた後、計6つの大晶霊に関する謎解きをすべてクリアして力を注ぎ込むと、ワープゾーンが出現し、ボス「シゼル」との最終決戦へ進めます。
          </p>
        </div>
        <div className="mb-4">
          <h3>「C」地点までのルート</h3>
          <ResponsiveImage src="/stories/guide5-chisel-element-point.jpg" />
          <p>
            エントランスフロアは、最初は右側の扉からしか進めません。道なりに進んで「A」地点のエレベーターを下り、「C」のキャンプ場を目指して大きく迂回しながらさらに別のエレベーターで下層へ降ります。
            途中の「B」地点を進むとエントランスに戻ることができ、これまで閉ざされていた左側の扉がショートカットとして開通します。
          </p>
          <p>下記のようにグルッと迂回してキャンプ場を目指してください。</p>
          <Image
            src="/stories/guide5-chisel-element-chart.jpg"
            alt="キャンプ場までの最短チャート"
            width={598}
            height={515}
          />
        </div>
        <div className="mb-4">
          <h3>雷晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-thunder.jpg" />
          <p>
            移動している水晶に向かってフリーズリングを当て、下の同色台座に落とせばクリアです。自キャラの位置を微調整しながら狙いましょう。
          </p>
        </div>
        <div className="mb-4">
          <h3>氷晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-ice.jpg" />
          <p>
            ソーサラーリングで石板を撃って炎を灯すと、床にカラー別の穴が出現します。制限時間内に対応する色の氷柱を落としましょう。時間制限が厳しいため、事前に氷の位置を整えてから火を灯すのがコツです。失敗時は一度部屋を出て入り直せばリトライ可能です。
          </p>
          <p>
            このゲーム画像のように氷を動かしておくと楽に落とすことができます。
          </p>
        </div>
        <div className="mb-4">
          <h3>地晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-earth.jpg" />
          <p>
            正方形のマス目状のフロアを移動するシンプルな仕掛けです。全アイテムを回収したい場合は、いくつかのルートを試しながら歩く必要があります。
          </p>
        </div>
        <div className="mb-4">
          <h3>水晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-water.jpg" />
          <p>
            3つの氷を滑らせて穴に落とすパズルです。氷に向かって「◯ボタン」を押すと移動し、壁や他の氷で停止します。落とす順番をよく考えて動かしましょう。
          </p>
          <p>以下の順番で氷を動かしていけばクリア可能です。</p>
          <Image
            src="/maps/sizelu_map2.jpg"
            alt="水晶霊の柱の仕掛け"
            width={600}
            height={470}
          />
        </div>
        <div className="mb-4">
          <h3>火晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-fire.jpg" />
          <p>
            灯台を調べて放たれた火の玉を、消えないように奥の扉まで導く仕掛けです。灯台をスライドさせるタイミングやルートの調整が求められるため、落ち着いて手順を組み立てましょう。
            タイミングが難しく、慣れるまで大変なのでよければ下記の参考動画を参考にしてください。
          </p>
          <GifPlayer
            src="/stories/guide5-chisel-fire-sample.gif"
            alt="シゼル城 火晶霊の柱攻略動画"
            width={264}
          />
        </div>
        <div className="mb-4">
          <h3>風晶霊の柱</h3>
          <ResponsiveImage src="/stories/guide5-chisel-wind.jpg" />
          <p>
            動く足場を乗り継いで進みます。右下のエリアにあるスイッチを操作して扉を開ける必要がありますが、床を動かすと連動して他の足場も変化するため、試行錯誤しながら進路を切り開きましょう。
          </p>
          <Information type="warning" title="床を動かすタイミングに注意">
            ゴールまでいろいろな経路が存在しますがこのサイトを参考にする場合は、この順番通り床に乗って進めてください。違う経路で動く床に乗るとうまくいかなくなるため、間違えた場合は再度床に乗り元の場所に戻ってください。
          </Information>
          <h4>スイッチを踏むまでの経路</h4>
          <p>
            1〜6の順番に動く足場に乗って進みます。赤色のルート通り進んでください。
          </p>
          <div className="mb-4">
            <Image
              src="/stories/guide5-chisel-wind-map1.jpg"
              width={500}
              height={0}
              alt=""
            />
          </div>
          <h4>ゴールまでの経路</h4>
          <p>
            スイッチを踏んだところから、1〜7の順番に動く足場に乗って進みます。引き続き赤色のルート通りに進んでください。
          </p>
          <Image
            src="/stories/guide5-chisel-wind-map2.jpg"
            width={500}
            height={0}
            alt=""
          />
        </div>
        <div className="mb4">
          <h4>ラストバトルへ</h4>
          6つの大晶霊すべての力を注ぎ込むと「C」地点にワープが出現し、いよいよボス「シゼル」との決戦となります。激戦を制すれば、感動のエンディングへ到達します。
        </div>

        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『シゼル』HP：-（NORMAL）</h4>
          <p className="margin-bottom-small">--</p>
          <h4>BOSS：『ネレイド』HP：400000（NORMAL）</h4>
          <p>
            「エターナルファイナリティ」の詠唱・発動を確認したら、「◯・×・□」ボタンを同時押しした状態でリッドの「極光波」を出して相殺・防御しましょう。リッドを操作キャラにしていない場合でも発動可能です。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[37]} />
        <LocationRecipes data={recipesData} locationIds={[37]} />
        <LocationLenses data={lensesData} locationIds={[37]} />
        <LocationSubEvents data={subEventData} locationIds={[37]} />
      </section>
    </article>
  );
}
