import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "飛行艇の入手";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        飛行艇の入手方法について説明します。飛行艇がなくてもストーリーはクリアできますがフィールドマップ移動が便利となり、様々なサブイベントもできるためぜひ入手してください。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>飛行艇について</SectionTitle>
        <p>
          ストーリーの後半になるとバンエルティア号を「飛行艇」に改造できます。改造を行うためには2つのキーアイテム「やみのたま」と「ひかりのため」が必要となります。「やみのたま」はラストダンジョン「シゼル城」にあるため飛行艇が入手可能となるのは最終盤となります。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>キーアイテムの入手</SectionTitle>
        <div className="mb-8">
          <h3>やみのたま</h3>
          <p>
            ラストダンジョン「シゼル城」の宝箱から入手できます。シゼル城内の入手場所については攻略チャート5にてマップ付きで紹介しています。
          </p>
          <GuideList
            items={[
              {
                title: "シゼル城の攻略情報とダンジョンマップ",
                href: "/stories/guide5",
              },
            ]}
          />
        </div>
        <div className="mb-4">
          <h3>ひかりのたま</h3>
          <p>
            ストーリー後半でオルバース界面に出れるようになって以降、遠征の橋から中継基地にある「改造ドッグ」へいくとバンエルティア号のさらなる改造について話しが聞けます。「はるかなる地でわがあしあとを...」という話をトリガーとしてインフェリアのフィールドマップに隠しダンジョン「アイフリードの墓」
            GPS(88,64)が出現します。
          </p>
          <p>
            インフェリアにあるエクストラダンジョン「アイフリードの墓」にある宝箱から入手。アイフリードの墓場については下記で攻略情報を掲載しています。
          </p>
          <GuideList
            items={[
              {
                title: "アイフリードの墓",
                href: "/extras/aifread",
              },
            ]}
          />
        </div>
        <Information type="warning" title="改造ドッグへの行き方">
          <p>改造ドッグの場所は慣れるまでわかりにくいため補足します。</p>
          <h4>改造ドッグへ辿り着くためのフロー</h4>
          <ul>
            <li>
              1.
              フィールドマップの遠征の橋から「中継基地」へと入る(インフェリア、セレスティア問わず)
            </li>
            <li>2. 中継基地のメニューで「反転ドーム」を選択</li>
            <li>3. 反転ドームのメニューで「改造ドッグ」を選択</li>
          </ul>
        </Information>
      </section>
      <section className="mb-12">
        <SectionTitle>飛行艇の入手</SectionTitle>
        <p>
          「やみのたま」と「ひかりのたま」を改造ドックのアイフリード像にはめ込むと飛空挺を入手します。飛空挺はフィールドマップで□ボタンを押すと呼び出せます。着陸可能なフィールドも増えるため色々探索してみましょう！
        </p>
      </section>
    </article>
  );
}
