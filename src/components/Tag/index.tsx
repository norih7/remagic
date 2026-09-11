import { elementMap } from "@/constants";

type Props = {
  children: React.ReactNode;
  element?: keyof typeof elementMap;
};

const Tag = (props: Props) => {
  const { children, element = "none" } = props;
  const { tagClass } = elementMap[element];
  return (
    <span
      className={`mr-1 px-2 py-1 border rounded-xs text-xs font-bold ${tagClass}`}
    >
      {children}
    </span>
  );
};

export default Tag;
