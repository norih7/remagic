import styles from "./styles.module.css";
import Link from "next/link";
import { storyLinks } from "@/constants";
import { skillLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { extraLinks } from "@/constants";

type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};

type Props = {
  links: Link[];
};
const List = (props: Props) => {
  const { links } = props;
  const list = links.map((item, index) => (
    <li key={index}>
      <a href={item.path} className="block p-1 hover:bg-gray-100 rounded">
        {item.title}
      </a>
    </li>
  ));
  return <ul className="space-y-1 mb-5">{list}</ul>;
};

const Category = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
    {children}
  </h3>
);

export default function Menu() {
  return (
    <nav className={`${styles.menu} px-4 py-8`}>
      <Category>ストーリーガイド</Category>
      <List links={Object.values(storyLinks)} />
      <Category>特技/晶霊術</Category>
      <List links={Object.values(skillLinks)} />
      {/* <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        Data
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a href="/recipes" className="block p-1 hover:bg-gray-100 rounded">
            レシピ一覧
          </a>
        </li>
        <li>
          <a href="/recipes" className="block p-1 hover:bg-gray-100 rounded">
            レンズ一覧
          </a>
        </li>
      </ul> */}
      <Category>システム/データ</Category>
      <List links={Object.values(systemLinks)} />
      <Category>サブイベント</Category>
      <List links={Object.values(subeventLinks)} />
      <Category>隠しダンジョン</Category>
      <List links={Object.values(extraLinks)} />
    </nav>
  );
}
