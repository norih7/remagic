import React from "react";
import { LuInfo, LuTriangleAlert } from "react-icons/lu";

interface InformationProps {
  type?: "info" | "warning";
  title?: string;
  children: React.ReactNode;
}

export const Information: React.FC<InformationProps> = ({
  type = "info",
  title = "",
  children,
}) => {
  const isWarning = type === "warning";

  // 彩度を少し抑えた、読みやすいパステル調の配色
  const styles = isWarning
    ? "bg-amber-50 border-amber-200 text-amber-900"
    : "bg-blue-50 border-blue-200 text-blue-900";

  const icon = isWarning ? (
    <LuTriangleAlert className="text-amber-600 shrink-0" size={20} />
  ) : (
    <LuInfo className="text-blue-600 shrink-0" size={20} />
  );

  const infoTitle =
    title === "" ? <></> : <span className="ml-2 font-bold">{title}</span>;

  return (
    <div className={`gap-3 p-4 border rounded-lg ${styles} my-4`}>
      <div className="flex items-center mb-2">
        {icon}
        {infoTitle}
      </div>
      <div className="text-sm leading-relaxed opacity-95">{children}</div>
    </div>
  );
};

export default Information;
