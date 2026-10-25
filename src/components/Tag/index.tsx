import { elementMap } from "@/constants";

type Props = {
  children: React.ReactNode;
  element?: keyof typeof elementMap;
  tail?: string;
};

const Tag = (props: Props) => {
  const { children, element = "none", tail = "" } = props;
  const { tagClass } = elementMap[element];
  return (
    <span
      className={`mr-1 px-2 py-[4px] border rounded-xs text-xs font-bold inline-flex items-center ${tagClass}`}
    >
      {children}
      {tail}
    </span>
  );
};

export default Tag;
