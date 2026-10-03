type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};
const RoundedContainer = (props: Props) => {
  const { children, title = "", className = "" } = props;
  return (
    <div
      className={`${className} mb-4 border border-slate-300 rounded-lg p-3 shadow-xs`}
    >
      {title && (
        <h4 className="text-sm border-b border-slate-300 pb-1.5 text-slate-700">
          {title}
        </h4>
      )}
      {children}
    </div>
  );
};

export default RoundedContainer;
