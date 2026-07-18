type Props = {
  children: React.ReactNode;
};
const RoundedContainer = (props: Props) => {
  const { children } = props;
  return (
    <div className="mb-4 font-bold border border-slate-200 rounded-lg p-3 shadow-xs">
      {children}
    </div>
  );
};

export default RoundedContainer;
