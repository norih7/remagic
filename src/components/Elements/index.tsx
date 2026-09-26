import { elementMap } from "@/constants";
import Tag from "@/components/Tag";

type Element = keyof typeof elementMap;

type Props = {
  list: Element[];
};

const Elements = (props: Props) => {
  const { list } = props;
  const result = list.map((element, index) => {
    return (
      <Tag element={element} key={index}>
        {elementMap[element].name}
      </Tag>
    );
  });

  return (
    // <div className="flex py-1 px-2 border border-gray-300 rounded-md">
    //   <div className="text-xs font-bold py-1 mr-2 text-slate-700">属性</div>
    <div>{result}</div>
  );
};

export default Elements;
