import "../styles/Newsletter.css";

function Newsletter() {
  return (
    <section className="news" id="newsletter">

      <h2>Subscribe Our Newsletter</h2>

      <div className="newsletter-form">
        <input type="email" placeholder="Enter email" />
        <button>Subscribe</button>
      </div>

    </section>
  );
}

export default Newsletter;