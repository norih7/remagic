import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import SectionHeader from "@/components/SectionHeader";
import GuideList from "@/components/GuideList";
import Image from "next/image";
import Information from "@/components/Information";
// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " 特技の習得について";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          技/術についての習得方法について説明します。エターニアではキャラクターのレベルアップでは特技や晶霊術を取得せず、キャラクタ毎に取得方法が異なるので詳細を確認してください。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">リッド/ファラの特技習得</SectionTitle>
        <div className="mb-8">
          <h3>専用レベル（斬り/突き/拳/蹴り）と確認方法</h3>
          <p>
            リッドとファラは特殊な専用レベル（リッドは斬り/突き、ファラは拳/蹴り）を持っており、特技や奥義の習得条件となっています。専用レベルは戦闘中にキャラクターの通常攻撃の回数（リッドは斬る/突く）によって加算されていきます。戦闘中に斬り攻撃ばかりをしていると突きレベルが上がらず、特技を習得できないため注意しましょう。
          </p>
          <p>
            専用レベルはリッドとファラのステータス画面でおおよそ確認できます。Lvは下記のようにゲージ進行で表示されていてMAXはLv30です。（画像は斬Lv30、突Lv28）
          </p>
          <Image
            src="/systems/skill-level-rid.jpg"
            alt=""
            width={300}
            height={200}
            className="mb-2"
          />
          <p>
            また戦闘終了後に通常のレベルアップだけではなく斬レベルのレベルアップも表示されます。通常レベルは「LEVEL
            UP」、斬りレベルは「SLASH UP」と表示されます。
          </p>
          <Image
            src="/systems/skill-level-buttle.jpg"
            alt=""
            width={300}
            height={200}
            className="mb-2"
          />
        </div>
        <div className="mb-8">
          <h3>技の使用回数</h3>
          <p>
            虎牙連斬のような上位技の習得には「斬り/突き」レベルに加え、前段となる「虎牙破斬」を150回以上使用するといった条件も必要となります。予め技の関係を理解しておけば、効率よく技の利用回数を稼ぐことができます。特技一覧ページでは専用レベルや技の使用回数も掲載していますのでご覧ください。
          </p>
          <GuideList
            items={[
              {
                title: "リッドの特技一覧",
                href: "/skills/rid",
              },
              {
                title: "ファラの特技一覧",
                href: "/skills/farth",
              },
            ]}
          />

          <Information title="特技画面に表示される未習得特技について">
            <p>
              特技画面には以下のように青色で使用できない未習得技が表示されることがあります。これは習得まであと1つの要素が足りないことを示しています。例えば今回の画像だと斬り/突きレベルは満たしていますが、前段の閃空裂破の使用回数が250回を超えていません。
            </p>
            <Image
              src="/systems/skill-level-unreach.jpg"
              alt=""
              width={300}
              height={200}
              className="mb-2"
            />
          </Information>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">キール/メルディの晶霊術習得</SectionTitle>
        <div className="mb-8">
          <h3>晶霊術の習得と大晶霊のレベル確認</h3>
          <p>
            キールとメルディはC.ケイジ（クレーメルケイジ）のフリンジによって晶霊術を習得します。フリンジで晶霊術を習得するには契約している大晶霊の組み合わせとレベルが必要です。
          </p>
          <p>
            大晶霊は戦闘の経験値が加算されてレベルアップしていきます。ただし大晶霊は個別に経験値を蓄えており、ストーリー後半で契約できるレムなどの大晶霊は0から経験値を蓄えていくことになためレベルが低くなりがちです。大晶霊のレベルと経験値情報はC.ケイジから確認できます。
          </p>
          <Image
            src="/systems/skill-level-magic.jpg"
            alt=""
            width={300}
            height={200}
            className="mb-8"
          />
          <div className="mb-8">
            <h3>アイテム、フリンジ</h3>
            <p>
              C.ケイジにある「アイテム」では大晶霊のレベルアップアイテム（「すいしょうせき」のようなアイテム）を利用できます。
            </p>
          </div>
          <div className="mb-8">
            <GuideList
              items={[
                {
                  title: "晶霊術一覧",
                  href: "/skills/magic",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">チャット/フォッグの特技習得</SectionTitle>
        <div className="mb-8">
          <p>
            チャットとフォッグはサブイベントにて特技を習得していきます。特技一覧や習得サブイベントの詳細は下記ページをご覧ください。
          </p>
        </div>
        <div className="mb-8">
          <GuideList
            items={[
              {
                title: "チャットの特技一覧",
                href: "/skills/chat",
              },
              {
                title: "チャットの特技習得イベント",
                href: "/subevents/skill-chat",
              },
              {
                title: "フォッグの特技一覧",
                href: "/skills/fog",
              },
              {
                title: "フォッグの特技習得イベント",
                href: "/subevents/skill-fog",
              },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
