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
      className={`${styles.condition} mb-3 p-2 flex items-center font-bold text-xs border border-gray-300 rounded-lg`}
    >
      <div
        className={`${styles.smallInfo} mr-1 flex items-center font-bold text-white bg-mauve-500 border rounded-lg pl-2 pr-3 py-1`}
      >
        <LuMapPinCheckInside className="mr-1" />
        {title}
      </div>
      {children}
    </div>
  );
};

export default EventCondition;
