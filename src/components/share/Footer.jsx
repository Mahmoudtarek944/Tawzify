function Footer() {
  const links = [
    { section: "Company", items: ["About Us", "Careers", "Blog", "Press"] },
    {
      section: "Job Seekers",
      items: ["Browse Jobs", "Companies", "Salary Guide", "Resume Tips"],
    },
    {
      section: "Employers",
      items: ["Post a Job", "Pricing", "Talent Search", "Partnerships"],
    },
  ];

  const socials = [
    { icon: "bi-twitter-x", href: "" },
    { icon: "bi-linkedin", href: "" },
    { icon: "bi-whatsapp", href: "" },
    { icon: "bi-instagram", href: "" },
  ];

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <h3 className="text-white fw-bold mb-3">Tawzify</h3>
            <p className="footer-desc mb-4">
              Highlights curated opportunities, top employers, and culture fit —
              all in one place.
            </p>
            <div className="d-flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="social-link d-flex justify-content-center align-items-center"
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {links.map((col, i) => (
            <div key={i} className="col-6 col-sm-4 col-lg-auto flex-lg-fill">
              <h6 className="footer-col-title">{col.section}</h6>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <a href="" className="footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container d-flex flex-wrap justify-content-between align-items-center gap-2 py-3">
        <span>© 2025 Tawzify — mahmoud122tarek</span>
        <div className="d-flex gap-2 align-items-center">
          <a href="" className="footer-bottom-link">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="" className="footer-bottom-link">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
