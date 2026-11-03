import styles from "./style.module.css";
import { BiSolidInfoSquare } from "react-icons/bi";
import { LuLightbulb } from "react-icons/lu";
import { LuMessageCircleMore, LuChevronDown } from "react-icons/lu";
import RoundedInlineList from "@/components/RoundedInlineList";

type Props = {
  list: { label: string; value: React.ReactNode }[];
  color?: "black" | "green";
};
const Summary = (props: Props) => {
  const { color = "green", list } = props;
  return (
    <div className="mb-4 grid grid-cols-1 gap-2">
      {list.map((item, index) => {
        const { label, value } = item;
        return (
          <div key={index}>
            <RoundedInlineList title={label}>{value}</RoundedInlineList>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
