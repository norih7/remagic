type Props = {
  children?: React.ReactNode;
};
const InlineCaption = (props: Props) => {
  const { children = "" } = props;
  return (
    <span className="rounded-sm border border-gray-400 px-2 inline-flex items-center gap-x-1 mr-2">
      {children}
    </span>
  );
};

export default InlineCaption;
