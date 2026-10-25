import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";
import GuideList from "@/components/GuideList";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import ResponsiveImage from "@/components/ResponsiveImage";
import TableOfContents from "@/components/TableOfContents";
import Title from "@/components/Title";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "first";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
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
        <Section>
          <Title>序盤にやっておきたいこと</Title>
          <p>
            マニュアル操作、アイテムドロップ率アップ、獲得ガルドを増やすなど序盤からやっておくと役立つ情報を紹介します。できるものを取り入れていただければ良いですが
            <strong>
              マニュアル操作の習得とセフィラの入手必須レベルです。
            </strong>
          </p>
        </Section>

        <Section>
          <TableOfContents />
        </Section>

        <Section>
          <SectionTitle type="flag">1. 戦闘のマニュアル操作</SectionTitle>
          <ResponsiveImage src="/systems/buttle-manual.jpg" />
          <p>
            エターニアの戦闘は攻撃やジャンプを自分のタイミングで選べる「マニュアル操作」がおすすめです。マニュアル操作は最序盤に訪れるレグルス道場で「マニュアルのしょ」を入手することで選択できるようになります。ただしストーリー上必ず入手できるのではなく特定のキャラクタに話しかけることが必要です。
          </p>
          <p>
            逆に戦闘が難しいという方は「ここはオートやセミオートで進めてもいいが、場合によってはマニュアルに切り替える」くらいの感覚で十分です。他のテイルズシリーズに馴染みのある方は、マニュアル操作の方が戦闘のテンポが良くなることを体感できると思います。
          </p>
          <GuideList
            items={[
              {
                title: "戦闘マニュアル操作/特殊操作",
                href: "/guides/buttle",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">2. 特技習得を意識する</SectionTitle>
          <ResponsiveImage src="/guides/first-skill.jpg" />
          <p>
            リッドとファラはキャラクタのレベルだけではなく専用の斬り/突きレベルで特技や奥義を習得します。リッドの最強奥義「鳳凰天駆」は突きレベルを高くしないといけないので、戦闘で突き攻撃も意識していきましょう。また斬り/突きだけではなく特技の使用回数も必要となることが多いため特技の習得を意識しながら日々の戦闘を進めてください。
          </p>
          <GuideList
            items={[
              {
                title: "特技/術の習得",
                href: "/guides/skill",
              },
              {
                title: "リッドの特技/奥義習得",
                href: "/skills/rid",
              },
              {
                title: "ファラの特技習得",
                href: "/skills/farth",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">
            3. ストーリー攻略時に料理とレンズも回収する
          </SectionTitle>
          <ResponsiveImage src="/stories/guide1-crystal-river-2.jpg" />
          <p>
            料理もレンズもストーリー攻略中に収集しておくのが効率が良いです。RE:MAGICの攻略チャートでは訪問時に獲得可能な料理とレンズを完全網羅していますのでぜひご確認ください。レンズもシャンバール訪問時には28枚ほどありインフェリマントの交換にも手が届くようになります。
          </p>
          <GuideList
            items={[
              {
                title: "攻略チャート一覧",
                href: "/stories",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">4. オート料理を活用</SectionTitle>
          <ResponsiveImage src="/guides/first-auto-cook.jpg" />
          <p>
            料理にはオート料理があり戦闘のたびに回復や状態回復を手間なく行えます。また料理には熟練度があり、オート料理でも熟練度アップが可能です。熟練度を上げていくことで成功率が100%となったりマスター料理の習得にも発展します。
          </p>
          <p>
            できれば早めに料理を覚え、オート料理を有効化しておくことで効率的にゲームを進めることができます。また長めのダンジョンでは、消耗を抑えられるだけで進行が大きく変わります。
          </p>
          <GuideList
            items={[
              {
                title: "料理一覧（ワンダーシェフの場所）",
                href: "/systems/recipe",
              },
              {
                title: "マスター料理",
                href: "/systems/master-recipe",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">
            5. スマッシュマントを早期入手してアイテムドロップを有利に
          </SectionTitle>
          <ResponsiveImage src="/guides/first-bandit.jpg" />
          <p>
            序盤でスマッシュマントを入手しておくと、敵戦闘の報酬やドロップの取り方がかなり楽になります。特にアイテム集めを重視するプレイでは、ドロップの効率が全体のテンポに直結します。
          </p>
          <p>
            スマッシュマントは「はやいうちから装備していればどんどん恩恵が大きくなる」タイプの装備です。リッドとファラに装備させて戦闘を繰り返せばアイテムドロップ率アップが狙えます。
          </p>
          <p>
            ルーンボトル変化のベースとなる「シーブスマント」はミンツ到着前にフィールドに出現する「バンデット」からドロップを狙えるので早めに入手しておきましょう。また王都インフェリア到着時には「グリップソード探し」のサブイベントでもスマッシュマントを入手できます。
          </p>
          <GuideList
            items={[
              {
                title: "モンスターデータ（No0.バンデット）",
                href: "/systems/enemy/0",
              },
              {
                title: "ルーンボトル変化一覧",
                href: "/systems/rune",
              },
              {
                title: "グリップソード探し（スマッシュマント入手）",
                href: "/subevents/grip-sword",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">
            6. いざないの密林でセフィラを入手
          </SectionTitle>
          <ResponsiveImage src="/guides/first-reverse-doll.jpg" />
          <p>
            序盤のいざないの密林では、今後の進行を有利にするための重要な取得ができます。ここで入手できるリバースドールにルーンボトルを使うと、セフィラに変化します。セフィラは装備すると獲得ガルドが2倍になるアクセサリで非常に強力です。
          </p>
          <p>
            いったん手に入れて装備し続ければ、後半の資金不足になることはまずないほどガルドが溜まるため、取得の優先順位としてかなり高いです。密林の地点で見逃さないように、早めに確保しておきましょう。
          </p>
          <GuideList
            items={[
              {
                title: "ルーンボトル変化一覧",
                href: "/systems/rune",
              },
              {
                title: "いざないの密林の攻略情報",
                href: "/stories/guide2",
              },
            ]}
          />
        </Section>

        <Section>
          <SectionTitle type="flag">7. ファラを操作キャラにする</SectionTitle>
          <ResponsiveImage src="/guides/first-farth.jpg" />
          <p>
            ファラの秘奥義「火龍炎舞」を発動させるためにはファラを操作キャラにして累計300回の戦闘で勝利する必要があります。
          </p>
          <p>
            終盤で300回戦闘するのは大変なので、ストーリーの最序盤からファラを操作していけば無理なく300回の戦闘を達成できます。ただしこれはやりこみ要素なので必須ではありません。普通のプレイではリッドを操作することが多いと思いますが、ちょっと違った視点でエターニアをやりたいという方におすすめです。
          </p>
          <GuideList
            items={[
              {
                title: "火龍炎舞",
                href: "/deeps/flame-dance",
              },
            ]}
          />
        </Section>
      </article>
    </Main>
  );
}
