import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { NavBar } from "../../components/NavBar/NavBar";
import { Landing } from "../../components/Landing/Landing";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";
import { Project } from "../../components/Project/Project";
import { ContactUs } from "../../components/ContactUs/ContactUs";

export default function Home() {
  return (
    <div id="main-page">
      <NavBar />
      <div className="nav-placeholder"></div>
      <Landing />
      <About />
      <Experience />
      <Project />
      <ContactUs />
    </div>
  );
}
