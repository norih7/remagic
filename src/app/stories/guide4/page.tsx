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
import Information from "@/components/Information";
import CardList from "@/components/CardLIst";
import ResponsiveImage from "@/components/ResponsiveImage";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "港町ペイルティ〜バリル城";
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
          大晶霊セルシウスのイベントからストーリー後半へと繋がるバリル城までを攻略！難易度の高い「雷晶霊の遺跡」「バリル城」はダンジョンマップも掲載。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.港町ペイルティ</SectionTitle>
        <Information type="warning" title="ペイルティでの準備は必須">
          目的地はペイルティから離れた「氷晶霊の山」ですが、ペイルティで防寒具を揃えていないとダンジョンへ侵入できません。またダンジョンに挑む前にペイルティの道具屋で「フリーズチェック」を1つ購入しておくのもおすすめです。20000ガルドと高いですが戦闘中の凍結を防止してくれます。氷晶霊の山でも1つ入手できますが最終的にはリッド、ファラ2人に装備させるのがおすすめです。
        </Information>
        <div className="mb-8">
          <h3>防寒具選び</h3>
          <p>
            まず宿屋（赤い屋根のピンクの煙の建物）の中にいるピンク色の髪の男に話しかけることでイベントが進行していきます。
            その後、服屋へ向かうと店の前で先ほどの男と遭遇し、店の中で防寒具探しを行うことになります。
          </p>
          <p>
            リッドがメンバーの服を選び、次の組み合わせに辿り着くまで服選びをすることになります。
          </p>
          <CardList
            list={[
              "メルディ：ケープ",
              "ファラ：ポンチョ",
              "キール：オーバーマント",
            ]}
          />
        </div>
        <div className="mb-8">
          <p>
            防寒具やアイテム補充の支度が整ったならフィールドに出て氷晶霊の山に向かいましょう。
          </p>
          <Information type="warning" title="町にあるワンダーシェフやレシピ">
            凍結状態のペイルティでは一部の料理しか手に入らず、氷晶霊の山をクリアしてから再度訪れるとすべて入手できるようになります。氷晶霊の山クリア後はペイルティには必ず戻ってくるため、このタイミングですべて回収するのがおすすめです。
          </Information>
        </div>
        <LocationItems data={itemsData} locationIds={[24]} />
        <LocationRecipes data={recipesData} locationIds={[24]} />
        <LocationLenses data={lensesData} locationIds={[24]} />
        <LocationSubEvents data={subEventData} locationIds={[24]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2.氷晶霊の山</SectionTitle>
        <div className="mb-8">
          <h3>氷晶霊の山のマップ</h3>
          <Image
            src="/maps/hyousyourei_map.jpg"
            alt=""
            width={482}
            height={600}
          />
          <p>
            後述する「氷の柱」以外に特に難しい仕掛けはありませんが、ダンジョン内には隠れた通路（交差している下の通路）を通る必要があります。また氷が道を邪魔している箇所はソーサラーリングを打つことで溶けて通れるようになります。（氷の中から敵が出てくることもあります）
          </p>
          <Information type="warning" title="ダンジョン内のレンズ入手">
            <ResponsiveImage src="/stories/guide4-iced-mountain-lens.jpg" />
            ダンジョン内にはレンズが1枚ありますが、入手するためには仕掛けがあります。この画像のポイントまでいくと雪が崩れて落下します。
          </Information>
        </div>
        <div className="mb-8">
          <h3>「氷の柱」の仕掛けとボス戦</h3>
          <p>
            奥へと進んでいくと、木箱から「トトのアブラ」を入手します。これは赤い氷の柱を溶かすために必要なものです。氷の柱を溶かし、奥に進むとボス「セルシウス」と戦闘となり、勝利後は「フリーズリング」を入手します。ダンジョンを戻り、ペイルティへ向かいましょう。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『セルシウス』HP：33333(NORML)</h4>
          <p>弱点は火。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[25]} />
        <LocationRecipes data={recipesData} locationIds={[25]} />
        <LocationLenses data={lensesData} locationIds={[25]} />
        <LocationSubEvents data={subEventData} locationIds={[25]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.ペイルティ〜アイメン(崩壊)</SectionTitle>
        <div className="mb-8">
          <h3>ペイルティ</h3>
          <p>
            セルシウスと契約後にペイルティに戻ると氷が溶け宿屋に泊まるイベントが発生します。イベントでは「セレスティマップ」を入手し、イベント後はアイメンへ向かうことになります。ここから自分でバンエルティア号をフィールドマップで操作できるようになります。このイベントでもらったセレスティマップは貴重品にあるのでフィールドマップで迷ったら使いましょう。
          </p>
          <p>
            もとに戻ったペイルティでは新しくワンダーシェフやレンズの入手、サブイベントの発生があるので回収しておくことを推奨します。
          </p>
          <LocationItems data={itemsData} locationIds={[60]} />
          <LocationRecipes data={recipesData} locationIds={[60]} />
          <LocationLenses data={lensesData} locationIds={[60]} />
          <LocationSubEvents data={subEventData} locationIds={[60]} />
        </div>
        <div className="mb-8">
          <h3>アイメン（崩壊）</h3>
          <p>
            アイメンに入るとイベント。崩壊している町を探索しながら目的地の図書館へ向かいます。図書館ではボス「ヒアデス」との戦闘。勝利後はフィールドマップに出て、再びバンエルティア号に乗ってティンシアを目指します。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ヒアデス』HP：45000(NORML)</h4>
          <p>弱点は光。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[26]} />
        <LocationRecipes data={recipesData} locationIds={[26]} />
        <LocationLenses data={lensesData} locationIds={[26]} />
        <LocationSubEvents data={subEventData} locationIds={[26]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.ティンシア</SectionTitle>
        <div className="mb-8">
          <p>
            ティンシアの目的はバリル討伐のため自由軍シルエシカのボスに会うこと。シルエシカのアジトは町を右奥に進んだ、船の中にあります。
          </p>
          <p>
            シルエシカのアジトではイベントが進行し、最後は一時的にキールと別れ、代わりにシルエシカのボス「フォッグ」がパーティに加入します。その後はフィールドに出て「雷晶霊の遺跡」へ向かいます。
          </p>
          <Information title="ティンシアの町探索">
            ティンシアにはレンズやTPを60%回復してくれる「スイートパフェ」のレシピが入手できます。アイテム屋にはイレーヌもいるためレンズ報酬も入手できます。レンズはこの時点で30枚入手できるので土雷氷ダメージを40%軽減する「セレスティマント」をもらうことも可能です。
          </Information>
          <LocationItems data={itemsData} locationIds={[27]} />
          <LocationRecipes data={recipesData} locationIds={[27]} />
          <LocationLenses data={lensesData} locationIds={[27]} />
          <LocationSubEvents data={subEventData} locationIds={[27]} />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.雷晶霊の遺跡</SectionTitle>
        <div className="mb-8">
          <h3>雷晶霊の遺跡の概要と全体マップ</h3>
          <Image src="/maps/kaminari_map.jpg" alt="" width={650} height={666} />
          <p>
            仕掛けが多く、大晶霊「ヴォルト」のところまで辿り着くのに中々根気のいるダンジョン。入り口すぐのビリビリと電流が流れている箇所は触れるとHPにダメージを受けるので気をつけましょう。また早速セルシウスからもらったフリーズリングを使う仕掛けもあります。ダンジョン攻略の時間も長めなのでティンシアやペイルティで回復アイテム補給や、TP回復の料理食材の購入をして挑みましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>数字のスイッチの部屋</h3>
          <p>
            マップの「！」の部屋では3つのスイッチを踏んで特定の数に揃えれば扉が開くという仕掛けがあります。
          </p>
          <Information type="warning" title="赤い扉は必須ではない">
            赤い扉は解除しなくてもクリア可能です。白い扉からも動く床の部屋にたどり着き、奥のキャンプ地へ行くことができます。赤い扉はアイテムの取り逃がしなど、再びダンジョンを訪れた時の最短距離という扱いです。
          </Information>
        </div>
        <div className="mb-8">
          <h3>ヒューズの入手と動く床</h3>
          <h4 className="mb-2">（1）青の扉を進んでヒューズを入手</h4>
          <div className="mb-4">
            <Image
              src="/stories/guide4-volt-fuse.jpg"
              width={300}
              height={118}
              alt=""
            />
          </div>
          <p>
            ダンジョンを攻略では「ヒューズ」を入手が必要となります。ヒューズは青い扉の先にあるため、仕掛けの部屋で「6、5、3」のスイッチを踏んで右側の「青の扉」を開放します。扉の先ではマップの矢印のように進み、途中にあるスイッチ（マップの青色箇所）を踏んで進みます。ヒューズのある部屋は閉じていますが、このスイッチを2つ踏むことで開放されます。
          </p>
          <h4 className="mb-2">（2）白の扉を進んでヒューズをセット</h4>
          <ResponsiveImage src="/stories/guide4-volt-freeze.jpg" />
          <p>
            ヒューズを手に入れたら再度数字の仕掛けの部屋へ戻り、「11、2、4」のスイッチを踏み左側の「白の扉」を開放します。奥の電流で進めないフロアでは、炎柱にフリーズリングを打つことで（L1ボタン）電流が解除され奥へ進めます。電流の奥の部屋では窪みにヒューズをセットでき、これで動く床の部屋の仕掛けが動作を始めます。
          </p>
          <h4 className="mb-2">（3）動く床でキャンプ場へ</h4>
          <ResponsiveImage src="/stories/guide4-volt-tile.jpg" />
          <p>
            動く床はいろんな順番で奥までたどり着くことができます。一例として、この画像のように1〜4の順で進めば奥のキャンプ場へたどり着きます。ここで電流にあたるとHPに大きなダメージを受け、3回あたるとHPが1になるので注意です。奥のキャンプ場では必ず休憩しておきましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>キャンプ以降</h3>
          <h4 className="mb-2">（1）電源装置を調べる</h4>
          <ResponsiveImage src="/stories/guide4-volt-power.jpg" />
          <p>
            後半の最後の仕掛けは「電気パズル」ですがいきなり向かうと電気が通っていないためまずは電流を流す必要があります。キャンプ場から上へ進行し、電源装置の部屋で装置を調べてこの画像のイベントを発生させます。このイベントを見なければ装置の起動に必要な「制御玉」を入手できないので注意です。
          </p>
          <h4 className="mb-2">（2）制御玉の入手</h4>
          <ResponsiveImage src="/stories/guide4-volt-switch2.jpg" />
          <p>
            制御玉を入手するには色の付いた石を踏み、床のスイッチを動作させる必要があります。これは扉と反転するもの。最短でクリアするなら画像のように「緑色」のスイッチだけ踏み、下の扉から回っていきます。制御玉は制御装置のイベントを見た状態で光っている箇所を調べると入手できます。
          </p>
          <h4 className="mb-2">（3）電気パズル</h4>
          <p>
            電源装置を起動したあとの電流パズルの部屋は以下の順番通りに1、2、3と踏んでいけば正解に辿り着けます。
            <br />
            <Image
              src="/maps/kaminari_map2.jpg"
              alt=""
              width={350}
              height={203}
            />
          </p>
        </div>
        <div className="mb-8">
          <h3>ヴォルトとの戦闘</h3>
          <p>奥の部屋まで辿り着くとボス「ヴォルト」と戦闘。</p>
          <ResponsiveImage src="/stories/guide4-volt-slot1.jpg" />
          <p>
            勝利後にはヴォルトが暴走し、これを止めるためスロットでヴォルトの喋っている内容を揃える必要があります。これは難しいのですが下記のように順番を把握し、目的の2つ前くらいでボタンを押す（押し目）ように意識してやってください。
          </p>
          <div className="mb-4">
            <Image
              src="/stories/guide4-volt-slot2.jpg"
              alt=""
              width={500}
              height={203}
            />
          </div>
          <p>
            スロットの仕掛けを解くと光の大水霊レムが現れ、リッドの装備品「エクスカリバー」を入手します。最後はダンジョンを脱出し、ティンシアへ戻りましょう。
          </p>
          <div className="boss-advice margin-bottom-small mb-8">
            <h4>BOSS：『ヴォルト』HP：54321(NORML)</h4>
            <p>弱点は水。</p>
          </div>
        </div>
        <LocationItems data={itemsData} locationIds={[28]} />
        <LocationRecipes data={recipesData} locationIds={[28]} />
        <LocationLenses data={lensesData} locationIds={[28]} />
        <LocationSubEvents data={subEventData} locationIds={[28]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">6.ティンシア〜バリル城への突入</SectionTitle>
        <p>
          ティンシアのアジトへ戻るとイベント発生し、フォッグと別れてキールが再び仲間に戻ります。アジトではホテルの宿泊券をもらいます。
        </p>
        <p>
          ホテルへ入ろうとするとメルディがチャットの様子を気にしますが、そのままホテルに入って宿泊しても構いません。（チャットは改造ドッグにいて、会いに行くと会話も見れます。）ホテルの中ではバリル城決戦前夜のイベント。まずリッドたちは「スイートルーム」で宿泊。宿泊途中ではメルディを探しに「屋上」へ。
        </p>
        <p>
          翌朝、バンエルティア号の改造ドックへ行くとバリル城へと向かいます。途中は敵艦隊を駆逐するミニゲームがあります。
        </p>
        <Information type="warning" title="改造ドックの場所">
          （画像）
          バンエルティア号の改造ドックは少しわかりにくい場所にあります。シルエシカのアジトから近くにある船屋の梯子を降りた先が改造ドックです。
        </Information>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.バリル城</SectionTitle>
        <div className="mb-8">
          <h3>バリル城 全体マップと概要</h3>
          <Image src="/maps/burrill_map.jpg" alt="" width={660} height={680} />
          <p>
            複雑に見えるバリル城ですが、基本的に3階の左右対称構成になっていることを覚えておくと位置が分かりやすくなります。またダンジョン内の仕掛けは前半と後半に分かれており、前半は「カード」をセットして音声装置を起動させるもので、後半は3階にある2つの制御室でロックを解除させるものです。必ずこの順番で進める必要があるためご注意ください。
          </p>
        </div>
        <div className="mb-8">
          <h3>前半: カードの入手とセット</h3>
          <div className="pt-2">
            <Image
              src="/stories/guide4-baril-card-chart.jpg"
              width={612}
              height={473}
              alt=""
            />
          </div>
          <p>
            まずは前半の仕掛けのキーアイテムである「カード」を入手します。入口から左側へ進み、3階をグルっと回って2階右側のカードのある部屋へ向かいます。
          </p>
          <Information type="warning" title="左側のコンソールはスルー推奨">
            1階の左側の部屋ではガラスケースの中にゾンビシンボルが入っています。この部屋にはコンソールがあり、調べると左の階をワープできるようになるのですがゾンビシンボルが動き出してしまいます。左のワープには特にメリットがないためコンソールの起動はスルー推奨です。
          </Information>
          <ResponsiveImage src="/stories/guide4-baril-card.jpg" />
          <p>
            カードのある部屋の水色の宝石はフリーズリングを放つ仕掛けで、この仕掛けを解除することで「カード」を入手できます。
          </p>
          <p>
            カード入手後は1階の右の部屋を目指します。途中で登場する敵のシンボルは触れると「スパイラル」と戦闘。特に強くない敵ですが倒すと貴重なフェアリィリングをドロップします。
          </p>
          <div className="mb-8">
            <Information type="warning" title="フェイクに注意">
              宝箱にはフェイクが入っていることがあります。バリル城のフェイクは倒すと「エリクシール」を入手できますが、強敵なので逃げるもの選択肢です。
            </Information>
            <Information title="スパイラルのアイテムドロップ">
              スパイラルは倒すと「フェアリィリング」をドロップします。フェアリィリングは装備者の消費TPを1/2にするエターニアで屈指の協力アクセサリ！入手したらすぐ装備しましょう。
            </Information>
          </div>
          <ResponsiveImage src="/stories/guide4-baril-card-set.jpg" />
          <p>
            上の画像にあるように1階の右の部屋では右奥の端末にカードをセットすることで後半の仕掛けを解けるようになります。
            この後、3階にある2つの制御室でロック解除していきます。3階に戻るにはこの部屋にあるワープ装置を使ってマップの「A」間を移動します。
          </p>
          <Information type="warning" title="右側のワープ移動は必須">
            カードセットの部屋から3階に戻るにはワープを使う必要があります。2階のカードを入手した部屋は出口側からは戻れない一方通行となっていますので注意です（出口側からはフリーズリングで通行を邪魔する機械を移動できない）
          </Information>
        </div>
        <div className="mb-8">
          <h3>後半: ボスのいる扉のロック解除</h3>
          <ResponsiveImage src="/stories/guide4-baril-sorcerer.jpg" />
          <p>
            3階の左右の部屋には「ソーサラーリング」を使う仕掛けがあります。赤い宝石にソーサラーリングを打つと下側の隠し通路が開きます。隠し通路を進むと制御室があり、カードをセットしていると解除されます。左右に同じ仕掛けがあるので解除しましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>ボス戦</h3>
          <p>
            左右の制御室で暗号を入力すると「！」の扉が開き、奥ではボス「シゼル」との戦闘となります。シゼルは強力でHPも高いのですが、完全に倒すのではなくある程度HPを削っていくとイベントが発生して戦闘が終了します。
          </p>
          <p>バリル城のクリア後はガレノスを尋ね、ルイシカへ向かいます。</p>
        </div>

        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『シゼル』HP：120000(NORML)</h4>
          <p>
            パーティのHPを1にするエターナルファイナリティを使用してくる。アイテムは惜しみなく使っておこう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[29]} />
        <LocationRecipes data={recipesData} locationIds={[29]} />
        <LocationLenses data={lensesData} locationIds={[29]} />
        <LocationSubEvents data={subEventData} locationIds={[29]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">バリル城後の進行</SectionTitle>
        <div className="mb-8">
          <h3>ガレノスのシルエシカ合流</h3>
          <p>
            まずはルイシカへ行き、町に入ると自動的にガレノスとのイベントが進行。その後、再びティンシアへ戻ります。
          </p>
          <p>
            ティンシアの町に入ると自動的にアジトへ移動してイベント。これ以降、アジトのフォッグに話かけることでフォッグを仲間にすることができます。（仲間から外したい場合はこの部屋で可能）
          </p>
          <Information title="フォッグの加入状態によるサブイベント変化">
            <p>
              フォッグが仲間にいるとフォッグの特技習得イベントが発生し、仲間にいないと画家リシテアのイベントが発生します。両方ともフォッグの最強技「エレメンタルマスター」やアクセサリ「キャンセラー」に関わるものです。フォッグは最終的には仲間にするべきですが、一時的には仲間から外す必要があることは覚えておいてください。
            </p>
            <GuideList
              items={[
                { title: "フォッグの特技習得", href: "/subevents/skill-fog" },
                { title: "画家リシテア", href: "/subevents/lysithea" },
              ]}
            ></GuideList>
          </Information>
        </div>
        <div className="mb-8">
          <h3>セイファートの試練へ向けて出発</h3>
          <p>
            ティンシアを出航するとフィールドマップでイベントが発生。セイファートキーが示す試練の地へ向かいます。次の目的地はペイルティの南にある「セイファート神殿」です。バンエルティア号を使って向かいましょう。
          </p>
        </div>
      </section>
    </article>
  );
}
