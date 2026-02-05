type TTagsProps = {
  tags: string[];
};

const TagsDish = (props: TTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {props.tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 rounded-full text-xs font-bold">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsDish;
