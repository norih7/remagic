import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import Tag from "@/components/Tag";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マニュアル操作/特殊操作";
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
          エターニアの戦闘時の操作方法について紹介します。マニュアル操作は専用アイテムを取得することで可能となります。また他のシリーズにあるバックステップなどの操作についても解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">
          マニュアル操作（マニュアルのしょ入手）
        </SectionTitle>
        <Information type="warning" title="リマスター版における注意点">
          リマスター版では初期からマニュアル操作ができ、マニュアルのしょが無くなる可能性があります。発売後に検証してページを更新します。
        </Information>
        <div className="mb-8">
          <h3>マニュアル操作とセミオート操作</h3>
          <p>
            エターニアではデフォルトでセミオート操作による戦闘になっています。マニュアル操作の方が自由にキャラクタを操作できおすすめです。マニュアル操作を行うための方法は後述をご覧ください。
          </p>
          <h4 className="mb-2">セミオートとマニュアルの説明</h4>
          <table>
            <thead>
              <tr>
                <th className="w-[150px]">項目</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>セミオート</td>
                <td>
                  歩行、ダッシュ、ガードなど基本的なことはできますが攻撃は敵に自動的に近づいて実行されます。この攻撃の間合いを自由に操作できないことが不自由で、自分でジャンプはできません。
                </td>
              </tr>
              <tr>
                <td>マニュアル</td>
                <td>
                  セミオートにあった自動攻撃は行わず攻撃はボタンを押した地点で実行されます。手動でジャンプもでき、戦闘としても直感的に操作できるためマニュアル操作がおすすめです。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <h3>「マニュアルのしょ」の入手と設定方法</h3>
          <p>
            マニュアル操作を行うためには「マニュアルのしょ」の入手が必要で、レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できます。取得はいつでも可能ですが、ストーリー的にレグルス道場に訪れたときにやっておくのがオススメです。設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能です。
          </p>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">特殊な装備品</SectionTitle>
          <p>更新中</p>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">晶霊術</SectionTitle>
          <p>更新中</p>
        </div>
      </section>
    </article>
  );
}
