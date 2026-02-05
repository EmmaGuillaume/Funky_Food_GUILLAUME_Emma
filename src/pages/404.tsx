import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 min-h-screen flex justify-center items-center flex-col gap-8">
      <p className="text-5xl text-white font-bold">Oups</p>

      <p className="text-3xl text-white font-bold">
        Il semblerait que cette page n'existe pas...
      </p>
      <Link
        className="w-56 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
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
    </section>
  );
};

export default Error;
