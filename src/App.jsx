import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-body-bg h-screen">
        <div className="app-header">
          <h1>S P L I</h1>
          <h1>T T E R</h1>
        </div>
        <div className="calculator-container min-w-[">
          <div className="input-container">
            <div className="bill-input">
              <h1>Bill</h1>
              <input className="input" type="text" placeholder="$" />
            </div>
            <div className="tip-select-section">
              <h1>Select Tip %</h1>
              <div className="tip-btn-container">
                <button className="tip-btn">5%</button>
                <button className="tip-btn">10%</button>
                <button className="tip-btn">15%</button>
                <button className="tip-btn">25%</button>
                <button className="tip-btn">50%</button>
                <div className="tip-btn">
                  <input type="text" placeholder="Custom" />
                </div>
              </div>
            </div>
            <div className="people-count">
              <h1>Number of People</h1>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="output-container">
            <div className="calulate-output">
              <div className="label">
                <h1>Tip Amount</h1>
                <p>/ person</p>
              </div>
              <div className="display-output">
                <h1>$0.00</h1>
              </div>
            </div>
            <div className="calulate-output">
              <div className="label">
                <h1>Total</h1>
                <p>/ person</p>
              </div>
              <div className="display-output">
                <h1>$0.00</h1>
              </div>
            </div>
            <div className="reset-btn">RESET</div>
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
