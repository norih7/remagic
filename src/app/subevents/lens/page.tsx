import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import { getLocationLensesData } from "@/lib/db";
import RoundedItem from "@/components/RoundedItem";
import { recipeWorldMap } from "@/constants";
import Information from "@/components/Information";
import { subeventLinks } from "@/constants";
import ResponsiveImage from "@/components/ResponsiveImage";
import Tag from "@/components/Tag";
import Section from "@/components/Section";

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
      <div className="mb-2 items-center">
        <h3>
          No.{item.id} {item.locationName}
        </h3>
        <div className="mr-1">
          <Tag>{recipeWorldMap[item.world]}</Tag>
        </div>
      </div>
      <div className="">
        <RoundedItem title="場所">
          <p>{item.remarks}</p>
          <ResponsiveImage
            src={`/subevents/lens-location${item.id}.jpg`}
            noSpace
          />
        </RoundedItem>
      </div>
    </div>
  ));

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        町やダンジョンなどで入手することができるレンズの説明とレンズの入手場所一覧データを掲載しています。
      </PageSummary>

      <Section>
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
          <p>
            インフェリマント、セレスティマント、クローナシンボルが目玉アイテム。マントはデメリットはあるものの、常に装備するのではなく「ボス戦で属性対策をする」という使い方をすれば非常に強力です。クローナシンボルはすべての異常状態を防ぐ最強クラスの装備品。
          </p>
          <table>
            <thead>
              <tr>
                <th className="w-[100px]">レンズ枚数</th>
                <th className="">もらえるアイテム</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>
                  <p className="text-left">
                    <strong>コンボコマンド</strong>
                    <br />
                    装備品:戦闘中にコマンド入力ですべての術技を出せる
                  </p>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  <p className="text-left">
                    <strong>インフェリマント</strong>
                    <br />
                    装備品:火、水、風 属性の攻撃を40%軽減
                    <br />
                    地、雷、氷 属性の攻撃は40%ダメージアップ
                  </p>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  <p className="text-left">
                    <strong>セレスティマント</strong>
                    <br />
                    装備品:地、雷、氷 属性の攻撃を40%軽減
                    <br />
                    火、水、風 属性の攻撃は40%ダメージアップ
                  </p>
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td>
                  <p className="text-left">
                    <strong>イクストリーム</strong>
                    <br />
                    装備品:攻撃力+200、防御力-200
                  </p>
                </td>
              </tr>
              <tr>
                <td>50</td>
                <td>
                  <p className="text-left">
                    <strong>クローナシンボル</strong>
                    <br />
                    装備品:すべての異常状態を防止する
                  </p>
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td>
                  <p className="text-left">
                    <strong>称号「レンズハンター」</strong>
                    <br />
                    称号:リッドの称号
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SectionTitle>レンズの入手場所一覧（全60枚）</SectionTitle>
        <Information type="warning" title="レンズの入手タイミングについて">
          レンズは期間限定ではなく、基本的にはいつでも入手可能なので町やダンジョンで取り逃してもあとで回収可能です。ただしジイニのオークション会場にあるレンズだけ、先に王都インフェリアの闘技場「王国一決定戦」で優勝すると獲得できなくなります。ジイニで先にレンズを獲得しておくことを推奨します。
        </Information>
        {Lenses}
      </Section>
    </article>
  );
}
