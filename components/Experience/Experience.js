"use client";
import "components/Experience/ExperienceStyles.css";
import { useState } from "react";

export const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(
    "Freelance Software Engineer"
  );

  const companies = [
    {
      name: "Freelance Software Engineer",
      year: "April 2023 - Present",
      title: "Fullstack Software Engineer",
      bulletPoints: [
        "Developing the frontend of a web-application using Next.js (React) and TypeScript.",
        "Building responsive, reusable, and configurable React components.",
        "Enabling login authentication, authorization, and session tokens using NextAuth.js",
        "Programming the checkout user experience for users to add items to the cart and checkout with API.",
      ],
    },
    {
      name: "The Wound Care Clinic",
      year: "September 2021 - March 2022",
      title: "Innovation Designer (Thesis Capstone)",
      bulletPoints: [
        "Created a patient-centered packet that improved adherence to treatment by 20% among clinical patients with type 2 diabetes.",
        "Constructed a design criterion by conducting 14 in-person interviews with patients and healthcare providers.",
        "Led 4 rounds of iterative concept development and user-testing.",
      ],
    },
    {
      name: "Google",
      year: "September 2021 - December 2021",
      title: "Product Designer (Co-op)",
      bulletPoints: [
        "Designed hi-fidelity wireframes digital financial tools to help financially coping individuals develop financial literacy.",
        "Facilitated collaboration with a team of software engineers, UX researchers, and UX designers from Google to discuss product desirability, feasibility, and viability.",
        "Constructed a design criterion by conducting 25 in-person interviews with target users.",
        "Led 3 rounds of iterative concept development, wireframing, and user-testing.",
      ],
    },
    {
      name: "Michelin",
      year: "July 2017 - June 2019",
      title: "Territory Business Manager",
      bulletPoints: [
        "Managed the multi-channel distribution network of 6 wholesale distribution hubs and 600 retail points of sales in Central California.",
        "Earned Rookie of the Year for largest growth by increasing territory market sales by 5% YoY (Territory: 600K units – valued at $31M).",
        "Developed growth strategies that achieved sales targets and identified business opportunities by conferring with Michelin senior management and wholesale distributors.",
      ],
    },
  ];

  const handleCompanyClick = (companyName) => {
    console.log(companyName);
    setSelectedCompany(companyName);
  };
  return (
    <div id="experience-section">
      <div id="experience-section-title">
        <p>Experience</p>
      </div>
      <div id="experience-wrapper">
        <div className="dates-div">
          <p className="dates">Present</p>
          {/* <p id="dates-arrow">&#8593;</p> */}
          <p className="dates">2017</p>
        </div>
        <div id="company-list">
          {companies.map((company, index) => (
            <div
              className={`company-name ${
                selectedCompany === company.name ? "selected" : ""
              }`}
              onClick={() => handleCompanyClick(company.name)}
              key={index}
            >
              <p className="company-name-p">{company.name}</p>
            </div>
          ))}
        </div>
        <div id="descriptions">
          {companies.map((company, index) => (
            <div
              className={`work-description-wrapper ${
                selectedCompany === company.name ? "active" : "inactive"
              }`}
              key={index}
            >
              {/* <div className="c">
                <p>{company.name}</p>
              </div> */}{" "}
              <div className="title">
                <p>{company.title}</p>
              </div>
              <div className="year">
                <p>{company.year}</p>
              </div>
              <div className="bulletpoints">
                <ul>
                  {company.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
