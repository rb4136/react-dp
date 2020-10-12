import React, {useState, useEffect} from "react";

function Weather() {

  const [items, setItems] = useState([]);
  const [zipcode, setZipCode] = useState(18104);

  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",US&appid=" + API_KEY;

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result.list)
        console.log(result.list);
      }
    )
  }, [])


      return (
        <div className="weather">
            {items
              .filter((e, i) => i % 8 === 0)
              .map(item => (
                  <div className="col">
                    <img src={"http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"} alt="weather-icon" /><br />
                    {item.dt_txt}<br />
                    {item.weather[0].main}
                  </div>
                ))
            }
        </div>
      );
    };


export default Weather;
