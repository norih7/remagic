import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";
import Section from "@/components/Section";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";
import GuideList from "@/components/GuideList";
import Main from "@/components/SiteLayout/Main";
import CardList from "@/components/CardLIst";
import RoundedInlineList from "@/components/RoundedInlineList";
import Title from "@/components/Title";
import TimeLimitIcon from "@/components/Icons/TimeLimitIcon";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "arithmetic";
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

const topics = "bg-gray-600 px-3 py-0.5 rounded-xs text-white";

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <Main title={title}>
      <article>
        <PageSummary>
          バロールの町で行われているミニゲーム「算術勝負」の解説。
        </PageSummary>
        <Section>
          <Title>
            <TimeLimitIcon />
            算術勝負
          </Title>
          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="報酬">
              リッドの称号「さんじゅつせいねん」、「ミラクルグミ」など
            </RoundedInlineList>
            <RoundedInlineList title="場所">バロールの町</RoundedInlineList>
            <RoundedInlineList title="発生">
              バロールの町へ到着後から
            </RoundedInlineList>
          </div>
          <p>
            バロールの町で行われているミニゲーム「算術勝負」の解説。リッドの称号を得られるサブイベントですが、
            <strong>
              称号はインフェリアに渡ってしまうと入手できないことに注意が必要です。
            </strong>
          </p>
        </Section>
        <Section>
          <SectionTitle>イベントの詳細</SectionTitle>
          <ResponsiveImage src="/subevents/arithmetic-title.jpg" />
          <div className="mb-8">
            <p>
              バロールの町にいる商人に話しかけることで算術勝負のミニゲームができ、勝利すると称号とアイテムがもらえます。このミニゲームはいつでもできますが称号はセレスティアへ行く前までしか入手できない時間制限があります。
            </p>
            <Information type="warning" title="注意点">
              このミニゲームで時限要素となっているのはリッドの称号だけです。称号にこだわりのない方はスキップしても問題ありません。
            </Information>
          </div>
          <div className="mb-8">
            <h3>報酬情報</h3>
            <table>
              <thead>
                <tr>
                  <th>タイミング</th>
                  <th>報酬</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>セレスティア到着前まで</td>
                  <td>
                    <div className="text-left">
                      <span className={topics}>初回勝利</span>
                      <br />
                      称号「さんじゅつせいねん」
                      <br />
                      「レモングミ」
                      <br />
                      <span className={topics}>2階目以降</span>
                      <br />
                      「ミラクルグミ」
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>遠征の橋でインフェリア帰還後</td>
                  <td>
                    <div className="text-left">
                      <span className={topics}>初回勝利</span>
                      <br />
                      「ミラクルチャーム」
                      <br />
                      <span className={topics}>2階目以降</span>
                      <br />
                      「レモングミ」「パイングミ」「ミラクルグミ」
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <SectionTitle>確実な勝ち方</SectionTitle>
          <div className="mb-8">準備中です</div>
        </Section>
        {/* <Section>
          <SectionTitle>確実な勝ち方</SectionTitle>
          <div className="mb-8">
            <h3>1. 初回の配置をコントロール</h3>
            <p>
              初回の石の数が以下のパターンとなるまで繰り返す。もしこのパターンでなければ辞退して再挑戦。
            </p>
            <CardList list={["aaa"]} />
          </div>

          <div className="mb-8">
            <h3>2. 相手に先に引かせる</h3>
          </div>

          <div className="mb-8">
            <h3>3. 相手の取った山から石を取る</h3>
            <p>
              相手の取った山から「4 -
              （相手の取った石の数）」の結果を取ります。例えば相手が1の山から2個取った場合は、自分も1の山から2個取ります。これを繰り返すことで確実に勝ちに持っていけます。
            </p>
          </div>
        </Section> */}
      </article>
    </Main>
  );
}
