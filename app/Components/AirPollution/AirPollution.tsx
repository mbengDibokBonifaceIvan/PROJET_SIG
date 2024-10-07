"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { flagIcon, thermo } from "@/app/utils/Icons";
import { airQulaityIndexText } from "@/app/utils/misc";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function AirPollution() {
  const { airQuality } = useGlobalContext();

  // check if airQuality is available, check if necessary properties are available
  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const airQualityIndex = airQuality.list[0].main.aqi * 10;

  const filteredIndex = airQulaityIndexText.find((item) => {
    return item.rating === airQualityIndex;
  });

  return (
    <div
      className="air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-5
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <Progress value={airQualityIndex} max={100} className="progress" />
      <h2 className="flex items-center gap-2 font-medium justify-center underline">
        SESSION 2024 {flagIcon}
      </h2>
      <p className="text-center"> Résultats Des Élections Présidentielle 2024 Au Cameroun</p>
    </div>
  );
}

export default AirPollution;
