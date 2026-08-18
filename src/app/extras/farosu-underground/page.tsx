import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ファロース教会地下";
const description =
  "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。元の大晶霊「マクスウェル」と契約できる隠しダンジョン「ファロース教会地下」の行き方、ダンジョン内部の探索、ボス「マクスウェル」の攻略法、貴重なドロップアイテム「フェアリィリング」や入手装備の情報を網羅して紹介しています。";

export const metadata = {
  title,
  description,
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          すべての源たる元の大晶霊「マクスウェル」と契約を果たすために挑む隠しダンジョン「ファロース教会地下」の攻略情報ページです。ダンジョンの開放手順から、強力なボスへの対策、道中で手に入る強力な装備品や超レアなドロップアイテムのデータを解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ファロース教会地下とは</SectionTitle>
        <p>
          物語の後半に訪れることができる隠しダンジョンのひとつです。インフェリアの「ファロース教会」の最奥には、強力な大晶霊「マクスウェル」が待ち構えており、激闘を制することで晴れて契約を結ぶことができます。非常に手強い強敵ですが、勝利すれば絶大な見返りを得られます。
        </p>
        <p>
          「遠征の橋」を経由してインフェリアの世界へ再び帰還できるようになった後、ファロース教会（GPS座標：93,
          110）の建物内へ入り、司祭の後ろ側へ回り込むことでイベントが発生します。イベントによって教会の壁が崩れ、その隠された裏口からファロース教会地下へと進めるようになります。
        </p>
        <p>
          出現するモンスターはなかなかの強さですが、その分1回の戦闘で約1500もの高い経験値を稼ぐことができます。また、ファロース教会内には無料で宿泊できるベッドが用意されているため、冒険の合間のレベル上げスポットとしても非常に優秀です。
        </p>
      </section>

      <section className="mb-12">
        <SectionTitle>ダンジョン攻略と探索手順</SectionTitle>
        <div className="mb-4">
          <p>
            ダンジョン内複雑な謎解きやギミックなどは存在しないため、一本道をしっかりと奥へ進んでいけば迷うことはありません。道中の宝箱には、リッド用の強力な頭防具「ゴールデンヘルム」や、キール用の優秀な体防具「スピリッドローブ」が眠っています。どちらも攻略の大きな助けとなる強力な装備なので、忘れずに回収しておきましょう。
          </p>
        </div>
        <div className="mb-4">
          <h3>大晶霊「マクスウェル」との戦闘攻略</h3>
          <p>
            最奥のセーブポイントの先で待つマクスウェルに話しかけ、戦闘を選択するとバトルに突入します。見事勝利すればマクスウェルとの契約が結ばれます。なお、マクスウェルを撃破すると、キャラクターの消費TPを半分に抑えてくれる極めて有用なアクセサリ「フェアリィリング」を確実にドロップします。ルーンボトルによる変化などを除けば、ゲーム内でわずか2個しか入手できない超貴重なアイテムです。
          </p>
          <p>
            <strong>BOSS：『マクスウェル』</strong>
          </p>
          <p>
            マクスウェルのHP自体は34,000とそこまで高くありませんが、とにかく圧倒的な防御力を誇ります。さらに晶霊術の詠唱スピードも非常に速く、大火力の術を連発してくるため、前衛のリッドやファラが通常攻撃や特技を絶えず叩き込んで相手の詠唱を確実に阻止することを最優先に立ち回りましょう。光属性の攻撃が弱点となっているため、リッドに「エクスカリバー」などの光属性武器を装備させて挑むのがベストです。遠征の橋から戻ってきてすぐのタイミングでも挑戦可能ですが、当時の適正レベルで勝つのが厳しいと感じた場合は、一度レベルを60前後までしっかりと上げてから挑むのが無難です。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内で入手できるアイテム一覧</h3>
          <LocationItems data={itemsData} locationIds={[58]} />
        </div>
      </section>
    </article>
  );
}
