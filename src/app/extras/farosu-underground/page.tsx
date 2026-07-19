import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ファロース教会地下";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        元の大晶霊「マクスウェル」と契約できる隠しダンジョン「ファロース教会地下」について紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>ファロース教会地下</SectionTitle>
        <p>
          隠しダンジョンの1つ。ストーリーの後半になるとインフェリアのファロース教会にある隠しダンジョンへ行くことができ、奥には大晶霊「マクスウェル」がいます。かなり強敵ですが、倒すことで契約することができます。
        </p>
        <p>
          遠征の橋からインフェリアに戻って来れるようになったあとからはファロース教会
          GPS(93,
          110)の司祭の後ろに行くとイベントが発生します。イベントでは壁が壊れ、その奥からファロース教会地下へと進むことが可能となります。
        </p>
        <p>
          ダンジョンの敵は強いのですが、その分経験値も一回で1500ほど獲得できます。ファロース教会には無料で宿泊できるベッドもあるのでレベル上げにもおすすめです。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-4">
          <p>
            ダンジョンには仕掛けはないので奥へ進んでいけばOKです。途中にはリッドの防具「ゴールデンヘルム」、キールの防具「スピリッドローブ」があるので入手しておきましょう。強力な防具です。
          </p>
        </div>
        <div className="mb-4">
          <h3>マクスウェルとの戦闘</h3>
          <p>
            セーブポイント奥ではマクスウェルがいて、戦うことを選択すると戦闘となります。戦闘に勝利後はマスクウェルと契約することができます。なお、マクスウェルを倒すと消費TPを半分にする「フェアリィリング」を落とします。ルーンボトルの変化以外ではゲーム内で2つしか入手できない貴重なアイテムです。
          </p>
          <p>BOSS：『マクスウェル』</p>
          <p>
            HPは34000しかありませんが防御力がとにかく高いです。詠唱時間も早く、強力な術を発動してくるためリッドやファラの攻撃により詠唱を止めることを最優先で考えましょう。属性攻撃が有効のためリッドに光属性のエクスカリバーなどを装備させて挑むのがおすすめ。遠征の橋から戻ってきた時点ですぐ戦いを挑めるものの、この時点のレベルで倒すのは難しい場合はレベルを60ほどにして挑むのが無難です。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[58]} />
        </div>
      </section>
    </article>
  );
}
