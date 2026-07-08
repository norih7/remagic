import Link from "next/link";
import Image from "next/image";

type Content = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
type Props = {
  list: Content[];
};

const ContentLinks = (props: Props) => {
  const { list } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {list.map((item) => {
        const Logo = item.image ? (
          <div className="flex justify-center bg-gray-800 mb-2">
            <Image
              src={item.image}
              alt=""
              width={350}
              height={80}
              className="object-contain"
            />
          </div>
        ) : null;
        const Desc =
          item.desc === "" ? (
            item.desc
          ) : (
            <p className="flex-grow text-slate-800">{item.desc}</p>
          );
        return (
          <Link
            key={item.path}
            href={item.path}
            className="flex flex-col h-full block pt-3 pb-3 px-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="mb-3 text-base">{item.title}</h3>
            {Logo}
            {Desc}
          </Link>
        );
      })}
    </div>
  );
};

export default ContentLinks;
