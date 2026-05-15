import "./Journal.css";
import testchart from "../assets/trenchChart.png";

function Journal() {
  return (
    <div className="journal-page">
      <header className="journal-header">
        <div>
          <p>Trade History</p>
          <h1>Your Trading Journal</h1>
        </div>

        <button>+ New Trade</button>
      </header>

      <section className="journal-controls">
        <input type="text" placeholder="Search trades..." />

        <div className="filter-buttons">
          <button>All</button>
          <button>Wins</button>
          <button>Losses</button>
          <button>Long</button>
          <button>Short</button>
        </div>
      </section>

      <section className="journal-stats">
        <div>
          <small>Total Trades</small>
          <strong>48</strong>
        </div>

        <div>
          <small>Win Rate</small>
          <strong>63%</strong>
        </div>

        <div>
          <small>Average R</small>
          <strong>2.41</strong>
        </div>

        <div>
          <small>Best Trade</small>
          <strong>+4.8R</strong>
        </div>
      </section>

      <section className="trade-history-list">
        <div className="trade-history-card">
          <img src={testchart} alt="BTC/USD chart" />

          <div className="trade-history-content">
            <div className="trade-history-top">
              <div>
                <p>BTC/USD</p>
                <h3>Liquidity Sweep + Retest</h3>
              </div>

              <strong className="green">+1.5R</strong>
            </div>

            <p className="trade-note">
              Waited for sweep of lows and bullish BOS on 1H. Entry was patient and followed plan.
            </p>

            <div className="trade-tags">
              <span>Long</span>
              <span>Confident</span>
              <span>May 20</span>
            </div>
          </div>
        </div>

        <div className="trade-history-card">
          <img src={testchart} alt="XAU/USD chart" />

          <div className="trade-history-content">
            <div className="trade-history-top">
              <div>
                <p>XAU/USD</p>
                <h3>Breakout Fade</h3>
              </div>

              <strong className="red">-0.8R</strong>
            </div>

            <p className="trade-note">
              Entered too early before confirmation. Need to wait for clean rejection next time.
            </p>

            <div className="trade-tags">
              <span>Short</span>
              <span>Impatient</span>
              <span>May 19</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journal;