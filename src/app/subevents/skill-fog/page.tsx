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

const title = "フォッグの特技習得イベント攻略";
const description =
  "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。フォッグがサブイベントで習得するすべての特技（エアブレイド、アクアスパイラル、レイジレーザー、ダークレイザー、エレメンタルマスター）の発生条件、場所、強力な最終技習得までの流れを詳しく解説しています。";

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          フォッグが物語の進行に合わせてサブイベントで習得していく、多彩な属性銃弾スキルおよび最終奥義のアンロック方法を解説するページです。最大火力を誇る「エレメンタルマスター」の習得を目指してぜひすべてのイベントをクリアしましょう。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>フォッグの特技習得イベント一覧</SectionTitle>
        <Information title="サブイベント発生の前提条件">
          フォッグをパーティーメンバーに加えた状態で、以下の各地のスポットへ向かうことでイベントが進行・発生します。
        </Information>

        <RoundedContainer>
          <h3>エアブレイドの習得</h3>
          <EventCondition category="period">
            リッドが「極光壁」習得後
          </EventCondition>
          <RoundedItem title="発生場所と手順">
            ペイルティの港へ行くと、樽の上で眠っているピンク色のミアキスを発見できます。そのミアキスを調査するとイベントが勃発し、フォッグが風属性の銃弾技「エアブレイド」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>アクアスパイラルの習得</h3>
          <EventCondition category="period">
            闇の洞窟のダンジョン突入後から
          </EventCondition>
          <RoundedItem title="発生場所と手順">
            ティンシアの町に設置されているノーム銅像の前に佇むピンクのミアキスに近づくとイベントがトリガーされ、フォッグが水属性の「アクアスパイラル」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>レイジレーザーの習得</h3>
          <EventCondition category="period">
            リッドが「極光剣」を習得後
          </EventCondition>
          <RoundedItem title="発生場所と手順">
            アイメン近郊にある岬の砦へ向かい、そこにいるピンクのミアキスに近づくことでイベントが発生。フォッグが光属性の「レイジレーザー」を習得します。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>ダークレイザーの習得</h3>
          <EventCondition category="period">
            レグルスの丘クリア後
          </EventCondition>
          <RoundedItem title="発生場所と手順">
            ルイシカの町にあるがれき付近に近づくとイベントが発生し、フォッグが闇属性の「ダークレイザー」を習得します。なお、ここで目指すがれきは奥側の廃墟フロアではなく手前側にあります。一見すると最初はピンク色のミアキスが姿を見せていませんが、イベントの進行中に突如現れる仕様になっています。
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>エレメンタルマスターの習得</h3>
          <EventCondition category="period">
            飛行艇入手後 ＆ キャンセラー所持
          </EventCondition>
          <RoundedItem title="発生場所と手順">
            <p>
              リシテアイベントをこなして重要アイテム「キャンセラー」を入手済みであること、かつ「飛行艇」を手に入れている状態の夜間に、ジイニのオークション会場前へ足を運ぶとイベントが発生します。これに勝利・クリアすることで、フォッグの極致である全属性大技「エレメンタルマスター」を習得できます。
            </p>
            <div className="mt-3">
              <GuideList
                items={[
                  {
                    title: "リシテアイベントとキャンセラーの入手手順はこちら",
                    href: "/subevents/lysithea",
                  },
                  {
                    title: "飛行艇の入手法に関する攻略ガイドはこちら",
                    href: "/subevents/flying-boad",
                  },
                ]}
              />
            </div>
          </RoundedItem>
        </RoundedContainer>
      </section>
    </article>
  );
}
