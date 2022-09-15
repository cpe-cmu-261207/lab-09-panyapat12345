import React from "react";

export default function Greeting() {
  return (
    <div className="d-flex justify-content-center pt-5 bg-primary bg-opacity-50 pb-5">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <img
            src="/picture/my_picture.JPG"
            className=" rounded-circle py-4"
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="d-flex justify-content-center">
          <span className="h1 pb-1">ปัญญพัฒน์ วงษ์ดี</span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="d-inline h3">
            คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
          </span>
        </div>

        <div
          className="bg-white border border-1 mt-5 py-3 px-4 rounded-4 d-flex align-items-center"
          style={{ maxWidth: "600px", maxHeight: "250px" }}
        >
          <span className="fs-5">
            สวัสดีครับ ผมชื่อนายปัญญพัฒน์ วงษ์ดี
            ปัจจุบันกำลังศึกษาที่มหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์
            สาขาวิศวกรรมคอมพิวเตอร์ (ปี2) จบมาจากโรงเรียนสันป่าตองวิทยาคม
            จังหวัดเชียงใหม่ เหตุผลที่ผมเลือกเรียนก็เพราะว่า ผมเคยเรียนภาษาC
            เมื่อมัธยมปลาย แล้วผมรู้สึกชอบมากก็เลยเลือกเรียนครับ
          </span>
        </div>
      </div>
    </div>
  );
}
