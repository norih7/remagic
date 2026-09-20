import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";

export const dynamic = "force-static";

const pageKey = "herb";
const title = deepLinks[pageKey].title;
const description = deepLinks[pageKey].seoDesc;
const canonical = deepLinks[pageKey].path;

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
        敵からのドロップやチャットの盗みで手に入るステータスアップ薬草は、レベル上げやボス攻略の途中でかなり重宝します。特にHP、TP、力の延長は、長期戦での安定感を大きく左右します。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>ステータスアップの薬草とは</SectionTitle>
        <p>
          「セージ」や「セボリー」などの薬草は使うとステータスが上がります。エターニアではLvアップによるステータス向上は控え目なので、薬草の使用は非常に強力です。長期的な強化を目的とするアイテムなので、育成が進んだ後半ほど価値が出ます。
        </p>
        <h3>代表的な薬草</h3>
        <div className="mb-8">
          <RoundedItem title="セージ/レッドセージ" className="mb-3">
            <p>効果: HPが5%アップする ※レッドセージは10%</p>
            <p>用途: 体力を底上げして長い戦闘に耐える</p>
          </RoundedItem>
          <RoundedItem title="セボリー" className="mb-3">
            <p>効果: TPが5%アップする ※レッドセボリーは10%</p>
            <p>用途: 特技の連発や術の維持をしやすくする</p>
          </RoundedItem>
          <RoundedItem title="ラベンダー/レッドラベンダー" className="mb-3">
            <p>効果: 力が1アップする ※レッドラベンダーは2</p>
            <p>用途: 物理攻撃寄りの立ち回りを強化する</p>
          </RoundedItem>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>薬草集めの方法</SectionTitle>
        <div className="mb-8">
          <h3>ドロップで集める</h3>
          <p>
            いくつかの敵はステータスアップ薬草を落とします。敵ごとのドロップ率は低めですが、繰り返し戦うことで確保できるので、育成用に連戦をしておくのが効率的です。
          </p>
        </div>
        <div className="mb-8">
          <h3>盗みで確保する</h3>
          <p>
            チャットの特技「ローバーアイテム」を使えば、戦闘中に敵から薬草を盗めます。ドロップに頼るより安定して入手しやすいため、重要な薬草が落ちやすい敵を見つけたら、盗みのルートで集めるのがおすすめです。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>セージ集め</SectionTitle>
        <p>準備</p>
      </section>
    </article>
  );
}
