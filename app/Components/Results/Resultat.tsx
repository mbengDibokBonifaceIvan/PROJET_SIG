"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { calender } from "@/app/utils/Icons";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

interface CandidateData {
  main: { temp_min: number; temp_max: number };
  dt: number;
}

interface ProcessedData {
  candidate: string;
  votes: number;
}

function Resultat() {
  const { fiveDayForecast } = useGlobalContext();
  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  function processData(
    candidateData: CandidateData[],
    candidateNames: string[]
  ): ProcessedData[] {
    return candidateData.map((data, index) => {
      const candidateName = candidateNames[index % candidateNames.length];
      const totalVotes = data.main.temp_min; // Utiliser temp_min pour les votes
      return {
        candidate: candidateName,
        votes: totalVotes,
      };
    });
  }

  const candidateNames = [
    "Candidat A",
    "Candidat B",
    "Candidat C",
    "Candidat D",
    "Candidat E",
  ]; // Ajouter un cinquième candidat si nécessaire

  const processedCandidates = processData(list, candidateNames).slice(0, 5); // Prendre les 5 premiers candidats

  return (
    <div className="pt-6 pb-5 px-4 flex-1 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {calender} Résultats des Élections à {city.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
          {processedCandidates.map((candidateData, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 ">
              <p className="text-lg font-semibold mb-2 dark:text-black">
                {candidateData.candidate}
              </p>
              <div className="flex items-center justify-between ">
                <p className="text-sm text-gray-800 ">
                  Total de Voix: {candidateData.votes}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resultat;
