import {
  LuBookText,
  LuHistory,
  LuInfo,
  LuSparkles,
  LuMessageSquareWarning,
} from "react-icons/lu";
import { RiFlag2Fill } from "react-icons/ri";
import { FaMagic } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { PiSwordDuotone } from "react-icons/pi";

const sectionIcons = {
  overview: <LuInfo className="mr-1" />,
  guide: <LuBookText className="mr-1" />,
  data: <LuBookText className="mr-1" />,
  history: <LuHistory className="mr-1" />,
  flag: <RiFlag2Fill className="mr-1" />,
  subevent: <LuMessageSquareWarning className="mr-1" />,
  skill: <LuSparkles className="mr-1" />,
  system: <MdAnalytics size={24} className="mr-1" />,
};

type Props = {
  type?: keyof typeof sectionIcons;
  data?: string;
  children: React.ReactNode;
};

const SectionTitle = (props: Props) => {
  const { children, type = "guide", data = "" } = props;
  return (
    <h2 className="flex items-center mb-3" data-title={data}>
      <LuBookText className="mr-1" />
      {children}
    </h2>
  );
};

export default SectionTitle;
