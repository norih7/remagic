import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import ToC from "@/components/ToC";
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
import Summary from "@/components/Summary";
import InlineCaption from "@/components/InlineCaption";
import Link from "next/link";

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

const toc = {
  "event-details": "イベントの詳細",
  "reliable-winning-strategy": "簡単必勝法",
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <Main title={title} type="time-limit">
      <article>
        <Section>
          <PageSummary>
            バロールの町で行われているミニゲーム「算術勝負」の解説。リッドの称号を得られるサブイベントですが、
            <strong>
              称号はインフェリアに渡ってしまうと入手できないことに注意が必要です。
            </strong>
          </PageSummary>

          <Summary
            list={[
              {
                label: "報酬",
                value:
                  "リッドの称号「さんじゅつせいねん」、「ミラクルグミ」など",
              },
              { label: "場所", value: "バロールの町" },
              { label: "発生", value: "バロールの町へ到着後から" },
            ]}
          />

          <ToC list={toc} />
        </Section>
        <Section>
          <SectionTitle id="event-details">{toc["event-details"]}</SectionTitle>
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
            <RoundedContainer title="セレスティア到着前まで">
              <div className="pt-3 grid grid-cols-1 gap-3">
                <RoundedItem title="初回報酬">
                  称号「さんじゅつせいねん」
                  <br />
                  <strong>
                    ※ セレスティアへ行ってしまうと入手不可能になります
                  </strong>
                </RoundedItem>
                <RoundedItem title="2回目以降の勝利報酬">
                  「ミラクルグミ」
                </RoundedItem>
              </div>
            </RoundedContainer>
            <RoundedContainer title="遠征の橋でインフェリア帰還後">
              <div className="pt-3 grid grid-cols-1 gap-3">
                <RoundedItem title="初回報酬">「ミラクルチャーム」</RoundedItem>
                <RoundedItem title="2回目以降の勝利報酬">
                  「レモングミ」「パイングミ」「ミラクルグミ」
                </RoundedItem>
              </div>
            </RoundedContainer>
          </div>
        </Section>

        <Section>
          <SectionTitle id="reliable-winning-strategy">
            {toc["reliable-winning-strategy"]}
          </SectionTitle>
          <div className="mb-8">
            <h3>1. 最初の状態を見て勝負するか決める</h3>
            <p>
              ゲームが始まったら3つの山の石の数を見て、
              <strong>
                同じ数の山が2つ揃っている場合（例：「6、6、3」や「8、2、8」
                など）だけ勝負してください。
              </strong>
              それ以外は撤退します。
            </p>
            <div className="mb-4">
              <p>
                勝負する場合、
                <span className="font-bold">揃っていない山の状態</span>
                で以下を選択してください。
              </p>
            </div>
            <CardList
              list={[
                "1〜3個だったら「先攻で」山の石を全部取る",
                "4の倍数（4、8、12など）であれば先に相手に取ってもらう",
                "5個以上なら「先攻で」1〜3個取って4の倍数にする",
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>2. 初手以降は「相手のマネ」をする</h3>
            <div className="mb-4">
              <p>
                1以降は相手のマネをして
                <strong>
                  「2つの山が同じ数に揃っている状態」をキープし続けてください。
                </strong>
              </p>
            </div>
            <div className="font-bold mb-2">具体例</div>
            <CardList
              list={[
                <>
                  <div className="font-bold mb-2">「8、4、8」の場合</div>
                  相手が「左の山から2個」取ったら自分は「右の山から2個」取って「6、4、6」にする。
                </>,
                <>
                  <div className="font-bold mb-2">「8、10、10」の場合</div>
                  相手が「真ん中の山から2個」取ったら自分は「右の山から2個」取って「8、8、8」にする
                </>,
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>3. もし揃っていない山からとられた場合</h3>
            <div className="mb-4">
              <p>
                2つ数が揃っている山ではなく、揃っていない山（4の倍数にした山）を相手が触ってきた場合は、以下のように石を取ります。
              </p>
            </div>
            <CardList
              list={[
                <>
                  <div className="font-bold mb-2">
                    あまりの山が4個だった場合
                  </div>
                  相手が1〜3個とった後、自分でとって0にします
                  <br />
                  （例）「6、4、6」の場合、相手が「真ん中の山から1個」取ったら「真ん中の山から3個」とって「6、0、6」にする。
                </>,
                <>
                  <div className="font-bold mb-2">
                    あまりの山が4個より多い場合
                  </div>
                  相手が1〜3個とった後、自分でとって4の倍数にします
                  <br />
                  （例）「12、8、12」の場合、相手が「真ん中の山から2個」取ったら「真ん中の山から2個」とって「12、4、12」にする。
                </>,
              ]}
            />
          </div>
        </Section>
        <Section>
          参考:{" "}
          <Link href="https://manabitimes.jp/math/950">
            ニム（複数山の石取りゲーム）の必勝法 | 高校数学の美しい物語
          </Link>
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
