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
            凍結状態のペイルティでは一部の料理しか手に入らず、氷晶霊の山をクリアして凍結解除されるとすべて入手できるようになります。凍結解除後のペイルティには必ず戻ってくるため、このタイミングですべて回収するのがおすすめです。
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
        <SectionTitle type="flag">3.アイメン(崩壊)</SectionTitle>
        <ol>
          <li>アイメンに入るとイベント。</li>
          <li>
            図書館に行くとボス「ヒアデス」との戦闘。
            <br />
            勝利後はバンエルティア号でティンシアへ向かおう。
          </li>
        </ol>

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
        <ol>
          <li>バンエルティア号に乗って雷晶霊の遺跡へ向かおう。</li>
        </ol>
        <LocationItems data={itemsData} locationIds={[27]} />
        <LocationRecipes data={recipesData} locationIds={[27]} />
        <LocationLenses data={lensesData} locationIds={[27]} />
        <LocationSubEvents data={subEventData} locationIds={[27]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.雷晶霊の遺跡</SectionTitle>
        <ol>
          <li>
            <h4>雷晶霊の遺跡 全体マップ</h4>
            <Image
              src="/maps/kaminari_map.jpg"
              alt=""
              width={650}
              height={666}
            />
          </li>
          <li>
            ボスのヴォルトのところまで辿り着くのに中々根気のいるダンジョン。ビリビリと電流が流れている箇所は触れるとHPにダメージを受けるので気をつけましょう。途中の障害物である水晶はフリーズリングを放てば破壊可能です。
          </li>
          <li>
            マップの「！」のところは石盤に書かれていた「3つの星つかまば彩られしひとすじの光とならん」という箇所。これは3つのスイッチを踏んで特定の数に揃えれば扉が開くという仕掛け。
          </li>
          <li>
            ダンジョンを攻略するためにまずは「ヒューズ」が必要となるので、仕掛けの部屋では「青の扉」へと進みヒューズを入手しましょう。途中にあるスイッチ(マップで青色で表示)は踏んでおかないとソケットのある部屋がロックされていて入れない。
          </li>
          <li>
            ヒューズを手に入れたら「白の扉」へと進み、ヒューズを窪みにセットしましょう。これで動く床の部屋の仕掛けが動作を始めます。
          </li>
          <li>
            仕掛けが動作している状態で「赤の扉」に入ると奥へ進めるようになる。この部屋では敵とのエンカウントは無いがHPが1になっていることがあるので注意。
          </li>
          <li>
            キャンプより先は「電気パズル」を進むとヴォルトがいるが、最初では電源装置が起動していないため動作しない。そのため電源装置を調べ、必要な「制御玉」を入手する必要がある。
          </li>
          <li>
            制御玉を入手するには色の付いた石を踏み、床のスイッチを動作させる必要がある。これは扉と反転するものであるのでうまく考えながら切り替えよう。
          </li>
          <li>
            電源装置を起動したあとの電流パズルの部屋は以下の順番通りに1、2、3と踏んでいけば正解に辿り着けます。
            <br />
            <Image
              src="/maps/kaminari_map2.jpg"
              alt=""
              width={350}
              height={203}
            />
          </li>
          <li>
            奥の部屋まで辿り着くとボス「ヴォルト」と戦闘。勝利後にはヴォルトが暴走し、これを止めるにはスロットで「STOP!!」と揃えてやればいい。その後は光の大水霊レムが現れ、リッドの装備品「エクスカリバー」を入手する。ティンシアへ戻ろう。
          </li>
        </ol>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ヴォルト』HP：54321(NORML)</h4>
          <p>弱点は水。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[28]} />
        <LocationRecipes data={recipesData} locationIds={[28]} />
        <LocationLenses data={lensesData} locationIds={[28]} />
        <LocationSubEvents data={subEventData} locationIds={[28]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">6.ティンシア〜バリル城への突入</SectionTitle>
        <ol>
          <li>
            船具屋のはしごを降り、ドッグへ行くとイベントが発生してキールが仲間に戻る。ホテルの宿泊券をもらったら、ホテルへ行きイベントを見よう。
          </li>
          <li>
            宿泊後にドッグへ行くとバリル城へ出発できる。バリル城へ行く途中はミニゲームのイベントがある。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[0]} />
        <LocationRecipes data={recipesData} locationIds={[0]} />
        <LocationLenses data={lensesData} locationIds={[0]} />
        <LocationSubEvents data={subEventData} locationIds={[0]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.バリル城</SectionTitle>
        <ol>
          <li>
            <h4>バリル城 全体マップ</h4>
            <Image
              src="/maps/burrill_map.jpg"
              alt=""
              width={660}
              height={680}
            />
          </li>
          <li>
            マップが複雑なバリル城だが、基本的に3階構成になっていることを覚えておくと位置が分かりやすくなる。
          </li>
          <li>
            クリアのためにはまずは「カード」を入手しよう。カードを入手するためには入口から左へと進み、3階を経由して行く必要がある。マップの水色の箇所はフリーズリングを放つことで動作する仕掛けを表しています。
          </li>
          <li>
            入手したカードは1階の演説台のあるところにてセットすると暗号が表示される。この暗号は左右にある制御室にて入力するものだ。（イベントを発生させれば記憶しなくてもよい）
            <br />
            カードを入手した部屋は一方通行であるため、この部屋にあるワープ装置を使って3階まで戻りましょう。マップで言うと「A」間を移動する。
          </li>
          <li>
            暗号のイベントを発生させたあとは左右の制御室に向かって入力させよう。それぞれの制御室は隠し部屋となっており、マップの赤い箇所をソーサラーリングで打てば扉が開くような仕掛けになっている。
          </li>
          <li>
            左右の制御室で暗号を入力すると「！」の扉が開くようになる。この奥ではボス「シゼル」との戦闘となる。ある程度HPを削っていくとイベントが発生。
          </li>
          <li>
            バリル城をクリア後は極光術についてガレノスに聞くためにルイシカに向かおう。
          </li>
        </ol>
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
        <ol>
          <li>
            ルイシカでガレノスに会いにいき極光術の話を聞く。その後はティンシアへ向かおう。
          </li>
          <li>
            ティンシアの町に入るとイベント。これ以降、アジトのフォッグに話かけることでフォッグを仲間にすることができる。また仲間から外したい場合はこの部屋に来るといい。
          </li>
          <li>
            出航してバンエルティア号がフィールドに出るとイベントが発生。以降はセイファートキーが指し示す場所へ向かうこととなる。次はペイルティの南にあるセイファート神殿へ向かう。
          </li>
        </ol>
      </section>
    </article>
  );
}
