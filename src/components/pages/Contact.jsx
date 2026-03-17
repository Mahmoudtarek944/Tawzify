import { useRef, useState } from "react";
import { expressionEmail } from "../../../utils/validation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Contact() {
  const emailRef = useRef(null);
  const navigateHome = useNavigate();
  const [emailError, setEmailError] = useState(false);

  function handelSubmit(e) {
    e.preventDefault();
    if (expressionEmail.test(emailRef.current.value)) {
      setEmailError(false);
      Swal.fire({ title: "Message Sent!", icon: "success" });
      navigateHome("/home");
    } else {
      setEmailError(true);
    }
  }

  return (
    <div className="container py-1">
      <div className="row justify-content-center ">
        <div className="col-12 col-md-8 col-lg-6 contact">
          <div className="text-center">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">We'd love to hear from you</p>
            <div className="contact-divider mx-auto"></div>
          </div>

          <div className="contact-card p-4 p-md-5">
            <form className="d-flex flex-column gap-3" onSubmit={handelSubmit}>
              <div className="row g-3 first-last-name">
                <div className="col-sm-12 col-md-6">
                  <label htmlFor="fName" className="form-label contact-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fName"
                    className="form-control contact-input"
                    placeholder="Mahmoud"
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <label htmlFor="lName" className="form-label contact-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lName"
                    className="form-control contact-input"
                    placeholder="Tarek"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-control contact-input ${emailError ? "is-invalid" : ""}`}
                  placeholder="mahmoud@example.com"
                  ref={emailRef}
                  onChange={() => setEmailError(false)}
                />
                {emailError && (
                  <div className="invalid-feedback">
                    <i className="bi bi-exclamation-circle me-1"></i>
                    Enter a valid email address
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="form-label contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control contact-input"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-btn mt-1"
              >
                <i className="bi bi-send me-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
