type TPlatProps = {
  name: string;
  niveau : {
    name: string;
    note: number;
  }
  tempsMinutes: number;
  image: string;
  portions: number;
  tag: string;
  description: string;
  calories: number;
};

const Plat = (props: TPlatProps) => {
  return <div className="">{props.name}</div>;
};

export default Plat;

export type { TPlatProps };