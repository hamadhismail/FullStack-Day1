import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p className="contact-description">
        Have questions? Feel free to contact our
        Student Portal support team.
      </p>

      <div className="contact-content">

        <div className="contact-card">
          <h3>Email Address</h3>
          <p>
            <a href="mailto:student@gmail.com">
              hamadhismail04@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Phone Number</h3>
          <p>
            <a href="tel:9962736287">
              9962736287
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;