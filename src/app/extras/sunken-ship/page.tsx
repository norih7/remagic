import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";
import ResponsiveImage from "@/components/ResponsiveImage";
import Information from "@/components/Information";
import EventCondition from "@/components/EventCondition";
import { extraLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "sunken-ship";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
const canonical = extraLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          インフェリア世界でさまざまな有用アイテムや貴重な重要品を獲得できる隠しダンジョン「沈没船」の攻略情報ページです。ダンジョンへのアクセス方法から、入り組んだ船内のギミック解除手順、ボス「セイレーン」との戦い方、獲得できるアイテム情報を分かりやすく解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>沈没船とは</SectionTitle>
        <EventCondition category="period">
          インフェリアへ帰還後から挑戦可能
        </EventCondition>
        <div className="mb-4">
          <p>
            海底に眠る隠しダンジョンのひとつです。ダンジョン内では、インフェリアの海底探索に必須となる専用のマップアイテム「インシーマップ」を入手することができます。最奥にはボスの「セイレーン」が待ち構えていますが、全体の攻略難易度は比較的優しめです。「遠征の橋」を経由してインフェリアへ戻ってきた直後のレベル上げや、手堅い装備・消耗品の回収スポットとして非常に最適です。
          </p>
        </div>
        <div className="mb-8">
          <h3>沈没船への行き方・アクセス</h3>
          <p>
            「遠征の橋」からイベントを経てインフェリア側へ帰還したあと、インフェリア世界の海底に位置する沈没船（GPS座標：34,
            4 付近）へ潜水艇で向かうことで侵入することができます。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>ダンジョン攻略手順</SectionTitle>
        <div className="mb-8">
          <h3>ダンジョン内部の構造と進め方</h3>
          <ResponsiveImage
            src="/extras/secret-sunken-ship-order.jpg"
            alt="沈没船の探索順序・分岐マップ"
          />
          <p>
            ダンジョンの入口から奥へ進むと、上の画像のような複数の通路が交わる分岐部屋にたどり着きます。船内の攻略は基本的に「1〜4」の番号順にルートを選択し、浸水した区画の「水の放出」ギミックを解いていく流れになります。
          </p>
        </div>
        <div className="mb-4">
          <h3>1. 隔壁のキーの入手 ＆ 2. ポンプ室の鍵の入手</h3>
          <p>
            まずは「1.
            隔壁のキーの入手」と書かれた通路を進み、奥の小部屋にある木箱から「隔壁のキー」を回収します。なお、道中の部屋にある宝箱を調べるとトラップモンスターの「フェイク」が不意打ちで出現します。勝利すれば超レアな「エリクシール」を手に入れられますが、手負いの状態など強敵だと感じたら無理をせず早めに戦闘から逃走しましょう。
          </p>
          <p>
            キーを入手したら、今度は「2.
            ポンプ室の鍵の入手」の通路へ向かいます。先ほど手に入れた隔壁のキーを使って扉を開けた先の部屋から、さらに「ポンプ室の鍵」を獲得します。
          </p>
        </div>
        <div className="mb-4">
          <h3>3. 水の放出 ＆ 4. 排水後の探索ルート</h3>
          <p>
            「3.
            水の放出」の通路を進んだ先にあるポンプ室で機械装置を調べると、ポンプが起動して船内で浸水していたフロアの水が一気に排出されます。
          </p>
          <p>
            水の放出が完了したら「4.
            排水後の探索」エリアへ戻り、水が引いて通れるようになった奥の区画を本格的に探索していきましょう。
          </p>
          <ResponsiveImage
            src="/extras/secret-sunken-ship-ladder.jpg"
            alt="沈没船のハシゴと分岐地点"
          />
          <p>
            基本的には一本道のシンプルな構造ですが、「ルーンボトル」が拾えるフロアは重要な分岐点となっています。ハシゴを上へ登ると「船長室」に繋がり、下へ進むとボスの「セイレーン」が待つエリアへと突入します。船長室の宝箱からは、インフェリアの海底移動が快適になる重要アイテム「インシーマップ」が手に入るため必ず回収しておきましょう。
          </p>
        </div>

        <div className="mb-4">
          <h3>ボス「セイレーン」との戦闘攻略</h3>
          <ResponsiveImage
            src="/extras/secret-sunken-ship-boss.jpg"
            alt="セイレーン戦の戦闘画面"
          />
          <Information type="warning" title="セイレーンに挑む前に">
            沈没船のボス「セイレーン」からは、チャットの特技「ローバーアイテム」を使うことでアクセサリ「みずぐも」を盗み出すことができます。「みずぐも」は装備するだけで水属性のダメージを50%も軽減してくれる非常に便利な耐性装備です。のちにチャットの小屋でも1個入手できるため必須というわけではありませんが、貴重な先取りチャンスなのでぜひ盗み技にチャレンジしてみましょう。もし準備不足やアイテム回収を完璧に済ませたい場合は、セイレーンの目の前まで到達した段階でいったんダンジョンから脱出し、後回しにすることも可能です。
          </Information>
          <p>
            先ほどの分岐点から下層へ進むと、ボス「セイレーン」との戦闘が始まります。勝利すると、セイレーンの背後にある宝箱から大量のガルドを一網打尽に獲得できます。
          </p>
          <p>
            <strong>BOSS：『セイレーン』</strong>
          </p>
          <p>
            セイレーンは火属性が弱点となっています。前衛のリッドが奥義「鳳凰天駆」をすでに習得している場合は、弱点を突きながら大ダメージを奪えるため非常に有効です。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内で入手できるアイテム一覧</h3>
          <LocationItems data={itemsData} locationIds={[57]} />
        </div>
      </section>
    </article>
  );
}
