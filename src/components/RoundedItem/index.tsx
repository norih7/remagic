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
      <strong className="mb-1 text-slate-900 font-bold uppercase tracking-wider flex items-center border-b border-gray-300 pb-1">
        {title}
      </strong>
    );
  return (
    <div
      className={`${className} bg-slate-50 rounded-lg border border-slate-200 text-xs px-3 py-2`}
    >
      {Title}
      <div className="text-slate-900">{children}</div>
    </div>
  );
};

export default RoundedItem;
