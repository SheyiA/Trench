

import "./dashboard.css";
import testchart from "../assets/trenchChart.png";


function Dashboard({onNewTrade}) {

  return (
    <div className="dashboard-layout">

      <aside className="sidebar">

        <div className="sidebar-top">

          <h2>Trench</h2>

          <nav>

            <a href="#">Dashboard</a>

            <a href="#">Journal</a>

            <a href="#">Analytics</a>

            <a href="#">Development</a>

            <a href="#">Mentors</a>

            <a href="#">Calendar</a>

            <a href="#">Resources</a>

            <a href="#" onClick={onNewTrade}>New Trade</a>

          </nav>

        </div>

        <div className="sidebar-bottom">

          <div className="profile-card">

            <div className="profile-avatar">
              S
            </div>

            <div>
              <h4>Sheyi</h4>
              <p>Premium</p>
            </div>

          </div>

        </div>

      </aside>

      <main className="dashboard-main">

<div className="dashboard-topbar">

  <div className="welcome-section">

    <div className="welcome-avatar">
      S
    </div>

    <div>

      <h1>Good evening, Sheyi 👋</h1>

      <p>
        Stay consistent. Review. Reflect. Improve.
      </p>

    </div>

  </div>

  <div className="topbar-right">

    <div className="topbar-stat">
      <span>🔥</span>

      <div>
        <strong>12</strong>
        <p>Day Streak</p>
      </div>
    </div>

    <div className="topbar-stat">
      <span>✓</span>

      <div>
        <strong>2</strong>
        <p>Reviews Pending</p>
      </div>
    </div>

  </div>

</div>

        <div className="dashboard-grid">

        <div className="dashboard-card large-card journal-preview-card">
  <div className="journal-card-header">
    <div>
      <h3>Today's Journal</h3>
      <p>BTC/USD <span>LONG</span></p>
    </div>

    <strong>+1.5R</strong>
  </div>

  <div className="journal-chart">
    <img src={testchart} alt="BTC/USD chart" style={{}} />
  </div>

  <div className="journal-details">
    <div>
      <small>Setup</small>
      <p>Liquidity sweep + change of character</p>
    </div>

    <div>
      <small>Emotion</small>
      <p>Confident</p>
    </div>

    <div>
      <small>Notes</small>
      <p>Waited for sweep of lows and bullish BOS on 1H.</p>
    </div>
  </div>
</div>

<div className="dashboard-card ai-insight-card">
  <h3>✦ AI Insight</h3>

  <div className="insight-box">
    <p>
      You tend to enter 23% earlier than your most profitable setups.
    </p>

    <p>
      Your win rate improves when you wait for a retest before entering.
    </p>

    <button>View full analysis →</button>
  </div>
</div>

<div className="dashboard-card performance-card">

  <div className="performance-header">
    <h3>Performance Overview</h3>

    <span>This Month</span>
  </div>

  <div className="performance-stats">

    <div>
      <small>Win Rate</small>
      <strong>63%</strong>
      <p>↑ 8.2%</p>
    </div>

    <div>
      <small>Average R</small>
      <strong>2.41</strong>
      <p>↑ 0.73</p>
    </div>

    <div>
      <small>Total Trades</small>
      <strong>48</strong>
      <p>+12</p>
    </div>

    <div>
      <small>Net P&L</small>
      <strong>+12.4%</strong>
      <p>↑ 5.1%</p>
    </div>

  </div>

  <div className="performance-graph">

    <svg viewBox="0 0 400 150" preserveAspectRatio="none">

      <defs>

        <linearGradient id="purpleFill" x1="0" y1="0" x2="0" y2="1">

          <stop
            offset="0%"
            stopColor="#7c5cff"
            stopOpacity="0.35"
          />

          <stop
            offset="100%"
            stopColor="#7c5cff"
            stopOpacity="0"
          />

        </linearGradient>

      </defs>

      <path
        d="M0,115 L35,95 L70,105 L105,75 L140,90 L175,65 L210,80 L245,58 L280,70 L315,42 L350,55 L400,25 L400,150 L0,150 Z"
        fill="url(#purpleFill)"
      />

      <path
        d="M0,115 L35,95 L70,105 L105,75 L140,90 L175,65 L210,80 L245,58 L280,70 L315,42 L350,55 L400,25"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

    </svg>

  </div>

</div>

<div className="dashboard-card recent-trades-dashboard-card">
  <div className="recent-trades-header">
    <h3>Recent Trades</h3>
    <span>View All →</span>
  </div>

  <div className="trade-list">
    <div className="trade-item">
      <span>BTC/USD</span>
      <span className="green">Long</span>
      <strong className="green">+1.5R</strong>
      <small>May 20</small>
    </div>

    <div className="trade-item">
      <span>XAU/USD</span>
      <span className="red">Short</span>
      <strong className="red">-0.8R</strong>
      <small>May 19</small>
    </div>

    <div className="trade-item">
      <span>ETH/USD</span>
      <span className="green">Long</span>
      <strong className="green">+2.1R</strong>
      <small>May 18</small>
    </div>

    <div className="trade-item">
      <span>BTC/USD</span>
      <span className="green">Long</span>
      <strong className="green">+1.2R</strong>
      <small>May 17</small>
    </div>
  </div>
</div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;