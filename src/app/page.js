import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { NavBar } from "../../components/NavBar/NavBar";
import { Landing } from "../../components/Landing/Landing";
import { ContactUs } from "/Users/kyushiknam/Desktop/code/portfolio/components/ContactUs/ContactUs.js";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";
import { Project } from "../../components/Project/Project";
import "/Users/kyushiknam/Desktop/code/portfolio/src/app/page.module.css";

export default function Home() {
  return (
    <div id="main-page">
      <NavBar />
      <div className="nav-placeholder"></div>
      <Landing />
      <div className="nav-placeholder"></div>
      <About />
      <div className="nav-placeholder"></div>
      <Experience />
      <div className="nav-placeholder"></div>
      <Project />
      <div className="nav-placeholder"></div>
      <ContactUs />
    </div>
  );
}
