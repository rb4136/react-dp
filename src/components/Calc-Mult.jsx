import React from "react";



function Mult(props) {


  const mult = parseInt(props.numberOne) * parseInt(props.numberTwo);

  return (
    <div>
      <h1>{mult}</h1>
    </div>
  )
};

export default Mult;
