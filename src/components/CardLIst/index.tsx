type Props = {
  list: string[];
};
const CardList = ({ list }: Props) => {
  const List = list.map((item, index) => (
    <li className="p-3 hover:bg-gray-50 transition-colors" key={index}>
      {item}
    </li>
  ));
  return (
    <ul className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      {List}
    </ul>
  );
};

export default CardList;
