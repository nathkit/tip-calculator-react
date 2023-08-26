import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [totleBill, setTotalBill] = useState("");
  const [percentTip, setPercentTip] = useState(0);
  const [numberPeople, setNumberPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");

  const calculateTipAmount = (bill, tip, numberPeople) => {
    const result = (Number(bill) * tip) / numberPeople;
    setTipAmount(result.toFixed(2));
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

  useEffect(() => {
    if (totleBill !== "" && percentTip !== 0 && numberPeople !== "")
      calculateTipAmount(totleBill, percentTip, numberPeople);
  }, [totleBill, percentTip, numberPeople]);

  return (
    <>
      <div className="bg-body-bg h-screen flex flex-col items-center justify-center">
        <div className="app-header mb-14 sm:mb-20">
          <h1>S P L I</h1>
          <h1>T T E R</h1>
        </div>
        <div className="calculator-container bg-[white] w-[925px] h-[485px] flex justify-around items-center">
          <div className="input-container">
            <div className="bill-input">
              <h1>Bill</h1>
              <input
                className="input"
                type="number"
                min="0"
                placeholder="$"
                onChange={(e) => handleBill(e)}
              />
            </div>
            <div className="tip-select-section">
              <h1>Select Tip %</h1>
              <div className="tip-btn-container grid grid-cols-2 gap-y-3.5 sm:grid-cols-3">
                <button
                  className="tip-btn"
                  value={0.05}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  5%
                </button>
                <button
                  className="tip-btn"
                  value={0.1}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  10%
                </button>
                <button
                  className="tip-btn"
                  value={0.15}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  15%
                </button>
                <button
                  className="tip-btn"
                  value={0.25}
                  onClick={(e) => {
                    handleTip(e);
                  }}>
                  25%
                </button>
                <button
                  className="tip-btn"
                  value={0.5}
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
                    value={percentTip}
                    onChange={(e) => {
                      handleTip(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="people-count">
              <h1>Number of People</h1>
              <input
                className="input"
                type="number"
                min="0"
                onChange={(e) => {
                  handleNumberPeople(e);
                }}
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
            <div className="calculate-output">
              <div className="label">
                <h1>Total</h1>
                <p>/ person</p>
              </div>
              <div className="display-output">
                <h1>$0.00</h1>
              </div>
            </div>
            <button className="reset-btn">
              <h1>RESET</h1>
            </button>
          </div>
        </div>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Nathkit Tangthumrongsakkul</a>.
        </div>
      </div>
    </>
  );
}

export default App;
