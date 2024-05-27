import { FC, useEffect, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { WeatherTemperature } from "./WeatherTemperature";
import axios from "axios";
import { CurrentDate } from "../Date/CurrentDate";
import { Location, WeatherData, WeatherResult } from "../../utils/types";

interface WeatherCurrentBoxProps {
  weathersData:
    | any
    | {
        city: { name: String };
        list: WeatherData[];
      };
  showmore: Boolean;
  setshowmore: any;
  location: Location;
}

export const WeatherCurrentBox: FC<WeatherCurrentBoxProps> = ({
  weathersData,
  showmore,
  setshowmore,
  location,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherResult | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://one-api.ir/weather/?token=${
          import.meta.env.VITE_Weather_API
        }&action=currentbylocation&lat=${location.lat}&lon=${location.lon}`
      )
      .then((res) => {
        setWeatherData(res.data.result);
      });
  }, []);

  return (
    <div className="relative m-auto shadow-md w-fit p-4 rounded-md bg-white">
      <div className="flex flex-wrap justify-center">
        <div className="w-28">
          <CurrentDate cityName={weathersData?.city.name} />
        </div>
        <div className="w-28">
          {weatherData ? (
            <WeatherTemperature
              temp={weatherData?.main.temp}
              icon={weatherData?.weather[0]?.icon}
              speed={weatherData?.wind.speed}
              minTemp={weathersData?.list[0]?.temp.min}
              maxTemp={weathersData?.list[0]?.temp.max}
            />
          ) : (
            <p className="text-center text-sm ">در حال بروز رسانی</p>
          )}
        </div>
      </div>
      <div
        className={`relative flex items-center justify-center text-center border border-solid	border-black rounded-full w-fit	mt-2 mx-auto px-2 ${
          showmore ? "text-white bg-blue-950" : ""
        }`}
        onClick={() => setshowmore(!showmore)}
      >
        <span>پیش بینی</span>
        <span>{showmore ? <LuChevronUp /> : <LuChevronDown />}</span>
      </div>
    </div>
  );
};
