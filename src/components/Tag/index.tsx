import { elementMap } from "@/constants";

type Props = {
  children: React.ReactNode;
  element?: keyof typeof elementMap;
  tail?: string;
};

const Tag = (props: Props) => {
  const { children, element = "none", tail = "" } = props;
  const { tagClass } = elementMap[element];
  return element === "none" ? null : (
    <span
      className={`mr-1 px-2 py-1 border rounded-xs text-xs font-bold ${tagClass}`}
    >
      {children}
      {tail}
    </span>
  );
};

export default Tag;
