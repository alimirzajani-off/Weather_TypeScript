import { FC } from "react";

interface WeatherTemperatureProps {
  description?: String;
  temp?: number;
  minTemp: number;
  maxTemp: number;
  speed?: number;
  horizontal?: Boolean;
  icon: String;
  day?: String;
}

export const WeatherTemperature: FC<WeatherTemperatureProps> = ({
  minTemp,
  maxTemp,
  speed,
  horizontal,
  description,
  icon,
  temp,
  day,
}) => {
  return (
    <div className="flex flex-col items-center">
      {day && <>{day}</>}
      <div className="flex items-center">
        {temp && (
          <div className="text-xl font-bold text-indigo-900	">
            {Math.round(temp)}°
          </div>
        )}
        {icon && (
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            width={50}
            height={50}
          />
        )}
      </div>
      {description && <>{description}</>}
      {speed && (
        <div className="text-sm font-light">
          سرعت باد
          {speed}
        </div>
      )}
      {!horizontal ? (
        <>
          <p className="text-lg font-medium ">{Math.round(maxTemp)}°</p>
          <p className="text-sm font-light text-slate-700	">
            {Math.round(minTemp)}°
          </p>
        </>
      ) : (
        <div className="flex text-sm font-light">
          <p>{Math.round(maxTemp)}°حداکثر</p>.
          <p>{Math.round(minTemp)}°حداقل </p>
        </div>
      )}
    </div>
  );
};
