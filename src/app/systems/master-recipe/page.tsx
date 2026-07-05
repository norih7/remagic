import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マスター料理";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          マスター料理について説明します。マスター料理は効果量が高かったり、キャラクタのステータスアップがあったり特殊な効果があるのでぜひ習得を目指してください。
        </p>
      </PageSummary>

      <h2>マスター料理の習得について</h2>
      <div className="advice">
        <p>
          ワンダーシェフから習得するレシピの熟練度を複数MAXするとマスター料理を習得できます。マスター料理はワンダーシェフを見つけるのではなく、料理実行後に「新しい料理をマスターしました」とアナウンスされ習得します。
        </p>
        <p>
          マスター料理にはHP、TPを増加させるなどの特殊な効果を持つものがあるので是非習得しておきましょう。マスター料理は1人のキャラクターが特定の料理の熟練度をMAXにすることで習得できます。仕組み上はリッド1人で習得することが可能です。また習得したマスター料理は、習得した際のキャラクターだけではなくパーティ全員が実行可能となっています。
        </p>
      </div>

      <h2>マスター料理一覧</h2>
      <div className="advice">
        <table>
          <thead>
            <tr>
              <th>料理名</th>
              <th>効果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フルーツサンド</td>
              <td>HPとTPを全回復</td>
            </tr>
            <tr>
              <td>えいようドリンク</td>
              <td>TPを全回復、麻痺と毒状態を解除</td>
            </tr>
            <tr>
              <td>ちからにくうどん</td>
              <td>HPを全回復、凍結解除</td>
            </tr>
            <tr>
              <td>おはこなべ</td>
              <td>HPとTPを60%回復、全ステータス異常回復</td>
            </tr>
            <tr>
              <td>ポテトドリア</td>
              <td>パーティ全員のHPが1アップ</td>
            </tr>
            <tr>
              <td>マーボーカレー</td>
              <td>パーティ全員のTPが1アップ</td>
            </tr>
            <tr>
              <td>スープスパ</td>
              <td>HP60%回復、抵抗力と命中力が一時的に上昇</td>
            </tr>
            <tr>
              <td>ツナパエリア</td>
              <td>HP60%回復、攻撃力と防御力が一時的に上昇</td>
            </tr>
          </tbody>
        </table>

        <p>
          マスター料理の習得条件は
          <a href="/web/20210509165026/http://magic.brush-clover.com/eternia/data-recepi.php">
            料理データ一覧
          </a>
          へどうぞ。
        </p>
      </div>
    </article>
  );
}
