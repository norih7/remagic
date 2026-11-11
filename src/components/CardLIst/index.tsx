type Props = {
  list: React.ReactNode[];
};
const CardList = ({ list }: Props) => {
  const List = list.map((item, index) => (
    <li className="px-4 py-3 hover:bg-gray-50 transition-colors" key={index}>
      {item}
    </li>
  ));
  return (
    <ul className="border border-gray-300 rounded-lg shadow-sm divide-y divide-gray-300">
      {List}
    </ul>
  );
};

export default CardList;
