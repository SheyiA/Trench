import chart from "../assets/chartTwice.png";


function Hero({openModal}) {
    return (
      <section className="hero">
        <div className="hero-left" id="features">
          <p className="eyebrow">Journal. Review. Improve.</p>
  
          <h1>
            Become a better trader
            <span> every day.</span>
          </h1>
  
          <p className="hero-description">
            Journal your trades, get AI-powered insights, and identify patterns that help you consistently improve.
          </p>
  
          <div className="hero-actions">
            <button onClick={openModal}>Start Journaling →</button>
            <button>See How It Works ▷</button>
          </div>
          <div className="hero-features">
  <div>
    <span>📖</span>
    <h4>Journal</h4>
    <p>Every trade</p>
  </div>

  <div>
    <span>📈</span>
    <h4>Analyze</h4>
    <p>Your performance</p>
  </div>

  <div>
    <span>✦</span>
    <h4>AI Insights</h4>
    <p>Find patterns</p>
  </div>

  <div>
    <span>🎯</span>
    <h4>Improve</h4>
    <p>Consistently</p>
  </div>
</div>

<div className="community-proof">
  <div className="community-icon">
    ✦
  </div>

  <div className="community-content">
    <h4>Built for serious improvement</h4>

    <p>
      Designed for traders who review,
      refine, and execute better.
    </p>

    <span>Focused on consistency & execution</span>
  </div>
</div>

        </div>
  
        <div className="hero-right">
  <div className="journal-card">
    <div className="card-header">
      <h3>Today’s Journal Entry</h3>
      <span>May 20, 2024</span>
    </div>

    <div className="trade-summary">
      <span>LONG</span>
      <h2>BTC/USD</h2>
      <strong>+3.2R</strong>
    </div>

    <div className="chart-box">
        <img src={chart} alt="Trading Analysis Trade Chart"></img>
    </div>

    <div className="mini-grid">
      <div>
        <small>Notes</small>
        <p>Liquidity sweep and bullish structure shift.</p>
      </div>

      <div>
        <small>Emotion</small>
        <p className="green">Confident</p>
      </div>
    </div>
  </div>

  <div className="performance-card">
    <h3>Performance Overview</h3>

    <div className="stats-grid">
      <div>
        <small>Win Rate</small>
        <strong>63%</strong>
      </div>

      <div>
        <small>Average R</small>
        <strong>2.41</strong>
      </div>

      <div>
        <small>Total Trades</small>
        <strong>48</strong>
      </div>

      <div>
        <small>Net P&L</small>
        <strong className="green">+12.4%</strong>
      </div>
    </div>

    <div className="line-chart">
    <div className="line-chart">
  <svg viewBox="0 0 400 150" preserveAspectRatio="none">
    <defs>
      <linearGradient id="purpleFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
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
  </div>

  <div className="ai-card">
    <h4>✦ AI Insight</h4>
    <p>You tend to enter 23% earlier than your most profitable setups.</p>
  </div>

  <div className="streak-card">
    <h4>Journal Streak</h4>
    <strong>12 🔥</strong>
    <p>days</p>
  </div>

  <div className="reflection-card">
  <h4>Weekly Reflection</h4>
  <p>My best trades come from patience, not prediction.</p>
  <small>Next Goal: Improve RR to 2.5+</small>
</div>

<div className="recent-trades-card">
  <div className="card-header">
    <h4>Recent Trades</h4>
    <span>View All</span>
  </div>

  <p>BTC/USD <span className="green">+3.2R</span></p>
  <p>XAU/USD <span className="red">-1.4R</span></p>
  <p>ETH/USD <span className="green">+2.1R</span></p>
</div>

<div className="quick-trade-card">
  <h4>Quick Add Trade</h4>

  <div className="fake-input">
    BTC/USD
  </div>

  <div className="direction-preview">
    <div className="long-preview">Long</div>
    <div className="short-preview">Short</div>
  </div>

  <div className="fake-input">
    Outcome (R)
  </div>

  <div className="fake-submit">
    Add Trade
  </div>
</div>

</div>
      </section>
    );
  }
  
  export default Hero;
