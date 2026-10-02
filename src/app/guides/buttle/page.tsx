import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import Tag from "@/components/Tag";
import ResponsiveImage from "@/components/ResponsiveImage";
import { guideLinks } from "@/constants";
import Section from "@/components/Section";
import Image from "next/image";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "buttle";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
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
        <p>
          エターニアの戦闘システムについて解説します。マニュアル操作をできるようにするイベントや他のシリーズにあるバックステップの操作、アイテムドロップ率がアップするテクニカルスマッシュについて解説しています。
        </p>
      </PageSummary>

      <Section>
        <SectionTitle type="system">マニュアル操作</SectionTitle>
        <div className="mb-8">
          <div className="mb-4">
            <h3>マニュアル操作とセミオート操作</h3>
            <p>
              エターニアではデフォルトでセミオート操作による戦闘になっています。マニュアル操作の方が自由にキャラクタを操作できおすすめです。マニュアル操作は後述の「マニュアルのしょ」を入手すると可能になります。
            </p>
          </div>
          <RoundedContainer className="grid grid-cols-1 gap-3">
            <h4 className="mb-2">セミオートとマニュアルの説明</h4>
            <RoundedItem title="セミオート">
              歩行、ダッシュ、ガードなど基本的なことはできますが攻撃は敵に自動的に近づいて実行されます。この攻撃の間合いを自由に操作できないことが不自由で、自分でジャンプはできません。
            </RoundedItem>
            <RoundedItem title="マニュアル">
              自動攻撃は行わず攻撃はボタンを押した地点で実行されます。手動でジャンプもでき、戦闘としても直感的に操作できるためマニュアル操作がおすすめです。
            </RoundedItem>
          </RoundedContainer>
        </div>
        <div className="mb-4">
          <h3>「マニュアルのしょ」の入手と設定方法</h3>
          <ResponsiveImage src="/systems/buttle-manual.jpg" />
          <p>
            マニュアル操作を行うためには「マニュアルのしょ」の入手が必要で、レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できます。取得はいつでも可能ですが、ストーリー的にレグルス道場に訪れたときにやっておくのがオススメです。設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能です。
          </p>
          <Information type="warning" title="リマスター版における注意点">
            リマスター版でも「マニュアルのしょ」は任意アイテムです。
            <Image
              src="/icons/key-item.png"
              width={18}
              height={18}
              alt="貴重品アイコン"
              className="inline"
            />{" "}
            アイコンが表示されたことで見逃しにくいですが、もし見逃していたら早めに入手することを推奨します。
          </Information>
        </div>
      </Section>

      <Section>
        <SectionTitle>テクニカルスマッシュ</SectionTitle>
        <p>準備中</p>
      </Section>

      <Section>
        <SectionTitle type="system">戦闘中の特殊操作</SectionTitle>
        <div className="mb-8">
          <h3>戦闘中の移動速度アップ</h3>
          <p>
            アクセサリ「エルヴンブーツ」または「ジェットブーツ」を装備していると戦闘中の移動速度がアップします。エルヴンブーツは20%、ジェットブーツは50%アップします。ジェットブーツは最初速すぎると思うことも。キールとフォッグは戦闘中の移動速度が遅いため活躍します（特に隠しダンジョンネレイドの迷宮）
          </p>
          <GuideList
            items={[
              {
                title: "エルヴンブーツの詳細（入手方法）",
                href: "/systems/item/56",
              },
              {
                title: "ジェットブーツの詳細（入手方法）",
                href: "/systems/item/270",
              },
              {
                title: "ネレイドの迷宮",
                href: "/extras/nereid",
              },
            ]}
          />
        </div>
        <div className="mb-8">
          <div className="mb-4">
            <h3>バックステップ</h3>
            <p>
              アクセサリ「ステップリング」と「リバヴィウサー」は装備していると戦闘中にバックステップを取ることができます。エターニアのバックステップは
              「□ + ↓」で実行されます。他のシリーズだと「□ +
              ←」なので使い勝手に慣れるまで少し時間がかかるかも。
            </p>
            <p>
              ステップリングもリバヴィウサーもバックステップとは別にもう一つ特殊操作が付与されます。効果的にはステップリングの方が使い勝手が良くおすすめです。また例外としてリッドがギルガメッシュ装備をすべて装備状態にするとこれらのアクセサリがなくてもバックステップを取ることができます。ステップリングと同様の効果があり、吹き飛ばし時の受け身が可能です。
            </p>
          </div>
          <RoundedContainer className="grid grid-cols-1 gap-3">
            <h4>バックステップ以外の特殊効果</h4>
            <RoundedItem title="ステップリング/ギルガメッシュ装備">
              敵に吹き飛ばされたとき、着地前に□ボタンを押すとダウン回避
            </RoundedItem>
            <RoundedItem title="リバヴィウサー">
              物理攻撃を受けた瞬間に□ボタンを押すとダメージが1/4となる
            </RoundedItem>
          </RoundedContainer>
          <GuideList
            items={[
              {
                title: "リバヴィウサーの詳細（入手方法）",
                href: "/systems/item/359",
              },
              {
                title: "シャンバルーン（ステップリング入手）",
                href: "/subevents/syanballoon",
              },
            ]}
          />
        </div>
        <div className="mb-8">
          <h3>晶霊術/フォッグ特技の高速化</h3>
          <p>
            キールとフォッグを戦闘の操作キャラクタにすると特殊操作ができます。キールだと術を使用中にHP/TPの下に方向キーが表示され、正しく入力すると詠唱時間の短縮になります。フォッグの特技も同様です。術や技によって入力する方向キーは異なります。
          </p>
        </div>
      </Section>
    </article>
  );
}
