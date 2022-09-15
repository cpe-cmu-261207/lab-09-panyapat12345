import React from "react";

export default function Card(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "600px" }}>
      <div className="row g-0">
        {/* img-left */}
        {props.data.side === "left" && (
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={props.data.imgSrc}
              className="img-fluid rounded-start"
              style={{
                maxWidth: "200px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* title & detail */}
        <div className="col-md-8 ">
          <div className="card-body">
            {props.data.link !== "" ? (
              <a
                href={props.data.link}
                target="_blank"
                className="nav-link text-primary"
                rel="noreferrer"
              >
                <h5 className="card-title ">{props.data.title}</h5>
              </a>
            ) : (
              <h5 className="card-title ">{props.data.title}</h5>
            )}

            <p className="card-text">{props.data.detail}</p>
          </div>
        </div>

        {/* img-right */}
        {props.data.side === "right" && (
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={props.data.imgSrc}
              className="img-fluid rounded-start"
              style={{
                maxWidth: "200px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
