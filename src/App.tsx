import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
