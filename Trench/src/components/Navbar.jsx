function Navbar({onDashboardClick, openModal}) {
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
  
        <div>
          <button onClick={onDashboardClick}>Log in</button>
          <button onClick={openModal} >Join Beta</button>
        </div>

        <button className="hamburger">
        ☰
      </button>

      
      </nav>
    );
  }
  
  export default Navbar;