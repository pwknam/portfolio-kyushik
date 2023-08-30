"use client";
import "components/NavBar/NavBarStyles.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const NavBar = () => {
  const [Clicked, SetClicked] = useState(false);

  const handleMenuClick = () => {
    SetClicked(!Clicked);
  };

  return (
    <div id="nav-wrapper">
      <nav>
        <Link href="/" id="nameLogo">
          <h1 id="initials">KN</h1>
        </Link>

        <div>
          <ul id="navbar" className={Clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <Link href="#experience-section">Experience</Link>
            </li>
            <li>
              <Link href="#projects-section-wrapper">Projects</Link>
            </li>
            <li>
              <Link href="#contact-us-section">Contact</Link>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleMenuClick}>
          {Clicked ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </div>
  );
};
