function Header() {
  return (
    <div>
      <header className="p-3 text-bg-dark fixed-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-book me-5"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                {/* <a href="#" className="nav-link px-2 text-white">
                  Trang chu
                </a> */}
                <button type="button" className="btn btn-outline-light me-2">
                  Trang chủ
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-outline-light me-2">
                  Danh mục sách
                </button>
              </li>

              <li>
                <button type="button" className="btn btn-outline-light me-2">
                  Liên hệ
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-outline-light me-2">
                  Về chúng tôi
                </button>
              </li>
            </ul>
            <div className="text-end">
              {/* Button đăng nhập */}
              {/* <button type="button" className="btn btn-outline-light me-2">
                Đăng nhập
              </button> */}

              <div
                className="modal fade zindex-modal"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="fw-bold mb-0 fs-2 text-dark">Đăng nhập</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form className>
                        <div className="form-floating mb-3 text-dark">
                          <input
                            type="email"
                            className="form-control rounded-3"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Địa chỉ email</label>
                        </div>
                        <div className="form-floating mb-3 text-dark">
                          <input
                            type="password"
                            className="form-control rounded-3"
                            id="floatingPassword"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPassword">Mật khẩu</label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Nếu chưa có tài khoản, đăng ký ngay!
                      </button>
                      <button className="btn btn-primary">Đăng nhập</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel2"
                      >
                        Modal 2
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      Hide this modal and show the first with the button below.
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Trở lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-light me-2"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Đăng nhập
              </button>

              <button type="button" className="btn btn-warning">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
