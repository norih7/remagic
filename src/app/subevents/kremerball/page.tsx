import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import CardList from "@/components/CardLIst";
import Information from "@/components/Information";
// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "クレーメルボール";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        ミンツでプレイできるミニゲーム「クレーメルボール」について解説しています。このイベントをやり込むとリッドの称号を得ることができます。
        <Information type="warning" title="注意点">
          このミニゲームで得られるのはリッドの称号のみです。特別なアイテムなどは何もないため称号にこだわりのない方はスキップしても問題ありません。
        </Information>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>クレーメルボール</SectionTitle>
        <div className="mb-8">
          <p>
            ミンツの運動場にいる体操着の女の子に話かけるとクレメールボールをプレイできます。このゲームではアイテムの入手などはありませんが丁寧に作られたミニゲームです。PS版だと2人対戦もできちゃう作り込み。
          </p>
        </div>
        <div className="mb-8">
          <h3>ルールと仕様</h3>
          <CardList
            list={[
              "制限時間60秒の間に対戦相手よりボールにぶつからないようにすれば勝ち。",
              "基本的に3回勝負であり、3回目でドローになった場合は延長戦が行われる。",
              "自分と相手、ボールは「赤属性、青属性、無属性」のいずれかの属性を持つ。属性はボムを発動する際に関係してくる概念。キャラクターの属性は発生するクリスタルを拾うことで変化させることができる。",
              "ボムを発動するとそのキャラクターは無属性となる。",
              "ボムは「◯」ボタンで発動できる。ボムを発動するとキャラクターとボールの属性によって反応が起きる。自分と同じ色であれば反発し、違う色であれば引き合う。",
              "どのキャラクターを操作して勝利しても称号を入手するのはリッドで、ストーリーの進行時期によって獲得する称号が違ってきます。",
            ]}
          />
        </div>
        <h3>獲得称号</h3>
        <table>
          <thead>
            <tr>
              <th>称号</th>
              <th>プレイ時期</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>たまころがし</td>
              <td>セレスティア到着前</td>
            </tr>
            <tr>
              <td>プロボウラー</td>
              <td>セレスティアからインフェリア到着後</td>
            </tr>
            <tr>
              <td>かこもん</td>
              <td>セレスティアからインフェリア到着後</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
