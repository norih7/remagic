type Props = {
  title: string;
  type?: "default" | "wide";
  children: React.ReactNode;
  onecol?: boolean;
};

const RoundedInlineList = (props: Props) => {
  const { title, type = "default", children, onecol = false } = props;
  const paddingType = type === "wide" ? "py-1.5" : "py-[4px]";
  const minWidth = onecol === true ? "min-w-[80px]" : null;
  return (
    <dl
      className={`border border-gray-700 ${paddingType} rounded-xs text-center flex items-center items-stretch text-xs text-slate-800`}
    >
      <dt
        className={`px-2 flex items-center border-r border-solid border-gray-700 ${minWidth}`}
      >
        {title}
      </dt>
      <dd className="px-2 flex-1 items-center flex text-left ">{children}</dd>
    </dl>
  );
};

export default RoundedInlineList;
