import type { TDishProps } from "./Dish";
import Dish from "./Dish";

type TProps = {
  dishes: TDishProps[];
};

const Menu = (props: TProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {props.dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </section>
  );
};

export default Menu;
