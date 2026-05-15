function SignupCTA({ openModal }) {
  return (
    <section className="signup-cta">

      <div>

        <p className="eyebrow">
          Early Access
        </p>

        <h2>
          Follow the development of Trench.
        </h2>

        <p>
          Get updates, early feature access, and help shape the future of trader development.
        </p>

      </div>

      <div className="signup-side">

        <button
          className="signup-modal-btn"
          onClick={openModal}
        >
          Join the Waitlist →
        </button>

        <small>
          No spam. Just updates, early access invites, and product progress.
        </small>

      </div>

    </section>
  );
}

export default SignupCTA;