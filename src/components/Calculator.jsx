import React, {useState} from "react";
import CalcForm from "./Calc-Form";
import Add from "./Calc-Add";
import Sub from "./Calc-Sub";
import Mult from "./Calc-Mult";
import Div from "./Calc-Div";

function Calculator() {
  const [numberOne, changeNumberOne] = useState("");
  const [numberTwo, changeNumberTwo] = useState("");
  const [finalNumOne, setFinalNumOne] = useState("");
  const [finalNumTwo, setFinalNumTwo] = useState("");
  const [calcClick, setCalcClick] = useState(false);

  function updateNum1(event) {
    changeNumberOne(event.target.value);
  };

  function updateNum2(event) {
    changeNumberTwo(event.target.value);
  };

  function handleSubmit(event) {
    setCalcClick(true);
    event.preventDefault();
    setFinalNumOne(numberOne);
    setFinalNumTwo(numberTwo);
    changeNumberOne("");
    changeNumberTwo("");
  }

  return (
    <div className="home">
      <div>
        <p>Please enter two whole integers into the boxes below.</p>
        <CalcForm
          updateNum1={updateNum1}
          updateNum2={updateNum2}
          handleSubmit={handleSubmit}
          numberOne={numberOne}
          numberTwo={numberTwo}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 add calc-sec">
              <h1><span role="img" aria-label="plus">➕</span></h1>
              <h2>{calcClick && <Add numberOne={finalNumOne} numberTwo={finalNumTwo} />}</h2>
            </div>
            <div className="col-3 calc-sec">
              <h1><span role="img" aria-label="minus">➖</span></h1>
              <h2>{calcClick && <Sub numberOne={finalNumOne} numberTwo={finalNumTwo} />}</h2>
            </div>
            <div className="col-3 add calc-sec">
              <h1><span role="img" aria-label="multiply">✖</span></h1>
              <h2>{calcClick && <Mult numberOne={finalNumOne} numberTwo={finalNumTwo} />}</h2>
            </div>
            <div className="col-3 calc-sec">
              <h1><span role="img" aria-label="divide">➗</span></h1>
              <h2>{calcClick && <Div numberOne={finalNumOne} numberTwo={finalNumTwo} />}</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

};

export default Calculator;
