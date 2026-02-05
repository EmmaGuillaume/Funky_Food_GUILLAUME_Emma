import { useEffect, useState } from "react";
import Menu from "../components/Menu";

function Home() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/recipes`)
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.recipes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
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
  );
}

export default Home;
