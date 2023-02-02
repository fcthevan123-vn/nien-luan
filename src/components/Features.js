function Features() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-center">
        Mượn sách thật dễ dàng !
      </h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div
            className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded"
            height={80}
            width={80}
          >
            <i
              style={{ width: "48px", textAlign: "center" }}
              className="bi bi-lightning "
            />
          </div>
          <h3 className="fs-2">Nhanh chóng</h3>
          <p>
            Thư viện Trường Đại học Cần Thơ mang đến cho bạn trải nghiệm tốt
            nhất khi mượn sách. Với những tiện ích và rất dễ dàng sử dụng, hy
            vọng các bạn sẽ hài lòng khi trải nghiệm dịch vụ.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded">
            <i
              style={{ width: "48px", textAlign: "center" }}
              className="bi bi-bezier2"
            ></i>
          </div>
          <h3 className="fs-2">Dễ dàng</h3>
          <p>
            Thư viện Trường Đại học Cần Thơ mang đến cho bạn trải nghiệm tốt
            nhất khi mượn sách. Với những tiện ích và rất dễ dàng sử dụng, hy
            vọng các bạn sẽ hài lòng khi trải nghiệm dịch vụ.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded">
            <i
              style={{ width: "48px", textAlign: "center" }}
              className="bi bi-file-post-fill"
            ></i>
          </div>
          <h3 className="fs-2">Có nhiều thể loại sách</h3>
          <p>
            Thư viện Trường Đại học Cần Thơ mang đến cho bạn trải nghiệm tốt
            nhất khi mượn sách. Với những tiện ích và rất dễ dàng sử dụng, hy
            vọng các bạn sẽ hài lòng khi trải nghiệm dịch vụ.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
