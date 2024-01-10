import React, { useState } from "react";

const Test1 = () => {
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const divStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      {step === 1 && (
        <div style={{ ...divStyle, color: "red" }}>
          <button onClick={handleContinue}>continue 1</button>
        </div>
      )}

      {step === 2 && (
        <div style={{ ...divStyle, color: "yellow" }}>
          <button onClick={handleContinue}>continue 2</button>
        </div>
      )}

      {step >= 3 && (
        <div style={{ ...divStyle, color: "orange" }}>
          <button onClick={handleContinue}>continue 3</button>
        </div>
      )}
    </div>
  );
};

export default Test1;
