import styles from "./style.module.css";
import { BiSolidInfoSquare } from "react-icons/bi";
import { LuLightbulb } from "react-icons/lu";
import { RiFileInfoFill } from "react-icons/ri";
import { LuMessageCircleMore, LuChevronDown } from "react-icons/lu";
type Props = {
  title?: string;
  color?: "black" | "green";
  children: React.ReactNode;
};
const PageSummary = (props: Props) => {
  const { children, title = "", color = "green" } = props;
  return (
    <div className={`${styles.summary} mb-8 border-b pb-4 border-gray-300`}>
      <div className="flex items-start gap-x-2">
        <div className="pt-">
          <LuMessageCircleMore size={22} className="text-amber-600" />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default PageSummary;
