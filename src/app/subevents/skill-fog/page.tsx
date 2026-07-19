import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " フォッグの特技習得";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        サブイベントにて習得するチャットの特技についての説明します。最後のエレメンタルマスターはかなり強い技なのでぜひ習得を目指してください。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>フォッグの特技習得イベント一覧</SectionTitle>
        <Information title="イベント発生について">
          フォッグを仲間している状態で下記の場所へ行くことでイベントが発生します
        </Information>
        <RoundedContainer>
          <h3>エアブレイドの習得</h3>
          <EventCondition category="period">
            リッドが「極光壁」習得後
          </EventCondition>
          <RoundedItem title="説明">
            ペイルティの港にいくとピンク色のミアキスが樽の上で眠っている。それを調べるとイベントが発生しフォッグが「エアブレイド」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>アクアスパイラルの習得</h3>
          <EventCondition category="period">
            闇の洞窟のダンジョンに入った後から
          </EventCondition>
          <RoundedItem title="説明">
            ティンシアの町にあるノーム銅像の前にいるピンクのミアキスに近づくとイベントが発生してフォッグが「アクアスパイラル」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>レイジレーザーの習得</h3>
          <EventCondition category="period">
            リッドが「極光剣」を習得後
          </EventCondition>
          <RoundedItem title="説明">
            アイメン近くの岬の砦にいるピンクのミアキスに近づくとイベントが発生してフォッグが「レイジレーザー」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>ダークレーザーの習得</h3>
          <EventCondition category="period">
            レグルスの丘をクリア後
          </EventCondition>
          <RoundedItem title="説明">
            ルイシカの町のがれきに近づくとイベントが発生してフォッグが「ダークレイザー」を習得します。がれきは奥の廃墟フロアではないことに注意。ここには一見ピンク色のミアキスがいませんがイベント中に現れます。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>エレメンタルマスターの習得</h3>
          <EventCondition category="period">飛行艇入手後</EventCondition>
          <RoundedItem title="説明">
            <p>
              リシテアイベントで「キャンセラー」をもらっている＆飛行艇を入手以降のタイミングで夜のジイニのオークション会場前にいくとイベントが発生してフォッグが「エレメンタルマスター」を習得します。
            </p>
            <GuideList
              items={[
                {
                  title: "リシテアイベントとキャンセラーの入手",
                  href: "/subevents/lysithea",
                },
                {
                  title: "飛空挺の入手",
                  href: "/subevents/flying-boad",
                },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>
      </section>
    </article>
  );
}
