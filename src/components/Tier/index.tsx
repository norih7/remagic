import InlineCaption from "@/components/InlineCaption";
import { LuCrown } from "react-icons/lu";

type Props = {
  rank: 1 | 2 | 3;
  children?: React.ReactNode;
};
const Tier = (props: Props) => {
  const { children = "", rank } = props;
  const color =
    rank === 1
      ? "text-amber-500"
      : rank === 2
        ? "text-gray-400"
        : "text-yellow-700";

  return (
    <span className="inline-flex items-center">
      <InlineCaption>
        <LuCrown className={color} />
        Tier{rank}
      </InlineCaption>
      {children}
    </span>
  );
};

export default Tier;
