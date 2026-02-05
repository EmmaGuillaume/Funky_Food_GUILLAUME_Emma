type TInfoCard = {
  color: string;
  linkSvg: string;
  number: number;
  text: string;
};

const InfoCard = (props: TInfoCard) => {
  return (
    <div className={`bg-gradient-to-br from-${props.color}-200 to-${props.color}-300 p-6 rounded-3xl text-center transform -rotate-1 shadow-lg`}>
      <svg
        xmlns={props.linkSvg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={`lucide lucide-chef-hat size-8 mx-auto mb-2 text-${props.color}-700`}
      >
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
        <path d="M6 17h12"></path>
      </svg>
      <div className={`font-black text-2xl text-${props.color}-900`}>
        {props.number}
      </div>
      <div className={`text-sm text-${props.color}-700 font-bold`}>{props.text}</div>
    </div>
  );
};

export default InfoCard;
