import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { getLocationLensesData } from "@/lib/db";
import RoundedItem from "@/components/RoundedItem";
import { recipeWorldMap } from "@/constants";
import Information from "@/components/Information";
import { subeventLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "lens";
const title = subeventLinks[pageKey].title;
const description = subeventLinks[pageKey].seoDesc;
const canonical = subeventLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};
export default async function HomePage() {
  const lensesData = await getLocationLensesData();
  const Lenses = lensesData.map((item, index) => (
    <div className="border border-slate-300 p-3 rounded-md mb-3" key={index}>
      <h3 className="text-base">
        No.{item.id}
        <span className="ml-1">（{recipeWorldMap[item.world]}）</span>
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <RoundedItem title="マップ、ダンジョン">
          {item.locationName}
        </RoundedItem>
        <RoundedItem title="場所">{item.remarks}</RoundedItem>
      </div>
    </div>
  ));

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        町やダンジョンなどで入手することができるレンズの説明とレンズの入手場所一覧データを掲載しています。
      </PageSummary>

      <section>
        <SectionTitle>レンズの説明ともらえるアイテム</SectionTitle>
        <div className="mb-8">
          町やダンジョンなどの特定の場所を調べるとレンズを入手することがあります。レンズは一定枚数以上を集めると貴重なアイテムをもらうことができるものです。シャンバールにいるイレーヌに話しかけると所持枚数に応じてアイテムがもらえます。なおアイテムをもらってもレンズは消費されません。
        </div>
        <div className="mb-8">
          <h3>イレーヌの居場所</h3>
          <p>
            レンズ所持数に応じてアイテムをくれるイレーヌは下記の場所にいます。どの場所でももらえるアイテムは変わりませんので現在地の近くを目指しましょう。
          </p>
          <table>
            <thead>
              <tr>
                <th>世界</th>
                <th>町</th>
                <th>場所</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>インフェリア</td>
                <td>シャンバール</td>
                <td>道具屋の入り口前</td>
              </tr>
              <tr>
                <td>セレスティア</td>
                <td>ティンシア</td>
                <td>道具屋の中</td>
              </tr>
            </tbody>
          </table>
          <h3>もらえるアイテム</h3>
          <table>
            <thead>
              <tr>
                <th className="w-[100px]">レンズ枚数</th>
                <th className="w-[160px]">もらえるアイテム</th>
                <th>アイテムの説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>コンボコマンド</td>
                <td>装備品:戦闘中にコマンド入力ですべての術技を出せる</td>
              </tr>
              <tr>
                <td>20</td>
                <td>インフェリマント</td>
                <td>
                  装備品:火、水、風 属性の攻撃を40%軽減
                  <br />
                  地、雷、氷 属性の攻撃は40%ダメージアップ
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>セレスティマント</td>
                <td>
                  装備品:地、雷、氷 属性の攻撃を40%軽減
                  <br />
                  火、水、風 属性の攻撃は40%ダメージアップ
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td>イクストリーム</td>
                <td>装備品:攻撃力+200、防御力-200</td>
              </tr>
              <tr>
                <td>50</td>
                <td>クローナシンボル</td>
                <td>装備品:すべての異常状態を防止する</td>
              </tr>
              <tr>
                <td>60</td>
                <td>称号「レンズハンター」</td>
                <td>称号:リッドの称号</td>
              </tr>
            </tbody>
          </table>
        </div>
        <SectionTitle>レンズの入手場所一覧（全60枚）</SectionTitle>
        <Information title="レンズの入手タイミングについて">
          レンズは期間限定ではなく、いつでも入手可能なので好きなタイミングで集めて大丈夫です
        </Information>
        {Lenses}
      </section>
    </article>
  );
}
