import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " チャットの特技習得";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const anserStyle =
    "bg-slate-100 border rounded-md px-3 py-1 font-bold text-slate-600";
  const questionStyle = "border-b mb-2";
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          サブイベントにて習得するチャットの特技についての説明します。エターナルスロー習得のクイズ回答一覧も掲載しています。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>チャットの特技習得イベント一覧</SectionTitle>
        <Information title="イベント発生について">
          チャットを仲間している状態で下記の場所へ行くことでイベントが発生します
        </Information>
        <RoundedContainer>
          <h3>ポイハンの習得</h3>
          <EventCondition category="period">
            バンエルティア号を入手以降
          </EventCondition>

          <RoundedItem title="説明">
            セレスティアのGPS(183,130)にある孤島にいくとアイフリードの像が置いてある隠し場所に入ることができ、イベントが発生。チャットが特技「ポイハン」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>コチハンの習得</h3>
          <EventCondition category="period">
            インフェリアへの帰還以降
          </EventCondition>

          <RoundedItem title="説明">
            潜水艇をつかってインフェリア海底のGPS(119,122)にあるアジト2へ入り、宝箱がある部屋にいくとイベントが発生。チャットが特技「コチハン」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>パラライボールの習得</h3>
          <EventCondition category="period">飛行艇を入手以降</EventCondition>

          <RoundedItem title="説明">
            飛行艇をつかってインフェリア地上のGPS(208,108)にある晶霊温泉へ入り、600ガルドを支払って温泉に入るとイベントが発生。チャットが特技「パラライボール」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>エターナルスローの習得</h3>
          <EventCondition category="period">
            アイフリードの隠しアジトをクリア以降
          </EventCondition>

          <RoundedItem title="説明">
            ストーリーでアイフリードの隠しアジト
            GPS(204,98)をクリアして潜水艇を入手以降、チャットの小屋の中を訪れるとチャットが暗算できないイベントが発生。その後、アイフリートの隠しアジトで発生するすごろくゲームのイベントをクリアすると「エターナルスロー」を習得します。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
        <SectionTitle>エターナルスロー習得時のクイズ</SectionTitle>
        <p>
          エターナルスローの習得はクイズがあり難易度が高いため別途解説します。クイズのは全部で10問あり、内容と正解は以下を参照ください。
        </p>
        <table>
          <thead>
            <tr>
              <th className="w-15">No</th>
              <th>クイズの内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  セージ2個、レッドセージ3個、セボリー2個。体力に関わるのはいくつ？
                </p>
                <span className={anserStyle}>A: 5</span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  バナナ2個、キウイ3個、アマンゴ1個、キャベツ3個。果物は全部でいくつ？
                </p>
                <span className={anserStyle}>A: 6</span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  トマト3個、ポテト4個、とうふ5丁。食材の名前に「と(ト)」とついているのはいくつ？
                </p>
                <span className={anserStyle}>A: 4</span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  10人の海賊のうちスカープを巻いているのが5人、パイプをふかしているのが6人。スカーフを巻いている海賊の全員はパイプをふかしている。スカーフを巻かず、パイプもふかしていないのは何人？
                </p>
                <span className={anserStyle}>A: 4</span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q: 前の問題でパイプをふかしているのは何人？
                </p>
                <span className={anserStyle}>A: 6</span>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  アワーグラス3個、なべのふた3個、トートバッグ2個。この中で道具に分類されるのはアイテムの総数はいくつ？
                </p>
                <span className={anserStyle}>A: 3</span>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td className="!text-left">
                <p className={questionStyle}>Q: 2 × 3 - 2 + 29 -1 × 29は？</p>
                <span className={anserStyle}>A: 4</span>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  からおでん1回、おこげサンド4回、あまにんどうふ3回。これだけの料理をするのにレッドソディを何回使った？
                </p>
                <span className={anserStyle}>A: 1</span>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  えび3個、ビート5個、キャベツ8個、ポテト7個、レッドソディ8個。この材料でホットボルシチは何回作れる？
                </p>
                <span className={anserStyle}>A: 5</span>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td className="!text-left">
                <p className={questionStyle}>
                  Q:
                  おじいさん達には子供が4人ずついる。おじいさん達の子供達にも4人ずつ子供がいる。おじいさん達の孫の数は96である。おじいさん達は何人？
                </p>
                <span className={anserStyle}>A: 6</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
