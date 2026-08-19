import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import LocationLenses from "@/components/LocationLenses";
import { getLocationItemsData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import ResponsiveImage from "@/components/ResponsiveImage";
import { extraLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "dark-cave";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
const canonical = extraLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          闇の大晶霊「シャドウ」と契約を果たすために訪れる隠しダンジョン「闇の洞窟」の攻略情報ページです。ダンジョンへのアクセス方法から、内部でのギミック解除手順、ボス戦の対策、獲得できる貴重なアイテムやチャットレンズのデータを一覧で解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>闇の洞窟とは</SectionTitle>
        <div className="mb-4">
          <p>
            セレスティアの海中深くに潜む隠しダンジョンのひとつです。物語の進行で「潜水艇」を入手した直後から自由に挑むことが可能です。ダンジョン内に巣食うモンスターたちは総じて光属性が弱点となっており、雷晶霊の遺跡クリア後に入手できる強力な武器「エクスカリバー」などを装備させておくと戦闘を非常にスムーズに進められます。最奥に待つ大晶霊「シャドウ」との戦闘に勝利すれば、晴れて契約を結ぶことができます。
          </p>
        </div>
        <h3>闇の洞窟への行き方・アクセス</h3>
        <p>
          闇の洞窟はセレスティア世界の海中に位置しています。「バリル城」の海域から北東方向へ進んだ周辺で、潜水艇に乗り換えてGPS座標目安
          (5,12)
          付近へアプローチすると、ダンジョンの入り口を発見・進入することができます。
        </p>
        <p></p>
      </section>

      <section className="mb-12">
        <SectionTitle>ダンジョン攻略手順</SectionTitle>
        <div className="mb-4">
          <h3>シンボルエネミーが徘徊するフロア</h3>
          <p>
            入り口から次のフロアへ進みハシゴを降りていくエリアでは、通常のランダムエンカウントが発生しない代わりに、画面内をうろつく敵の影（シルエット）に触れると「メガデス
            ×2、ドラゴントゥース
            ×2」などの固定パーティーと戦闘になります。もし余計な戦闘を避けて最短ルートで次の階層へ降りたい場合は、ひたすら右側のハシゴやルートを選んで降りていくのがおすすめです。
          </p>
        </div>
        <div className="mb-4">
          <h3>セーブポイント周辺のフロア（ギミック）</h3>
          <p>
            安全に準備ができるセーブポイントのあるフロアでは、左右両端にある穴へと進み、奥で光を放っている敵のシルエット（シンボル）をそれぞれ撃破していく必要があります。ここに登場する敵は過去に遭遇したおなじみのモンスター構成ですが、倒すと周囲の光が消えていきダンジョン内により深い闇が満ちていきます。シャドウの居場所を出現させるためには、この要領で計4箇所の光をすべて消して洞窟内を暗闇で包み込むことが必須条件となります。
          </p>
        </div>
        <div className="mb-4">
          <h3>大晶霊「シャドウ」とのボス戦攻略</h3>
          <p>
            洞窟内を完全に闇で満たした状態で、セーブポイントがあるフロアの「下側中央」から奥へ進むとシャドウが現れて戦闘に突入します。見事勝利すればシャドウとの契約が成立します。
          </p>
          <p>
            <strong>BOSS：『シャドウ、エンプティドール ×2』</strong>
            <br />
            シャドウの弱点は光属性です。シャドウは強力な晶霊術を非常に短い詠唱時間で次々と繰り出してしまうため、放置すると危険です。まずは優先的にシャドウ本体を集中攻撃して各個撃破を狙うのが安定します。前衛のファラが奥義「獅子戦吼」を習得済みの場合は、お供のエンプティドールごと巻き込む形で画面端へ押し込み、3体まとめて範囲攻撃に巻き込むと効率よくダメージを与えられます。もし「レム」と未契約の段階で苦戦する場合は、一度ストーリーを進めて光属性の強力な備えを整えてから再挑戦するのも有効です。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内で入手できるアイテム・レンズ</h3>
          <LocationItems data={itemsData} locationIds={[49]} />
          <LocationLenses data={lensesData} locationIds={[49]} />
        </div>
      </section>
    </article>
  );
}
