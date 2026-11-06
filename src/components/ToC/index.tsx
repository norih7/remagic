import { LuList } from "react-icons/lu";
import Link from "next/link";

type Props = {
  list: Record<string, string>;
};
const ToC = (props: Props) => {
  const { list } = props;
  return (
    <nav className="p-4 bg-[#faf9f2] rounded-lg border border-[#e7e1d4]">
      <div className="text-sm font-bold mb-3 text-gray-800 flex items-center">
        <LuList className="mr-1" />
        目次
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(list).map(([id, title]) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="block py-2 px-3 rounded-lg !text-gray-700 bg-white hover:bg-gray-50 hover:text-indigo-600 transition-colors border border-gray-300"
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
