import { useEffect, useState } from "react";
import axios from "axios";
import { Location, WeathersData } from "./utils/types";
import { WeatherCurrentBox } from "./Components/Weather/WeatherCurrentBox";
import { WeatherList } from "./Components/Weather/WeatherList";

function App() {
  const [weathersData, setWeathersData] = useState<WeathersData | null>(null);
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
      {showmore && weathersData && <WeatherList weathersData={weathersData} />}
    </div>
  );
}

export default App;
