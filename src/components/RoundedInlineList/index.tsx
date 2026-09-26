type Props = {
  title: string;
  type?: "default" | "wide";
  children: React.ReactNode;
};

const RoundedInlineList = (props: Props) => {
  const { title, type = "default", children } = props;
  const paddingType = type === "wide" ? "py-2" : "py-1";
  return (
    <dl
      className={`border border-slate-300 font-bold px-3 ${paddingType} rounded-xl text-center flex items-center text-xs text-gray-700`}
    >
      <dt
        className="mr-2 px-1 text-slate-700 border-r border-solid border-gray-300"
        style={{ paddingRight: "8px", borderRight: "1px solid #ccc" }}
      >
        {title}
      </dt>
      <dd>{children}</dd>
    </dl>
  );
};

export default RoundedInlineList;
