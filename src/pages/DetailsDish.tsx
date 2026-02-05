import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { TDishProps } from "../components/Dish";
import ListItem from "../components/details/ListItem";
import TagDetails from "../components/details/Tag";
import InfoCard from "../components/details/DishInfoCard";

const DetailsDish = () => {
  const { id } = useParams();
  const [dish, setDish] = useState<TDishProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDish(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (isLoading || !dish) {
    return (
      <div className="min-h-screen  bg-gray-400">
        <div className="relative h-[500px] overflow-hidden">
          <div className="w-full h-full object-cover bg-gray-300 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <Link
            className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-gray-600 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
            to="/"
            data-discover="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-left size-5"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Retour au Menu
          </Link>
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
              Delicious dish
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-gray-400 text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star size-5 fill-black"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                5 (184 avis)
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
                Medium
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
                French
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <InfoCard
                color="gray"
                linkSvg="http://www.w3.org/2000/svg"
                number={12}
                text="Préparation"
              />

              <InfoCard
                color="gray"
                linkSvg="http://www.w3.org/2000/svg"
                number={35}
                text="Cuisson"
              />

              <InfoCard
                color="gray"
                linkSvg="http://www.w3.org/2000/svg"
                number={8}
                text="Portions"
              />

              <InfoCard
                color="gray"
                linkSvg="http://www.w3.org/2000/svg"
                number={400}
                text="Calories"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <Link
          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
          to="/"
          data-discover="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-left size-5"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Retour au Menu
        </Link>
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl">
            {dish.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star size-5 fill-black"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              {dish.rating} ({dish.reviewCount} avis)
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
              {dish.difficulty}
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold">
              {dish.cuisine}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <InfoCard
              color="purple"
              linkSvg="http://www.w3.org/2000/svg"
              number={dish.prepTimeMinutes}
              text="Préparation"
            />

            <InfoCard
              color="pink"
              linkSvg="http://www.w3.org/2000/svg"
              number={dish.cookTimeMinutes}
              text="Cuisson"
            />

            <InfoCard
              color="orange"
              linkSvg="http://www.w3.org/2000/svg"
              number={dish.servings}
              text="Portions"
            />

            <InfoCard
              color="yellow"
              linkSvg="http://www.w3.org/2000/svg"
              number={dish.caloriesPerServing}
              text="Calories"
            />
          </div>
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {dish.tags.map((tag, index) => (
                <TagDetails key={index} text={tag} type="Tags" />
              ))}
              {dish.mealType.map((type, index) => (
                <TagDetails key={index} text={type} type="Types" />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border-4 border-purple-200 transform -rotate-1">
              <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                🛒 Ingrédients
              </h2>
              <ul className="space-y-3">
                {dish.ingredients.map((ingredient, index) => (
                  <ListItem
                    key={index}
                    text={ingredient}
                    steps={index + 1}
                    type="Ingredients"
                  />
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl shadow-xl border-4 border-orange-200 transform rotate-1">
              <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                👨‍🍳 Instructions
              </h2>
              <ol className="space-y-4">
                {dish.instructions.map((instruction, index) => (
                  <ListItem
                    key={index}
                    text={instruction}
                    steps={index + 1}
                    type="Instructions"
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
              <p className="text-3xl font-black text-white mb-4">
                Prêt à cuisiner funky ? 🎉
              </p>
              <a
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
                href="/"
                data-discover="true"
              >
                Découvrir Plus de Plats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDish;
