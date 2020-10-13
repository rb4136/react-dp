import React from "react";

function WeatherForm(props) {

  return (<div>
    <p>Please enter a US 5-digit zip code to see the five day weather forecast.</p>
  <form className="form-group">
    <input className="form-control calc-input" name="zip" onChange={event => props.setZipCode(event.target.value)} placeholder="Enter US Zip Code" value={props.zipcode}/>
    <button className="btn btn-outline-secondary" type="submit" onClick={props.handleSubmit}>Submit</button>
  </form>
</div>)

}

export default WeatherForm;
