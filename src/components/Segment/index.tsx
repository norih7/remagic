type Props = {
  children: React.ReactNode;
  className?: string;
};
const Segment = (props: Props) => {
  const { children, className = "" } = props;
  return <div className={`${className} mb-4 px-2`}>{children}</div>;
};

export default Segment;
