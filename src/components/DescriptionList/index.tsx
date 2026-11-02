import { LuChevronDown } from "react-icons/lu";

type Props = {
  list: Record<string, React.ReactNode>[];
};

const DescriptionList = (props: Props) => {
  const { list } = props;

  const result = list.map((item, index) => {
    const { label, value } = item;
    return (
      <div className="mb-2" key={index}>
        {/* <dt className="border border-gray-600 rounded-sm inline-block px-2 mb-1"> */}
        <dt className="border-b border-gray-300 font-bold mb-1 pb-1 flex items-center gap-1">
          {label}
        </dt>
        <dd className="flex items-center gap-x-1">{value}</dd>
      </div>
    );
  });
  return <dl>{result}</dl>;
};

export default DescriptionList;
