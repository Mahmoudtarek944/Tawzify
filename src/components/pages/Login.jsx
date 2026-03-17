import { useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../utils/localStorage";
import { useEffect } from "react";
import Swal from "sweetalert2";

function Login() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const naviage = useNavigate();

  const user = getUser();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "Registration Required",
        text: "You Didn't Have An Account , Please Create An Account",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#0d6efd",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Create Now",
        cancelButtonText: "Later",
      }).then((result) => {
        if (result.isConfirmed) {
          naviage("/register");
        } else if (result.isDismissed) {
          naviage("/");
        }
      });
    }
  }, []);

  function validationForm(e) {
    e.preventDefault();

    const validName = nameRef.current.value === user.name;
    const validEmail = emailRef.current.value === user.email;
    const validPass = passwordRef.current.value === user.password;

    setNameError(!validName);
    setEmailError(!validEmail);
    setPassError(!validPass);

    if (validName && validEmail && validPass) {
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
      Toast.fire({ icon: "success", title: "Logged in successfully" }).then(
        () => naviage("/home"),
      );
    }
  }

  return (
    <>
      <div className="p-2 my-3 form-height form">
        <div className="cardForm border border-1 border-info shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center">
          <div className="text-center mb-4">
            <h2 className="register-title">
              Tawz<span className="text-primary">ify</span>
            </h2>
          </div>
          <div className="d-flex flex-column gap-2 w-100">
            <form
              className="d-flex flex-column gap-3 w-100 align-items-center"
              onSubmit={validationForm}
            >
              <div
                className={`input-group ${nameError ? "is-invalid-group" : ""}`}
              >
                <input
                  type="text"
                  className={`form-control  ${nameError ? "is-invalid" : ""}`}
                  placeholder="User Name"
                  ref={nameRef}
                  onChange={() => setNameError(false)}
                />
              </div>
              {nameError && (
                <small className="text-danger d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Name doesn't match
                </small>
              )}

              <div
                className={`input-group ${emailError ? "is-invalid-group" : ""}`}
              >
                <input
                  type="text"
                  className={`form-control  ${emailError ? "is-invalid" : ""}`}
                  placeholder="User Email"
                  ref={emailRef}
                  onChange={() => setEmailError(false)}
                />
              </div>
              {emailError && (
                <small className="text-danger d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Email doesn't match
                </small>
              )}

              <div
                className={`input-group ${passError ? "is-invalid-group" : ""}`}
              >
                <input
                  type={showPass ? "text" : "password"}
                  className={`form-control   ${passError ? "is-invalid" : ""}`}
                  placeholder="User Password"
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
                <small className="text-danger d-block align-self-start">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  Password doesn't match
                </small>
              )}

              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-primary flex-fill register-btn"
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary flex-fill register-btn"
                  onClick={() => naviage("/register")}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
