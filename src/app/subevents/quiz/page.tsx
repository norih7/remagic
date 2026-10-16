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
            <Information type="warning" title="リマスター版の違い">
              リマスター版ではクイズ内容が刷新されていますが報酬には変化がありません。
            </Information>
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
          <Information type="warning" title="クイズの出題順について">
            クイズは順番はランダムになるため質問を確認したうえで回答してください
          </Information>
          <SectionTitle>初級（リマスター版）</SectionTitle>
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
                  テイルズオブエクシリアに登場するエリーゼは何の被験体にされていたんだっけ？
                </td>
                <td>増霊極</td>
              </tr>
              <tr>
                <td>
                  テイルズオブベルセリアに登場するシグレの持つランゲツ家に伝わる刀の名前は何と言ったかな？
                </td>
                <td>號嵐</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシンフォニアで機械の原動力になったり、装備したものの遺伝子に着床したりすることで身体能力を強化させる無期生命体の名前を何と言ったかな
                </td>
                <td>エクスフィア</td>
              </tr>
              <tr>
                <td>
                  テイルズオブアライズにて領将ガナベルトが戦闘中に使用する秘奥義といえば？
                </td>
                <td>インデグネイション</td>
              </tr>
              <tr>
                <td>
                  テイリズオブアライズにてリンウェルの所属するシスロディアの抵抗組織の名前は何だったかな？
                </td>
                <td>銀の剣</td>
              </tr>
              <tr>
                <td>
                  テイルズオブエクシリアに登場するイバルは何を誇りにしている？
                </td>
                <td>マクスウェルの巫子</td>
              </tr>
              <tr>
                <td>
                  テイリズオブシンフォニアでマーテル今日の中枢を担い、ユグドラシルを長とする組織の名前は？
                </td>
                <td>クルシス</td>
              </tr>
              <tr>
                <td>
                  テイルズオブヴェスペリアにおいて魔導器（ブラスティア）を発明した種族は？
                </td>
                <td>クリティア族</td>
              </tr>
              <tr>
                <td>
                  テイルズオブヴェスペリアの世界で10年前、人類が魔導器（ブラスティア）を氾濫させエアルのバランスを崩したことにより始祖の隷長（エンテレケイア）との間に勃発した争いのことを何と呼ぶ？
                </td>
                <td>人魔戦争</td>
              </tr>
              <tr>
                <td>
                  テイルズオブグレイセスに登場するヒューバードの軍人としての階級は何だっけ？
                </td>
                <td>少佐</td>
              </tr>
              <tr>
                <td>
                  テイルズオブグレイセスにおいて少年時代に「友情の誓い」を行なっていないのは誰だったかな
                </td>
                <td>シェリア</td>
              </tr>
              <tr>
                <td>
                  テイルズオブベルセリアに登場するシアリーズは誰が聖隷に転生した姿だっけ？
                </td>
                <td>セリカ</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシンフォニアに登場するジーニアスの好きな女の子は誰だっけ？
                </td>
                <td>プレセア</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシリーズで登場したことのあるグミの名前はどれかな？
                </td>
                <td>マグログミ</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシリーズに登場するキャラクターの強化に使用するアイテムで、特定の能力値を上昇させる効果のあるアイテムの名前は？
                </td>
                <td>レッドベルベーヌ</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section>
          <SectionTitle>上級（リマスター版）</SectionTitle>
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
                  テイルズオブエクシリアに登場するミュゼは何から生み出された精霊だったかな
                </td>
                <td>断界殻</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシンフォニアで特定の条件を満たした際に発動可能なプレセアの隠し秘奥義は何かな？
                </td>
                <td>緋焔滅焦陣</td>
              </tr>
              <tr>
                <td>
                  テイルズオブグレイセスの世界に存在する大輝石（バルキネスクリアス）ではないものは次のうちどれじゃろうか
                </td>
                <td>アーステッパー</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシンフォニアに登場するプレセアの実年齢はいくつじゃった？
                </td>
                <td>28</td>
              </tr>
              <tr>
                <td>
                  テイルズオブアライズにてキサラが称号「無敵の馬鹿力」を開放するためには何の魚を釣ればよかったかな？
                </td>
                <td>ハクギンカジキ</td>
              </tr>
              <tr>
                <td>
                  テイルズオブヴェスペリアに登場するパティが記憶を失うことになった秘薬の名前は何と言ったかな？
                </td>
                <td>アムリタ</td>
              </tr>
              <tr>
                <td>
                  テイルズオブアライズにて称号「烈火の舌」を開放するためにアルフェンが作るのはどんな料理だったかな？
                </td>
                <td>ローストチキン</td>
              </tr>
              <tr>
                <td>
                  テイルズオブシンフォニアに登場するリーガルが会長を務める企業の名は何じゃったかな？
                </td>
                <td>レザレノ・カンパニー</td>
              </tr>
              <tr>
                <td>
                  テイルズオブベルセリアに登場するベンウィックが帽子の上で飼っている鳥の名前は何と言ったかな？
                </td>
                <td>シルフモドキ</td>
              </tr>
              <tr>
                <td>
                  テイルズオブグレイセスに登場するマリク出身地を覚えておるかな？
                </td>
                <td>フェンデル</td>
              </tr>
              <tr>
                <td>
                  テイルズオブエクシリアに登場する、自然や精霊が死滅し、荒廃が進んだ世界の名前は何かな？
                </td>
                <td>エレンピオス</td>
              </tr>
              <tr>
                <td>
                  テイルズオブエクシリアに登場するア・ジュール部族の中で魔物を操ることが得意な部族は何じゃったかな？
                </td>
                <td>キタル族</td>
              </tr>
              <tr>
                <td>
                  テイルズオブヴェスペリアの世界で1000年以上前に栄えた文明を何と呼ぶか覚えておるかな
                </td>
                <td>古代ゲライオス文明</td>
              </tr>
              <tr>
                <td>
                  テイルズオブグレイセスで1000年前にフェドラからエフィネアに移住した高い技術力を持った種族は何と言ったかな
                </td>
                <td>アンマルチア</td>
              </tr>
              <tr>
                <td>
                  テイルズオブベルセリアに登場する世界中の情報を網羅し、暗殺や破壊発動など非合法の仕事の請負や仲介などを行う闇ギルドの名前は何じゃったかな
                </td>
                <td>血翅蝶</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </article>
    </Main>
  );
}
