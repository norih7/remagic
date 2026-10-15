import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import CardList from "@/components/CardLIst";
import Information from "@/components/Information";
import { subeventLinks } from "@/constants";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "quiz";
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
  return (
    <Main title={title}>
      <article>
        <PageSummary>
          ミンツ大学で挑戦できるテイルズクイズについて解説します。クイズ一覧と回答を掲載しています。
        </PageSummary>
        <Section>
          <SectionTitle>テイルズクイズ</SectionTitle>
          <EventCondition category="period">ミンツ到着後</EventCondition>

          <div className="mb-8">
            <p>
              ミンツ大学のではテイルズクイズを受験できます。クイズは初級、中級、上級とあり、最初にミンツに訪れた時点では初級のみ受験できます。各級に合格するとアイテムと称号を獲得できます。クイズは時限要素はないためいつでも受験できます。
            </p>
          </div>
          <div className="mb-8">
            <h3>クイズの開放タイミング</h3>
            <table>
              <thead>
                <tr>
                  <th className="w-[50px]">階級</th>
                  <th>開放タイミング</th>
                  <th>報酬</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>初級</td>
                  <td>初期から開放</td>
                  <td>
                    称号「テイルズせんせい」
                    <br />
                    「ミックスグミ」
                  </td>
                </tr>
                <tr>
                  <td>中級</td>
                  <td>遠征の橋でインフェリア帰還後から開放</td>
                  <td>
                    称号「テイルズはかせ」
                    <br />
                    「ミラクルグミ」
                  </td>
                </tr>
                <tr>
                  <td>上級</td>
                  <td>遠征の橋でインフェリア帰還後から開放</td>
                  <td>
                    称号「テイルズおたく」
                    <br />
                    「コンボコマンド」
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <SectionTitle>初級（リマスター版）</SectionTitle>
          <Information type="warning" title="クイズの出題順について">
            クイズは順番はランダムになるため質問を確認したうえで回答してください
          </Information>
          <table>
            <thead>
              <tr>
                <th>質問</th>
                <th className="w-[180px]">回答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  「テイルズオブエクシリア」に登場するミラは自分のことを何と名乗っていましたっけ？
                </td>
                <td>マクスウェル</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブシンフォニア」に登場するコレットは何をするために旅立ったんでしたっけ？
                </td>
                <td>世界再生の旅</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブヴェスペリア」に登場するラピードが普段口にくわえているものは何でしたっけ？
                </td>
                <td>キセル</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブベルセリア」に登場するアイゼンが所属する海賊団の名前は何でしたっけ？
                </td>
                <td>アイフリード</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブアライズ」にて、主人公アルフェンが、過去の記憶と共に失っているものは何ですか？
                </td>
                <td>痛覚</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブシンフォニア」に登場するクラトスの正体は何でしたっけ？
                </td>
                <td>天使</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブベルセリア」で、世界中に業魔があふれるようになった日のことを何と呼びましたっけ？
                </td>
                <td>開門の日</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブアライズ」に登場するリンウェルの相棒であるフルルは何という種族のフクロウだったでしょうか？
                </td>
                <td>ダナフクロウ</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブ」シリーズに登場するアイテムで、使用するとしばらくの間、敵とのエンカウント率を下げることができるアイテムの名前は何でしょう？
                </td>
                <td>ホーリィボトル</td>
              </tr>
              <tr>
                <td>「テイルズオブヴェスペリア」に登場するユーリの名前は？</td>
                <td>ユール・ローウェル</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブエクシリア」に登場するレイアは誰の幼馴染ですか？
                </td>
                <td>ジェイド</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブグレイセス」でアスベルがソフィに初めて出会った場所はどこでしたか？
                </td>
                <td>テントの裏山の花畑</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブアライズ」にて、地水火風光闇の六属性があり、ものや生命に宿る力のことを何と呼びますか？
                </td>
                <td>星精力</td>
              </tr>
              <tr>
                <td>
                  「テイルズオブグレイセス」のバトルには、A技とB技の2つのスタイルが存在します。A技とは何の略でしょうか？
                </td>
                <td>アーツ</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section>
          <SectionTitle>中級（リマスター版）</SectionTitle>
          <p>準備中です</p>
          <table>
            <thead>
              <tr>
                <th>質問</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section>
          <SectionTitle>上級（リマスター版）</SectionTitle>
          <p>準備中です</p>
          <table>
            <thead>
              <tr>
                <th>質問</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </article>
    </Main>
  );
}
