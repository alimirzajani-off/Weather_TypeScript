import { FC, useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { daysOfWeek } from "../../utils/variable";

interface CurrentDateProps {
  cityName: String;
}

export const CurrentDate = ({ cityName }: CurrentDateProps) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center text-center">
      <div className="text-xl font-bold text-blue-500	w-full">
        {time.getHours()}:{time.getMinutes() < 10 ? "0" : ""}
        {time.getMinutes()}
      </div>
      <div className="text-xl font-bold  text-blue-950	w-full">
        {daysOfWeek[new Date().getDay()]}
      </div>
      <div className="flex justify-center items-center text-xl font-bold text-blue-950	w-full">
        {cityName ? (
          <>
            <span>
              <LuMapPin />
            </span>
            <span className="mr-1">{cityName}</span>
          </>
        ) : (
          <p className="text-sm ">در حال بروز رسانی</p>
        )}
      </div>
    </div>
  );
};
