"use client";
import "components/Landing/LandingStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import profilePicture from "public/pictures/round_profile_picture.png";

export const Landing = () => {
  return (
    <>
      <div id="section">
        <div id="boxWrap">
          <div className="box leftBox">
            <div>
              <p id="name">Hi, I'm Kyushik.</p>
              <p className="intro">
                I'm a fullstack software engineer with a background in UX
                Design.
              </p>
              <div className="aboutMeLink">
                <a href="#about">About me</a>
                <div>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="box rightBox">
            <div className="image-container aspect-ratio-box">
              <div className="aspect-ratio-box-inside">
                <Image
                  src={profilePicture}
                  layout="fill"
                  objectFit="cover"
                  alt="profile picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
