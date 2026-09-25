type Props = {
  title: string;
  type?: "default" | "wide";
  children: React.ReactNode;
};

const InlineList = (props: Props) => {
  const { title, type = "default", children } = props;
  const paddingType = type === "wide" ? "py-2" : "py-1";
  return (
    <dl
      className={`borde border-slate-300 font-bold px-3 ${paddingType} rounded-xs text-center flex flex-wrap items-center text-xs text-gray-700`}
    >
      <dt className="mr-2 text-slate-700">{title}</dt>
      <dd>{children}</dd>
    </dl>
  );
};

export default InlineList;
