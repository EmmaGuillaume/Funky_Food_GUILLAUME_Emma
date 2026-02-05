type TTagDetails = {
  text: string;
  type: "Tags" | "Types";
};

const TagDetails = (props: TTagDetails) => {
  return (
    <span
      className={`px-6 py-3 bg-gradient-to-r ${props.type === "Tags" ? "from-purple-500 to-pink-500" : "from-orange-500 to-yellow-500"} text-white rounded-full font-bold text-lg shadow-lg`}
    >
      {props.text}
    </span>
  );
};

export default TagDetails;
