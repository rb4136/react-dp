import React from "react";



function Mult(props) {


  const mult = parseInt(props.numberOne) * parseInt(props.numberTwo);

  return (
    <div>
      <h3>{mult}</h3>
    </div>
  )
};

export default Mult;
