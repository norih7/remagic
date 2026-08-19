import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import { subeventLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "skill-chat";
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
  const anserStyle =
    "bg-slate-100 border rounded-md px-3 py-1 font-bold text-slate-600 inline-block mt-1";
  const questionStyle = "border-b pb-2 mb-2";

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          チャットがストーリーの裏で習得していく強力な特技の数々と、そのアンロックに必要なサブイベントの発生条件を網羅した解説ページです。後半の難関である「エターナルスロー」習得時に出題される全10問のクイズ正解一覧も掲載しています。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>チャットの特技習得イベント一覧</SectionTitle>
        <Information title="サブイベント発生の前提条件">
          チャットをパーティーメンバーに加えた状態で、以下の各地のスポットへ向かうことでイベントが進行・発生します。
        </Information>

        <RoundedContainer>
          <h3>ポイハンの習得</h3>
          <EventCondition category="period">
            バンエルティア号を入手以降
          </EventCondition>

          <RoundedItem title="発生場所と手順">
            セレスティア世界のGPS座標 (183, 130)
            に位置する孤島へ上陸すると、アイフリードの像が祀られた隠しエリアに入ることができます。そこでイベントが発生し、チャットが毒属性のハンマー技「ポイハン」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>コチハンの習得</h3>
          <EventCondition category="period">
            インフェリア世界への帰還以降
          </EventCondition>

          <RoundedItem title="発生場所と手順">
            潜水艇を利用してインフェリア海の海底（GPS座標：119,
            122）にある「アジト2」へ進入し、宝箱が並ぶ奥の部屋を調査するとイベントが起き、氷属性の「コチハン」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>パラライボールの習得</h3>
          <EventCondition category="period">飛行艇を入手以降</EventCondition>

          <RoundedItem title="発生場所と手順">
            飛行艇を使ってインフェリア地上の山岳エリア（GPS座標：208,
            108）にある「晶霊温泉」へ赴き、利用料金の600ガルドを支払って温泉に浸かるとイベントが発生。雷属性の「パラライボール」を習得できます。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>エターナルスローの習得</h3>
          <EventCondition category="period">
            アイフリードの隠しアジトクリア後
          </EventCondition>

          <RoundedItem title="発生場所と手順">
            ストーリー中で「アイフリードの隠しアジト」（GPS座標：204,
            98）をクリアして潜水艇を手に入れた後、チャットの小屋の中を訪れるとチャットが暗算に苦戦するイベントが発生します。その後、アイフリードの隠しアジト内で挑戦できる「すごろくゲーム」のイベントを無事にクリアすると、最高峰の大技「エターナルスロー」を習得できます。
          </RoundedItem>
        </RoundedContainer>
      </section>

      <section className="mb-12">
        <SectionTitle>エターナルスロー習得時のクイズ正解一覧</SectionTitle>
        <p>
          アイフリードの隠しアジトでのイベント中に出題されるクイズは、ひっかけ問題が多く非常に難易度が高いため、ここで全10問の正確な内容と正解を確認しておきましょう。
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-16 p-2 border bg-slate-50 text-center">No</th>
                <th className="p-2 border bg-slate-50 text-left">
                  クイズの内容と正解
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border text-center font-bold">1</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    セージ2個、レッドセージ3個、セボリー2個。体力に関わるのはいくつ？
                  </p>
                  <span className={anserStyle}>A: 5</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">2</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    バナナ2個、キウイ3個、アマンゴ1個、キャベツ3個。果物は全部でいくつ？
                  </p>
                  <span className={anserStyle}>A: 6</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">3</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    トマト3個、ポテト4個、とうふ5丁。食材の名前に「と(ト)」とついているのはいくつ？
                  </p>
                  <span className={anserStyle}>A: 4</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">4</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    10人の海賊のうちスカーフを巻いているのが5人、パイプをふかしているのが6人。スカーフを巻いている海賊の全員はパイプをふかしている。スカーフを巻かず、パイプもふかしていないのは何人？
                  </p>
                  <span className={anserStyle}>A: 4</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">5</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q: 前の問題でパイプをふかしているのは何人？
                  </p>
                  <span className={anserStyle}>A: 6</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">6</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    アワーグラス3個、なべのふた3個、トートバッグ2個。この中で道具に分類されるアイテムの総数はいくつ？
                  </p>
                  <span className={anserStyle}>A: 3</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">7</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q: 2 × 3 - 2 + 29 - 1 × 29 は？
                  </p>
                  <span className={anserStyle}>A: 4</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">8</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    からおでん1回、おこげサンド4回、あまにんどうふ3回。これだけの料理をするのにレッドソディを何回使った？
                  </p>
                  <span className={anserStyle}>A: 1</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">9</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    えび3個、ビート5個、キャベツ8個、ポテト7個、レッドソディ8個。この材料でホットボルシチは何回作れる？
                  </p>
                  <span className={anserStyle}>A: 5</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">10</td>
                <td className="p-3 border !text-left">
                  <p className={questionStyle}>
                    Q:
                    おじいさん達には子供が4人ずついる。おじいさん達の子供達にも4人ずつ子供がいる。おじいさん達の孫の数は96である。おじいさん達は何人？
                  </p>
                  <span className={anserStyle}>A: 6</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
