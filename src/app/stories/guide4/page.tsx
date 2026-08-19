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
import { storyLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "guide4";
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
          大晶霊セルシウスとの出会いから、物語が急展開を迎えるバリル城までの道のりを完全攻略！難所となる「雷晶霊の遺跡」や「バリル城」は詳細なマップ付きでスムーズな突破をサポートします。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.港町ペイルティ</SectionTitle>
        <Information type="warning" title="ペイルティでの準備は必須">
          次の目的地である「氷晶霊の山」へ進むには、ペイルティできちんと防寒具を購入しておく必要があります。また、道具屋で販売されている「フリーズチェック」をあらかじめ1つ（可能ならリッド・ファラ用に2つ）購入しておくのが強くおすすめ。20000ガルドと高価ですが、戦闘中の凍結を完全に防いでくれるため非常に重宝します。
        </Information>
        <div className="mb-8">
          <h3>防寒具の選び方</h3>
          <p>
            まずは宿屋（赤い屋根とピンクの煙が目印の建物）の中にいるピンク髪の男性に話しかけてイベントを進めます。
            その後、服屋へ向かうと店頭で先ほどの男性と再会し、各自の防寒具を選ぶ流れになります。
          </p>
          <p>
            リッドがメンバーに似合う服を選び、以下の組み合わせに到達すればイベントがクリアとなります。
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
            装備や消耗品の買い出しが完了したらフィールドへ出て、氷晶霊の山へ向かいましょう。
          </p>
          <Information
            type="warning"
            title="町にあるワンダーシェフやレシピについて"
          >
            凍結状態のペイルティでは入手できるレシピが制限されています。氷晶霊の山をクリアして町が元通りになってから再訪すればすべて回収できるようになり、どうせ必ず戻ってくることになるため、攻略後のタイミングでまとめて探索するのが効率的です。
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
            alt="氷晶霊の山マップ"
            width={482}
            height={600}
          />
          <p>
            後述する「氷の柱」を除けば複雑なギミックは少なめですが、一部の立体交差では手前ではなく「下の交差している通路」をくぐって進む必要があります。道を塞ぐ氷の塊はソーサラーリングで撃つと溶かして通行可能になります（中からモンスターが飛び出してくることもあるので注意）。
          </p>
          <Information type="warning" title="ダンジョン内のレンズ回収">
            <ResponsiveImage src="/stories/guide4-iced-mountain-lens.jpg" />
            ダンジョン内にある1枚のレンズを取り逃がさないよう注意。特定の地点（画像の位置）まで歩くと雪が崩れて下のフロアへ落下します。
          </Information>
        </div>
        <div className="mb-8">
          <h3>「氷の柱」の仕掛けとボス討伐</h3>
          <p>
            奥へ進み、木箱から「トトのアブラ」を回収します。これは赤い氷の柱を溶かすために必須のアイテム。柱を突破して最深部へ進むとボス「セルシウス」との戦闘になり、勝利すると「フリーズリング」が手に入ります。これでペイルティへ引き返します。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『セルシウス』HP：33333（NORMAL）</h4>
          <p>火属性が弱点です。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[25]} />
        <LocationRecipes data={recipesData} locationIds={[25]} />
        <LocationLenses data={lensesData} locationIds={[25]} />
        <LocationSubEvents data={subEventData} locationIds={[25]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.ペイルティ〜アイメン（崩壊）</SectionTitle>
        <div className="mb-8">
          <h3>ペイルティの復興</h3>
          <p>
            セルシウスとの契約後にペイルティへ帰還すると氷が解け、宿屋での宿泊イベントが発生します。ここで貴重品「セレスティマップ」を入手し、以後はアイメンへ向かうことに。これ以降はフィールドマップでバンエルティア号を自由に操縦できるようになります。道に迷ったら手に入れたマップを活用しましょう。
          </p>
          <p>
            元の姿に戻ったペイルティでは、新しいワンダーシェフの料理、レンズ回収、サブイベントなどが一新して発生するため、出発前に忘れず回収しておきましょう。
          </p>
          <LocationItems data={itemsData} locationIds={[60]} />
          <LocationRecipes data={recipesData} locationIds={[60]} />
          <LocationLenses data={lensesData} locationIds={[60]} />
          <LocationSubEvents data={subEventData} locationIds={[60]} />
        </div>
        <div className="mb-8">
          <h3>アイメン（崩壊後）</h3>
          <p>
            アイメンに入るとイベントが発生。荒れ果てた街を散策しつつ、目的地の図書館へ向かいます。図書館の奥でボス「ヒアデス」と激突。撃破後はフィールドに出て、新たな目的地であるティンシアを目指します。
          </p>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ヒアデス』HP：45000（NORMAL）</h4>
          <p>光属性が弱点です。</p>
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
            ティンシアでの主な目的は、反乱軍「シルエシカ」のリーダーと接触すること。アジトは街の右奥エリアにある船の中にあります。
          </p>
          <p>
            アジトでのイベントを経て、一時的にキールがパーティから離脱し、代わりにシルエシカの首領「フォッグ」が仲間として加入します。その後、フィールドへ出て「雷晶霊の遺跡」へ向かいましょう。
          </p>
          <Information title="ティンシアの探索情報">
            ティンシアではレンズや、TPを60%回復してくれる優秀な料理「スイートパフェ」のレシピが手に入ります。道具屋にはイレーヌがいるため、これまでの収集数に応じたレンズ報酬も受け取り可能。この時点で30枚に達していれば、土・雷・氷属性ダメージを40%カットする「セレスティマント」がもらえます。
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
          <Image
            src="/maps/kaminari_map.jpg"
            alt="雷晶霊の遺跡マップ"
            width={650}
            height={666}
          />
          <p>
            大晶霊「ヴォルト」の待つ最深部まで、多くの仕掛けを解きながら進む根気のいるダンジョンです。入口付近の電流床は触れるとダメージを受けるので回避しながら進みましょう。先ほど手に入れたフリーズリングを活用する場面も登場します。長丁場になるため、ティンシアやペイルティで回復アイテムやTP回復用の食材をしっかり準備しておくのが無難です。
          </p>
        </div>
        <div className="mb-8">
          <h3>数字スイッチの部屋</h3>
          <p>
            マップ内の「！」マークの部屋では、3つのスイッチを踏んで指定された数値を合計値として合わせることで扉が開きます。
          </p>
          <Information type="warning" title="赤い扉は攻略必須ではありません">
            赤い扉はクリアに必須のルートではありません。白い扉からでも動く床の部屋へアクセスでき、奥のキャンプ地へたどり着けます。赤い扉はあくまでアイテムの回収漏れなどで再訪した際のショートカット用です。
          </Information>
        </div>
        <div className="mb-8">
          <h3>ヒューズの回収と動く床の仕組み</h3>
          <h4 className="mb-2">（1）青の扉からヒューズを手に入れる</h4>
          <div className="mb-4">
            <Image
              src="/stories/guide4-volt-fuse.jpg"
              width={300}
              height={118}
              alt="ヒューズ回収"
            />
          </div>
          <p>
            攻略に不可欠な「ヒューズ」を入手するため、まずはスイッチを「6・5・3」に調整して右側の「青の扉」を開きます。マップの矢印に沿って進み、途中のスイッチ（青色の箇所）を踏んで扉のロックを解除してヒューズを回収しましょう。
          </p>
          <h4 className="mb-2">（2）白の扉を進んでヒューズをセット</h4>
          <ResponsiveImage src="/stories/guide4-volt-freeze.jpg" />
          <p>
            ヒューズ確保後は数字の部屋へ戻り、スイッチを「11・2・4」に合わせて左側の「白の扉」を開放します。電流で進めない通路は、手前の炎柱にフリーズリングを撃ち込む（L1ボタン）ことで電流が止まり、奥へ進めるようになります。奥にある窪みにヒューズをセットすれば、動く床のギミックが稼働し始めます。
          </p>
          <h4 className="mb-2">（3）動く床を渡ってキャンプ地へ</h4>
          <ResponsiveImage src="/stories/guide4-volt-tile.jpg" />
          <p>
            動く床はいくつかの手順で奥へ進むことができます。一例として、上記画像の「1〜4」の順番で移動すれば安全にキャンプ地へ到着可能です。移動中に電流に触れると大ダメージを受け、3回被弾するとHPが1になってしまうので気をつけましょう。到着したキャンプ地では必ず休んで体制を整えておくこと。
          </p>
        </div>
        <div className="mb-8">
          <h3>キャンプ地以降の後半戦</h3>
          <h4 className="mb-2">（1）電源装置の調査</h4>
          <ResponsiveImage src="/stories/guide4-volt-power.jpg" />
          <p>
            後半の目玉である「電気パズル」に挑む前に、まずは電力を通す必要があります。キャンプ場から上方へ進み、電源装置を調べてイベントを発生させましょう。この手順を踏まないと、装置起動に必要な「制御玉」が入手できなくなります。
          </p>
          <h4 className="mb-2">（2）制御玉の確保</h4>
          <ResponsiveImage src="/stories/guide4-volt-switch2.jpg" />
          <p>
            色付きの石を踏んで床のスイッチを操作します。最短で進むなら「緑色」のスイッチだけを作動させ、下側の扉からルートを回りましょう。電源装置のイベントを見た後であれば、光っている場所を調べて制御玉が手に入ります。
          </p>
          <h4 className="mb-2">（3）電気パズル</h4>
          <p>
            電源起動後の電気パズルエリアは、以下のマップ指定通りに「1、2、3」の順で床を踏んでいけばクリアできます。
            <br />
            <Image
              src="/maps/kaminari_map2.jpg"
              alt="電気パズル"
              width={350}
              height={203}
            />
          </p>
        </div>
        <div className="mb-8">
          <h3>ヴォルトとの戦闘と暴走阻止</h3>
          <p>最深部で待ち受けるボス「ヴォルト」との決戦へ。</p>
          <ResponsiveImage src="/stories/guide4-volt-slot1.jpg" />
          <p>
            撃破後、ヴォルトが暴走を始めます。これを鎮めるためにスロットを回してヴォルトのセリフを正確に揃える必要があります。タイミングがシビアですが、下記の画像を参考に、目的のアイコンの2つ手前くらいを目安にボタンを押す感覚（早めの入力）で調整してみてください。
          </p>
          <div className="mb-4">
            <Image
              src="/stories/guide4-volt-slot2.jpg"
              alt="スロット"
              width={500}
              height={203}
            />
          </div>
          <p>
            スロットを無事クリアすると光の大水霊レムが現れ、リッドの装備品「エクスカリバー」が手に入ります。ダンジョンを脱出してティンシアへ戻りましょう。
          </p>
          <div className="boss-advice margin-bottom-small mb-8">
            <h4>BOSS：『ヴォルト』HP：54321（NORMAL）</h4>
            <p>水属性が弱点です。</p>
          </div>
        </div>
        <LocationItems data={itemsData} locationIds={[28]} />
        <LocationRecipes data={recipesData} locationIds={[28]} />
        <LocationLenses data={lensesData} locationIds={[28]} />
        <LocationSubEvents data={subEventData} locationIds={[28]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          6.ティンシア〜バリル城突入の準備
        </SectionTitle>
        <p>
          シルエシカのアジトに戻るとイベントが発生し、フォッグが離脱してキールが正式にパーティへ復帰します。アジトではホテルの宿泊券を貰えます。
        </p>
        <p>
          ホテルに入るとメルディの様子が気になるイベントがあり、そのまま宿泊するか屋上へ向かって様子を見に行きましょう。翌朝、バンエルティア号の改造ドックへ行くとバリル城へ突入するイベントが始まります。道中には敵艦隊を迎撃するミニゲームが発生します。
        </p>
        <Information type="warning" title="改造ドックの場所について">
          （参考）
          バンエルティア号の改造ドックは少し見つけにくい位置にあります。シルエシカのアジトに近い船宿のハシゴを降りた先がドックになっています。
        </Information>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.バリル城</SectionTitle>
        <div className="mb-8">
          <h3>バリル城の全体マップと構造</h3>
          <Image
            src="/maps/burrill_map.jpg"
            alt="バリル城マップ"
            width={660}
            height={680}
          />
          <p>
            入り組んで見えますが、基本的には3階層の左右対称構造になっている点を把握しておくと現在地が分かりやすくなります。ギミックは前半と後半に分かれており、前半は「カード」を使って音声装置を稼働させること、後半は3階の左右にある制御室でロックを解除することが条件。必ずこの順番で進める必要があります。
          </p>
        </div>
        <div className="mb-8">
          <h3>前半：カードの回収と装置へのセット</h3>
          <div className="pt-2">
            <Image
              src="/stories/guide4-baril-card-chart.jpg"
              width={612}
              height={473}
              alt="カードチャート"
            />
          </div>
          <p>
            まずは攻略の鍵となる「カード」を探します。入口から左側へ進み、3階を経由して2階右側のカード保管室を目指しましょう。
          </p>
          <Information
            type="warning"
            title="左側のコンソール起動は原則スルー推奨"
          >
            1階左側の部屋にはガラスケースに囲まれたゾンビシンボルがいます。ここにあるコンソールを調べると左エリアのワープが機能しますが、同時にゾンビシンボルが動き出してしまいます。特にメリットはないためスルー推奨です。
          </Information>
          <ResponsiveImage src="/stories/guide4-baril-card.jpg" />
          <p>
            カードのある部屋では、水色の宝石に対してフリーズリングを放つことで仕掛けが解除され「カード」が手に入ります。
          </p>
          <p>
            カードを入手したら1階の右側エリアへ向かいます。道中に現れる「スパイラル」は、倒すと優秀なアクセサリー「フェアリィリング」をドロップします。
          </p>
          <div className="mb-8">
            <Information type="warning" title="宝箱のフェイクに要注意">
              一部の宝箱にはモンスター「フェイク」が潜んでいます。強力な敵ですが倒すと「エリクシール」が手に入るため、戦力が厳しい場合は逃走するのも一つの手です。
            </Information>
            <Information title="スパイラルのドロップ情報">
              スパイラルが落とす「フェアリィリング」は、装備者の消費TPを半分にするシリーズ屈指の超便利アクセサリ。手に入れたら即座にメインキャラへ装備させましょう。
            </Information>
          </div>
          <ResponsiveImage src="/stories/guide4-baril-card-set.jpg" />
          <p>
            1階右側の部屋の奥にある端末にカードをセットすると、後半の制御室の仕掛けが作動可能になります。
            その後、3階へ戻るには部屋内にあるワープ装置（マップの「A」間）を利用します。
          </p>
          <Information type="warning" title="ワープでの移動は一方通行">
            2階のカード部屋は出口側からは逆走できません（フリーズリングで機械を動かせないため）。3階へ戻る際は必ずカードセット部屋のワープ装置を使いましょう。
          </Information>
        </div>
        <div className="mb-8">
          <h3>後半：ボス部屋へのロック解除</h3>
          <ResponsiveImage src="/stories/guide4-baril-sorcerer.jpg" />
          <p>
            3階の左右にある部屋ではソーサラーリングを使用する仕掛けがあります。赤い宝石に向けてリングを撃つと下部の隠し通路が出現。その先にある制御室を調べれば、カードがセットされている状態であればロックが解除されます。左右両方の部屋でロックを解除しましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>ボス戦の展開</h3>
          <p>
            左右の制御室の暗号を解くと「！」の扉が開き、奥でボス「シゼル」との戦闘に突入します。強敵かつHPも高いですが、一定量HPを削りきるとイベントが挿入されて戦闘が自動終了します。
          </p>
          <p>バリル城クリア後はガレノスのもとを訪ね、ルイシカへ向かいます。</p>
        </div>

        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『シゼル』HP：120000（NORMAL）</h4>
          <p>
            全体攻撃「エターナルファイナリティ」でパーティ全員のHPを1にしてくるため、ピンチに備えて回復アイテムはケチらず使いましょう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[29]} />
        <LocationRecipes data={recipesData} locationIds={[29]} />
        <LocationLenses data={lensesData} locationIds={[29]} />
        <LocationSubEvents data={subEventData} locationIds={[29]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">バリル城クリア後の流れ</SectionTitle>
        <div className="mb-8">
          <h3>ガレノスとシルエシカの合流</h3>
          <p>
            まずはルイシカへ向かい、街に入るとガレノスに関するイベントが自動進行。その後、再びティンシアへ戻ります。
          </p>
          <p>
            ティンシアに到着すると自動でアジトへ移動し、以降はアジトにいるフォッグに話しかけることでいつでも自由にパーティへ加入・離脱させられるようになります。
          </p>
          <Information title="フォッグの加入状態によるサブイベントの分岐">
            <p>
              フォッグがパーティにいる状態と外している状態によって、専用のサブイベントが発生します（フォッグの最強特技「エレメンタルマスター」やアクセサリ「キャンセラー」に関連）。最終的にはフォッグを仲間にして進める必要がありますが、状況に応じてメンバーを入れ替える仕組みを覚えておきましょう。
            </p>
            <GuideList
              items={[
                {
                  title: "フォッグの特技習得イベント",
                  href: "/subevents/skill-fog",
                },
                {
                  title: "画家リシテアのイベント",
                  href: "/subevents/lysithea",
                },
              ]}
            ></GuideList>
          </Information>
        </div>
        <div className="mb-8">
          <h3>セイファートの試練へ向けて出航</h3>
          <p>
            ティンシアを出港するとフィールドマップでイベントが起き、セイファートキーが示す新たな目的地が判明します。次の舞台はペイルティの南にある「セイファート神殿」。バンエルティア号で向かいましょう。
          </p>
        </div>
      </section>
    </article>
  );
}
