import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PhantomDish from "../components/PhantomDish";

function AllDishes() {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

   useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.recipes);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchTerm]);

  return (
    <>
      <Header />

      <div className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
            Liste de tous les plats
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            bientôt dans votre assiette ! 🌈✨
          </p>

          <div className="flex justify-between flex-wrap mb-8">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchTerm(e.currentTarget.value);
                }
              }}
              placeholder="Cherche ton prochain repas"
              className="bg-gray-100 rounded-full w-96 px-4"
            />
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <p>Trier par nom :</p>
                <select
                  name="Trier"
                  id="Trier"
                  className="px-4 py-2 rounded-lg border border-gray-300"
                >
                  <option value="a">a</option>
                  <option value="a">b</option>
                  <option value="a">c</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <p>Filter par catégorie :</p>
                <select
                  name="category"
                  id="category"
                  defaultValue={"b"}
                  className="px-4 py-2 rounded-lg border border-gray-300"
                >
                  <option value="a">a</option>
                  <option value="a">b</option>
                  <option value="a">c</option>
                </select>
              </div>
            </div>
          </div>

          {isLoading ? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PhantomDish />
              <PhantomDish />
              <PhantomDish />
            </section>
          ) : (
            <Menu dishes={dishes} />
          )}
        </div>
      </div>
    </>
  );
}

export default AllDishes;
