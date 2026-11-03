"use client";

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  key?: number | string;
  white?: boolean;
  large?: boolean;
};

const RoundedItem = (props: Props) => {
  const {
    title = "",
    children,
    className = "",
    white = false,
    large = false,
  } = props;
  const bgColor = white ? "bg-white" : "bg-slate-50";

  const Title =
    title === "" ? null : (
      <div
        className={`mb-2 text-slate-900 font-bold uppercase tracking-wider flex items-center border-b border-gray-300 pb-1 ${!large && "text-xs"}`}
      >
        {title}
      </div>
    );
  return (
    <div
      className={`${className} ${bgColor} text-slate-800 rounded-lg border border-slate-300 px-3 py-2`}
    >
      {Title}
      <div className="text-xs">{children}</div>
    </div>
  );
};

export default RoundedItem;
