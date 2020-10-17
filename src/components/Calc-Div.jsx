import React from "react";



function Div(props) {


  const div = parseInt(props.numberOne) / parseInt(props.numberTwo);

  return (
    <div>
      <h3>{props.numberTwo === 0 ? "Undefined" : div}</h3>
    </div>
  )
};

export default Div;
