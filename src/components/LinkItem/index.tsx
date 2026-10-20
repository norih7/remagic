import Link from "next/link";
import KeyItemIcon from "@/components/Icons/KeyItemIcon";
import TimeLimitIcon from "@/components/Icons/TimeLimitIcon";
import SkillIcon from "@/components/Icons/SkillIcon";

type Props = {
  key: string | number;
  name: string;
  remarks?: string;
  href?: string;
  type?: string;
};
const LinkItem = (props: Props) => {
  const { name, remarks, href, type } = props;

  const Icon =
    type === "keyItem" ? (
      <KeyItemIcon />
    ) : type === "time-limit" ? (
      <TimeLimitIcon />
    ) : type === "skill" ? (
      <SkillIcon />
    ) : null;
  return typeof href === "undefined" ? (
    <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 leading-none">
      <div className="font-bold text-slate-600 mb-1">{name}</div>
      {remarks && <span className="text-slate-600 text-xs">{remarks}</span>}
    </div>
  ) : (
    <Link
      className="block bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg px-3 py-3 leading-none"
      href={href}
    >
      <div className="font-bold flex items-center">
        {Icon}
        {name}
      </div>
      {remarks && <div className="pt-1 text-slate-600 text-xs">{remarks}</div>}
    </Link>
  );
};

export default LinkItem;
