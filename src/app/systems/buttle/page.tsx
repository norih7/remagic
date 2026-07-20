import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import Tag from "@/components/Tag";
import ResponsiveImage from "@/components/ResponsiveImage";

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
          <ResponsiveImage src="/systems/buttle-manual.jpg" />
          <p>
            マニュアル操作を行うためには「マニュアルのしょ」の入手が必要で、レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できます。取得はいつでも可能ですが、ストーリー的にレグルス道場に訪れたときにやっておくのがオススメです。設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能です。
          </p>
        </div>
      </section>
      <section>
        <SectionTitle type="system">戦闘中の特殊操作</SectionTitle>
        <div className="mb-8">
          <h3>戦闘中の移動アップ</h3>
          <p>
            アクセサリ「エルヴンブーツ」または「ジェットブーツ」を装備していると戦闘中の移動速度がアップします。エルヴンブーツは20%、ジェットブーツは50%アップします。ジェットブーツは最初速すぎると思うことも。
          </p>
        </div>
        <div className="mb-8">
          <h3>バックステップ</h3>
          <p>
            アクセサリ「ステップリング」または「リバヴィウサー」を装備していると戦闘中にバックステップを取ることができます。エターニアのバックステップは
            `□ + ↓` で実行されます。他のシリーズだと `□ + ←`
            なので使い勝手に慣れるまで少し時間がかかるかも。
          </p>
          <p>
            ステップリングもリバヴィウサーもバックステップの他にもう一つ特殊操作が可能となります。効果的にはステップリングの方が使い勝手が良くおすすめです。また例外としてリッドがギルガメッシュ装備をすべて装備状態にするとこれらのアクセサリがなくてもバックステップを取ることができます。ステップリングと同様の効果があり、吹き飛ばし時の受け身が可能です。
          </p>
          <table>
            <thead>
              <tr>
                <th className="w-[150px]">アイテム</th>
                <th>バックステップ以外の特殊操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  ステップリング
                  <br />
                  ギルガメッシュ装備
                </td>
                <td>
                  敵に吹き飛ばされたとき、着地前に□ボタンを押すとダウン回避
                </td>
              </tr>
              <tr>
                <td>リバヴィウサー</td>
                <td>
                  物理攻撃を受けた瞬間に□ボタンを押すとダメージが1/4となる
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-8">
          <h3>晶霊術/フォッグ特技の高速化</h3>
          <p>
            キールとフォッグを戦闘の操作キャラクタにすると特殊操作ができます。キールだと術を使用中にHP/TPの下に方向キーが表示され、正しく入力すると詠唱時間の短縮になります。フォッグの特技も同様です。術や技によって入力する方向キーは異なります。
          </p>
        </div>
      </section>
    </article>
  );
}
