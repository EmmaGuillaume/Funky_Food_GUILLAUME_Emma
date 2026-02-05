import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
        <Header />
        <div>
          {" "}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
