import React from "react";
import PropTypes from "prop-types";

const profile = new URL("../images/Ethan-Yose-Backpack.jpg?as=webp&width=1920&quality=80", import.meta.url).href;
const cvFile = new URL("../../EthanHolbrook_CV.pdf", import.meta.url).href;
const resumeFile = new URL("../../EthanHolbrook_Resume.pdf", import.meta.url).href;

const focusAreas = [
  {
    title: "Modeling and Simulation",
    text: "Atomistic simulation workflows for energetic and structural materials under extreme conditions.",
  },
  {
    title: "Scientific Software",
    text: "Automation, parsing, and validation pipelines that improve reliability and reproducibility.",
  },
  {
    title: "Data and ML Methods",
    text: "Machine-learning interatomic potentials and data-driven analysis for faster model iteration.",
  },
];

const publications = [
  {
    title:
      "Evaluating LLM-generated code for domain-specific languages: Molecular dynamics with LAMMPS",
    venue: "Computational Materials Science (2026)",
    detail: "Holbrook, Verduzco, Strachan. DOI: 10.1016/j.commatsci.2026.114839",
    url: "https://doi.org/10.1016/j.commatsci.2026.114839",
  },
  {
    title:
      "Modeling Framework to Predict Melting Dynamics at Microstructural Defects in TNT-HMX High Explosive Composites",
    venue: "Journal of Physical Chemistry C (2025)",
    detail: "Holbrook et al. DOI: 10.1021/acs.jpcc.5c02261",
    url: "https://doi.org/10.1021/acs.jpcc.5c02261",
  },
  {
    title: "High strain rate deformation mechanisms in fcc alloys as a function of load triaxiality",
    venue: "Physical Review Materials (2025)",
    detail: "Li, Mishra, Holbrook, Ezenwata, Strachan. DOI: 10.1103/ljzt-x6k4",
    url: "https://link.aps.org/doi/10.1103/ljzt-x6k4",
  },
  {
    title:
      "GPT-4 as an interface between researchers and computational software: improving usability and reproducibility",
    venue: "arXiv preprint (2023)",
    detail: "Verduzco, Holbrook, Strachan. arXiv:2310.11458",
    url: "https://arxiv.org/abs/2310.11458",
  },
];

const Home = ({ title = "" }) => {
  return (
    <section id="home" className="home-landing">
      <div className="home-shell">
        <header className="identity-card">
          <img
            src={profile}
            alt="Ethan Holbrook portrait"
            className="identity-emblem"
            loading="lazy"
          />
          <div className="identity-copy">
            <p className="home-kicker">PhD Candidate at Purdue University</p>
            <h1 className="home-title">Ethan Holbrook</h1>
            <p className="home-tagline">
              {title ||
                "Computational materials scientist building simulation and machine-learning workflows for reliable materials engineering."}
            </p>
            <p className="home-focus">
              <strong>Current Focus:</strong> wrapping dissertation research, finishing publications,
              and preparing for computational R&D and scientific software roles.
            </p>
          </div>
        </header>

        <section className="home-panel">
          <h2 className="home-heading">What I Do</h2>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-panel" id="publications">
          <h2 className="home-heading">Selected Publications</h2>
          <div className="pub-grid">
            {publications.map((item) => (
              <article className="pub-card" key={item.title}>
                <h3>
                  <a href={item.url} target="_blank" rel="noreferrer" className="pub-link">
                    {item.title}
                  </a>
                </h3>
                <p className="pub-venue">{item.venue}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-panel home-cv-panel">
          <h2 className="home-heading">CV and Resume</h2>
          <div className="home-actions">
            <a href={cvFile} target="_blank" rel="noreferrer" className="action-pill">
              View CV
            </a>
            <a href={resumeFile} target="_blank" rel="noreferrer" className="action-pill">
              View Resume
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
