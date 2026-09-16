import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";
import GuideList from "@/components/GuideList";

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
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          序盤でやっておきたいのは、戦闘の安定と成長のスピードを上げることです。少しの準備で、後半の難所に突入する時点で大きく楽になります。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="flag">1. 戦闘のマニュアル操作</SectionTitle>
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
              href: "/systems/buttle",
            },
          ]}
        />
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">2. 特技習得を意識する</SectionTitle>
        <p>
          リッドとファラはキャラクタのレベルだけではなく専用の斬り/突きレベルで特技や奥義を習得します。リッドの最強奥義「鳳凰天駆」は突きレベルを高くしないといけないので、戦闘で突き攻撃も意識していきましょう。また斬り/突きだけではなく特技の使用回数も必要となることが多いため特技の習得を意識しながら日々の戦闘を進めてください。
        </p>
        <GuideList
          items={[
            {
              title: "特技/術の習得",
              href: "/systems/skill",
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
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          3. ストーリー攻略時に料理とレンズも回収する
        </SectionTitle>
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
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">4. オート料理を活用</SectionTitle>
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
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          5. スマッシュマントを早期入手してアイテムドロップを有利に
        </SectionTitle>
        <p>
          序盤でスマッシュマントを入手しておくと、敵戦闘の報酬やドロップの取り方がかなり楽になります。特にアイテム集めを重視するプレイでは、ドロップの効率が全体のテンポに直結します。
        </p>
        <p>
          スマッシュマントは「はやいうちから装備していればどんどん恩恵が大きくなる」タイプの装備です。また複数装備しても重複効果があります（2つ装備すると12%のアイテムドロップアップ効果）。
        </p>
        <p>
          ルーンボトル変化のベースとなる「シーブスマント」はミンツ到着前にフィールドの敵からドロップを狙えるので早めに入手しておきましょう。また王都インフェリア到着時には「グリップソード探し」のサブイベントでもスマッシュマントを入手できます。
        </p>
        <GuideList
          items={[
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
      </section>

      <section className="mb-12">
        <SectionTitle type="flag">
          6. いざないの密林でセフィラを入手
        </SectionTitle>
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
      </section>
    </article>
  );
}
