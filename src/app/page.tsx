import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { skillLinks } from "@/constants";
import { extraLinks } from "@/constants";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

// 攻略記事やカテゴリのダミーデータ
type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
const featuredLinks: Link[] = [];
featuredLinks.push(extraLinks["valkyrie"]);
featuredLinks.push(subeventLinks["lens"]);
featuredLinks.push(subeventLinks["flying-board"]);
featuredLinks.push(storyLinks["guide3"]);
featuredLinks.push(storyLinks["guide4"]);
featuredLinks.push(extraLinks["aifread"]);
featuredLinks.push(subeventLinks["secret-base"]);
featuredLinks.push(subeventLinks["skill-chat"]);
featuredLinks.push(systemLinks["rune"]);
featuredLinks.push(systemLinks["recipe"]);
featuredLinks.push(skillLinks["magic"]);

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "RE:MAGIC テイルズオブエターニア攻略";
export async function generateMetadata() {
  return {
    title,
    description:
      "テイルズオブエターニア（TOE）リマスター版対応の攻略サイト。ストーリー攻略、謎解き、レンズ・アイテム入手場所などを詳細に解説！シンプルで読みやすい攻略サイトです。",
    alternates: {
      canonical: "/",
    },
  };
}

export default async function HomePage() {
  const subTitle = "エターニア攻略トップ";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={subTitle} />
      <main className="space-y-12">
        <h2 className="text-lg font-bold mb-2 !border-none">
          テイルズオブエターニア攻略
        </h2>
        <p className="text-slate-1000">
          RE:MAGICではリマスター版に対応したテイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開しています！スマホに最適したシンプルでクリーンなサイトを目指しています。
        </p>

        {/* 2. 注目カテゴリセクション */}
        <section>
          <SectionTitle>注目コンテンツ</SectionTitle>
          <ContentLinks list={featuredLinks} />
        </section>

        {/* 3. 更新履歴セクション */}
        <section className="">
          <SectionTitle type="history">最新更新履歴</SectionTitle>
          <ul className="space-y-2">
            <li className="flex gap-4">
              <span className="text-slate-400">2026/09/03</span>
              <span>
                <Link
                  href="/extras/valkyrie"
                  className="hover:text-cyan-400 transition-colors"
                >
                  きらめきの塔
                </Link>
                をアップデート。攻略情報の追記とゲーム画像を追加しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/30</span>
              <span>
                <Link
                  href="/extras/towns"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ねこにんの里/晶霊温泉
                </Link>
                を新規作成しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/29</span>
              <span>
                <Link
                  href="/stories/guide5"
                  className="hover:text-cyan-400 transition-colors"
                >
                  セイファート神殿〜シゼル城
                </Link>
                をアップデート。エンディングまでの内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/27</span>
              <span>
                <Link
                  href="/extras/farosu-underground"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ファロース教会地下
                </Link>
                をアップデート。ゲーム画像を追加しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/26</span>
              <span>
                <Link
                  href="/subevents/lens"
                  className="hover:text-cyan-400 transition-colors"
                >
                  レンズ収集
                </Link>
                をアップデート。レンズ入手場所の画像をすべて掲載しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/23</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート。ワンダーシェフの場所の画像を掲載しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/21</span>
              <span>
                <Link
                  href="/subevents/grip-sword"
                  className="hover:text-cyan-400 transition-colors"
                >
                  グリップソード探し
                </Link>
                を公開しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/20</span>
              <span>
                <Link
                  href="/subevents/flying-board"
                  className="hover:text-cyan-400 transition-colors"
                >
                  飛行艇の入手
                </Link>
                をアップデート。ページ内に画像を掲載しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/20</span>
              <span>
                <Link
                  href="/subevents/lysithea"
                  className="hover:text-cyan-400 transition-colors"
                >
                  画家リシテア
                </Link>
                をアップデート。ページ内に画像を掲載しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/19</span>
              <span>
                <Link
                  href="/extras/dark-cave"
                  className="hover:text-cyan-400 transition-colors"
                >
                  闇の洞窟
                </Link>
                をアップデート。内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/16</span>
              <span>
                <Link
                  href="/extras/sunken-ship"
                  className="hover:text-cyan-400 transition-colors"
                >
                  沈没船
                </Link>
                をアップデート。内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/14</span>
              <span>
                <Link
                  href="/extras/aifread"
                  className="hover:text-cyan-400 transition-colors"
                >
                  アイフリードの墓
                </Link>
                をアップデート。内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/12</span>
              <span>
                <Link
                  href="/stories/guide4"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ペイルティ〜バリル城
                </Link>
                をアップデート。バリル城までの内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/09</span>
              <span>
                <Link
                  href="/stories/guide4"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ペイルティ〜バリル城
                </Link>
                をアップデート。雷晶霊の遺跡までの内容を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/08/05</span>
              <span>
                <Link
                  href="/stories/guide3"
                  className="hover:text-cyan-400 transition-colors"
                >
                  セレスティア突入〜チャットの小屋
                </Link>
                をアップデート。ページ全体を書き直しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/31</span>
              <span>
                <Link
                  href="/subevents/beppo"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ベッポとのかくれんぼ
                </Link>
                を新規作成。
              </span>
            </li>

            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/28</span>
              <span>
                <Link
                  href="/stories/guide2"
                  className="hover:text-cyan-400 transition-colors"
                >
                  いざないの密林〜霊峰ファロース
                </Link>
                をアップデート。火晶霊の谷までの攻略情報を加筆しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/25</span>
              <span>
                <Link
                  href="/stories/guide2"
                  className="hover:text-cyan-400 transition-colors"
                >
                  いざないの密林〜霊峰ファロース
                </Link>
                をアップデート。バロールまでの攻略情報を加筆しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/25</span>
              <span>
                <Link
                  href="/stories/guide2"
                  className="hover:text-cyan-400 transition-colors"
                >
                  いざないの密林〜霊峰ファロース
                </Link>
                をアップデート。いざないの密林の攻略情報を加筆しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/21</span>
              <span>
                <Link
                  href="/stories/guide1"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ラシュアン〜水晶霊の河
                </Link>
                をアップデート。内容加筆しレイアウト修正しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/19</span>
              <span>
                <Link
                  href="/subevents/skill-fog"
                  className="hover:text-cyan-400 transition-colors"
                >
                  フォッグの特技習得
                </Link>
                、
                <Link
                  href="/subevents/lysithea"
                  className="hover:text-cyan-400 transition-colors"
                >
                  画家リシテア
                </Link>
                、
                <Link
                  href="/subevents/flying-boad"
                  className="hover:text-cyan-400 transition-colors"
                >
                  飛行艇の入手
                </Link>
                をアップデート。レイアウトを整備しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/18</span>
              <span>
                <Link
                  href="/subevents/skill-chat"
                  className="hover:text-cyan-400 transition-colors"
                >
                  チャットの特技習得
                </Link>
                をアップデート。レイアウトを整備しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/18</span>
              <span>
                <Link
                  href="/subevents/syanballoon"
                  className="hover:text-cyan-400 transition-colors"
                >
                  シャンバルーン
                </Link>
                をアップデート。レイアウトを整備し、攻略動画をアップしました。
              </span>
            </li>
            {/* 
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/18</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート。料理名のフィルタ機能を実装しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/17</span>
              <span>
                <Link
                  href="/subevents/catarine"
                  className="hover:text-cyan-400 transition-colors"
                >
                  カトリーヌの恋愛イベント
                </Link>
                をアップデート。レイアウトを修正しました。
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/17</span>
              <span>
                <Link
                  href="/subevents/lens"
                  className="hover:text-cyan-400 transition-colors"
                >
                  レンズ収集
                </Link>
                をアップデート レンズ入手場所一覧を掲載しました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/13</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート 食材詳細ページ（購入場所）のリンクを追加
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/11</span>
              <span>
                <Link
                  href="/systems/recipe"
                  className="hover:text-cyan-400 transition-colors"
                >
                  料理一覧/マスター料理
                </Link>
                をアップデート ワンダーシェフの場所一覧を公開しました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/10</span>
              <span>
                <Link
                  href="/systems/buttle"
                  className="hover:text-cyan-400 transition-colors"
                >
                  戦闘解説
                </Link>
                をアップデート 戦闘中の特殊操作を追記しました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/07/07</span>
              <span>
                <Link
                  href="/systems/rune"
                  className="hover:text-cyan-400 transition-colors"
                >
                  ルーンボトル
                </Link>
                をアップデートしアイテム変化のオススメ度をつけました
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-slate-400">2026/06/20</span>
              サイトを公開しました
            </li> */}
          </ul>
        </section>
      </main>
    </div>
  );
}
