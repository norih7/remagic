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
          セレスティアに突入後のストーリーを攻略！地晶霊の廃坑からチャットの小屋と連続で難易度の高いダンジョンが続くので攻略情報とマップを参照してください。
        </p>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle type="flag">1.岬の砦〜アイメン駅</SectionTitle>
        <div className="mb-8">
          <h3>峠の砦</h3>
          <ol>
            <li>
              セレスティアの「岬の砦」に到着します。ここではレンズがあるのでぜひ入手しておきましょう。次の目的地はメルディの故郷であるアイメンで、フィールドに出てすぐのところにあります。
            </li>
          </ol>
          <LocationLenses data={lensesData} locationIds={[50]} />
        </div>
        <div className="mb-8">
          <h3>アイメンの町</h3>
          <ol>
            <li>
              アイメンの町に入るとイベントがありメルディの家へ向かいます。その後、休憩しているファラを残してアイメンの町を探索します。武器屋、道具屋、給水タンクと回ります。
              <br />
              最後にメルディの家で一泊後、戻ってきていないメルディとキールを探しに図書館へ向かう。
            </li>
            <li>
              図書館は給水タンクの斜め向かい側の通路から入っていけますが場所が少し見えづらいため下記を参考にどうぞ。
              <br />
              <img src="/maps/imen_map.jpg" alt="" width={488} height={355} />
            </li>
            <li>
              図書館で2人と合流後、晶霊技師「ガレノス」に会うためにルイシカへ向かうことになる。
              <br />
              フィールドに出て東にあるアイメン駅へ向かいましょう。
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
              アイメン駅では機関車を動かすための「クレーメル機関」が無いため運行できないと聞きます。
              お使いになりますが再びアイメンの町へ戻り、武器屋にいけばクレーメル機関を2000ガルドで購入できます。
            </li>
            <li>
              機関車に乗り込むとミニゲームが発生。このミニゲームでは全て手紙を届けることができるとメルディの称号が手に入りますが特にアイテムの入手はありません。
            </li>
            <li>ルイシカ駅をおりたら、ルイシカの町へ向かいます。</li>
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
              ルイシカでは奥の研究室(ガレノスの家)の地下へ行くとイベント。
              一連のイベントでバリルの存在や極光の話を聞いたら、次の目的地「廃坑駅」へ向かうため再びルイシカ駅へ向かいます。
              <Information
                type="warning"
                title="ワンダーシェフはガレノスと会ってから"
              >
                ルイシカにあるワンダーシェフのオブジェはガレノスと会ってから登場します。はじめてルイシカへ訪れた時には何もない状態なので、廃坑駅へ向かう際に回収しましょう。
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
              ルイシカ駅の駅員に話しかけると新しく「廃坑駅」を選択できるようになっています。
              廃坑駅へ到着するまでにはミニゲームとなり、一定時間経過すると終了します。ミニゲームは線路を追いかけてくる敵を爆弾で撃墜するもの。敵に追いつかれると敵と戦闘となります。敵を全員撃墜するとリッドの称号がもらえます。
            </li>
            <li>
              <h4>追いつかれると戦闘となる敵</h4>
              ・フライングソール HP:3800(NORMAL) 耐:火、雷 弱:光
              <br />
              ・ハードホーン HP:6200(NORMAL) 耐:地、雷 弱:水
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
            このダンジョンは前半・後半(リフト起動後の下層)と別れており、前半は入口近くの休憩所にあるロッカーから道具を取り出しながら障害物を除去しながら進んでいく必要があります。主に使うのは「ダイナマイト」と「鍵」で、「スコップ」クリアに必須ではありませんが通路のショートカットや「コレルーンの壺」を入手するために使います。
          </p>
          <ResponsiveImage src="/stories/guide3-mine-break-room.jpg" />
        </div>
        <div className="mb-8">
          <h3>地晶霊の廃坑 前半</h3>
          <ol>
            <li>
              <Image src="/maps/mine_map.jpg" alt="" width={524} height={524} />
              <Information title="コレルーンの壺">
                「！」の部分はセレスティア七代秘宝の「コルレーンのつぼ」があり、スコップを持っていれば入手可能。
              </Information>
            </li>
            <li>
              前半は以下の手順で進行します。
              <br />
              1.「ダイナマイト」で塞いでいる岩を爆破
              <br />
              2.「ダイナマイト」でリフト通路を塞いでいる岩を爆破
              <br />
              3.「鍵」でリフトを起動して下層へと下りる
              <br />
              ※「スコップ」はクリアには必要はないが通路の確保に使える。またコルレーンのつぼを入手するためにも必要。
            </li>
            <li>
              <Information type="warning" title="ダンジョン内のレバー">
                <p>
                  ダンジョン内には複数のレバーがあり、調べるとコンベアから宝箱が運ばれてきます。「オールディバイト」などの貴重なものがありますがモンスター「フェイク」も存在します。フェイクはかなりの強敵で、アイテムドロップもライフボトルをドロップするだけなので逃げることを推奨します。
                </p>
                <ResponsiveImage src="/stories/guide3-mine-fake.jpg" />
              </Information>
            </li>
          </ol>
        </div>
        <div className="mb-8">
          <h3>地晶霊の廃坑 後半</h3>
          <ol>
            <li>
              リフトを起動して下層に行くとキャンプイベントが発生してミニゲーム「ウィス」を行います。
              終了後にはウィスを入手でき、いつでも楽しめるようになります。
            </li>
            <li>
              <ResponsiveImage src="/stories/guide3-mine-dynamite.jpg" />
              下層では岩の爆破の必要ですが、ベルトコンベアの近くにダイナマイトがあるため休憩室に戻る必要はありません。土砂で塞がっている道もありますが、開通しなくても迂回すればアイテム回収が可能でクリアにも必要ありません。
            </li>
            <li>
              奥に行くと「ノームの集落」があります。小さいノームたちは敵ではなく話かけることでアイテム購入や完全回復ができます。進んだ先ではボス「ノーム」との戦闘になり、
              勝利後には地の大晶霊ノームと契約できます。
            </li>
            <li>
              ノームの集落を出たらノームが出口を案内してくれます。フィールドに出たら大陸の先端にある小屋を目指します。
            </li>
          </ol>
        </div>
        <div className="boss-advice margin-bottom-small mb-8">
          <h4>BOSS：『ノーム』HP：16160(NORML) 耐性:地 弱点:風</h4>
          <p>
            風属性が弱点なので、リッドには風属性の武器(アークウイング、アサルトダガーなど)を装備させよう。攻撃力は落ちるが詠唱を邪魔できる。
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
            小屋の中にあるリビングに行くとイベントが発生し、地下のダンジョンへと移動します。
            <br />
            このダンジョンは8階構成になっていて、各階では
            <span className="daiji">
              「アヒルのおもちゃ」「ゼンマイ」を入手して、中央の水路にあるスイッチを押す
            </span>
            という仕掛けがあります
          </p>
          <p>
            リッド達が眠っていた部屋は休憩室にもなっていて、ソファーを調べるとHP/TPが完全回復するので活用しましょう。
            また壁の時計を調べるとグミなどのアイテムを購入することができます。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下8階</h3>
          <p>
            このフロアの仕掛け : ルーレットが止まった先の部屋からゼンマイを入手
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              右側通路の奥の部屋にそのまま置いてある
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              ルーレットの部屋で左下の部屋へ進むと入手
            </RoundedItem>
          </RoundedContainer>
          <p>
            アヒルのおもちゃは右側の奥の部屋で簡単に手に入ります。ゼンマイを入手するためにはまず左側通路の奥の部屋にある機械を調べ、以降の仕掛けが動くようにします（重要）。その後、右側通路の手前の部屋を進んでいくとルーレットの部屋に辿りつきます。ここでは5つのポールをすべて灯すとルーレットが動作して止まった部屋に入れる仕掛けがあり、ルーレットで左の部屋に入るとゼンマイを入手できます。
          </p>
          <ResponsiveImage src="/stories/guide3-chat-8.jpg" />
          <p>
            ルーレットは部屋を出ずとも何度もやり直せるので左の部屋だけ目指しましょう。それ以外の部屋はハズレで、右側の部屋では「パナシーアボトル」が手に入りますが労力には見合わない場合がほとんどです。
          </p>
          <p>
            アヒルとゼンマイが揃ったら中央の水路を調べ、奥のスイッチを押して上の階へ進みます。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下7階</h3>
          <p>
            このフロアの仕掛け: 部屋を出ることで石像を倒してアイテムを入手する
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の扉を塞いでいる石像を倒す
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路の扉を塞いでいる石像を倒す
            </RoundedItem>
          </RoundedContainer>
          <p>
            このフロアは石像を倒して壊すとアヒルとゼンマイが出てきます。うまく裏側の部屋に回り込み、扉を空けて石像を倒すように移動します。左側通路の部屋から迂回して右側通路へ出ることができ、扉を開いて石像を倒すとゼンマイを入手できます。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下6階</h3>
          <p>
            このフロアの仕掛け:
            扉に貼られている紙をソーサラーリングで燃やして隠し通路を出現させる
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋にある隠し通路
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路の手前の部屋を進んだところにある隠し通路
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-6.jpg" />
          <p>
            左側通路の手前の部屋にある機械を調べるとフロアに風が吹いてきます。この状態では張り紙がヒラヒラするようになり、紙をソーサラーリングで燃やすと隠し通路出現します。ただしダミーでソーサラーリングを撃っても何も反応しないところがあります。粘っても何もないため反応がなければすぐ次へ行きましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下5階</h3>
          <p>
            このフロアの仕掛け: 出題されるクイズに正解してアイテムを入手する。
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋でクイズに正解する
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路側の手前の部屋でクイズに正解する
            </RoundedItem>
          </RoundedContainer>
          <p>
            「？」がある部屋の中央に行くと下記クイズが出題され、正解すると()内のアイテムが出現します。クイズは時間制限があり、時間内に回答できなかったり間違えると敵と戦闘になります。
          </p>
          <h4>クイズ一覧</h4>
          <p>
            ・「あかちゃんがかけて大人がかけないものは？」→よだれかけ」(ミックスグミ)
            <br />
            ・「きれいにすればするほど汚くなるのは？」→「ぞうきん」(パイングミ)
            <br />
            ・「水や海があるのに水がなく、町があっても人がいないものは？」→「ちず」(レモングミ)
            <br />
            ・「ゴミが大好きな飛べない鳥は？」→「チリトリ」(
            <span className="daiji">アヒル</span>)<br />
            ・「板の上に止まるほうちょうは？」→「ほうちょう」(
            <span className="daiji">ネジ</span>)
          </p>
        </div>
        <div className="mb-8">
          <h3>地下4階</h3>
          <p>
            このフロアの仕掛け: 機械にある隠し通路へ入ってアイテムを入手する
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路側 奥の部屋の隠し通路
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              右側通路側 奥の部屋の隠し通路
            </RoundedItem>
          </RoundedContainer>
          <p>
            このフロアはシンプルに左右それぞれの奥の部屋にある機械に近づくと隠し通路が出現するのでそのまま奥に進みましょう。4階にはレンズがあるため回収しておきましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>地下3階</h3>
          <p>
            このフロアの仕掛け:
            スイッチの上に石像を移動して動く床の方向を変更することで部屋に入る。
          </p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路の手前の部屋（仕掛けなし）
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-3.jpg" />
          <p>
            ゼンマイは仕掛けなしで入手可能です。アヒルのおもちゃは画像の位置までに移動して、通路側に操作キーを押しながら進んでいきましょう。
          </p>
          <Information type="warning" title="みずぐもの入手">
            3回では水属性攻撃を50%軽減させる「みずぐも」が入手できます。少しややこしい仕掛けがありますが、強力なアイテムなのでぜひ入手しておきましょう。入手方法:
            左側通路の入り口から3番目の部屋で石像をスイッチの上まで移動。これにより右側通路のコンベアの向きが変わり、奥の部屋でみずぐもを入手。みずぐも入手後はその部屋の石像をスイッチの上まで移動して再度コンベアの向きを戻します。
          </Information>
        </div>
        <div className="mb-8">
          <h3>地下2階</h3>
          <p>このフロアの仕掛け: 壁掛け絵画の向きを変更する。</p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              左側通路の奥の部屋
            </RoundedItem>
            <RoundedItem title="ゼンマイ">右側通路の奥の部屋</RoundedItem>
          </RoundedContainer>
          <p>
            キーアイテムの「アヒルのおもちゃ」と「ゼンマイ」は左右それぞれの奥の部屋で簡単に手に入りますが、上の階に行くためには別の仕掛けを解く必要があります。仕掛けを解かないと階段で滑り、上の階へいけません。
            <br />
            仕掛けはこの階にある絵を正しい向きへ回転させることで、絵画を下記の位置に会わせれば滑る階段が解除されます。ちなみに調べても動かない絵画は正しい向きを表しています。
          </p>
          <div className="flex flex-wrap gap-3">
            <RoundedItem title="ルーティ(黒髪女性)" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                →
              </div>
              <Image
                src="/stories/guide3-chat-rutee.jpg"
                width="145"
                height="220"
                alt=""
              />
            </RoundedItem>
            <RoundedItem title="スタン(金髪男性)" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                ←
              </div>
              <Image
                src="/stories/guide3-chat-stun.jpg"
                width="145"
                height="220"
                alt=""
              />
            </RoundedItem>
            <RoundedItem title="フィリア(緑髪女性)" className="mb-3">
              <div className="bg-slate-600 text-white rounded-sm text-center mb-1 font-black">
                ↓
              </div>
              <Image
                src="/stories/guide3-chat-philia.jpg"
                width="145"
                height="220"
                alt=""
              />
            </RoundedItem>
          </div>
        </div>
        <div className="mb-8">
          <h3>地下1階</h3>
          <p>このフロアの仕掛け: それぞれ異なる仕掛けを解く</p>
          <RoundedContainer>
            <RoundedItem title="アヒルのおもちゃ" className="mb-3">
              右側通路の奥の部屋にあるタルを移動して入手
            </RoundedItem>
            <RoundedItem title="ゼンマイ">
              左側通路の奥の部屋の仕掛けを解く
            </RoundedItem>
          </RoundedContainer>
          <ResponsiveImage src="/stories/guide3-chat-1.jpg" />
          <p>
            右側通路側の奥にある部屋ではタルを動かしてアヒルのおもちゃを入手します。
            分かりにくいですががアヒルのおもちゃの前にもタルがあり、これをずらさないと入手できないので注意。画像のように部屋全体のタルを移動して移動経路を確保しましょう。
          </p>
          <p>
            左側通路側の奥にある部屋では散らかっている本を拾い、本棚に戻してやると隠し扉が開きます。一度に全部本を拾ってから本棚に向かい⚪︎ボタンを押して戻していけばいいのですが、左右の本棚の移動など細かく調べる必要があります。
          </p>
        </div>
        <div className="mb-8">
          <h3>最後のスイッチとボス戦</h3>
          地下1階の仕掛けを解いて水路のスイッチを押すと、出口にモンスターが待ち構えるようになり、近づくとボス「ガーディアント」と戦闘になります。
          勝利後は上の階へ行き、ダンジョンを抜けるとイベント。イベントではチャットの子分になる選択をしておきましょう。
          その後バンエルティア号のイベントも進み、北西にあるペイルティへ到着します。
        </div>
        <div className="mb-8">
          <div className="boss-advice margin-bottom-small">
            <h4>
              BOSS：『ガーディアント』HP：30000(NORML) 耐性:雷 弱点:水、火、氷
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
