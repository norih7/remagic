"use client";
import styles from "./styles.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useTitle } from "@/context/TitleContext";
import { useCategory } from "@/hooks/useCategory";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LuBookText,
  LuHistory,
  LuInfo,
  LuSparkles,
  LuMessageSquareWarning,
  LuSquareChevronRight,
} from "react-icons/lu";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useTitle();
  const category = useCategory();
  const pathname = usePathname();
  const topText =
    pathname === "/" ? (
      <p className="mb-1 text-xs text-slate-800">
        RE:MAGIC リマスター版対応の完全攻略データ
      </p>
    ) : null;

  const categoryName: Record<string, string> = {
    stories: "ストーリーガイド",
    skills: "特技/晶霊術",
    systems: "システム/データ",
    subevents: "サブイベント",
    extras: "隠しマップ",
  };
  const menu = Object.keys(categoryName).map((key, index) => {
    const activeClass = key === category ? "border-b-2 border-gray-400" : "";
    return (
      <li
        className={`ml-4 p-1 text-xs flex items-center ${activeClass}`}
        key={index}
      >
        <LuSquareChevronRight className="mr-1" />
        <a href={`/${key}`}>{categoryName[key]}</a>
      </li>
    );
  });

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.headerInner} px-4 pb-1 pt-1`}>
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-bold tracking-tight">
              <a href="/">
                <Image
                  src="/logo.png"
                  alt="RE:MAGIC - テイルズオブエターニア攻略/リマスター対応サイト"
                  width={145}
                  height={45}
                />
              </a>
            </h1>
            <MenuButton />
          </div>
          <div>
            <span className="relative text-xs text-gray-700">
              リマスターに対応したテイルズオブエターニア攻略ガイド
            </span>
          </div>
        </div>
      </header>
      <div className={styles.pageTitleArea}>
        <div className={`${styles.pageTitleInner} px-4 py-3`}>
          <Breadcrumb category={category} pageTitle={title} />
          {topText}
          <h2 className="text-lg font-bold text-slate-700">{title}</h2>
        </div>
      </div>
      <div className={`${styles.shortcutMenu}`}>
        <div>
          <ul className="flex flex-wrap py-2">{menu}</ul>
        </div>
      </div>
      <div className={styles.container}>
        {/* PCのみ表示されるサイドバー */}
        <aside className={`${styles.sidebar} hidden md:block`}>
          <Menu />
        </aside>

        <main className={`${styles.main} px-6 py-8`}>
          {/* <div
            style={{
              height: "200px",
              background: "#333",
              marginBottom: "30px",
            }}
          >
            Adsense
          </div> */}
          {children}
        </main>
      </div>

      <footer className={styles.footer}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-sm rounded-lg">
                <h4 className="font-bold text-md mb-3">サイト概要</h4>
                <p className="mb-2">
                  このサイトは個人で運営するテイルズオブエターニアの攻略ファンサイトです。
                  見やすさと快適さを重視したサイト作りを目指しています。また当サイト上で使用しているゲームの画像やデータ等の著作権はすべて当該ゲームの権利者に帰属します。
                </p>
              </div>
              <div className="text-sm rounded-lg">
                <h4 className="font-bold text-md mb-3 text-left">運営者情報</h4>
                <p className="mb-2">
                  X:{" "}
                  <a href="https://x.com/remagicd" target="_blank">
                    あいす @remagicd
                  </a>
                </p>
                <p>
                  エターニア大好き、製作スタッフも大好き！過去にMagicWaveというエターニア攻略サイトを運営しており、今回リマスター発表を受けてもう一度サイトを作りました。
                </p>
              </div>
              <div className="text-sm rounded-lg">
                <h4 className="font-bold text-md mb-3 text-left">問い合わせ</h4>
                <p className="mb-2">
                  <a href="https://forms.gle/pwHhGryhp9VjncYo7">
                    問い合わせフォーム
                  </a>
                </p>
                <p className="mb-2">
                  このサイトに対する問い合わせはXのDMまたは問い合わせフォームからお願いいたします。
                </p>
              </div>
            </div>
          </div>
          {/* <div className="space-y-4">
            <ul className="flex text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  サイトについて
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* 4. コピーライト＆免責事項 */}
        <div className="max-w-4xl mx-auto px-6 pt-6 border-t border-gray-200 text-xs space-y-2">
          <p>© RE:MAGIC</p>
        </div>
      </footer>
    </>
  );
}
