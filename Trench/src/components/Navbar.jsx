function Navbar({onDashboardClick}) {
    return (
      <nav>
        <div>
          <h2>Trench</h2>
        </div>
  
        <div>
          <a href="#">Dashboard</a>
          <a href="#">Mentorship</a>
          <a href="#">Live Rooms</a>
          <a href="#">Calendar</a>
          <a href="#">Pricing</a>
        </div>
  
        <div>
          <button>Log in</button>
          <button onClick={onDashboardClick}>Join Beta</button>
        </div>

        <button className="hamburger">
        ☰
      </button>

      
      </nav>
    );
  }
  
  export default Navbar;