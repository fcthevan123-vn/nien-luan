function Footer() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            © 2023 Can Tho University
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-github" style={{ fontSize: "20px" }}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Footer;
