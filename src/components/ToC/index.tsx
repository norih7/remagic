import { LuList, LuTableOfContents } from "react-icons/lu";

import Link from "next/link";

type Props = {
  list: Record<string, string>;
};
const ToC = (props: Props) => {
  const { list } = props;
  return (
    <nav className="p-4 bg-[#faf9f2] rounded-lg border border-[#e7e1d4]">
      {/* <div className="text-sm font-bold mb-4 text-gray-800 flex items-center"> */}
      <div className="border-l-5 border-red-400 text-gray-800 px-1.5 mb-3 text-xs font-bold">
        目次
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-1 gap-2">
        {Object.entries(list).map(([id, title]) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="block py-1.5 px-3 rounded-lg !text-gray-700 text-xs bg-white hover:bg-gray-50 hover:text-indigo-600 transition-colors border border-[#e7e1d4]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ToC;
