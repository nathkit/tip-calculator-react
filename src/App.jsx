import { useState, useEffect } from "react";
import dollarLogo from "../images/icon-dollar.svg";
import personLogo from "../images/icon-person.svg";
import "./App.css";

function App() {
  const [totleBill, setTotalBill] = useState("");
  const [percentTip, setPercentTip] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState("0.00");

  const calculateAmount = (bill, tip, numberPeople) => {
    const totalTip = Number(bill) * (Number(tip) / 100);
    const totalTipPerPerson = totalTip / Number(numberPeople);
    const totalAmountPerPerson =
      (Number(bill) + totalTip) / Number(numberPeople);
    if (Number(numberPeople) !== 0) {
      setTipAmount(totalTipPerPerson.toFixed(2));
      setTotalAmountPerPerson(totalAmountPerPerson.toFixed(2));
    }
  };

  const handleBill = (e) => {
    setTotalBill(e.target.value);
    console.log(totleBill);
  };

  const handleTip = (e) => {
    setPercentTip(e.target.value);
  };

  const handleNumberPeople = (e) => {
    setNumberPeople(e.target.value);
  };

  const handleReset = () => {
    setTotalBill("");
    setPercentTip("");
    setNumberPeople("");
    setTipAmount("0.00");
    setTotalAmountPerPerson("0.00");
  };

  useEffect(() => {
    if (totleBill !== "" && percentTip !== 0 && numberPeople !== "")
      calculateAmount(totleBill, percentTip, numberPeople);
  }, [totleBill, percentTip, numberPeople]);

  function ResetButton() {
    const isInactive = tipAmount === "0.00" && totalAmountPerPerson === "0.00";
    return (
      <button
        className={`reset-btn ${isInactive ? "no-active" : "on-active"}`}
        onClick={isInactive ? undefined : handleReset}>
        <h1>RESET</h1>
      </button>
    );
  }

  return (
    <>
      <div className="bg-body-bg min-h-screen flex flex-col items-center justify-center">
        <div className="app-header my-14 tablet:mb-20">
          <h1>S P L I</h1>
          <h1>T T E R</h1>
        </div>
        <div
          className="calculator-container bg-[white] w-[375px] flex flex-col items-center
          tablet:w-[925px] tablet:h-[485px] tablet:flex-row tablet:justify-around tablet:items-center">
          <div className="input-container">
            <div className="bill-input">
              <h1>Bill</h1>
              <img src={dollarLogo} className="logo" alt="Dollar logo" />
              <input
                className="input"
                type="number"
                min="0"
                value={totleBill}
                onChange={(e) => handleBill(e)}
              />
            </div>
            <div className="tip-select-section">
              <h1>Select Tip %</h1>
              <div className="tip-btn-container grid grid-cols-2 place-items-center gap-y-3.5 gap-x-4 tablet:grid-cols-3">
                <button
                  className="tip-btn"
                  value={5}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  5%
                </button>
                <button
                  className="tip-btn"
                  value={10}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  10%
                </button>
                <button
                  className="tip-btn"
                  value={15}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  15%
                </button>
                <button
                  className="tip-btn"
                  value={25}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  25%
                </button>
                <button
                  className="tip-btn"
                  value={50}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  50%
                </button>
                <div className="tip-btn">
                  <input
                    type="number"
                    min="0"
                    placeholder="Custom"
                    onChange={(e) => {
                      handleTip(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="people-count">
              <div className="flex justify-between">
                <h1 className="inline-block">Number of People</h1>
                {(numberPeople === 0 || numberPeople === "0") && (
                  <h1 className="inline-block alert">Can't be zero</h1>
                )}
              </div>
              <img src={personLogo} className="logo" alt="Person logo" />
              <input
                className={`input ${
                  numberPeople === 0 || numberPeople === "0" ? "zero" : ""
                }`}
                type="number"
                min="0"
                value={numberPeople}
                onChange={handleNumberPeople}
              />
            </div>
          </div>
          <div className="output-container bg-green-dark">
            <div className="calculate-output">
              <div className="label">
                <h1>Tip Amount</h1>
                <p>/ person</p>
              </div>
              <div className="display-output">
                <h1>${tipAmount}</h1>
              </div>
            </div>
            <div className="calculate-output second">
              <div className="label">
                <h1>Total</h1>
                <p>/ person</p>
              </div>
              <div className="display-output">
                <h1>${totalAmountPerPerson}</h1>
              </div>
            </div>
            <ResetButton />
          </div>
        </div>
        <div class="attribution">
          <h1>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank">
              Frontend Mentor
            </a>
          </h1>
          <h1>
            Coded by <a href="#">Nathkit Tangthumrongsakkul</a>.
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
