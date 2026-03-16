import { useEffect, useState } from "react";
import { getAllData } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function JobDetails() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    let isMount = true;
    async function getDataFromApi() {
      try {
        const res = await getAllData();
        if (isMount) {
          const foundJob = res.jobs.find((jobs) => {
            return jobs.id === Number(id);
          });
          setJob(foundJob);
        }
      } catch (err) {
        if (isMount) {
          setError(err.message);
        }
      } finally {
        if (isMount) {
          setLoading(false); // in all setuation loading stoped (data returnd or error)
        }
      }
    }
    getDataFromApi();
    return () => {
      isMount = false;
    };
  }, [id]);

  if (loading)
    return (
      <div className="loading-screen d-flex justify-content-center align-items-center">
        <span className="loader"></span>
      </div>
    ); // the first loading waitign the request form server
  // after useEffect work and request from api .
  // if faild -> the state updata (try correct) , not catch , if reject -> catch do
  // if the returned data empty -> null
  if (error)
    // network Error
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
  if (!job)
    // empty objects from api
    return (
      <div className="status-screen d-flex justify-content-center align-items-center flex-column">
        <i className="bi bi-inbox status-icon empty-icon  text-danger"></i>
        <h5>No jobs found</h5>
        <p className="text-secondary">Check back later for new opportunities</p>
      </div>
    );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <Card className="details-card">
            <Card.Body className="p-4 p-md-5">
              <div className="d-flex align-items-center gap-3 mb-4 justify-content-between">
                <div className="d-flex gap-2">
                  <img
                    src={job.company_logo}
                    alt={job.company_name}
                    className="details-logo"
                  />
                  <div className="mt-2">
                    <h5 className="company-name mb-1">{job.company_name}</h5>
                    <small className="text-muted">{job.category}</small>
                  </div>
                </div>

                <Link
                  to="/home"
                  className="btn btn-sm btn-outline-secondary back-btn"
                >
                  <i className="bi bi-arrow-left me-2"></i>Back to Jobs
                </Link>
              </div>

              <h3 className="job-title-lg mb-3">{job.title}</h3>
              <div className="d-flex gap-2 flex-wrap mb-4">
                <span className="badge-job badge-type">
                  <i className="bi bi-briefcase me-1"></i>
                  {job.job_type}
                </span>
                {job.salary && (
                  <span className="badge-job badge-salary">
                    <i className="bi bi-cash me-1"></i>
                    {job.salary}
                  </span>
                )}
                {job.candidate_required_location && (
                  <span className="badge-job badge-location">
                    <i className="bi bi-geo-alt me-1"></i>
                    {job.candidate_required_location}
                  </span>
                )}
              </div>

              <hr />

              <div className="job-description">
                <h6 className="section-title mb-3">
                  <i className="bi bi-file-text me-2 text-primary"></i>
                  Job Description
                </h6>
                <div
                  className="description-body"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>

              <div className="mt-4">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary apply-btn"
                >
                  <i className="bi bi-send me-2"></i>Apply Now
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
