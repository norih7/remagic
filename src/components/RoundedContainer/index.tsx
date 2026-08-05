type Props = {
  children: React.ReactNode;
  className?: string;
};
const RoundedContainer = (props: Props) => {
  const { children, className = "" } = props;
  return (
    <div
      className={`${className} mb-4 border border-slate-200 rounded-lg p-3 shadow-xs`}
    >
      {children}
    </div>
  );
};

export default RoundedContainer;
