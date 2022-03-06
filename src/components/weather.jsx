import { useEffect, useState } from "react";
import "./weather.css";
import DataService from "../services/dataService";

const Weather = () => {
  const [data, setData] = useState({});

  const locationSuccess = async (pos) => {
    console.log("location", pos);
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    let service = new DataService();
    let data = await service.getWeather(lat, lon);
    setData(data);
  };

  const locationError = (err) => {
    console.log("error loc", err);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="weather-container">
      <img
        src={`https://openweathermap.org/img/w/${data?.current?.weather[0].icon}.png`}
      ></img>
      <h5>{data?.current?.temp}&deg;</h5>
      <h7>{data?.current?.weather[0].description}</h7>
    </div>
  );
};

export default Weather;
