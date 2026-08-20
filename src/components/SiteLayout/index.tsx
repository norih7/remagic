"use client";
import styles from "./styles.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useTitle } from "@/context/TitleContext";
import { useCategory } from "@/hooks/useCategory";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useTitle();
  const category = useCategory();

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.headerInner} px-4 pb-2 pt-1`}>
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
          <div className="">
            <span className="relative text-xs text-gray-700">
              テイルズオブエターニアの攻略情報をお届けします
            </span>
          </div>
        </div>
      </header>
      <div className={styles.pageTitleArea}>
        <div className={`${styles.pageTitleInner} px-4 py-3`}>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>
      </div>
      <div className={`${styles.shortcutMenu}`}>
        <div>
          <ul className="flex flex-wrap">
            <li className="py-2 pl-4 text-xs">
              <a href="/stories">ストーリーガイド</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/skills">特技/晶霊術</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/systems">システム/データ</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/subevents">サブイベント</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/extras">隠しマップ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        {/* PCのみ表示されるサイドバー */}
        <aside className={`${styles.sidebar} hidden md:block`}>
          <Menu />
        </aside>

        <main className={`${styles.main} px-6 py-8`}>
          <Breadcrumb category={category} pageTitle={title} />
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
        <div className="max-w-4xl mx-auto">
          <div className="pb-4">
            <p className="text-sm leading-relaxed">
              このサイトは個人で運営するテイルズオブエターニアの攻略ファンサイトです。見やすさと快適さを重視したサイト作りを目指します！
            </p>
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
        <div className="max-w-4xl mx-auto px-6 pt-4 border-t border-gray-200 text-xs space-y-2">
          <p>© RE:MAGIC</p>
          <p>
            当サイトはゲーム会社とは一切関係ありません。
            <br />
            当サイト上で使用しているゲームの画像やデータ等の著作権はすべて当該ゲームの権利者に帰属します。
          </p>
        </div>
      </footer>
    </>
  );
}
