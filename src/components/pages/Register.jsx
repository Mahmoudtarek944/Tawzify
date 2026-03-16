import { useRef } from "react";
import {
  expressionEmail,
  expressionName,
  expressionPass,
} from "../../../utils/validation";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  const btnRef = useRef(null);

  const naviage = useNavigate();
  function handelLogin() {
    naviage("/login");
  }

  function validationForm(e) {
    if (
      expressionName(nameRef.current.value) &&
      expressionEmail.test(emailRef.current.value) &&
      expressionPass.test(passwordRef.current.value)
    ) {
      const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      e.preventDefault();
      formRef.current.className =
        "border border-2 border-danger shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center";
      btnRef.current.className = "btn btn-outline-danger";
    }
  }
  return (
    <>
      <div className="p-2 mt-5 form-height">
        <div
          className="cardForm border border-1 border-info shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center"
          ref={formRef}
        >
          <h3 className="fw-bold text-dark">Create New Account </h3>
          <div className="d-flex flex-column gap-2 w-100 mt-3">
            <form
              className="d-flex flex-column gap-3 w-100 align-items-center"
              onSubmit={validationForm}
              action="/Home"
            >
              <input
                type="text"
                name="name"
                className="py-2 px-3 fw-bold border-0 w-75 rotating-border-input"
                placeholder="User Name"
                ref={nameRef}
              />
              <input
                type="text"
                name="email"
                className="py-2 px-3 fw-bold border-0 w-75 rotating-border-input"
                placeholder="User Email"
                ref={emailRef}
              />
              <div className="w-75 d-flex justify-align-content-between">
                <input
                  type="password"
                  name="pass"
                  className="py-2 px-3 fw-bold border-0 w-100 rotating-border-input"
                  placeholder="User Password"
                  ref={passwordRef}
                />
                <span
                  className="bi bi-eye-slash-fill text-black text-center m-2 bg-light rounded-circle "
                  onClick={() => {
                    passwordRef.current.type = "text";
                  }}
                ></span>
              </div>
              <div className=" d-flex justify-content-center gap-2">
                <button className="btn btn-outline-primary" ref={btnRef}>
                  Sign in
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    handelLogin();
                  }}
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
