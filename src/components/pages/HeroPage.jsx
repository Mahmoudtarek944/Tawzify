import logo from "../../../assets/NA_October_10.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function HeroPage() {
  const navigate = useNavigate();
  function handelRegister() {
    navigate("/register");
  }
  const handleFindJob = () => {
    // console.log("click");
    Swal.fire({
      title: "Login Required",
      text: "You must be logged in to find a job!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Login Now",
      cancelButtonText: "Later",
    }).then((result) => {
      if (result.isConfirmed) {
        handelRegister();
      }
    });
  };
  return (
    <div className="bg-home">
      <div className="container hero-wrapper d-flex align-content-center  justify-align-content-between gap-3 px-2 py-5">
        <div className="hero-text d-flex gap-3 flex-column">
          <header>
            <h1>
              Find a <span className="text-primary">JOB</span> That Suits
              <br /> Your interest & Skills
            </h1>
            <h6>
              Career development, Growth opportunities, Work-life balance
              <br />
              Competitive salary, Benefits, Remote-friendly, Training
            </h6>
          </header>

          <div className="search-bar d-flex justify-content-center gap-1 rounded-1 w-100 ">
            <div className="search-item d-flex justify-content-center gap-1">
              <i className="bi bi-search text-secondary"></i>
              <span className="text-secondary">Job Title, Keyword</span>
            </div>
            <div className="divider"></div>
            <div className="search-item d-flex  gap-1">
              <i className="bi bi-geo-alt text-secondary"></i>
              <span className="text-secondary">Your Location</span>
            </div>
          </div>

          <button
            className="btn btn-primary find-btn w-75"
            onClick={handleFindJob}
          >
            Find Job
          </button>
        </div>

        <img src={logo} alt="home img" className="logo-home" />
      </div>

      <div className="cards-wrapper container">
        {[
          { icon: "bi-duffle-fill", count: "1,75,324", label: "Live Job" },
          { icon: "bi-building", count: "97,354", label: "Companies" },
          { icon: "bi-people-fill", count: "38,47,154", label: "Candidates" },
          { icon: "bi-duffle-fill", count: "7,532", label: "New Jobs" },
        ].map((item, i) => (
          <div
            className="stat-card d-flex align-items-center gap-2 rounded-2"
            key={i}
          >
            <i className={`bi ${item.icon} stat-icon`}></i>
            <div>
              <h4 className="text-secondary">{item.count}</h4>
              <h6 className="text-secondary">{item.label}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroPage;
