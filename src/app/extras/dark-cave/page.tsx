import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import LocationLenses from "@/components/LocationLenses";
import { getLocationItemsData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "闇の洞窟";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        闇の大晶霊「シャドウ」と契約できる隠しダンジョン「闇の洞窟」について紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>闇の洞窟</SectionTitle>
        <div className="mb-4">
          <p>
            隠しダンジョンの1つ。闇の洞窟はセレスティアの海中にあり、潜水艇を入手後からダンジョンに挑むことが可能です。ダンジョンの奥には大晶霊「シャドウ」がいて、戦闘勝利後に契約することができます。
            ダンジョン内の敵には光属性を持つ攻撃が有効で、ストーリーをレグルスの丘クリア後にレムと契約してエクスカリバー入手しているとかなり楽に攻略できます。
          </p>
        </div>
        <h3>イベント発生条件</h3>
        <p>
          闇の洞窟に入るためにはまず潜水艇でセレスティアの海中マップ
          GPS(168,18)でシャドウに関する会話イベントを発生させる必要があります。
        </p>
        <p></p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-4">
          <h3>シンボルの敵がいるフロア</h3>
          <p>
            入り口の次のフロアにいくとハシゴを降りていくところに着き、ここでは敵とエンカウントしない代わりにシンボル（シルエット）に触れる「メガデス×2、ドラゴントゥース×2」などと戦闘になります。最短で次のフロアにいくならすべて右側を降っていけばいいです。
          </p>
        </div>
        <div className="mb-4">
          <h3>セーブポイントのフロア</h3>
          <p>
            セーブポイントのあるフロアでは、左右両端にある穴を進み光っている敵のシルエットを倒すことになります。この敵は今まで出会ってきたモンスターと同じ構成で、倒すと光が消えて闇が深くなります。シャドウと出会うためにはこの要領で合計4つの光を消して洞窟を闇で満たす必要があります。
          </p>
        </div>
        <div className="mb-4">
          <h3>シャドウとの戦闘</h3>
          <p>
            洞窟内が闇で満ちるとセーブポイントがあるフロアの下中央を奥に進んだ先にシャドウが現れて戦闘となり、勝利すると契約することができます。
            BOSS：『シャドウ、エンプティドール×2』
            弱点は光。シャドウは晶霊術の詠唱時間が短いため、先にシャドウを優先的に攻撃していくのがおすすめ。ファラが獅子戦吼を覚えているならエンプティドールも巻き込んで画面端に追い込んで3体まとめての攻撃が有効。レムと契約前に倒し辛い状況であれば、ストーリーを進めて光属性攻撃をできるようにするのもいい。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[49]} />
          <LocationLenses data={lensesData} locationIds={[49]} />
        </div>
      </section>
    </article>
  );
}
