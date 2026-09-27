import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";
import GuideList from "@/components/GuideList";

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
          <SectionTitle type="flag">リマスター版の変更点</SectionTitle>
        </div>
        <Information>
          <p>
            発売前に公式ストアで公開されている情報です。設定項目の詳細や各機種での挙動は、発売後に確認でき次第追記します。
          </p>
        </Information>
        <div className="mb-8">
          <h3>目的地アイコンの表示</h3>
          <p>
            次に向かう場所を示すアイコンが追加され、ストーリー進行時に目的地を把握しやすくなります。
          </p>
        </div>
        <div className="mb-8">
          <h3>エンカウントのON／OFF</h3>
          <p>
            敵とのエンカウントをOFFにできる機能が追加されます。探索や移動を優先したい場面で活用できます。
          </p>
        </div>
        <div className="mb-8">
          <h3>オート戦闘の高速モード</h3>
          <p>
            オート戦闘時に高速モードを利用できます。戦闘を手早く進めたいときに便利な追加機能です。
          </p>
        </div>
        <div className="mb-8">
          <h3>グラフィック・効果音の切り替え</h3>
          <p>
            グラフィックと効果音はモードを切り替えられ、リマスター版の見た目・音とオリジナル版の雰囲気を選んで楽しめます。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div id="retained" className="scroll-mt-6">
          <SectionTitle type="flag">グラフィック</SectionTitle>
        </div>
        <p>
          グラフィック・効果音の切り替えも用意されているため、遊びやすさと当時の雰囲気を切り替えて楽しめます。
        </p>
      </section>

      <section className="mb-12">
        <div id="comparison" className="scroll-mt-6">
          <SectionTitle type="flag">ベースとなる移植元</SectionTitle>
        </div>
        <p>エターニアリマスターはPSP版をベースにされていると言及があります。</p>
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
