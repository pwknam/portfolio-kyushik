import "components/About/AboutStyles.css";
import Image from "next/image";
import js from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/js.svg";
import html from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/html.svg";
import css from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/css.svg";
import ts from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/ts.svg";
import python from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/python.svg";
import react from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/react.svg";
import next from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/next-js.svg";
import flask from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/flask.svg";
import prisma from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/prisma.svg";
import vscode from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/vscode.svg";
import figma from "/Users/kyushiknam/Desktop/code/portfolio/public/software_icons/figma.svg";

export const About = () => {
  return (
    <>
      <div id="about">
        <div className="aboutMeSubSection">
          <h1 className="sectionTitle">About Me</h1>
          <p className="writing-about-me">
            I am a frontend software engineer currently based in NYC. Prior to
            becomming a software engineer, I earned my MFA in Design at the
            Savannah College of Art and Design (SCAD). This education developed
            the skills and experience to design hi-fidelity wireframes and
            conduct the design thinking methodology with a multidiscplinary
            team.
          </p>
          <p className="writing-about-me">
            My design skills paired with my software engineering skills make me
            a complete fullstack web-application developer. I can design
            wireframes with Figma and script with JavaScript/React.js in order
            to bring ideas to life.
          </p>
          <p className="writing-about-me">
            I am hungry for the opportunity to learn and work along side
            user-centered innovators. Below are the software skills, languages,
            and frameworks I have experience working with. I am open to learning
            the latest cutting-edge tech!
          </p>
        </div>
        <div className="softwareSkillsSection">
          <h1 className="sectionTitle">Skills</h1>
          <div className="skills_icon_section">
            <div className="skill">
              <Image src={js} width={75} height={75} alt="js logo" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <Image src={html} width={75} height={75} alt="html logo" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <Image src={css} width={75} height={75} alt="html logo" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <Image src={ts} width={75} height={75} alt="html logo" />
              <p>TypeScript</p>
            </div>

            <div className="skill">
              <Image src={python} width={75} height={75} alt="html logo" />
              <p>Python</p>
            </div>
          </div>
          <div className="frameworks">
            <div className="framework">
              <Image src={react} width={75} height={75} alt="html logo" />
              <p>React.js</p>
            </div>
            <div className="framework">
              <Image src={next} width={75} height={75} alt="html logo" />
              <p>Next.js</p>
            </div>
            <div className="framework">
              <Image src={flask} width={75} height={75} alt="html logo" />
              <p>Flask</p>
            </div>
            <div className="framework">
              <Image src={prisma} width={75} height={75} alt="html logo" />
              <p>Prisma</p>
            </div>
          </div>
          <div className="editors">
            <div className="editor">
              <Image src={vscode} width={75} height={75} alt="html logo" />
              <p>VS Code</p>
            </div>
            <div className="editor">
              <Image src={figma} width={75} height={75} alt="html logo" />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
