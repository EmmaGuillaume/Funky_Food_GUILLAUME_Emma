type TListItem = {
  text: string;
  steps: number;
  type: "Ingredients" | "Instructions";
};

const ListItem = (props: TListItem) => {
  return (
    <li className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-md">
      <span
        className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br  rounded-full flex items-center justify-center text-white font-bold text-sm ${props.type === "Ingredients" ? "from-purple-400 to-pink-400" : "from-orange-400 to-yellow-400"}`}
      >
        {props.steps}
      </span>
      <span className="font-medium text-gray-800 pt-1">{props.text}</span>
    </li>
  );
};

export default ListItem;
