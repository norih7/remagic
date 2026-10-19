"use client";

type Props = {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  key?: number | string;
};

const RoundedItem = (props: Props) => {
  const { title = "", children, className = "" } = props;

  const Title =
    title === "" ? null : (
      <div className="mb-2 text-slate-900 font-bold uppercase tracking-wider flex items-center border-b border-gray-300 pb-1">
        {title}
      </div>
    );
  return (
    <div
      className={`${className} text-slate-800 bg-slate-50 rounded-lg border border-slate-300 text-xs px-3 py-2`}
    >
      {Title}
      <div>{children}</div>
    </div>
  );
};

export default RoundedItem;
