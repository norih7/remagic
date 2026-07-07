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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "セイファート神殿〜シゼル城";
export const metadata = {
  title,
  description: "",
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
          ストーリー終盤からエンディングまでを攻略！ラストダンジョン「シゼル城」はダンジョンマップ付きで解説。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.セイファート神殿</SectionTitle>
        <ol>
          <li>
            以降はセイファートの試練を受けていくことになる。セイファート神殿ではイベントのみで、終了後にリッドが「極光壁」を習得する。
          </li>
          <li>
            セイファーとキーが次の試練の場所を指したのはインフェリア。インフェリアへ向かうためのヒントを得るためにチャットの小屋へ向かう。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[30]} />
        <LocationRecipes data={recipesData} locationIds={[30]} />
        <LocationLenses data={lensesData} locationIds={[30]} />
        <LocationSubEvents data={subEventData} locationIds={[30]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2.チャットの小屋</SectionTitle>
        <ol>
          <li>
            小屋に入るとイベント。イベント後に「ジーピーエス(GPS)」を入手し、以降フィールドマップで緯度と経度が表示されるようになる。
          </li>
          <li>
            イベント内であった(204,98)の指す場所までバンエルティア号で目指しましょう。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.アイフリードの洞窟</SectionTitle>
        <ol>
          <li>
            バンエルティア号で(204,98)の付近まで行くとフィールドが変化してアイフリードの台座への洞窟が開かれる。
          </li>
          <li>
            内部のダンジョンはスゴロクとなっている。地道に進んでいこう。
            <br />
            アイフリードからのプレゼントでフェイクと戦闘となる場合があるが、勝利後には特に何も手に入らないため余裕がない場合はスルーしておこう。
          </li>
          <li>
            スゴログ部屋の出口の奥で石像を調べると、さらに奥へと進める扉が開く。イベント後はバンエルティア号が改造されて、海中探索ができるようになるのでアジトを探索しよう。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[31]} />
        <LocationRecipes data={recipesData} locationIds={[31]} />
        <LocationLenses data={lensesData} locationIds={[31]} />
        <LocationSubEvents data={subEventData} locationIds={[31]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.海底のアジト探し</SectionTitle>
        <ol>
          <li>
            海底での潜水艇での調査はアイフリードの台座(99,
            93)へシルバーソケットを5つはめ込めばストーリー上は完了となる。ただ、海底ではシャドウと契約できる「闇の洞窟」などの隠しダンジョンも存在するのでレベルアップも兼ねて色々探索するものおすすめです。
          </li>
          <li>
            シルバーソケットは以下の5つのアジトの奥にある。GPS情報は以下の通り。
            <br />
            アジトには剣が刺さっているところがあるが、これは後の隠しダンジョンクリア後に入手可能となる。この時点では入手できない。
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>場所</th>
                  <th>GPSの場所</th>
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
          </li>
          <li>
            アイフリードの台座(99,
            93)にシルバーソケットをはめ込むと、海上にアイフリードの紋章が浮かび上がる。これは「遠征の橋」というもので、以降フィールドマップで□ボタンを押して「中継基地へ」を選択するとセレスティアとインフェリアを行き来できるようになる。
          </li>
          <li>
            初回時は遠征の橋が立ち上がるとイベントで自動的にインフェリアへと移動する。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[38]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.セイファート庭園</SectionTitle>
        <ol>
          <li>インフェリアの海中にGPS情報(169, 18)が差す場所にある。</li>
          <li>
            庭園の奥では試練のイベント。イベント終了後にはリッドが「極光剣」を習得する。庭園を出るとイベントが発生して自動的にインフェリア城へ到着する。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[33]} />
        <LocationRecipes data={recipesData} locationIds={[33]} />
        <LocationLenses data={lensesData} locationIds={[33]} />
        <LocationSubEvents data={subEventData} locationIds={[33]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          6.インフェリア城〜セイファートリング
        </SectionTitle>
        <ol>
          <li>
            インフェリア城では牢屋でのイベント後、インフェリア城を出てインフェリア港へ行こう。
          </li>
          <li>
            インフェリア港ではバンエルティア号を回収。遠征の橋へと向かい、セイファート観測所へ向かう。なお、セイファート観測所はセレスティアポート側からのみ入ることができる。
          </li>
          <li>
            セイファート観測所では最後の試練を受けることとなる。この試練でシゼルを操作して戦闘することになる。戦闘時は×ボタンに設定してあるサンダースパークを活用して敵の足止めしながらダメージを与えていく。
          </li>
          <li>
            試練のイベントを終了するとリッドが「極光波」を習得する。その後、観測所のイベントでセイファートリングが崩れたらフィールドに出てリングへと向かう。界面のフィールドからセイファートリングに突入するとイベントが発生して自動的にティンシアへと送られる。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[34]} />
        <LocationRecipes data={recipesData} locationIds={[34]} />
        <LocationLenses data={lensesData} locationIds={[34]} />
        <LocationSubEvents data={subEventData} locationIds={[34]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.ティンシア〜バリル城</SectionTitle>
        <ol>
          <li>
            ティンシアで行動できるようになると、アジトにいるフォッグに会いにいく。
          </li>
          <li>
            イベント後、バリル城へと向かう。バリル城の壊れた壁面の奥ではイベントが発生。
            <br />
            奥地でボス「ヒアデス」との戦闘となる。勝利後はイベントで自動的にティンシアへ移動する。
          </li>
          <li>
            ティンシアのイベントでは晶霊砲の強化のために必要なリヴァイウス鉱石を獲得するためにインフェリアの「レグルスの丘」へ行くことになる。遠征の橋を経由してインフェリアへと向かおう。
          </li>
        </ol>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ヒアデス』HP：128000(NORML)</h4>
          <p>
            弱点なし。詠唱を始めたらすぐに攻撃をして食い止めよう。ファラなどの肉弾戦キャラクターとはさみ打ちにできれば比較的楽に倒すことができる。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">8.レグルスの丘</SectionTitle>
        <ol>
          <li>
            難しい謎解きなどは無い。窪みがあり通れない場所は、別の通路から岩を落として経過するようにしていく。
          </li>
          <li>
            奥地ではボス「レム」との戦闘になり、勝利すればレムと契約できる。その奥地ではイベントが発生し、リヴァリウス鉱石を入手する。バリル城にある晶霊砲まで持っていこう。
          </li>
        </ol>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『レム』HP：100000(NORML)</h4>
          <p>弱点は闇。弱点を付いた武器で攻撃していけば良い。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[35]} />
        <LocationRecipes data={recipesData} locationIds={[35]} />
        <LocationLenses data={lensesData} locationIds={[35]} />
        <LocationSubEvents data={subEventData} locationIds={[35]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">9.バリル城〜セイファート観測所</SectionTitle>
        <ol>
          <li>
            バリル城の壊れた壁の奥にある晶霊砲まで行くとイベント。イベント後は遠征の橋から、セイファート観測所へ向かう。なお晶霊砲のところにいるゾシモスに話かけて鉱石を武器にする話を聞いておくとリッドの武器「ラストフェンサー」を入手するイベントのフラグが立つ。
          </li>
          <li>
            セイファート観測所では最終決戦前のイベントが発生。イベント後は界面のフィールドからセイファートリングへ侵入できる。
          </li>
          <li>
            セイファートリングへ突入するとイベントは発生して、内部にあるシゼル城が出現するので乗り込もう。次がラストダンジョンとなる。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[36]} />
        <LocationRecipes data={recipesData} locationIds={[36]} />
        <LocationLenses data={lensesData} locationIds={[36]} />
        <LocationSubEvents data={subEventData} locationIds={[36]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">10.シゼル城</SectionTitle>
        <ol>
          <li>
            ラストダンジョン。ダンジョンは広くないが謎解きが難しい。長期滞在になるのでアイテムを十分補給して挑みましょう。
          </li>
          <li>
            <h4>シゼル城 概要マップ</h4>
            <Image
              src="/maps/sizelu_map1.jpg"
              alt=""
              width={598}
              height={515}
            />
          </li>
          <li>
            シゼル城では「C」地点を目指すことになる。ここにある柱を調べ、その先にある合計6つの謎解きをクリアしてすべてに大晶霊の力を注ぐとワープゾーンが出現する。その奥ではボス「シゼル」とのラストバトルになる。
          </li>
          <li>
            <h4>「C」地点の到着まで</h4>
            シゼル城の入り口のフロアは右手の扉から進みましょう。最初はこの扉しか空いていません。道なりに進んでいき、「A」地点まで行くとエレベータがある。「C」地点へ行くにはここを下へおります。おりた先ではグルっと迂回していき、その先のエレベータで下におり「C」地点を目指しましょう。
            <br />
            <br />
            なお途中の「B」地点を進むと入り口フロアに戻ることができる。これ以降、入り口フロアの閉まっていた左側の扉が解放されてショートカットになります。
          </li>
          <li>
            <h4>雷晶霊の柱</h4>
            ここでは動いている水晶をフリーズリングで打ち、同じ色の台座に落とせばいい。フリーズリングが命中すると動いている水晶は下に落ちる。操作キャラクターの位置を調整しながらやっていきましょう。
          </li>
          <li>
            <h4>氷晶霊の柱</h4>
            氷晶霊の謎解きをするためには石板をソーサラーリングで打つことが必要。石板に炎が灯るとそのフロアに色がついた穴ができ、炎が消えるまでの間に色の付いた氷柱を対応する色の穴に落とすと奥への通路が開く。炎を通してからそのままの状態で石を落とすのは時間的に難しいので、事前に石の配置を整えたうえで火を灯せば時間内に対応するのは難しくない。失敗したら、この仕掛けの部屋を出て再び入ればいい。
          </li>
          <li>
            <h4>地晶霊の柱</h4>
            仕掛けの中では一番簡単なもの。正方形のマスのようなフロアになっており、マス間を移動しながら部屋を出ることが目的。特定のルートを通る必要はないが、アイテムをすべて入手するためには色々な組み合わせを確かめる必要がある。(この柱の謎解きを周回)
          </li>
          <li>
            <h4>水晶霊の柱</h4>
            ここでは3つある氷を滑らせて穴に落とすという仕掛けがある。氷に対して「◯ボタン」を押すとその方向に氷が動く。基本的な考え方としては柱を利用して氷を止め、別の方向から動かして落としていくことになる。ただし、氷自身も氷を止める役割をするので落とす順番が存在する。
            <br />
            <Image
              src="/maps/sizelu_map2.jpg"
              alt=""
              width={600}
              height={470}
            />
          </li>
          <li>
            <h4>火晶霊の柱</h4>
            ここでは灯台を調べると火の玉が放出され、それを奥の扉まで消さずに届ける仕掛けがある。火の玉は灯台を経由して繋いでいき、途中で壁にぶつかったり、灯台へ橋渡しができなかった場合には消える。また、灯台間をつなぐにはタイミングより灯台をスライドさせる必要などもある。操作なれが必要ですが根気よく突破しましょう。
          </li>
          <li>
            <h4>風晶霊の柱</h4>
            ここは、移動する床で足場を行き来することになる。仕掛けフロアの右下には奥の扉を進むためのスイッチがあり、これを動作させていなければ扉は開かない。移動する床は、移動すると副作用で他の床も移動する。根気よくスイッチを動作させて扉を目指しましょう。
          </li>
          <li>
            <h4>ラスト</h4>
            大晶霊の力をすべて注ぐと「C」地点にワープゾーンが出現する。そこから奥に進むとイベントがあり、ボス「シゼル」との戦闘になる。一連の勝利後はエンディングとなる。
          </li>
        </ol>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『シゼル』HP：(NORML)</h4>
          <p className="margin-bottom-small">--</p>
          <h4>BOSS：『ネレイド』HP：400000(NORML)</h4>
          <p>
            エターナルファイナリティが発動されたら「◯、×、◽︎」ボタンを同時押しにした状態にしてリッドの極光波を出して防ごう。この戦闘ではリッドを操作していなくても極光波が発動する。
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
