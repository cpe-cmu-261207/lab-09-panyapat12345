import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />

      <div
        className="d-flex flex-column justify-content-center pt-5"
        style={{ backgroundColor: "skyblue" }}
      >
        <Header>ช่องทางการติดต่อ</Header>

        {/* <!-- contact box --> */}
        <div className="pb-5 d-none d-md-block">
          <div className="pb-5">
            <div
              className="d-flex justify-content-center pb-5 pt-1"
              style={{ backgroundColor: "skyblue" }}
            >
              <div
                className="d-flex justify-content-center gap-5 p-5 border border-1 rounded-5 bg-white"
                style={{ maxWidth: "900px", maxHeight: "400px" }}
              >
                {/* <!-- image --> */}
                <div className="d-flex align-items-center">
                  <img
                    src="/picture/my_picture.JPG"
                    className="rounded-circle"
                    style={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* <!-- details --> */}
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column gap-3 h5">
                    <div className="d-flex ">
                      <span style={{ width: "150px" }}>ชื่อ</span>
                      <span>ปัญญพัฒน์ วงษ์ดี</span>
                    </div>

                    <div className="d-flex">
                      <span style={{ width: "150px" }}>ชื่อเล่น</span>
                      <span>คอม</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span style={{ width: "150px" }}>ที่อยู่</span>
                      <div className="d-flex flex-column gap-3">
                        <span>18/6 หมู่ที่ 2 ต.บ้านกลาง อ.สันป่าตอง </span>
                        <span>จ.เชียงใหม่ 50120</span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <span style={{ width: "150px" }}>Facebook</span>
                      <a
                        href="https://web.facebook.com/panyapat.wongdee"
                        className="nav-link text-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>www.facebook.com/panyapat.wongdee</span>
                      </a>
                    </div>
                    <div className="d-flex">
                      <span style={{ width: "150px" }}>Email</span>
                      <a
                        href="mailto:panyapat_wongdee@cmu.ac.th"
                        className="nav-link text-primary"
                      >
                        <span>panyapat_wongdee@cmu.ac.th</span>
                      </a>
                    </div>
                    <div className="d-flex">
                      <span style={{ width: "150px" }}>เบอร์โทรศัพท์</span>
                      <span>062-2850186</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
