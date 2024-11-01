















import React, { useContext, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { DataContext } from "../../context/DataContext";
import { MdLocationPin } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Liste({ setShowListOption }) {
  const { mergedData, isLoading, currentVehicule, updateCurrentVehicule } =
    useContext(DataContext);
  const dataFusionee = mergedData ? Object.values(mergedData) : [];

  useEffect(() => {
    console.log("vehicule mis à jour", currentVehicule);
  }, [currentVehicule]);

  const handleClick = (vehicle) => {
    updateCurrentVehicule(vehicle);
    setShowListOption(true);
    console.log("vehicule en variable", currentVehicule);
    console.log("vehicule en cliquer", vehicle);
  };

  // Fonctions pour formater le temps et la date
  function formatTimestampToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTimestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="p-4 flex flex-col gap-4 mt-4 mb-32">
      {isLoading ? (
        <p>Chargement des données...</p>
      ) : dataFusionee.length > 0 ? (
        dataFusionee.map((vehicle, index) => {
          const speed = vehicle.vehiculeDetails?.[0]?.speedKPH || 0;

          // Définir les couleurs en fonction de la vitesse
          let main_text_color,
            lite_bg_color,
            active_bg_color,
            imgClass,
            activeTextColor,
            statut,
            vitess_img;
          if (speed < 1) {
            main_text_color = "text-orange-500";
            statut = "en arret";
            lite_bg_color = "bg-orange-50";
            activeTextColor = "text-orange-600";
            active_bg_color = "bg-orange-200/50";
            vitess_img = "img/cars/orange_vitess.png";
            imgClass = "w-14 sm:w-16 md:w-24";
          } else if (speed >= 1 && speed <= 20) {
            main_text_color = "text-yellow-500";
            statut = "en ralenti";
            lite_bg_color = "bg-yellow-50/50";
            activeTextColor = "text-yellow-700";
            active_bg_color = "bg-yellow-200/50";
            vitess_img = "img/cars/yellow_vitess.png";
            imgClass = "w-12 sm:w-14 md:w-20";
          } else {
            main_text_color = "text-green-500";
            statut = "en marche";
            lite_bg_color = "bg-green-50";
            activeTextColor = "text-green-700";
            active_bg_color = "bg-green-200/50";
            vitess_img = "img/cars/green_vitess.png";
            imgClass = "w-12 sm:w-14 md:w-20";
          }

          return (
            <div
              key={index}
              className={` ${lite_bg_color} shadow-md rounded-lg p-3`}
            >
              <div
                onClick={() => handleClick(vehicle)}
                className="flex relative gap-3 md:py-6"
              >
                <div className="flex flex-col items-center md:min-w-32">
                  <div className={`${imgClass} mb-2`}>
                    <img src={vitess_img} alt="" />
                  </div>

                  <h2
                    className={`${main_text_color} sm:text-lg md:text-xl font-semibold whitespace-nowrap`}
                  >
                    {parseFloat(speed).toFixed(0)}
                  </h2>
                  <h2
                    className={`${main_text_color} text-[.8rem] sm:text-lg md:text-xl font-semibold whitespace-nowrap`}
                  >
                    Km/h
                  </h2>
                </div>
                <div>
                  <h2 className="text-gray-800 font-semibold text-md md:text-xl mb-2">
                    {vehicle.description}
                  </h2>
                  <div className="flex mb-2 gap-4 text-gray-400 text-md">
                    <div className="flex gap-3 items-center">
                      <FaRegCalendarAlt className="text-gray-500/80" />
                      <h3 className="text-sm sm:text-sm md:text-md">
                        {formatTimestampToDate(
                          vehicle.vehiculeDetails?.[0]?.timestamp
                        )}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoMdTime className="text-gray-500/80 text-xl" />
                      <h3 className="text-sm sm:text-sm md:text-md">
                        {formatTimestampToTime(
                          vehicle.vehiculeDetails?.[0]?.timestamp
                        )}
                      </h3>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div>
                      <FaCar className="text-gray-500/80" />
                    </div>
                    <span
                      className={` ${active_bg_color} ml-1  ${activeTextColor} pb-[.2rem] px-2 py-0 text-sm rounded-md `}
                    >
                      {statut}
                    </span>
                  </div>

                  <div className="flex gap-1">
                    <div>
                      <MdLocationPin className="text-xl text-gray-500/80 -translate-x-0.5 mt-3" />
                    </div>

                    <p className="text-md felx sm:flex text-gray-500 mt-2 md:text-lg">
                      {vehicle.vehiculeDetails?.[0]?.address ||
                        "Adresse non disponible"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Aucune donnée disponible</p>
      )}
    </div>
  );
}

export default Liste;