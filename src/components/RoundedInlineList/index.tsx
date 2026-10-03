type Props = {
  title: string;
  type?: "default" | "wide";
  children: React.ReactNode;
};

const RoundedInlineList = (props: Props) => {
  const { title, type = "default", children } = props;
  const paddingType = type === "wide" ? "py-1.5" : "py-0.5";
  return (
    <dl
      className={`border border-slate-500 ${paddingType} rounded-xs text-center flex items-center text-xs text-gray-700`}
    >
      <dt className="px-2 text-slate-700 border-r border-solid border-slate-600 ">
        {title}
      </dt>
      <dd className="px-2">{children}</dd>
    </dl>
  );
};

export default RoundedInlineList;
