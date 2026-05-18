import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ onDashboardClick, openModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav>
      <div>
        <h2>Trench</h2>
      </div>

      <div>
        <a href="#features">Home</a>
        <a href="#features">Features</a>
        <a href="#mission">Missions</a>
        <a href="#pricing">Pricing</a>
        <a onClick={openModal}>Waitlist</a>
      </div>

      {mobileOpen && (
  <div className="mobile-nav-menu">

    <a href="#mission" onClick={() => setMobileOpen(false)}>Mission</a>
    <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
    <a href="#features" onClick={() => setMobileOpen(false)}>Home</a>

    <button onClick={() => {openModal(); setMobileOpen(false);}}>
      Join Waitlist
    </button>

  </div>
)}

      <div>
        <button onClick={onDashboardClick}> <Link to="sign-in"> Log in </Link></button>
        <button onClick={openModal}>Join Beta</button>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
