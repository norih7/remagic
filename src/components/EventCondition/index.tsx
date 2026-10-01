import styles from "./styles.module.css";
import { LuMapPinCheckInside } from "react-icons/lu";

const list = {
  skill: "習得条件",
  period: "発生期間",
};
type Props = {
  category: keyof typeof list;
  children: React.ReactNode;
};
const EventCondition = (props: Props) => {
  const { category = "period", children } = props;
  const title = list[category];
  return (
    <div
      className={`${styles.condition} mb-3 pt-2 flex items-center font-bold text-xs border-t-1 border-slate-800 rounded-`}
    >
      <div
        className={`${styles.smallInfo} mr-2 flex items-center font-bold text-white bg-mauve-500 rounded-sm pl-2 pr-3 py-1`}
      >
        <LuMapPinCheckInside className="mr-1" />
        {title}
      </div>
      {children}
    </div>
  );
};

export default EventCondition;
