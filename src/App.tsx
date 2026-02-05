import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      caloriesPerServing: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.6,
      reviewCount: 98,
      mealType: ["Dinner"],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://dummyjson.com/recipes`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDishes(data.recipes);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
        <div className="relative overflow-hidden">
          <div
            className="h-[400px] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1620395458832-6436796c2d4c)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-4 transform -rotate-2 drop-shadow-2xl">
                🍕 FUNKY FOOD ! 🌮
              </h1>
              <p className="text-xl md:text-2xl text-yellow-300 font-bold transform rotate-1">
                Où la saveur rencontre l'ambiance !
              </p>
            </div>
          </div>
          <div className="relative -mt-1">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-24"
            >
              <path
                d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-white px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
              Notre Menu Groovy
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
            </p>

            <Menu dishes={dishes} />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-8">
          <p className="text-center text-white font-bold text-lg">
            Fait avec 💜 et beaucoup de saveur !
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
