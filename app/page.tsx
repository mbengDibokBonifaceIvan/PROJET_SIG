"use client";
import Image from "next/image";
import AirPollution from "./Components/AirPollution/AirPollution";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import FeelsLike from "./Components/FeelsLike/FeelsLike";
import Humidity from "./Components/Humidity/Humidity";
import Mapbox from "./Components/Mapbox/Mapbox";
import Navbar from "./Components/Navbar";
import Population from "./Components/Population/Population";
import Pressure from "./Components/Pressure/Pressure";
import Sunset from "./Components/Sunset/Sunset";
import Temperature from "./Components/Temperature/Temperature";
import UvIndex from "./Components/UvIndex/UvIndex";
import Visibility from "./Components/Visibility/Visibility";
import Wind from "./Components/Wind/Wind";
import defaultStates from "./utils/defaultStates";
import FiveDayForecast from "./Components/FiveDayForecast/FiveDayForecast";
import { useGlobalContextUpdate } from "./context/globalContext";
import Histogramme from "./Components/Histogramme/Histogramme";
import Resultat from "./Components/Results/Resultat";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { jsPDF } from "jspdf";


export default function Home() {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getClickedCityCords = (lat: number, lon: number) => {
    setActiveCityCoords([lat, lon]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
const histogramRef = useRef<HTMLDivElement | null>(null);
const mapBoxRef = useRef<HTMLDivElement | null>(null);

  function generatePDF() {
   if (!histogramRef.current || !mapBoxRef.current) {
    return;
  }

    const pdf = new jsPDF();

    // Capture le contenu du composant Histogramme en tant qu'image
  html2canvas(histogramRef.current).then((histogramCanvas) => {
    const histogramImg = histogramCanvas.toDataURL("image/png");

    // Capture le contenu de l'élément mapBox en tant qu'image
    html2canvas(mapBoxRef.current!).then((mapBoxCanvas) => {
      const mapBoxImg = mapBoxCanvas.toDataURL("image/png");

      // Ajoute les deux images au PDF
      pdf.addImage(histogramImg, "PNG", 15, 15, 180, 100); // Ajoute l'image de l'histogramme
          pdf.addImage(mapBoxImg, "PNG", 15, 130, 180, 100); // Ajoute l'image de mapBox sur une nouvelle page

      pdf.save("images.pdf"); // Télécharge le PDF avec le nom "images.pdf" contenant les deux images
    });
  });

  }
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[8rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <Resultat />
          <button
            onClick={generatePDF}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Télécharger les informations en PDF
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="h-full">
              <AirPollution />
            </div>
            <div className="h-full">
              <Population />
            </div>
            <div className="h-full">
              <Sunset />
            </div>
            <div className="h-full lg:col-span-2" ref={histogramRef}>
              <Histogramme />
            </div>
            <div className="h-full  lg:row-span-2">
              <Wind />
            </div>
          </div>
          <div className="mapbox-con mt-4 flex gap-4 flex-1">
            <div className="w-2/3 h-full" ref={mapBoxRef}>
              <Mapbox />
            </div>
            <div className="states flex flex-col gap-3 flex-1 h-full">
              <h2 className="flex items-center gap-2 font-medium underline">
                Résultats Des Élections Dans Quelques Villes
              </h2>
              <div className="flex flex-col gap-4">
                {defaultStates.map((state, index) => (
                  <div
                    key={index}
                    className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none"
                    onClick={() => {
                      getClickedCityCords(state.lat, state.lon);
                    }}
                  >
                    <p className="px-6 py-4">{state.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          CopyRight
          <Image src={"/logo-white.svg"} alt="logo" width={20} height={20} />
          <a href="#" target="_blank" className=" text-green-300 font-bold">
            WebGenius 2025
          </a>
        </p>
      </footer>
    </main>
  );
}
