import React from "react";

function WeatherView(props) {
  return (<div>
    <h3 className="weather-head">5-Day Forecast for {props.cityName}</h3>
    <div className="row">

      {
        props.items.filter((e, i) => i % 8 === 0).map(item => (<div className="col">
          <img src={"http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"} alt="weather-icon"/><br/> {new Date(item.dt_txt).toLocaleString("default", {month: "long"})}&nbsp; {new Date(item.dt_txt).toLocaleString("default", {day: "numeric"})}
          <br/> {
            new Date(item.dt_txt).toLocaleTimeString("default", {
              hour12: true,
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short"
            })
          }
          <br/> {item.weather[0].main}<br/> {Math.round(item.main.temp)}° F
        </div>))
      }
    </div>
  </div>)

};

export default WeatherView;
