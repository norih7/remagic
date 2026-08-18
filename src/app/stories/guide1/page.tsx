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
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import ResponsiveImage from "@/components/ResponsiveImage";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ラシュアン〜水晶霊の河";
export const metadata = {
  title,
  description:
    "リマスター版対応のテイルズオブエターニア（TOE）攻略。ラシュアンから水晶霊の河までの進行ルートを紹介します。レグルス道場や望郷の洞窟、モルルなどの攻略ポイントに加え、ウンディーネ戦のポイント、マニュアルのしょやレンズなどの取り忘れやすいアイテムもまとめています。",
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
          ラシュアンを出発して水の大晶霊ウンディーネと契約するまでの流れを紹介します。序盤で入手できる「オムライス」や「マニュアルのしょ」、ダンジョン内のレンズなど、見逃しやすい要素もあわせて確認しておきましょう。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.ラシュアン</SectionTitle>
        <p>物語はラシュアンから始まります。</p>
        <p>
          森の中を進んでいると、空から落ちてきた物体と一人の少女を発見します。
          <br />
          イベントを終えて村へ戻ると、村長の家でボス「ヒアデス」との戦闘が発生します。戦闘に勝利した後は、少女の言葉を理解できるキールに会うため、学問の町ミンツを目指すことになります。
        </p>
        <p>
          道中では、少女の名前が「メルディ」であることも判明します。
          <br />
          フィールドへ出たら南方向へ進み、ラシュアン河の桟橋へ向かいましょう。川に沿って移動すれば目的地へ到着できます。
        </p>
        <Information type="warning" title="ラシュアンの森のレンズ">
          ラシュアンの森には、メルディが発見された落下物の近くにレンズがあります。ただし、この時点では森へ入れないため回収できません。エアリアルボードを入手すると森へ戻れるようになるので、そのタイミングで忘れずに回収しましょう。
        </Information>
        <LocationItems data={itemsData} locationIds={[1]} />
        <LocationRecipes data={recipesData} locationIds={[1]} />
        <LocationLenses data={lensesData} locationIds={[1]} />
        <LocationSubEvents data={subEventData} locationIds={[1]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          2.ラシュアン河の桟橋〜レグルス道場
        </SectionTitle>
        <p>
          桟橋の先へ進むと、ガケ崩れによって道が塞がれていることが分かります。
          <br />
          そこで別のルートを探すことになり、レグルス道場へ向かいます。道場はラシュアンから桟橋へ向かう途中にあり、フィールドへ出た後は西方向へ進むと見つけられます。
        </p>
        <p>
          道場へ入るとモンクとの戦闘が発生します。
          <br />
          戦闘を終えたら道場の奥へ進み、パウロから水晶霊の力を利用して川の流れを弱められることを聞きましょう。
        </p>
        <Information title="マニュアルのしょ">
          道場では戦闘時の操作方法をマニュアルに変更できる「マニュアルのしょ」を入手できます。後からでも回収できますが、このタイミングで取得しておくと以降の戦闘で役立ちます。
        </Information>
        <LocationItems data={itemsData} locationIds={[2, 3]} />
        <LocationRecipes data={recipesData} locationIds={[2, 3]} />
        <LocationLenses data={lensesData} locationIds={[2, 3]} />
        <LocationSubEvents data={subEventData} locationIds={[2, 3]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          3.ラシュアン河の桟橋(2回目)〜学問の町ミンツ
        </SectionTitle>
        <p>
          もう一度ラシュアン河の桟橋へ戻り、橋にいるパウロへ話しかけます。
          <br />
          イベントが進むと川の流れが弱まり、川下りのミニゲームに挑戦することになります。
          <br />
          ミニゲームの結果に応じてアイテムを受け取れるため、できるだけ良い成績を狙ってみましょう。終了後はフィールドへ出て、南にあるミンツへ向かいます。
        </p>
        <p>
          ミンツへ到着したら、町の西側にある大学を訪ねます。
          <br />
          1F入口から数えて2番目にある光晶霊の部屋へ入るとイベントが発生し、キールが岩山の観測所にいることが分かります。このイベントを進めると、メルディが「しょうれいじゅつし？」の称号を獲得します。
        </p>
        <p>
          キールを探すため、次はミンツの南西にある岩山の観測所を目指します。
        </p>
        <LocationItems data={itemsData} locationIds={[4]} />
        <LocationRecipes data={recipesData} locationIds={[4]} />
        <LocationLenses data={lensesData} locationIds={[4]} />
        <LocationSubEvents data={subEventData} locationIds={[4]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.ミンツの岩山〜岩山の観測所</SectionTitle>
        <p>
          岩山の観測所へ向かうには、まずミンツの岩山を抜ける必要があります。
        </p>
        <p>
          ダンジョン内に配置されている岩は、○ボタンを押したまま方向キーを操作すると動かせます。点滅している場所まで岩を運ぶと落下し、次々と出現するモンスターを止めることができます。
          <br />
          ただし、この仕掛けを利用しなくてもダンジョン自体は突破可能です。また、操作したことで特別なアイテムを入手できるわけではありません。
        </p>
        <p>
          岩山を抜けると一度フィールドへ出ます。そのまま近くにある観測所へ入りましょう。
          <br />
          観測所ではイベントが発生し、メルディが伝えようとしていた内容が明らかになります。
          <span className="text-red-600">ここでキールが仲間に加わります。</span>
        </p>
        <p>
          次はメルディの言葉についてさらに詳しく調べるため、モルルにいるマゼット博士を訪ねます。モルルは別の大陸にあるため、ミンツから東へ進み、望郷の洞窟を経由して向かいましょう。
        </p>
        <LocationItems data={itemsData} locationIds={[5]} />
        <LocationRecipes data={recipesData} locationIds={[5]} />
        <LocationLenses data={lensesData} locationIds={[5]} />
        <LocationSubEvents data={subEventData} locationIds={[5]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.望郷の洞窟</SectionTitle>
        <p>
          望郷の洞窟では、内部の潮の状態によって通れる場所や回収できるアイテムが変わります。潮はダンジョンを移動することで変化し、外へ出ると最初の状態に戻ります。
          <br />
          潮の状態を利用することで、「ライフボトル」「サークレット」「レイピア」などを入手できます。
        </p>
        <p>
          洞窟の途中ではキャンプイベントが発生し、リッドとキールの2人だけでエッグベアと戦うことになります。
          <br />
          ダンジョンを抜けると別の大陸へ出るので、そのままフィールドを進んでモルルを目指しましょう。
        </p>
        <p>洞窟を出た後は、フィールドを移動してモルルへ向かいます。</p>
        <div className="mb-4">
          <h3>潮の満ち引きについて</h3>
          <ResponsiveImage src="/stories/guide1-oblivion-1.jpg" />
          <p>
            ダンジョンを歩いていると、潮の変化を知らせるメッセージが表示されることがあります。
            <br />
            潮が満ちると水が流れ込み、それまで足場になっていなかった場所に木が浮かんできます。この木を利用することで、通常では進めない場所へ移動できるようになります。
          </p>
        </div>
        <div className="mb-4">
          <ResponsiveImage src="/stories/guide1-oblivion-2.jpg" />
          <p>
            潮には「潮が満ちてくる」状態と「満潮」の状態があります。
            <br />
            「満潮」まで進めることで、レイピアを回収できるようになります。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[7]} />
        <LocationRecipes data={recipesData} locationIds={[7]} />
        <LocationLenses data={lensesData} locationIds={[7]} />
        <LocationSubEvents data={subEventData} locationIds={[7]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">6.木陰の村モルル</SectionTitle>
        <p>
          モルルでは、道をそのまま進んで頂上にあるマゼットの家を訪ねます。
          <br />
          イベントが発生するとメルディがその場を離れるため、後を追うことになります。この間はメルディが戻ってくるまで3人でのパーティになります。
        </p>
        <p>
          道中にある分岐を進み、奥まで到達するとボス「インセクトプラント」との戦闘になります。
          <br />
          撃破するとメルディと合流し、4人パーティへ戻ります。
        </p>
        <p>
          途中のキャンプ地点ではメルディに関するイベントが発生し、彼女がこの旅に加わった理由が明らかになります。
          <br />
          イベント後にマゼットの家へ戻ると、さらにイベントが続きます。
          <br />
          その後マゼットに話しかけると
          <span className="daiji">モンスター図鑑</span>
          を受け取れます。イベント中に自動でもらえるアイテムではないため、イベント終了後に忘れず話しかけておきましょう。
        </p>
        <p>
          次の目的地は、水の大晶霊ウンディーネがいる水晶霊の河です。モルルから北東へ進みましょう。
        </p>
        <LocationItems data={itemsData} locationIds={[8]} />
        <LocationRecipes data={recipesData} locationIds={[8]} />
        <LocationLenses data={lensesData} locationIds={[8]} />
        <LocationSubEvents data={subEventData} locationIds={[8]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.水晶霊の河</SectionTitle>
        <p>
          ここまでのダンジョンと比べて探索に時間がかかるため、入る前に回復アイテムや料理を十分に用意しておきましょう。
        </p>
        <p>
          基本的には道に沿って進めますが、浅い水場を歩いたり、木の陰に隠れた通路を利用したりする場面があります。
          <br />
          一見すると進めそうにない場所にも道が用意されているため、周囲をよく確認しながら探索しましょう。見えにくい場所にはアイテムが配置されていることもあります。
        </p>
        <Information type="warning" title="ポイズンチェック">
          水晶霊の河には、毒状態を100%防げる「ポイズンチェック」が入った宝箱が2つあります。
          <br />
          このダンジョンでは毒を付与してくる攻撃を使うモンスターが多いため、入手したら装備しておくと安心です。
        </Information>
        <p>
          最深部まで進むと、水の大晶霊「ウンディーネ」と戦闘になります。
          <br />
          戦闘に勝利するとウンディーネと契約を結び、その後のイベントでフリンジから「スプレッド」を習得できます。
        </p>
        <p>
          ウンディーネとの契約後は王都インフェリアを目指すことになります。その途中で「いざないの密林」を攻略することになるため、出発前にモルルへ戻って装備やアイテム、食材などを整えておくと安心です。
        </p>
        <h3>ダンジョン内の見落としやすいアイテム</h3>
        <div className="mb-4">
          <ResponsiveImage src="/stories/guide1-crystal-river-2.jpg" />
          <p>
            ダンジョン入口付近のマップには、木々に隠れるようにレンズが配置されています。
            <br />
            操作キャラクターが完全に見えなくなるほど茂みに隠れるため、画像で示した場所を目印にして○ボタンを繰り返し押してみましょう。
          </p>
        </div>
        <div className="mb-4">
          <ResponsiveImage src="/stories/guide1-crystal-river-1.jpg" />
          <p>
            ウンディーネがいるフロアへ向かう直前にも、見逃しやすいアイテムがあります。
            <br />
            特に「チンクエデア」は木の茂みに隠れていて発見しにくいアイテムです。
            <br />
            水属性の短剣で、火属性の敵に対して有効な武器なので、見つけたら回収しておきましょう。
          </p>
        </div>

        <div className="boss-advice margin-bottom-small mb-6">
          <h4>BOSS：『ウンディーネ』</h4>
          <p>HP：8000(NORML)</p>
          <p>
            ウンディーネはHPが半分を下回ると、貫通する飛び攻撃を使うようになります。
            <br />
            正面でガードして受け止めるほか、ジャンプで攻撃をかわしながら背後へ回り込む方法も有効です。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[9]} />
        <LocationRecipes data={recipesData} locationIds={[9]} />
        <LocationLenses data={lensesData} locationIds={[9]} />
        <LocationSubEvents data={subEventData} locationIds={[9]} />
      </section>
    </article>
  );
}
