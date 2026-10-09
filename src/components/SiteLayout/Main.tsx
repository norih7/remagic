"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { storyLinks } from "@/constants";
import { skillLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { extraLinks, deepLinks, guideLinks } from "@/constants";
import { LuMessageCircleMore, LuChevronDown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { useCategory } from "@/hooks/useCategory";
import Menu from "./Menu";
type Props = {
  title: string;
  children: React.ReactNode;
};

const Main = ({ title, children }: Props) => {
  const pathname = usePathname();
  const category = useCategory();
  const test =
    pathname === "/" ? (
      <p className="mb-1 text-xs text-slate-800">
        RE:MAGIC リマスター版対応の完全攻略データ
      </p>
    ) : (
      <Breadcrumb category={category} pageTitle={title} />
    );
  const categoryName: Record<string, string> = {
    "/": "トップページ",
    guides: "プレイガイド",
    stories: "ストーリー",
    skills: "特技/晶霊術",
    systems: "各種データ",
    subevents: "サブイベント",
    extras: "隠しマップ",
    deeps: "やりこみ",
  };

  const menu = Object.keys(categoryName).map((key, index) => {
    const activeClass =
      key === category
        ? "border-b-2 border-sky-500"
        : "border-b-2 border-transparent";

    return (
      <li
        className={`pt-1 pb-0.5 text-center text-xs whitespace-nowrap hover:text-slate-400 !border-b-2 border-gray-300 w-auto ${activeClass}`}
        key={index}
      >
        <Link href={`/${key}`} className="block">
          {categoryName[key]}
        </Link>
      </li>
    );
  });
  return (
    <>
      <div className={styles.pageTitleArea}>
        <div className={`${styles.pageTitleInner} px-4 py-3`}>
          {test}
          <h2 className="text-lg font-bold text-slate-700">{title}</h2>
        </div>
      </div>
      <div className={`${styles.shortcutMenu} shadow-2xs`}>
        <div>
          <ul className="grid grid-cols-4 md:flex md:flex-wrap gap-x-4 gap-y-1 px-4 py-2 font-bold text-slate-600">
            {menu}
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        {/* PCのみ表示されるサイドバー */}
        <aside className={`${styles.sidebar} hidden md:block`}>
          <Menu />
        </aside>

        <main className={`${styles.main} px-6`}>
          {/* <div className="p-4 bg-gray- border border-gray-400 rounded-xl mb-8">
            Adsense
          </div> */}
          {children}
        </main>
      </div>
    </>
  );
};

export default Main;
