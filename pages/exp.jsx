import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { studentDB } from "../libs/studentDB";

export default function exp() {
  return (
    <div>
      <Navbar />

      <div className="d-flex flex-column justify-content-center pt-5">
        <Header>ประสบการณ์</Header>

        {/* <!-- experience --> */}
        <div className="d-flex flex-column gap-2 mx-auto pb-5">
          {studentDB.expDB.map((exp, i) => (
            <Card data={exp} key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
