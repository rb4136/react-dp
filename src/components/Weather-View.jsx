import React from "react";

function WeatherView(props) {

  return (<div>
    <h3 className="weather-head">5-Day Forecast for {props.cityName}</h3>
    <div className="row">
      {
        props.items.filter((item) => new Date(item.dt_txt).getHours() === 12).map(item => (
          <div className="col">
          <img src={"http://openweathermap.org/img/wn/" + item.weather[0].icon.slice(0,2) + "d@2x.png"} alt="weather-icon"/><br/>
          {new Date(item.dt_txt).toLocaleString("default", {month: "long"})}&nbsp;
          {new Date(item.dt_txt).toLocaleString("default", {day: "numeric"})}

          <br/> {item.weather[0].main}<br/> {Math.round(item.main.temp)}° F
        </div>
      ))
      }

    </div>
  </div>)

};

export default WeatherView;


// ADDING THE TIME TO THE OUTPUT UI
//
// <br/> {
//   new Date(item.dt_txt).toLocaleTimeString("default", {
//     hour12: true,
//     hour: "2-digit",
//     minute: "2-digit",
//     timeZoneName: "short"
//   })
// }
