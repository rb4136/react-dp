import React, {useState, useEffect} from "react";
import WeatherForm from "./Weather-Form";
import WeatherView from "./Weather-View";
import ErrorBoundary from "./ErrorBoundary";

function Weather() {

  const [items, setItems] = useState([]);
  const [cityName, setCityName] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [finalZip, setFinalZip] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFinalZip(zipcode);
    setZipCode("");
    setClickSubmit(true);
  }

  useEffect(() => {
    if (finalZip != "") { getWeather(); }
  }, [finalZip])

  function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?zip=" + finalZip + ",US&appid=" + process.env.REACT_APP_WEATHER_API + "&units=imperial")
    .then(res => res.json())
    .then((result) => {
      setItems(result.list);
      setCityName(result.city.name);
      console.log(result.list);
    })
  }

  return (<div className="weather container-fluid">

    <WeatherForm
      setZipCode={setZipCode}
      handleSubmit={handleSubmit}
      zipcode={zipcode}
    />


{clickSubmit && <WeatherView cityName={cityName} items={items}/>}


  </div>);

};

export default Weather;
