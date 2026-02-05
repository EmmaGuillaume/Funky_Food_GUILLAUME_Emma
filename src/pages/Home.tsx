import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PhantomDish from "../components/PhantomDish";
import { Link } from "react-router-dom";

function Home() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/recipes/?limit=9`)
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
    <>
      <Header />

      <div className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
            Notre Menu Groovy
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
          </p>

          {isLoading ? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PhantomDish />
              <PhantomDish />
              <PhantomDish />
            </section>
          ) : (
            <Menu dishes={dishes} />
          )}

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
              <p className="text-3xl font-black text-white mb-4">
                Curieux de notre philosophie ? 🎉
              </p>
              <Link
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
                to="/about"
                data-discover="true"
              >
                À propos de nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
