import { useRef, useState } from "react";
import {
  expressionEmail,
  expressionName,
  expressionPass,
} from "../../../utils/validation";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const naviage = useNavigate();

  function validationForm(e) {
    e.preventDefault();

    const validName = expressionName(nameRef.current.value);
    const validEmail = expressionEmail.test(emailRef.current.value);
    const validPass = expressionPass.test(passwordRef.current.value);

    setNameError(!validName);
    setEmailError(!validEmail);
    setPassError(!validPass);

    if (validName && validEmail && validPass) {
      const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      localStorage.setItem("user", JSON.stringify(user));

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({ icon: "success", title: "Signed in successfully" }).then(
        () => naviage("/home"),
      );
    }
  }
  return (
    <>
      <div className="p-2 mt-5 form-height mb-5 form">
        <div className="cardForm border border-1 border-info shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center">
          <div className="text-center ">
            <h2 className="register-title">
              Tawz<span className="text-primary">ify</span>
            </h2>
            <p className="text-secondary mb-0">Create your free account</p>
          </div>
          <div className="d-flex flex-column gap-2 w-100 mt-3">
            <form
              className="d-flex flex-column gap-3 w-100 align-items-center"
              onSubmit={validationForm}
            >
              <div
                className={`input-group ${nameError ? "is-invalid-group" : ""}`}
              >
                <input
                  type="text"
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  placeholder="Full Name"
                  ref={nameRef}
                  onChange={() => setNameError(false)}
                />
              </div>
              {nameError && (
                <small className="text-danger d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Enter a valid name (letters only, min 3 chars)
                </small>
              )}

              <div
                className={`input-group ${emailError ? "is-invalid-group" : ""}`}
              >
                <input
                  type="text"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  placeholder="Email Address"
                  ref={emailRef}
                  onChange={() => setEmailError(false)}
                />
              </div>
              {emailError && (
                <small className="text-danger  d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Enter a valid email address
                </small>
              )}

              <div
                className={`input-group ${passError ? "is-invalid-group" : ""}`}
              >
                <input
                  type={showPass ? "text" : "password"}
                  className={`form-control    ${passError ? "is-invalid" : ""}`}
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={() => setPassError(false)}
                />
                <span
                  className="input-group-text bg-light toggle-pass"
                  onClick={() => setShowPass((p) => !p)}
                >
                  <i
                    className={`bi ${showPass ? "bi-eye-fill" : "bi-eye-slash-fill"} text-secondary`}
                  ></i>
                </span>
              </div>
              {passError && (
                <small className="text-danger  d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Password must be 8+ chars with a number
                </small>
              )}
              <div className="d-flex gap-2 ">
                <button
                  type="submit"
                  className="btn btn-primary flex-fill register-btn"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary flex-fill register-btn"
                  onClick={() => naviage("/login")}
                >
                  I have an Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
