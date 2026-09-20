import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";

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
          <p>
            また「スマッシュマント」を装備するとテクニカルスマッシュ発生時にアイテムドロップ率がアップします。アイテムドロップを狙うときは術キャラ（キール、メルディ）以外にスマッシュマントを装備させるようにしましょう。
          </p>
          <GuideList
            items={[
              {
                title: "グリップソード探し（スマッシュマント入手）",
                href: "/subevents/grip-sword",
              },
              {
                title:
                  "ルーンボトル変化一覧（シーブスマントからのルーンボトル変化）",
                href: "/systems/rune",
              },
            ]}
          />
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
        <RoundedContainer>
          <h3>闘技場の世界一決定戦の周回</h3>
          <RoundedItem title="概要" className="mb-3">
            闘技場のヘルカイトは「セージ」「レッドセージ」をドロップします。1周3〜5分ほどでレッドセージも狙えるため効率はかなり高いです。30分でセージが3個以上集まることも。
          </RoundedItem>
          <RoundedItem title="効率的な連戦">
            リッドに「アイスコフィン（氷属性武器）」や「せいりゅうとう（水属性武器）」、「スマッシュマント」を装備して挑みましょう。
          </RoundedItem>
        </RoundedContainer>
        <RoundedContainer>
          <h3>アックスビーク狩り</h3>
          <RoundedItem title="概要" className="mb-3">
            アイフリードの墓周辺のフィールドに出現するアックスビークはセージを1%の確率でドロップします。闘技場と比べて敵が弱めであり、アックスビークの出現率はかなり高いため周回効率はかなり高いです。こちらも30分で3個以上集まることも。
          </RoundedItem>
          <RoundedItem title="効率的な連戦">
            アックスビークが登場したときだけ戦い、それ以外は逃げましょう。スマッシュマント装備したリッドで、鳳凰天駆〜緋凰絶炎衝でノーダメージかつまとめて倒すとテクニカルスマッシュが20%ほどを稼げる場合もあります。テクニカルスマッシュはアイテムドロップ率もアップに繋がるので高得点を狙っていきましょう。
          </RoundedItem>
        </RoundedContainer>
      </section>
    </article>
  );
}
