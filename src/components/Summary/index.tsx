import styles from "./style.module.css";
import { BiSolidInfoSquare } from "react-icons/bi";
import { LuLightbulb } from "react-icons/lu";
import { LuMessageCircleMore, LuChevronDown } from "react-icons/lu";
import RoundedInlineList from "@/components/RoundedInlineList";
import RoundedContainer from "../RoundedContainer";

type Props = {
  list: { label: string; value: React.ReactNode }[];
  color?: "black" | "green";
};
const Summary = (props: Props) => {
  const { color = "green", list } = props;
  return (
    // <div className="mb-4 grid grid-cols-1 gap-2">
    //   {list.map((item, index) => {
    //     const { label, value } = item;
    //     return (
    //       <div key={index}>
    //         <RoundedInlineList title={label}>{value}</RoundedInlineList>
    //       </div>
    //     );
    //   })}
    // </div>
    <>
      <div className="inline-block bg-lime-600 px-3 py-0.5 mb-3 font-bold text-white rounded-lg text-xs">
        攻略情報
      </div>
      <RoundedContainer>
        <dl className="grid grid-cols-1 gap-2">
          {list.map((item, index) => {
            const { label, value } = item;
            return (
              <div
                className={`${index != 0 && "border-t pt-2"} border-gray-300`}
                key={index}
              >
                <dt className="font-bold text-slate-600 text-xs mb-1">
                  {label}
                </dt>
                <dd className="text-xs">{value}</dd>
              </div>
            );
          })}
        </dl>
      </RoundedContainer>
    </>
  );
};

export default Summary;
