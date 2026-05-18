import "./NewTrade.css";
import { Link } from "react-router-dom";


import { useState } from "react";

function NewTrade() {

  const [asset, setAsset] = useState("BTC/USD");

const [direction, setDirection] = useState("Long");

const [setup, setSetup] = useState("");

const [notes, setNotes] = useState("");

  return (
    <div className="new-trade-page">
      <div className="new-trade-header">
        <div>
          <p>Journal Entry</p>
          <h1>Add New Trade</h1>
        </div>

       <Link to="/dashboard" className="back-btn"> Back to Dashboard </Link> 
      </div>

      <div className="new-trade-layout">
        <form className="trade-entry-form">
          <div className="form-group">
            <label>Asset</label>
            <input
  type="text"
  placeholder="BTC/USD"
  value={asset}
  onChange={(e) => setAsset(e.target.value)}
/>          </div>

          <div className="form-group">
            <label>Direction</label>
            <div className="direction-select">
            <button
  type="button"
  onClick={() => setDirection("Long")}
>
  Long
</button>

<button
  type="button"
  onClick={() => setDirection("Short")}
>
  Short
</button>            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Entry Price</label>
              <input type="text" placeholder="67240" />
            </div>

            <div className="form-group">
              <label>Stop Loss</label>
              <input type="text" placeholder="66380" />
            </div>

            <div className="form-group">
              <label>Take Profit</label>
              <input type="text" placeholder="68420" />
            </div>

            <div className="form-group">
              <label>Result</label>
              <input type="text" placeholder="+1.5R" />
            </div>
          </div>

          <div className="form-group">
            <label>Setup Type</label>
            <input
  type="text"
  placeholder="Liquidity sweep + retest"
  value={setup}
  onChange={(e) => setSetup(e.target.value)}
/>          </div>

          <div className="form-group">
            <label>Emotion</label>
            <select>
              <option>Confident</option>
              <option>Patient</option>
              <option>Fearful</option>
              <option>Greedy</option>
              <option>Revenge Trading</option>
            </select>
          </div>

          <div className="form-group">
            <label>Trade Notes</label>
            <textarea
  placeholder="What happened? Why did you take this trade? What would you improve?"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
/>          </div>

          <button className="save-trade-btn" type="button">
            Save Trade
          </button>
        </form>

        <aside className="trade-preview-panel">
          <h2>Trade Preview</h2>

          <div className="upload-box">
            Upload chart screenshot
          </div>

          <div className="preview-card">
          <p>{asset || "BTC/USD"}</p>

<h3>{direction} Setup</h3>

<span>
  {setup || "Waiting for setup details..."}
</span>

<div className="preview-notes">
  <p>
    {notes || "Trade notes preview will appear here."}
  </p>
</div>          </div>
        </aside>
      </div>
    </div>
  );
}

export default NewTrade;    