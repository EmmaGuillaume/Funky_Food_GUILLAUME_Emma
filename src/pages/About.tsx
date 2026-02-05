import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PhantomDish from "../components/PhantomDish";
import { Link } from "react-router-dom";

function About() {
  // Design et rédaction par ChatGPT
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen px-6 py-20 text-gray-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Des plats{" "}
            <span className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Funky
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ici, la cuisine sort du cadre. Des recettes colorées, audacieuses et
            un peu déjantées — pensées pour ceux qui mangent aussi avec les
            yeux.
          </p>

          {/* Accent separator */}
          <div className="mt-12 h-1 w-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">🎨 Notre philosophie</h2>
            <p className="text-gray-600 leading-relaxed">
              On mélange les saveurs comme on mélange les couleurs. Rien n’est
              interdit, tout est assumé. Le funky, c’est l’équilibre parfait
              entre chaos et plaisir.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Gradient blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 opacity-20 blur-2xl" />

            <h2 className="text-2xl font-bold mb-4 relative">
              🍔 Pourquoi Funky ?
            </h2>
            <p className="text-gray-600 leading-relaxed relative">
              Parce que manger devrait être fun. Funky, c’est des plats qui
              surprennent, qui font sourire et qui cassent la routine du
              quotidien.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">🚀 Pour qui ?</h2>
            <p className="text-gray-600 leading-relaxed">
              Pour les curieux, les créatifs, les gourmands et tous ceux qui
              pensent qu’un plat peut être une expérience à part entière.
            </p>
          </div>
        </section>

        {/* CTA */}

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
            <p className="text-3xl font-black text-white mb-4">
              Prêt à cuisiner funky ? 🎉
            </p>
            <Link
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
              to="/"
              data-discover="true"
            >
              Découvrir Plus de Plats
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
