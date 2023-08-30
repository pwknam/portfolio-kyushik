"use client";

import Image from "next/image";
import "/Users/kyushiknam/Desktop/code/portfolio/components/Project/ProjectStyles.css";
import digitalArtArchive from "/Users/kyushiknam/Desktop/code/portfolio/public/projects/daa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Project = () => {
  const projects = [
    {
      solution: "SaaS",
      title: "Digital Art Archive",
      description:
        "An art archive for artists to upload images of their artwork, organize artworks by their respective series or collection, and keep track of important details and history of artworks.",

      technologies:
        "Next.js, TypeScript, Prisma ORM, Supabase - PostgreSQL, TailwindCSS",
      codeLink: "https://github.com/pwknam/digital-art-archive",
      demoLink: "https://digital-art-archive.vercel.app/",
      imagePath: digitalArtArchive,
    },
  ];

  return (
    <div id="projects-section-wrapper">
      <div id="projects-section-header">
        <p className="projects-section-title">Recent Personal Projects</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <div className="project-words">
              <p className="project-solution">{project.solution}</p>
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies-div">
                <p className="built-with">Built with:</p>
                <p className="project-technologies">{project.technologies}</p>
              </div>
              <div className="link-div">
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="project-code-link"
                >
                  GitHub
                </a>
                <div>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
              <div className="link-div">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="project-demo-link"
                >
                  Live Site
                </a>
                <div>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
            <div className="project-image">
              <Image
                src={project.imagePath}
                alt={"${project.title} screenshot"}
                width={600}
                // height={300}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
