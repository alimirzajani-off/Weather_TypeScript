import { FC } from "react";
import { WeathersData } from "../../utils/types";
import { WeatherTemperature } from "./WeatherTemperature";
import { daysOfWeek } from "../../utils/variable";

interface WeatherListProps {
  weathersData: WeathersData;
}

export const WeatherList: FC<WeatherListProps> = ({ weathersData }) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {weathersData.list?.slice(1, 8).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center shadow-md rounded-md w-28 m-2 p-2 hover:shadow-2xl bg-white "
        >
          <WeatherTemperature
            day={daysOfWeek[new Date(item.dt * 1000).getDay()]}
            icon={item?.weather[0]?.icon}
            description={item.weather[0].description}
            minTemp={item.temp.min}
            maxTemp={item.temp.max}
            horizontal={true}
          />
        </div>
      ))}
    </div>
  );
};
