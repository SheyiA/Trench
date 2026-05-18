function Footer() {
    return (
      <footer className="footer">
        <div className="footer-brand">
          <h2>Trench</h2>
          <p>Journal. Review. Improve.</p>
          <small>
            Trench is an educational trading journal platform. We do not provide financial advice.
          </small>
        </div>
  
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#mission">Mission</a>
            <a href="#pricing">Pricing</a>
          </div>
  
          <div>
            <h4>Platform</h4>
            <a href="#">Dashboard</a>
            <a href="#">Journal</a>
            <a href="#">Development</a>
          </div>
  
          <div>
            <h4>Access</h4>
            <a href="#waitlist">Join Waitlist</a>
            <a href="#pricing">Membership</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;