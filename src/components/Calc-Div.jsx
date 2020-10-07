import React from "react";



function Div(props) {


  const div = parseInt(props.numberOne) / parseInt(props.numberTwo);

  return (
    <div>
      <h1>{props.numberTwo === 0 ? "Undefined" : div}</h1>
    </div>
  )
};

export default Div;
