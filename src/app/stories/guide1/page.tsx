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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ラシュアン〜水晶霊の河";
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
          序盤のストーリーで大晶霊ウンディーネとの契約までを解説します。料理レシピ「オムライス」や「マニュアルのしょ」の入手を忘れずに！
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1.ラシュアン</SectionTitle>
        <ol className="mb-4">
          <li>ストーリーが始まります。</li>
          <li>
            森を進んでいくと墜落した物体と少女に遭遇。
            <br />
            イベント後に村に戻ると村長の家でボス戦(ヒアデス)。勝利後、少女の言葉を理解できるキールに会うために学問の街ミンツへ向かうことになります。
          </li>
          <li>
            途中、少女の名前が"メルディ"であることが分かります。
            <br />
            フィールドに出たら南にあるラシュアン河の桟橋へと向かいます。川沿いにそって進んでいけば辿り着きます。
          </li>
        </ol>
        <Information type="warning" title="ラシュアンの森のレンズ">
          ラシュアンの森のメルディがいた落下物にはレンズがあるのですが現時点では森へ入れず入手できません。エラリアルボードを入手してからラシュアンの森へ入ることができるため、後で回収しましょう。
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
        <ol className="mb-5">
          <li>
            桟橋の奥ではガケ崩れのため通れないということを聞き、次はレグルス道場に向かうことに。
            <br />
            道場はラシュアンの村から桟橋の途中にあり、フィールドに戻って西にあります。
          </li>
          <li>
            道場の中に入るとモンクとの戦闘。
            <br />
            戦闘終了後、道場の奥の部屋にいるパウロから水晶霊の力を使って水流の流れを弱めることを聞きます。
          </li>
        </ol>
        <Information title="マニュアルのしょ">
          道場では戦闘でマニュアル操作ができるようになるアイテムを入手できます。いつでも入手可能ですがぜひこのタイミングで入手しておきましょう。
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
        <ol>
          <li>
            ラシュアン河の桟橋に戻り、橋にいるパウロに話かけるとイベント。水の流れが弱くなり、川下りのミニゲームが発生します。
            <br />
            ミニゲームの成績が良ければアイテムがもらえます。ゲームが終わり、フィールドに出たら南にあるミンツへ行きましょう。
          </li>
          <li>
            ミンツではキールに会うために、町の西側にある大学へと向かう。
            <br />
            1F入口から2番目の部屋(光晶霊)に入るとイベント。キールが岩山の観測所にいることを聞きます。イベントではメルデイが「しょうれいじゅつし？」の称号を入手します。
          </li>
          <li>次はキールに会うために南西にある岩山の観測所へ向かいます。</li>
        </ol>
        <LocationItems data={itemsData} locationIds={[4]} />
        <LocationRecipes data={recipesData} locationIds={[4]} />
        <LocationLenses data={lensesData} locationIds={[4]} />
        <LocationSubEvents data={subEventData} locationIds={[4]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4.ミンツの岩山〜岩山の観測所</SectionTitle>
        <ol>
          <li>観測所へ行くために、ミンツの岩山を通っていきます。</li>
          <li>
            ダンジョンにある岩は○ボタンを押しながら方向キーを動かすことで、移動させることができます。点滅している岩の場所まで動かすと岩が落ち、無限に沸いてくるモンスターを止めることができる。
            ただしこの操作は行わなくてもダンジョンはクリアでき、特にアイテムが手に入るわけではありません。
          </li>
          <li>
            岩山ダンジョンを突破すると一度フィールドマップに出るので、そのまま近くの観測所に入ります。観測所ではイベントが発生。メルディが伝えたかったことが分かり、
            <span className="text-red-600">キールが仲間になる</span>。
          </li>
          <li>
            次はメルディの言葉をさらに理解するため、モルルにいるマゼット博士に会いにいく。モルルは隣の大陸にあり、ミンツから東にある忘郷の洞窟を経由していく。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[5]} />
        <LocationRecipes data={recipesData} locationIds={[5]} />
        <LocationLenses data={lensesData} locationIds={[5]} />
        <LocationSubEvents data={subEventData} locationIds={[5]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">5.望郷の洞窟</SectionTitle>
        <ol>
          <li>
            洞窟内では潮の満ち引き状態によってマップや入手できるアイテムが変化します。潮の満ち引きはダンジョン内の移動と共に変化していき、一度ダンジョンから出るとリセットされます。この潮の状態により「ライフボトル」「サークレット」「レイピア」のアイテムを入手できます。レイピアは店で購入不可能なリッドの武器なので取得を推奨します。
          </li>
          <li>
            ダンジョン内の途中ではキャンプイベントがあり、リッドとキール2人でエッグベアとの戦闘になります。洞窟から出ると隣の大陸のフィールドへと辿り着く。
          </li>
          <li>フィルードマップを進んでモルルへ行く。</li>
        </ol>
        <LocationItems data={itemsData} locationIds={[7]} />
        <LocationRecipes data={recipesData} locationIds={[7]} />
        <LocationLenses data={lensesData} locationIds={[7]} />
        <LocationSubEvents data={subEventData} locationIds={[7]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">6.木陰の村モルル</SectionTitle>
        <ol>
          <li>
            道なりに進んでいった頂上にあるマゼットの家に行くとイベント。メルディが飛び出していくので追いかけることに。以降メルディと合流するまで3人での行動、戦闘になる。
          </li>
          <li>
            道中の分岐点(はしごではない)に入り、奥地まで辿り着くとボス:インセクトプラントと戦闘。
            <br />
            勝利後、メルディと合流し4人パーティに戻る。
          </li>
          <li>
            途中でキャンプ場所でイベントがあり、メルディの目的が分かる。その後マゼットの家に戻るとイベント。
            <br />
            イベント後以降、マゼットに話かけると
            <span className="daiji">モンスター図鑑</span>
            がもらえる。イベント内で必ずもらえるものでないということに注意。
          </li>
          <li>
            次は水の大晶霊ウンディーネに会うため北東にある水晶霊の河へ行く。
          </li>
        </ol>
        <LocationItems data={itemsData} locationIds={[8]} />
        <LocationRecipes data={recipesData} locationIds={[8]} />
        <LocationLenses data={lensesData} locationIds={[8]} />
        <LocationSubEvents data={subEventData} locationIds={[8]} />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">7.水晶霊の河</SectionTitle>
        <ol>
          <li>
            今までより長期戦のダンジョンになるのでアイテムや料理でHP/TPを回復できるように準備はしておこう。
          </li>
          <li>
            ダンジョンは基本的に道なりに進んでいけば良いが、浅い水面を歩いたり木に隠れた部分を通る必要がある。見た目に惑わされないように！また隠れている部分にアイテムなどがあることも。
          </li>
          <li>
            途中洞窟でウンディーネに会い、覚悟を示してほしいことを伝えられる。
            <br />
            奥地へ行くとボス:ウンディーネとの戦闘になる。勝利後にはウンディーネと契約を結び、フリンジが使えるようになる。
          </li>
          <li>
            次はグランドフォールについて王に進言するために王都インフェリアに向かうことになり、途中にある「いざないの密林」へと向かうことに。一度モルルへ戻って準備を整えておくといいだろう。
          </li>
        </ol>

        <div className="boss-advice margin-bottom-small mb-6">
          <h4>BOSS：『ウンディーネ』</h4>
          <p>HP：8000?(NORML)</p>
          <p>
            HPが半分以下になると貫通の飛び攻撃を行ってくる。先頭に立ちガードして防ぐか、ジャンプして後ろに回り込むなどの対策が有効。
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
