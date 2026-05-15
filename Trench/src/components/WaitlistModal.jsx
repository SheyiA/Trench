function WaitlistModal({ onClose }) {
    return (
      <div className="modal-overlay">
        <div className="waitlist-modal">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
  
          <p className="eyebrow">Early Access</p>
  
          <h2>Join the Trench waitlist</h2>
  
          <p className="modal-description">
            Get updates, early access invites, and help shape the trading journal built for serious improvement.
          </p>
  
          <form className="waitlist-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
  
            <select>
              <option>Trading Focus</option>
              <option>Crypto</option>
              <option>Gold</option>
              <option>Forex</option>
              <option>Other</option>
            </select>
  
            <select>
              <option>Experience Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
  
            <button type="button">Join Waitlist →</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default WaitlistModal;