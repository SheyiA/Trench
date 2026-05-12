function SignupCTA() {
    return (
      <section className="signup-cta">
        <div>
          <p className="eyebrow">Start in under 60 seconds</p>
          <h2>Start your trading journey with Trench</h2>
          <p>
            Build consistency through better journaling, smarter review, and AI-powered trade insights.
          </p>
        </div>
  
        <form className="signup-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Start Free Trial →</button>
        </form>
      </section>
    );
  }
  
  export default SignupCTA;