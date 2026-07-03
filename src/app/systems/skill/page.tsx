import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import SectionHeader from "@/components/SectionHeader";
import GuideList from "@/components/GuideList";
import Image from "next/image";

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
          <p>
            リッドとファラは通常のレベルとは別に専用レベル（リッドは斬りレベル、突きレベル/ファラは拳レベル、蹴りレベル）を持っており、これらが一定レベルまで上がると特技や奥義を習得します。
          </p>
          <p>
            斬りレベルなどは戦闘中にキャラクターが行った攻撃の種類の回数（リッドは斬る/突く）によって加算されていきます。戦闘中に斬り攻撃ばかりをしていると突きレベルが上がらず、特技を習得できないため注意しましょう。
          </p>
          <p>
            斬りレベルなどはステータス画面でおおよそ確認できます。Lvは下記のようにゲージ進行で表示されていてMAXはLv30です。（画像は斬Lv30、突Lv28）
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

          <div className="mb-8">
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
          </div>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">キール/メルディの術習得</SectionTitle>
        <div className="mb-8">
          <p>
            キールとメルディは契約している大晶霊をC.ケイジのフリンジで組み合わせて晶霊術を習得できます。フリンジで晶霊術を習得するには大晶霊の組み合わせと一定以上のレベルが必要です。フリンジの組み合わせについては晶霊術一覧をご覧ください。
          </p>
          <p>
            大晶霊は戦闘勝利後に手に入る経験値が加算されてレベルアップしていきます。ただし大晶霊は個別に経験値を蓄えており、ストーリー後半で契約できる大晶霊は0から蓄えていくことになためレベルが低くなりがちです（レムなど）
          </p>
          <p>各大晶霊の経験値はC.ケイジから確認することができます。</p>
          <Image
            src="/systems/skill-level-magic.jpg"
            alt=""
            width={300}
            height={200}
          />
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
        <p>
          チャットとフォッグはサブイベントにて特技を習得していきます。特技一覧や習得サブイベントの詳細は下記ページをご覧ください。
        </p>

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
