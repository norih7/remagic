import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";
import GuideList from "@/components/GuideList";
import CardList from "@/components/CardLIst";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";

export const dynamic = "force-static";

const pageKey = "remaster";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          テイルズオブエターニアリマスターの変更点やリマスター向け攻略情報をまとめます
        </p>
      </PageSummary>

      <section className="mb-12">
        <div id="changes" className="scroll-mt-6">
          <SectionTitle type="flag">
            リマスター版の変更点のピックアップ
          </SectionTitle>
        </div>
        <Information>
          <p>
            発売前に公式ストアで公開されている情報です。設定項目の詳細や各機種での挙動は、発売後に確認でき次第追記します。
          </p>
        </Information>
        <div className="mb-8">
          <h3></h3>
          <p>
            目的地アイコンの表示:
            次に向かう場所を示すアイコンが追加され、ストーリー進行時に目的地を把握しやすくなります。フィールドマップだけではなくダンジョン内でも有効。
          </p>
          <p>
            「★」アイコン:
            貴重品の入手にアイコン。モンスター図鑑やマニュアルのしょの取り忘れがしにくい。
          </p>
          <p>「砂時計」アイコン: 時限イベント</p>
        </div>
        {/* <div className="mb-8">
          <h3>エンカウントのON／OFF</h3>
          <p>
            敵とのエンカウントをOFFにできる機能が追加されます。探索や移動を優先したい場面で活用できます。
          </p>
        </div> */}
        <div className="mb-8">
          <h3>ブースト機能</h3>
          <p>
            初回プレイ時から下記の機能を選択できます。「攻撃熟練度」と「術技使用回数2倍」はONを推奨します。リッドの猛虎連撃破は使用回数を9999にする優先度が高い技です。
          </p>
          <RoundedContainer className="grid grid-cols-2 gap-3">
            <RoundedItem>獲得経験値: 0〜4倍</RoundedItem>
            <RoundedItem>獲得ガルド: 0〜4倍</RoundedItem>
            <RoundedItem>ダメージ: 1、2、5倍</RoundedItem>
            <RoundedItem>攻撃熟練度: 1、2、4倍</RoundedItem>
            <RoundedItem>料理熟練度: 1、2、4倍</RoundedItem>
            <RoundedItem>エンカウント: OFF、LOW、ON</RoundedItem>
            <RoundedItem>隊列維持: ON、OFF</RoundedItem>
            <RoundedItem>術技使用回数2倍: ON、OFF</RoundedItem>
            <RoundedItem>アイテム入手確率2倍: ON、OFF</RoundedItem>
            <RoundedItem>術技消費TP減少: ON、OFF</RoundedItem>
            <RoundedItem>デスペナルティの無効化: ON、OFF</RoundedItem>
            <RoundedItem>キャンプ時にTP回復: ON、OFF</RoundedItem>
            <RoundedItem>アイテム最大所持数拡張: ON、OFF</RoundedItem>
          </RoundedContainer>
        </div>
        <div className="mb-8">
          <h3>2周目移行の引き継ぎ</h3>
          <RoundedContainer className="grid grid-cols-2 gap-3">
            <RoundedItem>キャラクター情報</RoundedItem>
            <RoundedItem>覚えた術・技</RoundedItem>
            <RoundedItem>・所持アイテム</RoundedItem>
            <RoundedItem>レンズ入手状況</RoundedItem>
            <RoundedItem>料理レシピ</RoundedItem>
            <RoundedItem>号令</RoundedItem>
            <RoundedItem>コレクターずかん</RoundedItem>
            <RoundedItem>モンスターずかん</RoundedItem>
          </RoundedContainer>
        </div>
        <div className="mb-8">
          <h3>オート戦闘の高速モード</h3>
          <p>
            オート戦闘時に高速モードを利用できます。戦闘を手早く進めたいときに便利な追加機能です。
          </p>
        </div>
        {/* <div className="mb-8">
          <h3>グラフィック・効果音の切り替え</h3>
          <p>
            グラフィックと効果音はモードを切り替えられ、リマスター版の見た目・音とオリジナル版の雰囲気を選んで楽しめます。
          </p>
        </div> */}
      </section>

      {/* <section className="mb-12">
        <SectionTitle>個人的に嬉しい要素</SectionTitle>
      </section> */}

      {/* <section className="mb-12">
        <div id="retained" className="scroll-mt-6">
          <SectionTitle type="flag">グラフィック</SectionTitle>
        </div>
        <p>
          グラフィック・効果音の切り替えも用意されているため、遊びやすさと当時の雰囲気を切り替えて楽しめます。
        </p>
      </section> */}

      <section className="mb-12">
        <div id="comparison" className="scroll-mt-6">
          <SectionTitle type="flag">ベースとなる移植元</SectionTitle>
        </div>
        <p>
          エターニアリマスターはPSP版をベースにされていると言及があります。PSPは戦闘やフィールド移動が60fpsで動作します。（PS版は30fps）
          ただしPSP版はドットがボヤけてる欠点があったのですがリマスター版はくっきりさせています。
        </p>
      </section>

      <section className="mb-12">
        <div id="guides" className="scroll-mt-6">
          <SectionTitle type="flag">リマスター版の攻略に進む</SectionTitle>
        </div>
        <p>
          追加機能を活用しながら進めたい方は、RE:MAGICの攻略情報もあわせてご利用ください。ストーリー順の回収要素や、見落としやすいイベント・戦闘の仕組みを確認できます。
        </p>
        <GuideList
          items={[
            { title: "ストーリー攻略チャート", href: "/stories" },
            { title: "序盤にやっておきたいこと", href: "/guides/first" },
            { title: "取り逃がし要素", href: "/guides/missable" },
            { title: "戦闘操作・特殊操作", href: "/systems/buttle" },
            { title: "料理一覧", href: "/systems/recipe" },
          ]}
        />
      </section>

      <section className="mb-12">
        <div id="sources" className="scroll-mt-6">
          <SectionTitle type="flag">公式情報・出典</SectionTitle>
        </div>
        <p>
          発売日・対応機種およびリマスター版の追加機能は、以下の公式情報を参照しています。
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a
              className="text-sky-800 underline"
              href="https://tales-ch.jp/topics/2026/008.html"
              target="_blank"
              rel="noreferrer"
            >
              テイルズチャンネル＋：発売日・対応機種のお知らせ
            </a>
          </li>
          <li>
            <a
              className="text-sky-800 underline"
              href="https://store.steampowered.com/app/3470960/"
              target="_blank"
              rel="noreferrer"
            >
              Steamストア：ゲーム内容・便利機能・開発ベースの記載
            </a>
          </li>
          <li>
            <a
              className="text-sky-800 underline"
              href="https://www.bandainamcoent.com/games/tales-of-eternia-remastered"
              target="_blank"
              rel="noreferrer"
            >
              バンダイナムコエンターテインメント：公式サイト
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
