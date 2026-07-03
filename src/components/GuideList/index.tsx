import styles from "./sytles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuFile } from "react-icons/lu";

// 型定義をエクスポートしておくと、他のファイルでも使えて便利です
export interface GuideItem {
  title: string;
  href: string;
  description?: string; // 任意で説明文を追加できるようにしています
}

interface GuideListProps {
  items: GuideItem[];
}

export const GuideList: React.FC<GuideListProps> = ({ items }) => {
  return (
    <div className="pt-4">
      <span className={`mb-2 text-sm inline-flex items-center font-bold`}>
        <LuFile className="mr-1" />
        ページリンク
      </span>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.href}
              className="flex items-center p-2 text-sm text-sky-800 bg-sky-50 border border-sky-200 rounded-sm transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300"
            >
              <MdKeyboardArrowRight className="mr-1" />
              <span>{item.title}</span>
              {item.description && (
                <span className="text-sm text-gray-500 mt-1">
                  {item.description}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuideList;
