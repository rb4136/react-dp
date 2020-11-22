import React, { useState, useEffect } from "react";
import WeatherForm from "./Weather-Form";
import WeatherView from "./Weather-View";

function Weather() {
  const [items, setItems] = useState([]);
  const [cityName, setCityName] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [finalZip, setFinalZip] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);
  const [result, setResult] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setFinalZip(zipcode);
    setZipCode("");
    setClickSubmit(true);
  }

  useEffect(() => {
    if (finalZip !== "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?zip=" +
          finalZip +
          ",US&appid=" +
          process.env.REACT_APP_WEATHER_API +
          "&units=imperial"
      )
        .then((res) => res.json())
        .then((result) => {
          setItems(result.list);
          setCityName(result.city.name);
          setResult(result);
          console.log(result);
        });
    }
  }, [finalZip]);

  return (
    <div className="weather container-fluid">
      <WeatherForm
        setZipCode={setZipCode}
        handleSubmit={handleSubmit}
        zipcode={zipcode}
      />

      {clickSubmit && (
        <WeatherView cityName={cityName} items={items} result={result} />
      )}
    </div>
  );
}

export default Weather;
