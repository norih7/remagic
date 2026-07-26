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
import ResponsiveImage from "@/components/ResponsiveImage";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "いざないの密林〜霊峰ファロース";
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
          インフェリアからセレスティアの世界へ向かう「霊峰ファロース」までを解説。謎解きが複雑な「いざないの密林」はダンジョンマップ付きで解説！他のダンジョン内にもレンズがあるので取り逃がしがないように確認してください。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.いざないの密林</SectionTitle>
        <div className="mb-4">
          <p>
            序盤の難関ダンジョンの一つ。
            <br />
            仕掛けが多く、長期滞在のダンジョンになるためアイテムや食材は多めに用意して挑みましょう。
            <br />
            ダンジョンの難易度は高いですが「ルーンボトル」と「リバースドール」を入手して、セフィラを入手しておきましょう。
          </p>
          <p>
            このダンジョンは前半と後半に別れており、前半は石像が5体置いてあるフロアにある「逆しまのもの向きあわば真の道開かれん」というキーワードに基づいて謎解きを行う。
          </p>
        </div>
        <div className="mb-4">
          <h3>前半: 石像の仕掛け</h3>
          <ResponsiveImage src="/stories/guide2-jungle-1.jpg" />
          <p>
            前半はキャンプイベントを目指します。最初は川のエリアまでの道が隠されていている状態ですが、石像の位置を正しく変えると通路が開放されます。まずは石像が5体いる部屋を目指し、画像にあるヒントを得ましょう。前半マップと各種石像の場所は下記を参照ください。
          </p>
          <div className="mb-4">
            <Image src="/maps/izanai_01.jpg" alt="" width={480} height={420} />
          </div>
          <ResponsiveImage src="/stories/guide2-jungle-2.jpg" />
          <p>
            川を通るためには「破壊」「混沌」「秩序」「創造」それぞれのの石像を調べ、「破壊と創造」「秩序と混沌」というように反対の意味になるように石像を向かい合わせます。マップを参照に「→」「←」の位置に合わせればOKです。謎解きに成功すると「ドンッ」と音がなり、川を渡ってキャンプイベントの場所まで移動できるようになります。
          </p>
          <Information title="隠し宝箱">
            <ResponsiveImage src="/stories/guide2-jungle-3.jpg" />
            <p>
              それぞれの石像の向きをすべて「↓」へして5体の石像がある部屋に行くと隠し宝箱が出現します。（この仕掛けは特にドンと音はしない）「シャムシール」など強力な武器が入手でき、これらの武器はのちにバロールで入手可能ですがこの時点で入手しておくとダンジョンの攻略が楽になります。
            </p>
          </Information>
          <Information type="warning" title="隠し宝箱の注意点">
            <p>
              隠し宝箱の入手タイミングには注意が必要です。もし一度石像を逆さまにして川を通れるようになっていた場合、この宝箱のために石像の向き変えると川が再び通行止めになっています。川を通れる状態はずっと続くのではなく、あくまで石像の位置が正しい間だけです。もし逆さまの謎解きをしたあとに隠し宝箱を入手した場合はもう一度逆さまの謎解きをしなければいけないという点にご注意ください。
            </p>
          </Information>
        </div>
        <div className="mb-4">
          <h3>後半: 5体のジャングラー討伐</h3>
          <p>
            キャンプイベントから先は後半ダンジョンになります。
            後半はダンジョンに存在する5体のモンスターを倒すことで出口が開放される仕掛けとなっています。ダンジョン内の探索は必要ですが前半に比べて簡単です。
          </p>
          <ResponsiveImage src="/stories/guide2-jungle-4.jpg" />
          <p>
            モンスターはランダム出現ではなく、マップ上に敵シンボルとして存在しています。敵に接触すると「ジャングラー」と戦闘となり、5体すべて倒すと出口が開け、ダンジョンを出ることができます。
            フィールドに出たら王都インフェリアに向かいましょう。
          </p>
          <Information type="warning" title="ルーンボトルの入手">
            後半マップには「ルーンボトル」が入った宝箱があるので必ず入手しておきましょう。ルーンボトルは貴重なアイテムでこのダンジョンで入手できる「リバースドール」に使うことで「セフィラ」に変化します。セフィラは装備していると獲得ガルドが2倍になるアクセサリで非常におすすめです。
          </Information>
        </div>
        <div className="mb-4">
          <GuideList
            items={[
              {
                title: "ルーンボトルやセフィラについての解説",
                href: "/systems/rune",
              },
            ]}
          ></GuideList>
        </div>

        <LocationItems data={itemsData} locationIds={[10]} />
        <LocationRecipes data={recipesData} locationIds={[10]} />
        <LocationLenses data={lensesData} locationIds={[10]} />
        <LocationSubEvents data={subEventData} locationIds={[10]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2.王都インフェリア</SectionTitle>
        <ol>
          <li>
            この時点で町のホテルに泊まると「キールがナンパされるイベント」「ドジッ娘メイド」のイベントを見ることができます。
          </li>
          <li>
            町の奥にあるインフェリア城へ行くとイベント。その後も天文台、教会、インフェリア城とイベントが進行します。
            一連のイベントでリッド達が死刑から解放されたらインフェリア城の内部に入り込むことになります。
          </li>
          <li>
            インフェリア城2Fの部屋(一般人がうろうろして...とボヤく老人がいる隣の部屋)に入るとイベント。一泊した後は、1F外の広間を通り大広間に入ります。
          </li>
          <li>
            セレスティアへの戦争宣言をするイベント後、「じょうせんパス」を入手します。これは船で他の大陸へ行くために必要なもの。
          </li>
          <li>
            その後、風の大晶霊の手がかりを得るためにバロールへ向かうことに。バロールは港を経由するため次はインフェリア港へと向かいます。
          </li>
        </ol>
        <Information title="インフェリア城にあるルーンボトルの入手">
          <ResponsiveImage src="/stories/guide2-inferior-1.jpg" />
          <p>
            インフェリア城を探索中、噴水広場ではルーンボトルが手に入ります。これは隠しアイテムとなっており、噴水付近で○ボタン連打していると見つかります。ルーンボトルは貴重アイテムなので是非取っておきましょう。
          </p>
        </Information>
        <Information title="クリームシチュー">
          ホテルの2階で習得できる料理「クリームシチュー」はHP60%回復し、状態異常も全回復する優れた効果があります。戦闘不能も回復します。いつでも入手可能ですが是非このタイミングで入手しておきましょう。
        </Information>
        <LocationItems data={itemsData} locationIds={[11]} />
        <LocationRecipes data={recipesData} locationIds={[11]} />
        <LocationLenses data={lensesData} locationIds={[11]} />
        <LocationSubEvents data={subEventData} locationIds={[11]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.インフェリア港</SectionTitle>
        <Information type="warning" title="注意事項">
          インフェリア港で出航しようとするとキールとしばらくパーティから離脱します。致命的な取り逃し要素はありませんがキャンプのチャットをコンプリートしたい人はご注意ください。
        </Information>
        <ol>
          <li>
            船に乗り込もうとするとキールと別れることになります。キールと別れる際には装備品はすべて回収されます。
            <br />
            キールと別れる前に船具屋にある船の模型を調べるとリッドとキールの思いで話のイベントが見ることができます。
          </li>
          <li>船に乗り込むとバロール港へ到着します。</li>
        </ol>
        <LocationItems data={itemsData} locationIds={[12]} />
        <LocationRecipes data={recipesData} locationIds={[12]} />
        <LocationLenses data={lensesData} locationIds={[12]} />
        <LocationSubEvents data={subEventData} locationIds={[12]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.バロール港〜商業の町バロール</SectionTitle>
        <div className="mb-8">
          <h3>バロール港</h3>
          <ol>
            <li>
              船から下りるとバロール港です。バロール港ではイカリングのレシピやレンズがあるので回収を推奨します。目的地のバロールの町はフィールドへ出てすぐです。
            </li>
            <li>
              <Information title="バロール港にある宝箱">
                <ResponsiveImage src="/stories/guide2-balor-1.jpg" />
                <p>
                  バロール港では宝箱があり「カイトシールド」と「アーメットヘルム」が入っていますが立ち去ろうとすると支払いを求められ、断ると入手できません。カイトシールドは4000ガルド、アーメットヘルムは1440ガルドで意外にも定価。2つともショップ購入可能アイテムですがこの時点で買っても損はしません。余裕があれば買っておきましょう。
                </p>
                <p>
                  アーメットヘルム: バロールの町で1440ガルドでショップ購入可能
                  <br />
                  カイトシールド: シャンバールで4000ガルドでショップ購入可能
                </p>
              </Information>
            </li>
            <li>
              <Information type="warning" title="定期船とカトリーヌイベント">
                一度バロール港へ到着し、船員に話しかけると再度インフェリアへ戻ることができます。インフェリアとバロールの海路は定期船と呼ばれており、有料で利用できます。この定期戦の中ではバロールへ到着するまでカトリーヌイベントが発生します。カトリーヌイベントをこなす場合は、バロール港へ到着するとすぐにインフェリア港へ戻るという一見無駄に思える行動があるのでご注意ください。
              </Information>
            </li>
          </ol>
        </div>
        <h3>バロールの町</h3>
        <ol>
          <li>
            バロールの町では、町の南側で行くとイベントが発生してファラが「むてっぽう」の称号得る。
            <br />
            酒場でのレイスと食事後、町の奥にある宿屋の前にいるレイスに話かけると仲間になる。
          </li>
          <li>
            町にある「泥棒少年」のサブイベントはルーンボトルが入手できるのでチェックしておこう。
          </li>
          <li>風の大晶霊に会いに行くために南西にある風晶霊の空洞へ向かう。</li>
        </ol>
        <LocationItems data={itemsData} locationIds={[13, 14]} />
        <LocationRecipes data={recipesData} locationIds={[13, 14]} />
        <LocationLenses data={lensesData} locationIds={[13, 14]} />
        <LocationSubEvents data={subEventData} locationIds={[13, 14]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.風晶霊の空洞</SectionTitle>
        <ol>
          <li>
            ダンジョンには謎解きは特にないが、吹き上げてくる風に乗って進むことが必要な場所が多くある。
            <br />
            タイミングに会わせて風に乗る必要があるので慌てないで操作しよう。
          </li>
          <li>
            途中に大きな通路で風が強い場所があり、そのまま進んでしまうと流されて入口付近に戻されてしまう。この場所では付近にある突起している岩を調べるとレイスがロープをかけてくれ、再度それを調べることで渡ることができる。
          </li>
          <li>
            奥地では風の大晶霊「シルフ」たちとの戦闘になる。勝利後シルフがCケイジに入り、風の晶霊術が使えるようになる。入口に戻ろう。
          </li>
          <li>
            入口付近に戻るとレイスと別れ、キールと合流して再びパーティへ加わる。
          </li>
          <li>
            火の大晶霊の手がかりを求めてエアリアルボードを使い、東大陸にあるシャンバールへ向かおう。
          </li>
        </ol>

        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『シルフ』HP：6400(NORML)、『ラフィール×2』HP:4500</h4>
          <p>
            シルフはHPが少なくなると弓攻撃を連発してくるので、その前にラフィールを優先して倒していくのがいい。ただしシルフは強力な晶霊術を使ってくるので、詠唱を始めるとダッシュ攻撃をして止めさせよう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[15]} />
        <LocationRecipes data={recipesData} locationIds={[15]} />
        <LocationLenses data={lensesData} locationIds={[15]} />
        <LocationSubEvents data={subEventData} locationIds={[15]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">6.熱砂の町 シャンバール</SectionTitle>
        <ol>
          <li>
            砂漠の真ん中にある。火の大晶霊のいる「火晶霊の谷」をクリアするためにこの町で休憩をしたり、アイテムの補充をするようにしよう。
          </li>
          <li>
            この町には収集したレンズの数に応じてアイテムをくれるイレーヌがいる。
          </li>
          <li>
            火の大晶霊の手がかりを求めてエアリアルボードを使い、東大陸にあるシャンバールへ向かおう。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[16]} />
        <LocationRecipes data={recipesData} locationIds={[16]} />
        <LocationLenses data={lensesData} locationIds={[16]} />
        <LocationSubEvents data={subEventData} locationIds={[16]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.火晶霊の谷</SectionTitle>
        <ol>
          <li>
            ダンジョン内では灼熱のためウンディーネのサポートを受けて進んでいく。ウンディーネのHPが0になるとサポートがなくなり、常時灼熱のダメージう受けることになる。一度ダンジョンから出れば戻るので危なくなったら引き返そう。
          </li>
          <li>
            謎解きは特にないので道なりに進んでいけば良いが、時には炎が吹き出している場所も通る必要がある。
          </li>
          <li>
            キールが疑問に思う開かずの扉は、ダンジョンクリア後に入手できる「ソーサラーリング」を打つことで空けることができる。道中はスルーしよう。
          </li>
          <li>
            奥地では火の大晶霊「イフリート」と戦闘になる。勝利後のイベントでソーサラーリングを入手する。帰りには開かずの扉を空けて、アイテムを回収していこう。ソーサラーリングを打って入る部屋にある水晶を打つと敵と戦闘になり、勝利後にアイテムを入手できる。
          </li>
          <li>
            セレスティアに渡る「光の橋」の手がかりを求めるために聖峰ファロースを目指す。
          </li>
        </ol>

        <div className="boss-advice margin-bottom-small">
          <h4>BOSS：『イフリート』HP：8000?(NORML)</h4>
          <p>
            ジャンプ攻撃や虎牙連斬などが有効。リッドにはハルバードなど、リーチが長い武器を装備させて挑もう。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[17]} />
        <LocationRecipes data={recipesData} locationIds={[17]} />
        <LocationLenses data={lensesData} locationIds={[17]} />
        <LocationSubEvents data={subEventData} locationIds={[17]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">8.霊峰ファロース</SectionTitle>
        <ol>
          <li>
            霊峰の頂上を目指す前に一度教会で休憩することになる。(最初から教会で休憩するのもOK)
            <br />
            教会では左奥の部屋で休憩することを選択しよう。イベント後にファラが「回生功」を習得する。
          </li>
          <li>
            ダンジョンでは道中、崖崩れに見舞われてファラとはぐれてしまう。ダンジョン入口付近に戻され、以後3人のパーティで進んでいくことになる。右側へ進み、吊り橋を渡って進んでいこう。
            <br />
            進んでいくと岩が落ちてくるところがあるが、岩に当たるとダメージを受けるので、注意しよう。
          </li>
          <li>
            <h4>クイッキーへの命令</h4>
            途中フロアでは、クイッキーに命令してロープを下ろしてもらう場所がある。
            <br />
            指示できる命令は下記の3つで、
            <span className="daiji">
              「右、いけ、がんばれ、がんばれ、そこ、がんばれ、いけ、がんばれ、そこ、いけ、そこ、そこ」
            </span>
            の順で命令していけば全てのロープを下ろしてくれる。
            <br />
            <br />
            「そこ」:周りを調べる
            <br />
            「がんばれ」:上に登る
            <br />
            「いけ」:ジャンプ
            <br />
          </li>
          <li>
            頂上へ着くとファラと合流する。扉にソーサラーリングを打つとイベントが発生。
            <br />
            ボス「レイシス」との戦闘になり、勝利後にセレスティアの世界に着く。PS版はDisc2に切替。
          </li>
          <li>
            セレスティアのアイメンの岬に着いている。フィールドに出てアイメンの町へ向かおう。
          </li>
        </ol>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『レイシス』HP：4000(NORML)</h4>
          <p>HPは低いが防御は高い。</p>
        </div>
        <LocationItems data={itemsData} locationIds={[18]} />
        <LocationRecipes data={recipesData} locationIds={[18]} />
        <LocationLenses data={lensesData} locationIds={[18]} />
        <LocationSubEvents data={subEventData} locationIds={[18]} />
      </section>
    </article>
  );
}
