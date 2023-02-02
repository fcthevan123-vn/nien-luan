function Signup() {
  return (
    <div
      className="modal modal-signin position-static d-block bg-secondary py-5"
      tabIndex={-1}
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Đăng ký miễn phí</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-5 pt-0">
            <form className>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Địa chỉ email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Mật khẩu</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Nhậu lại mật khẩu</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Đăng ký ngay
              </button>
              <small className="text-muted">
                Khi nhấn vào nút đăng ký, bạn đã đồng ý với mọi điều khoản của
                chúng tôi!
              </small>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
