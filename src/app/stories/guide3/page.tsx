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
import ResponsiveImage from "@/components/ResponsiveImage";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "セレスティア突入〜チャットの小屋";
export const metadata = {
  title,
  description:
    "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。セレスティア到着後の「地晶霊の廃坑」や「チャットの小屋」の詳細な攻略法を分かりやすく解説！階層ごとのギミック解除手順や重要アイテム、レンズの回収場所を掲載しています。",
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
          セレスティアへ到着した後のストーリーを徹底攻略！「地晶霊の廃坑」や「チャットの小屋」といった難易度の高いダンジョンが連続するため、本記事のマップや攻略手順を参考に進めていきましょう。
        </p>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle type="flag">1.岬の砦〜アイメン駅</SectionTitle>
        <div className="mb-8">
          <h3>岬の砦</h3>
          <ol>
            <li>
              セレスティアの「岬の砦」に到着します。ここにはレンズが配置されているので忘れず回収しておきましょう。次の目的地はメルディの故郷であるアイメンで、フィールドに出てすぐ目の前にあります。
            </li>
          </ol>
          <LocationLenses data={lensesData} locationIds={[50]} />
        </div>
        <div className="mb-8">
          <h3>アイメンの町</h3>
          <ol>
            <li>
              アイメンに足を踏み入れるとイベントが発生し、メルディの実家へ向かいます。その後、ファラをその場に残して街の探索（武器屋・道具屋・給水タンクの順）を行います。
              <br />
              メルディの家で一泊した翌朝、戻らないメルディとキールを探しに図書館へ向かいましょう。
            </li>
            <li>
              図書館は給水タンクの斜め向かい側の通路から入れますが、入り口がやや見つけづらいため以下の画像を参考にしてください。
              <br />
              <img
                src="/maps/imen_map.jpg"
                alt="アイメンのマップ"
                width={488}
                height={355}
              />
            </li>
            <li>
              図書館で2人と合流した後は、晶霊技師「ガレノス」を訪ねるためルイシカへ向かうことになります。
              <br />
              街を出て東側にあるアイメン駅へ移動しましょう。
            </li>
          </ol>
          <LocationItems data={itemsData} locationIds={[19, 20]} />
          <LocationRecipes data={recipesData} locationIds={[19, 20]} />
          <LocationLenses data={lensesData} locationIds={[19, 20]} />
          <LocationSubEvents data={subEventData} locationIds={[19, 20]} />
        </div>
        <div className="mb-8">
          <h3>アイメン駅</h3>
          <ol>
            <li>
              アイメン駅では機関車を動かすための「クレーメル機関」がないため運行できないと告げられます。
              一度アイメンの町に戻り、武器屋でクレーメル機関を2000ガルドで購入しましょう。
            </li>
            <li>
              機関車に乗り込むとミニゲームがスタートします。すべての手紙を無事に配達するとメルディの称号が手に入ります（特別なアイテム入手はありません）。
            </li>
            <li>ルイシカ駅に到着したら、そのままルイシカの町へ入ります。</li>
          </ol>
          <LocationItems data={itemsData} locationIds={[20]} />
          <LocationRecipes data={recipesData} locationIds={[20]} />
          <LocationLenses data={lensesData} locationIds={[20]} />
          <LocationSubEvents data={subEventData} locationIds={[20]} />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2.ルイシカ〜廃坑駅</SectionTitle>
        <div className="mb-8">
          <h3>ルイシカ</h3>
          <ol>
            <li>
              ルイシカの奥にある研究室（ガレノスの家）の地下へ進むとイベントが発生します。
              バリルに関する情報や極光の話を聞いた後、次の目的地である「廃坑駅」を目指して再びルイシカ駅へ向かいます。
              <Information
                type="warning"
                title="ワンダーシェフはガレノスとの面会後に出現"
              >
                ルイシカのワンダーシェフのオブジェは、ガレノスと会った後に出現します。初来訪時は何もいないため、廃坑駅へ向かうタイミングで忘れず回収しましょう。
              </Information>
            </li>
          </ol>
          <LocationItems data={itemsData} locationIds={[21]} />
          <LocationRecipes data={recipesData} locationIds={[21]} />
          <LocationLenses data={lensesData} locationIds={[21]} />
          <LocationSubEvents data={subEventData} locationIds={[21]} />
        </div>
        <div className="mb-8">
          <h3>廃坑駅への出発</h3>
          <ol>
            <li>
              ルイシカ駅の駅員に話しかけると「廃坑駅」へのルートが選べるようになります。
              道中は列車でのミニゲームとなり、一定時間耐え抜くとクリアです。線路を追ってくる敵を爆弾で迎撃し、すべて撃墜できればリッドの称号を獲得できます。追いつかれると戦闘に突入します。
            </li>
            <li>
              <h4>追いつかれた際の戦闘相手</h4>
              ・フライングソール（HP：3800 / 耐性：火・雷 / 弱点：光）
              <br />
              ・ハードホーン（HP：6200 / 耐性：地・雷 / 弱点：水）
            </li>
          </ol>
          <LocationItems data={itemsData} locationIds={[20]} />
          <LocationRecipes data={recipesData} locationIds={[20]} />
          <LocationLenses data={lensesData} locationIds={[20]} />
          <LocationSubEvents data={subEventData} locationIds={[20]} />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">3.地晶霊の廃坑</SectionTitle>
        <div className="mb-8">
          <p>
            当ダンジョンは前半と後半（リフト起動後の下層）に分かれています。前半は入口付近の休憩所ロッカーからツールを取り出し、障害物を排除しながら進むスタイルです。主に「ダイナマイト」と「鍵」を使用します。「スコップ」は攻略必須ではありませんが、通路のショートカットや「コルレーンのつぼ」の入手に必要となります。
          </p>
          <ResponsiveImage src="/stories/guide3-mine-break-room.jpg" />
        </div>
        <div className="mb-8">
          <h3>地晶霊の廃坑（前半）</h3>
          <ol>
            <li>
              <Image
                src="/maps/mine_map.jpg"
                alt="廃坑マップ"
                width={524}
                height={524}
              />
              <Information title="コルレーンのつぼについて">
                マップ内の「！」マークの地点には、セレスティア七代秘宝の一つ「コルレーンのつぼ」が眠っており、スコップを所持していれば取得できます。
              </Information>
            </li>
            <li>
              前半の主な進行手順：
              <br />
              1.「ダイナマイト」で通路を塞ぐ岩を爆破する
              <br />
              2.「ダイナマイト」でリフト周辺の岩を排除する
              <br />
              3.「鍵」を用いてリフトを稼働させ、下層へ降りる
              <br />
              ※スコップは必須ではありませんが、ルート確保や秘宝入手の観点から持っておくと便利です。
            </li>
            <li>
              <Information
                type="warning"
                title="ダンジョン内のレバー操作に注意"
              >
                <p>
                  各地にあるレバーを操作すると、コンベアから宝箱が流れてきます。「オールディバイト」などのレアアイテムがある一方、強敵の「フェイク」が潜んでいることも。フェイクは苦戦必至の強さでドロップもライフボトル程度なため、基本は逃走するのが賢明です。
                </p>
                <ResponsiveImage src="/stories/guide3-mine-fake.jpg" />
              </Information>
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <h3>地晶霊の廃坑（後半）</h3>
          <ol>
            <li>
              リフトで下層へ下りるとキャンプイベントが始まり、ミニゲーム「ウィス」が発生します。
              クリア後はウィスが手に入り、以降はいつでも遊べるようになります。
            </li>
            <li>
              <ResponsiveImage src="/stories/guide3-mine-dynamite.jpg" />
              下層でも岩の爆破が必要になりますが、ベルトコンベア付近にダイナマイトが用意されているため休憩室へ戻る必要はありません。土砂で通れない道もありますが、迂回すればアイテム回収や攻略に支障はありません。
            </li>
            <li>
              さらに奥へ進むと「ノームの集落」に到着します。住人たちは敵対せず、アイテムの購入や全回復が利用可能です。その先で待ち受けるボス「ノーム」を打ち破れば、地の大晶霊ノームとの契約が結ばれます。
            </li>
            <li>
              集落を抜けるとノームが外への道案内をしてくれます。フィールドに出たら、大陸の先端にある小屋を目指しましょう。
            </li>
          </ol>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ノーム』（HP：16160 / 耐性：地 / 弱点：風）</h4>
          <p>
            風属性が弱点となるため、リッドに風属性の武器（アークウイングやアサルトダガーなど）を装備させましょう。攻撃力はやや下がりますが、敵の詠唱を妨害しやすくなります。
          </p>
        </div>
        <LocationItems data={itemsData} locationIds={[22]} />
        <LocationRecipes data={recipesData} locationIds={[22]} />
        <LocationLenses data={lensesData} locationIds={[22]} />
        <LocationSubEvents data={subEventData} locationIds={[22]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.チャットの小屋</SectionTitle>
        <div className="mb-8">
          <ResponsiveImage src="/stories/guide3-chat-contraption.jpg" />
          <p>
            小屋のリビングに入るとイベントが発生し、地下ダンジョンへ突入することになります。
            <br />
            全8階層からなる本ダンジョンでは、各階で
            <span className="daiji">
              「アヒルのおもちゃ」と「ゼンマイ」を回収し、中央水路のスイッチを作動させる
            </span>
            ことが目的となります。
          </p>
          <p>
            リッド達が眠っていた部屋は安全な休憩室になっており、ソファーを調べるとHP・TPが全快します。また壁掛け時計からグミなどの消耗品を購入することも可能です。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下8階</h3>
          <p>
            フロアの仕掛け：ルーレットが停止した先の部屋からゼンマイを回収する
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              右側通路の奥の部屋にそのまま配置されている
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              ルーレット部屋から左下の部屋へ進むと入手可能
            </RoundedItem>
          </RoundedContainer>
          <p>
            アヒルのおもちゃは右奥の部屋で簡単に確保できます。ゼンマイを入手するには、まず左側通路の奥にある機械を調べてギミックを起動状態にする必要があります（重要）。その後、右通路の手前の部屋からルーレットの部屋へ向かいます。5つのポールすべてに火を灯すとルーレットが回り、止まった部屋へ侵入できるようになります。
          </p>
          <ResponsiveImage src="/stories/guide3-chat-8.jpg" />
          <p>
            ルーレットは何度でもやり直せるため、左側の部屋を狙いましょう。ハズレの部屋（右側など）では「パナシーアボトル」が手に入りますが、手間を考えるとうま味は少なめです。
          </p>
          <p>
            両方のアイテムが揃ったら中央水路を調べ、奥のスイッチを押して上の階層へ進みます。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下7階</h3>
          <p>
            フロアの仕掛け：部屋の出入りを利用して石像を破壊し、アイテムを回収する
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の扉を塞ぐ石像を破壊する
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路の扉を塞ぐ石像を破壊する
            </RoundedItem>
          </RoundedContainer>
          <p>
            この階では、扉を塞ぐ石像を壊すとアヒルとゼンマイが手に入ります。裏側の通路に回り込んで扉を開け、石像を破壊しましょう。左側通路の部屋から迂回して右側通路側へ出て扉を開ければ、ゼンマイを回収できます。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下6階</h3>
          <p>
            フロアの仕掛け：扉の貼り紙をソーサラーリングで焼き払って隠し通路を見つけ出す
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥にある隠し通路
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路手前の部屋を進んだ先の隠し通路
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-6.jpg" />
          <p>
            左側通路手前の部屋にある機械を調べるとフロアに風が吹き、貼り紙が揺れるようになります。この状態で紙にソーサラーリングを当てると隠し通路が出現します。ダミーの箇所もあるため、反応がない場合は深追いせず次を当たりましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下5階</h3>
          <p>フロアの仕掛け：出題されるクイズに正解してアイテムを獲得する</p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋のクイズに正解する
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路手前の部屋のクイズに正解する
            </RoundedItem>
          </RoundedContainer>
          <p>
            「？」マークの部屋の中央へ行くとクイズが出され、正解すれば括弧内のアイテムが入手できます。制限時間内に答えられない場合や誤答すると戦闘になってしまうので注意してください。
          </p>
          <h4>クイズ一覧と正解</h4>
          <p>
            ・「赤ちゃんがかけて大人がかけないものは？」→「よだれかけ」（ミックスグミ）
            <br />
            ・「きれいにすればするほど汚くなるものは？」→「ぞうきん」（パイングミ）
            <br />
            ・「水や海があるのに水がなく、町があっても人がいないものは？」→「ちず」（レモングミ）
            <br />
            ・「ゴミが大好きな飛べない鳥は？」→「チリトリ」（
            <span className="daiji">アヒル</span>）
            <br />
            ・「板の上に止まる包丁は？」→「包丁」（
            <span className="daiji">ネジ</span>）
          </p>
        </div>
        <div className="mb-8">
          <h3>地下4階</h3>
          <p>
            フロアの仕掛け：機械付近の隠し通路に踏み込んでアイテムを回収する
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋の隠し通路
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路の奥の部屋の隠し通路
            </RoundedItem>
          </RoundedContainer>
          <p>
            左右それぞれの奥にある機械に近づくと自然に隠し通路が出現するため、そのまま奥へ進みましょう。4階にはレンズもあるので回収忘れのないように。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下3階</h3>
          <p>
            フロアの仕掛け：石像をスイッチの上に置いて動く床の向きを変更し、部屋に入る
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路手前の部屋（ギミックなし）
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-3.jpg" />
          <p>
            ゼンマイは仕掛けなしで手に入ります。アヒルのおもちゃは画像の位置まで移動し、通路側にレバー入力を続けながら進みましょう。
          </p>
          <Information type="warning" title="「みずぐも」の入手">
            水属性ダメージを50%軽減するアクセサリ「みずぐも」が手に入ります。手順がやや入り組んでいますが非常に有用な装備です。
            【入手手順】左側通路の入口から3番目の部屋で石像をスイッチの上に移動させる。これにより右側通路のコンベアの向きが変わり、奥の部屋でみずぐもが回収できるようになります。回収後は再び石像を動かしてコンベアの向きを元に戻しておきましょう。
          </Information>
        </div>
        <div className="mb-8">
          <h3>地下2階</h3>
          <p>フロアの仕掛け：壁に掛かった絵画の向きを正しく合わせる</p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋
            </RoundedItem>
            <RoundedItem title="ゼンマイ">右側通路の奥の部屋</RoundedItem>
          </RoundedContainer>
          <p>
            アヒルとゼンマイ自体は左右の奥の部屋で簡単に手に入りますが、上の階層へ進むためには絵画の仕掛けを解く必要があります。解かないと階段で滑ってしまい上へ登れません。
            <br />
            絵画を正しい向きに回転させることで滑る床が解除されます（調べても動かない絵画が正しい向きのヒントになっています）。
          </p>
          <div className="flex flex-wrap gap-3">
            <RoundedItem title="ルーティ（黒髪女性）" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                →
              </div>
              <Image
                src="/stories/guide3-chat-rutee.jpg"
                width="145"
                height="220"
                alt="ルーティの絵画"
              />
            </RoundedItem>
            <RoundedItem title="スタン（金髪男性）" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                ←
              </div>
              <Image
                src="/stories/guide3-chat-stun.jpg"
                width="145"
                height="220"
                alt="スタンの絵画"
              />
            </RoundedItem>
            <RoundedItem title="フィリア（緑髪女性）" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                ↓
              </div>
              <Image
                src="/stories/guide3-chat-philia.jpg"
                width="145"
                height="220"
                alt="フィリアの絵画"
              />
            </RoundedItem>
          </div>
        </div>
        <div className="mb-8">
          <h3>地下1階</h3>
          <p>フロアの仕掛け：各部屋固有の謎解きをクリアする</p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              右側通路の奥の部屋にあるタルを動かして入手
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路の奥の部屋の仕掛けを解いて入手
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-1.jpg" />
          <p>
            右側通路の奥の部屋では、タルを移動させてアヒルのおもちゃを取り出します。
            アヒルの手前にもタルがあるため、画像のように周囲のタルをずらして通路を確保しましょう。
          </p>
          <p>
            左側通路の奥の部屋では、散らばっている本を拾い集めて本棚に戻すと隠し扉が開きます。全ての書物を一度に回収してから本棚に向かい、○ボタンで戻していけばスムーズにクリアできます。
          </p>
        </div>
        <div className="mb-8">
          <h3>最後のスイッチとボス戦</h3>
          地下1階の仕掛けを突破して水路のスイッチを押すと、出口で待ち構えるボス「ガーディアント」との戦闘になります。
          勝利後は上の階へ抜けてイベントを消化します。チャットの子分になる選択肢が発生するので、忘れずに選んでおきましょう。
          その後、バンエルティア号に関するイベントを経て、北西に位置するペイルティへ到着します。
        </div>
        <div className="mb-8">
          <div className="boss-advice margin-bottom-small">
            <h4>
              BOSS：『ガーディアント』（HP：30000 / 耐性：雷 /
              弱点：水・火・氷）
            </h4>
          </div>
        </div>
        <LocationItems data={itemsData} locationIds={[23]} />
        <LocationRecipes data={recipesData} locationIds={[23]} />
        <LocationLenses data={lensesData} locationIds={[23]} />
        <LocationSubEvents data={subEventData} locationIds={[23]} />
      </section>
    </article>
  );
}
