type Props = {
  title: string;
  children: React.ReactNode;
};

const RoundedInlineList = (props: Props) => {
  const { title, children } = props;
  return (
    <dl className="border border-gray-300 font-bold px-2 py-1 mr-1 rounded-lg text-center flex items-center text-xs text-gray-700">
      <dt className="mr-1">{title}</dt>
      <dd>{children}</dd>
    </dl>
  );
};

export default RoundedInlineList;
