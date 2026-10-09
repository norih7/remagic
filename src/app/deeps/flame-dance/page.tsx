
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import Section from "@/components/Section";
import CardList from "@/components/CardLIst";
import ResponsiveImage from "@/components/ResponsiveImage";
import GifPlayer from "@/components/GifPlayer";
import Main from "@/components/SiteLayout/Main";

export const dynamic = "force-static";

const pageKey = "flame-dance";
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
    <Main title={title}>
      <article>
        <PageSummary>
          ファラの隠し秘奥義「火龍炎舞」の習得方法や発動条件、おすすめの連携例を解説しています。発動条件が難しいこの特殊技について、「点穴縛態」の効率的な習得手順や実際の4連携の組み方、注意点などをわかりやすくまとめています。
        </PageSummary>

        <Section>
          <SectionTitle>火龍炎舞とは</SectionTitle>
          <ResponsiveImage
            src="/deeps/flame-dance-cutin.jpg"
            alt="火龍炎舞のカットイン"
          />
          <div className="mb-8">
            <p>
              火龍炎舞はファラの秘奥義の一つで、発動方法が非常に難しいですが使えれば強力な技です。他の秘奥義とは異なりかなり特殊な発動条件なので、秘奥義ページとは別にこのページにまとめます。ファラの専用カットインもあるためエターニアのやり込みとしてぜひ挑戦してください。
            </p>
          </div>
          <div className="mb-8">
            <h3>火龍炎舞の特徴</h3>
            <CardList
              list={[
                "発動起点となる「点穴縛態」の習得が必要",
                "火龍炎舞の発動には攻撃や特技の4連携が必要で、マニュアル操作が必須級",
                "火龍炎舞の消費TPは0で、発動時にはファラのカットインが入る",
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>火龍炎舞の注意点</h3>
            <p>
              連携を含めると非常に高火力ですが、発動条件が非常に厳しいため使いづらい場合が多いです。使い勝手からするとファラのもう一つの秘奥義「獅吼爆砕陣」もおすすめです。また火龍炎舞は火属性攻撃であるため、火属性耐性がある敵にはダメージが通りにくい点も注意してください。
            </p>
            <GuideList
              items={[
                { title: "獅吼爆砕陣の説明", href: "/skills/special-skill" },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>点穴縛態の習得方法</SectionTitle>
          <Information type="warning" title="リマスター版の注意点">
            リマスター版ではブースト機能がありますが「点穴縛態」の習得に役立つ機能はありません。地道にファラを操作して300回戦闘する必要があります。
          </Information>
          <div className="mb-8">
            <p>
              点穴縛態はファラを操作キャラにして累計300回戦闘すると習得します。200回を超えたあたりからファラの特技画面に習得前の技として表示されるようになります。
            </p>
            <ResponsiveImage
              src="/deeps/flame-dance-bakutai.jpg"
              alt="点穴縛態の習得前"
            />
          </div>
          <div className="mb-8">
            <h3>おすすめの習得方法</h3>
            <h4>ファラを先頭にしてストーリーを進める</h4>
            <p>
              最初からファラを先頭にしてストーリーを進行する。メニュー画面のエンカウント回数がほぼファラを使った戦闘回数となるのも習得のモチベーションになります。
            </p>
          </div>
          <div className="mb-8">
            <h4>薬草集め時の戦闘周回</h4>
            <p>
              薬草集めをするときにファラを操作するのもおすすめです。戦闘を繰り返す目的があり、後半になるとファラはテクニカルスマッシュを稼ぐために有利な技をたくさん習得します。
            </p>
            <GuideList items={[{ title: "薬草集め", href: "/deeps/herb" }]} />
          </div>
        </Section>

        <Section>
          <SectionTitle>火龍炎舞の発動方法</SectionTitle>
          <div className="mb-8">
            <p>
              火龍炎舞は点穴縛態を敵にヒットした後、ファラ単独で4連携攻撃をすることで発動します。通常攻撃も1連携にカウントされ、その後は「地上技」「対空技」「地上技」のように連携をつなげます。
            </p>
            <p>
              点穴縛態はヒットすれば2秒ほど敵の動きを止める技で、連携ごとに停止の時間が延長されていき最後に火龍炎舞が発動します。ガードされるなど連携の途中で敵が動き出すと火龍炎舞は発動しません。
            </p>
            <Information type="warning" title="連携最後の技の注意点">
              <p>
                連携の最後は「強打技」にすると発動しない点に注意が必要です。例えば連携の最後に「獅子戦吼」を使っても火龍炎舞は発動しません。
              </p>
              強打技: 双撞掌底破、八葉連牙、獅子戦吼、殺劇舞荒拳
            </Information>
          </div>
          <h3>連携例</h3>
          <RoundedContainer className="mb-8 grid grid-cols-1 gap-3">
            <RoundedItem title="火力重視">
              パンチ2回 → 飛燕連天脚 → 鷹爪落爆蹴 → 殺劇舞荒拳
            </RoundedItem>
            <RoundedItem title="発動しやすさ">
              パンチ2回 → 三散華 → 飛燕連脚 → 鷹爪蹴撃
            </RoundedItem>
          </RoundedContainer>
          <div className="mb-8">
            <h3>発動動画</h3>
            <p>
              「パンチ2回 → 飛燕連天脚 → 鷹爪落爆蹴 → 殺劇舞荒拳」の4連携です。
            </p>
            <GifPlayer src="/deeps/flame-dance.gif" alt="火龍炎舞の発動方法" />
          </div>
        </Section>
      </article>
    </Main>
  );
}
