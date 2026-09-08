import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

// const pageKey = "coliseum";
// const title = subeventLinks[pageKey].title;
// const description = subeventLinks[pageKey].seoDesc;
// const canonical = subeventLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
const title = "闘技場";
export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        王都インフェリアで開催されている闘技場について解説します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>闘技場</SectionTitle>
        <EventCondition category="period">
          王都インフェリアに到着後いつでも
        </EventCondition>
        <p>
          王都インフェリアには闘技場があり、連戦を勝ち抜くことで報酬を獲得できます。
          闘技場には「王都一決定戦」「王国一決定戦」「世界一決定戦」の3つのランクが用意されており、いずれもリッドが単独で3連戦に挑む形式です。ランクの3試合すべてに勝利すると優勝となり、報酬を手に入れることができます。
        </p>
        <p>
          また「世界一決定戦」で初めて優勝すると、テイルズオブファンタジアの「クレス」が参戦するイベントが発生します。クレスは強敵ですが倒すとリッドの最強武器の1つ「エターナルソード」を入手できます。
        </p>
        <Information type="warning" title="難易度">
          闘技場は最初に王都インフェリアにきた時から挑戦できますが難易度が高いため初回訪問時ではまずクリアできません。リッドが猛虎連撃破や鳳凰天駆を覚えるあたり（レベル50ほど）で挑戦することを推奨します。
        </Information>
      </section>
      <section className="mb-12">
        <SectionTitle>王都一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 20,000ガルド、お薬セット（セージ、セボリー）",
              "2回目以降の報酬: 15,000ガルド、グミセット（レモングミ、パイングミ）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ピーケー×2、レンジャー、セージ
          </RoundedItem>
          <RoundedItem title="説明">
            先にダッシュで敵を素通りして魔術を使う「セージ」を倒しましょう。広範囲で攻撃できる鳳凰天駆が有効。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            クラーケン×2、トリトン×2
          </RoundedItem>
          <RoundedItem title="説明">
            敵は全員水属性なので敵が強い場合は水属性に耐久がある「インフェリマント」や「みずぐも」を装備して挑みましょう。連続攻撃で畳み掛ける猛虎連撃破が有効。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王都一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-capital-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ビーストオーガ×2、ファイアクラウド
          </RoundedItem>
          <RoundedItem title="説明">
            空に浮いている「ファイアクラウド」を先に倒しましょう。烈空斬などで攻撃を当て、虎牙蓮斬や猛虎連撃破で隙を与えずダメージを与えていきましょう。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
        <SectionTitle>王国一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 50,000ガルド、もっとお薬セット（レッドセージ、レッドセボリー）",
              "2回目以降の報酬: 20,000ガルド、続グミセット（レモングミ×2、パイングミ×2）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            レヴナント×2、メタリカ、メガデス
          </RoundedItem>
          <RoundedItem title="説明">
            まずは術を使う「メガデス」を優先して倒しましょう。敵はすべて闇属性攻撃で、光弱点。「エクスカリバー」のような強力な光属性武器を装備すると楽に勝てます。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ミスリルゴーレム×2、フリーズキーパー
          </RoundedItem>
          <RoundedItem title="説明">
            空に浮いていて術を使う「フリーズキーパー」を優先して倒しましょう。烈空斬や虎牙蓮斬、猛虎連撃破が有効です。ミスリルゴーレムは硬くてダメージが通りにくいので戦闘途中に雷属性の「ボルテックソード」や「ミョルニル」に武器変更するのもおすすめです。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>王国一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-kingdom-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            イビルリッパー×2、デリブルテンタクル×2
          </RoundedItem>
          <RoundedItem title="説明">
            敵はすべて光属性攻撃の弱点を持つので「エクスカリバー」装備に切り替えて戦うのが有効。カタツムリのような「デリブルテンタクル」から優先して攻撃していき影を移動する「イビルリッパー」は深追いせずあとで倒す作戦が有効です。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
        <SectionTitle>世界一決定戦</SectionTitle>
        <div className="mb-4">
          <CardList
            list={[
              "初回優勝の報酬: 80,000ガルド、どきどきセット（エリクシール×2、レッドセージ、レッドセボリー、レッドベルベーヌ、レッドラベンダー）",
              "2回目以降の報酬: 50,000ガルド、超グミセット（ミラクルグミ×2、ミックスグミ×2）",
            ]}
          />
        </div>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 1回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-1.jpg" />
          <RoundedItem title="敵" className="mb-3">
            デュエリスト、ウィザード×2
          </RoundedItem>
          <RoundedItem title="説明">
            術を使う「ウィザード」を優先して倒しましょう。デュエリストは近づくと連続攻撃をして、当たるとダメージは大きいです。最悪はジャンプ攻撃で撃破しましょう。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 2回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-2.jpg" />
          <RoundedItem title="敵" className="mb-3">
            ヘルカイト、フェニックス×2
          </RoundedItem>
          <RoundedItem title="説明">
            敵の攻撃が火属性なので攻撃が痛ければ耐久がある「インフェリマント」などを装備しましょう。また敵の弱点は氷属性なので「アイスコフィン」なども有効。全員空に浮いているので猛虎連撃破で隙を与えずに連続攻撃を叩き込みましょう。逆に鳳凰天駆は火属性のためダメージが通らないので使わないようにしましょう。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className={styles.header}>世界一 3回戦</h3>
          <ResponsiveImage src="/subevents/coliseum-world-3.jpg" />
          <RoundedItem title="敵" className="mb-3">
            レッドドラゴン、ヘルカイト×2
          </RoundedItem>
          <RoundedItem title="説明">
            2回戦目と同じで火属性耐久や氷属性武器が有効。レッドドラゴンは正面から挑むとダメージが大きいので、後ろから回り込んで猛虎連撃破などでダメージを与えましょう。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section>
        <SectionTitle>クレス乱入</SectionTitle>
        <div className="mb-4">
          <p>
            世界一決定戦で優勝するとクレスが乱入してきます。ただし強制的な戦闘ではなく、改めて戦うことも可能です。戦闘難易度「ハード」か「マニア」ではアーチェも参戦するため乱入時は撤退を推奨します。準備を整えた上でクレスに挑みましょう。ちなみにクレスはゲーム内でも屈指の強敵です。わたしも戦闘ランク「ノーマル」にレベル70で挑んで負けました。攻略法を準備中なのでお待ちください。
          </p>
        </div>
      </section>
    </article>
  );
}
