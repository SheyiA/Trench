function Pricing({openModal}) {
    return (
      <section id="pricing" className="pricing-section">
        <div className="pricing-left">
          <p className="eyebrow">Membership</p>
  
          <h2>Built for traders serious about improving.</h2>
  
          <p>
            Start free during beta and help shape the future of Trench before paid memberships launch.
          </p>
        </div>
  
        <div className="pricing-right">
          <div className="pricing-card">
            <div className="pricing-badge">Beta Access</div>
  
            <h3>Trench Early Member</h3>
  
            <div className="price">$0</div>
  
            <p>Free while we build with our first group of traders.</p>
  
            <ul>
              <li>Trade journal workspace</li>
              <li>Performance dashboard</li>
              <li>Trade history archive</li>
              <li>Early AI insight testing</li>
              <li>Future discount when paid plans launch</li>
            </ul>
  
            <a onClick={openModal}>Join the Waitlist</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Pricing;