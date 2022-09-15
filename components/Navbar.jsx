import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center bg-primary">
      {/* big-navbar */}
      <div
        className="d-flex align-items-center bg-primary text-white pt-2 pb-1"
        style={{ width: "1300px", height: "68px" }}
      >
        <span className="me-auto h1 ps-3">MY RESUME</span>
        <div className="d-flex gap-5 h4">
          <Link href="/">
            <a>
              <span>HOME</span>
            </a>
          </Link>

          <Link href="/exp">
            <a>
              <span>EXPERIENCE</span>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <span>CONTACT</span>
            </a>
          </Link>
          <Link href="/lab-07">
            <a>
              <span>LAB-07</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
