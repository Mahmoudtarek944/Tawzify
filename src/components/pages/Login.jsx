import { useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../utils/localStorage";
import { useEffect } from "react";
import Swal from "sweetalert2";
function Login() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  const btnRef = useRef(null);

  const naviage = useNavigate();
  function handelRegister() {
    naviage("/register");
  }
  const naviageHome = useNavigate();
  function handelHome() {
    naviageHome("/Home");
  }
  const naviageHero = useNavigate();
  function handelHero() {
    naviageHero("/");
  }

  // console.log(getUser());

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
          handelRegister();
        } else if (result.isDismissed) {
          handelHero();
        }
      });
    }
  }, []);

  function validationForm(e) {
    e.preventDefault();

    if (
      nameRef.current.value === user.name &&
      emailRef.current.value === user.email &&
      passwordRef.current.value === user.password
    ) {
      handelHome();
    } else {
      formRef.current.className =
        "border border-2 border-danger shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center";

      btnRef.current.className = "btn btn-outline-danger";
    }
  }
  return (
    <>
      <div className=" p-2 mt-5 form-height">
        <div
          className="border border-1 border-info shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center justify-content-center text-capitalize text-center"
          ref={formRef}
        >
          <h3 className="fw-bold text-dark">Enter Your Details </h3>
          <div className="d-flex flex-column gap-2 w-100 mt-3">
            <form
              className="d-flex flex-column gap-3 w-100 align-items-center"
              onSubmit={validationForm}
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
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" ref={btnRef}>
                  Log in
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={handelRegister}
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
