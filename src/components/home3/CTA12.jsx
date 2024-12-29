// import { Button } from 'flowbite-react'
import React from "react";
import { Link } from "react-router-dom";

export default function CTA12() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://fiches-pratiques.ecommercemag.fr/Assets/Img/FICHEPRATIQUE/2021/9/364955/Comment-elaborer-strategie-marketing-multilocale--F.jpg)",
      }}
      className=" relative py-72 bg-fixed bg-cover bg-center"
    >
      <div
        className="absolute inset-0 z-[2]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      ></div>

      <div
        className="flex flex-col px-2 md:px-10 
           justify-center items-center absolute inset-0 z-[3]"
      >
        <h1 className="text-white text-center  text-4xl font-bold">
          Pourquoi stratégies{" "}
          <span style={{ color: "#7b9bff" }}> marketing</span>?
        </h1>
        <p className="text-center text-gray-300 mt-10 lg:text-lg max-w-3xl">
          nous offrons des solutions sur mesure qui répondent à vos besoins
          spécifiques, avec un soutien constant pour garantir votre succès. Nous
          faisons en sorte que chaque stratégie soit efficace et adaptée à vos
          objectifs.{" "}
        </p>
        <Link
          to="/reservation"
          style={{ border: "2px solid #7b9bff", color: "#7b9bff" }}
          className=" rounded-md mt-12 p-3 px-8 text-white font-bold text-md"
        >
          Prend Rendez-vous
        </Link>
      </div>
    </div>
  );
}
