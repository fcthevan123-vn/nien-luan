function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <button class="btn " type="button">
          <i class="bi bi-arrow-left-right"></i>
        </button>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Nhập tên sách cần tìm"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Tìm
          </button>
        </form>
      </div>
    </nav>
  );
}
export default NavBar;
