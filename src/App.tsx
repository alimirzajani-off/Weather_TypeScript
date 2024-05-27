import { useEffect, useState } from "react";
import axios from "axios";
import { Location, WeathersData } from "./utils/types";
import { daysOfWeek } from "./utils/variable";
import { WeatherCurrentBox } from "./Components/Weather/WeatherCurrentBox";
import { WeatherTemperature } from "./Components/Weather/WeatherTemperature";

function App() {
  const [weathersData, setWeathersData] = useState<WeathersData | any>(null);
  const [showmore, setshowmore] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>({
    lat: 35.6944,
    lon: 51.4215,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://one-api.ir/weather/?token=${
          import.meta.env.VITE_Weather_API
        }&action=dailybylocation&lat=${location.lat}&lon=${location.lon}`
      )
      .then((res) => {
        if (res.status == 200) {
          setWeathersData(res.data.result);
        }
      });
  }, []);

  return (
    <div className="m-4">
      <WeatherCurrentBox
        showmore={showmore}
        location={location}
        setshowmore={setshowmore}
        weathersData={weathersData}
      />
      {showmore && weathersData && (
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
      )}
    </div>
  );
}

export default App;
