import styles from "./sytles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuFile, LuBookOpen } from "react-icons/lu";

// 型定義をエクスポートしておくと、他のファイルでも使えて便利です
export interface GuideItem {
  title: string;
  href: string;
  description?: string;
}

interface GuideListProps {
  items: GuideItem[];
  isRelated?: boolean;
}

export const GuideList: React.FC<GuideListProps> = ({
  items,
  isRelated = false,
}) => {
  return (
    <div>
      {isRelated && (
        <div className="inline-block bg-gray-600 px-3 py-0.5 mb-3 font-bold text-white rounded-lg text-xs">
          関連記事
        </div>
      )}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block bg-white p-4 border-2 border-slate-200 rounded-lg hover:border-sky-300 hover:bg-sky-50 transition-all"
            >
              <div className="flex items-center text-sky-800 font-bold">
                <LuBookOpen className="mr-2" />
                {item.title}
              </div>
              {item.description && (
                <p className="text-sm text-slate-500 mt-1 ml-7">
                  {item.description}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuideList;
