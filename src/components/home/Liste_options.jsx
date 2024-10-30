import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidLocationPlus } from "react-icons/bi";
import { RiShutDownLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

function Liste_options({ setShowListOption }) {
  const {
    vehicleData,
    vehicleDetails,
    currentVehicule,
    isLoading,
    fetchVehicleDetails,
  } = useContext(DataContext); // fetchVehicleDetails importée du contexte

  const [showAccessCode, setAccessCode] = useState(false);

  const test = () => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", vehicleDetails);
  };
  return (
    <div className="bg-black/50 fixed inset-0 flex justify-center items-center">
      <div className="border min-w-[90vw] sm:min-w-[30rem] bg-white mx-4 rounded-xl overflow-hidden">
        <div className="p-4 py-6 pt-10 bg-orange-200/50 relative">
          <h2 className="text-xl text-center font-semibold">
            {currentVehicule?.description}
          </h2>
          <IoMdClose
            onClick={() => {
              setShowListOption(false);
            }}
            className="absolute cursor-pointer top-3 right-3 text-2xl text-red-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-8 p-4 py-8">
          <Link
            to="/Single_Vehicule_Location"
            className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaLocationDot className="text-3xl" />
            <h3>Derniere Pos.</h3>
          </Link>

          <Link
            to="/Groupe_vehicule_location"
            className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <BiSolidLocationPlus className="text-4xl" />
            <h3>Groupe</h3>
          </Link>

          <div 
            onClick={() => {setAccessCode(true)}}
          className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center">
            <RiShutDownLine className="text-3xl" />
            <h3>Eteindre</h3>
          </div>

          <div 
          onClick={() => {setAccessCode(true)}}
          className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center">
            <FaMicrophone className="text-3xl" />
            <h3>Ecouter</h3>
          </div>

          <Link
          to="/voiture_historique"
          className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center">
            <IoStatsChartSharp className="text-3xl" />
            <h3>Historique</h3>
          </Link>

          <Link
            to="/voiture_details"
            className="rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaInfoCircle className="text-3xl" />
            <h3>Informations</h3>
          </Link>
        </div>
      </div>
      {/* ---------------------------------------------------- */}


      {showAccessCode &&
         <div className="fixed z-10 flex justify-center items-center inset-0 bg-black/50">
        <div className="bg-white max-w-[25rem] p-6 rounded-xl w-[80vw]">
          <div>
            <label
              htmlFor="username"
              className="block text-lg  leading-6 text-gray-500 mb-3"
            >
              Veuillez entrer votre code d'acces
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="code d'acces"
                required
                className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 --------focus:ring-2 --------focus:ring-inset --------focus:ring-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-5">
            <button 
            onClick={() => {setAccessCode(false)}}
            className="py-1 px-5 text-orange-500 rounded-lg font-semibold border border-orange-500">
              Annuler
            </button>
            <button className="py-1 px-5 bg-orange-500 rounded-lg text-white">
              Ok
            </button>
          </div>
        </div>
      </div>
      }


   
    </div>
  );
}

export default Liste_options;
