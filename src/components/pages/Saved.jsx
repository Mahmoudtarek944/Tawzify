import { getIdSaved } from "../../../utils/localStorage";
import { useState, useEffect } from "react";
import { getAllData } from "../../api/api";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Saved() {
  const idsSaved = getIdSaved();

  const [saveData, setSaveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMount = true;
    async function getDataFromApi() {
      try {
        const res = await getAllData();

        if (isMount) {
          const filterIDs = res.jobs.filter((job) => {
            return idsSaved.includes(job.id);
          });
          setSaveData(filterIDs);
        }
      } catch (err) {
        if (isMount) {
          setError(err.message);
        }
      } finally {
        if (isMount) {
          setLoading(false);
        }
      }
    }
    getDataFromApi();
    return () => {
      isMount = false;
    };
  }, []);
  console.log(idsSaved);
  if (loading)
    return (
      <div className="loading-screen d-flex justify-content-center align-items-center">
        <span className="loader"></span>
      </div>
    );
  if (error)
    return (
      <div className="status-screen d-flex flex-column justify-content-center align-items-center text-center gap-2">
        <i className="bi bi-wifi-off status-icon error-icon fs-3 mb-1"></i>
        <h5>Something went wrong</h5>
        <p className="text-secondary">{error}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  if (!saveData || saveData.length === 0)
    return (
      <div className="status-screen d-flex align-items-center flex-column">
        <i className="bi bi-inbox status-icon empty-icon"></i>
        <h5>No jobs found Saved</h5>
        <p className="text-secondary">Check back</p>
      </div>
    );

  return (
    <>
      <div className="container py-4">
        <div className="row g-4 justify-content-center">
          {saveData.map((job) => (
            <div key={job.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <Card className="job-card h-100">
                <Card.Body className="d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={job.company_logo}
                      alt={job.company_name}
                      className="company-logo"
                    />
                    <div className="d-flex flex-column">
                      <div className="d-flex gap-5">
                        <p className="company-name mb-0">{job.company_name}</p>
                      </div>

                      <small className="text-muted">{job.category}</small>
                    </div>
                  </div>

                  <div>
                    <h6 className="job-title mb-0">{job.title}</h6>
                  </div>

                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge-job badge-type">{job.job_type}</span>
                    {job.salary && (
                      <span className="badge-job badge-salary">
                        {job.salary}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={`/job-details/${job.id}`}
                      className="btn btn-primary w-100 btn-sm details-btn"
                    >
                      View Details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Saved;
