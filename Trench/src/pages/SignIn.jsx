import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-card">
        <Link to="/" className="signin-logo">
          Trench
        </Link>

        <p className="eyebrow">Member Access</p>

        <h1>Sign in to Trench</h1>

        <p className="signin-text">
          Access your trading journal, dashboard, and review workspace.
        </p>

        <form className="signin-form">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button type="button">
            Sign In →
          </button>
        </form>

        <p className="signin-footer-text">
          Don’t have access yet? <Link to="/?waitlist=true">Join the waitlist</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;