import Card from "../components/Card";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { studentDB } from "../libs/studentDB";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Greeting />

      <div className="d-flex flex-column justify-content-center pt-5">
        <Header>ทักษะความสามารถ</Header>

        {/* skills */}
        <div className="d-flex flex-column gap-2 mx-auto pb-5">
          {studentDB.skillDB.map((skill, i) => (
            <Card data={skill} key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
