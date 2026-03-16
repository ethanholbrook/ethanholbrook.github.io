import React from "react";

const cvFile = new URL("../../EthanHolbrook_CV.pdf", import.meta.url).href;
const resumeFile = new URL("../../EthanHolbrook_Resume.pdf", import.meta.url).href;

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Purdue University, West Lafayette, IN",
    period: "2021 - Present",
    bullets: [
      "Led atomistic simulations of shock-driven jetting in multi-component high explosives, connecting shock strength, crystallography, and interface structure to jet formation and heating behavior.",
      "Built parsing and validation workflows for simulation inputs, including systematic checks on LLM-generated scripts for autonomous molecular dynamics workflows.",
      "Investigated high-strain-rate deformation in aluminum single crystals using molecular dynamics and OVITO to characterize defects and plastic response.",
    ],
  },
  {
    role: "LLNL Intern (CCMS/MaCI)",
    org: "Lawrence Livermore National Laboratory, Livermore, CA",
    period: "May-Aug. 2022-2024",
    bullets: [
      "Performed force-field validation using equation-of-state and vibrational spectra analyses to establish fidelity across thermodynamic and molecular-response metrics.",
      "Combined validated TNT and HMX force fields into a unified framework for atomistic simulation of Octol energetic materials.",
      "Developed LAMMPS workflows for constructing arbitrary molecular-crystal interfaces.",
    ],
  },
  {
    role: "AFRL RXAP SOCHE Intern",
    org: "Air Force Research Laboratory, Dayton, OH",
    period: "2020-2021",
    bullets: [
      "Supported setup of a laser-heated pedestal growth lab by organizing equipment and designing custom lab components in SolidWorks.",
      "Measured thin-film optical properties with spectroscopic ellipsometry and refined YAG fiber polishing procedures.",
    ],
  },
];

const publications = [
  {
    title: "Modeling Framework to Predict Melting Dynamics at Microstructural Defects in TNT-HMX High Explosive Composites",
    venue: "Journal of Physical Chemistry C (2025)",
    detail: "Holbrook et al. DOI: 10.1021/acs.jpcc.5c02261",
  },
  {
    title: "High strain rate deformation mechanisms in fcc alloys as a function of load triaxiality",
    venue: "Physical Review Materials (2025)",
    detail: "Li, Mishra, Holbrook, Ezenwata, Strachan. DOI: 10.1103/ljzt-x6k4",
  },
  {
    title: "GPT-4 as an interface between researchers and computational software: improving usability and reproducibility",
    venue: "arXiv preprint (2023)",
    detail: "Verduzco, Holbrook, Strachan. arXiv:2310.11458",
  },
  {
    title: "Molecular Simulations of Shock Interactions with Microstructural Defects in a Two-Component High Explosive System",
    venue: "SCCM 2025",
    detail: "Conference presentation.",
  },
];

const education = [
  {
    degree: "Doctor of Philosophy, Materials Engineering",
    school: "Purdue University, West Lafayette, IN",
    period: "2021-2026",
    note: "Computational Engineering Concentration",
  },
  {
    degree: "Bachelor of Science, Materials Science and Engineering",
    school: "Wright State University, Dayton, OH",
    period: "2017-2021",
    note: "Mathematics Minor",
  },
];

const skills = [
  "Python, LaTeX, Bash, MATLAB, Fortran90",
  "LAMMPS, Quantum ESPRESSO, OVITO, Avogadro",
  "HPC, SLURM, Git",
  "TensorFlow/Keras, PyTorch, Pandas, Scikit-learn, Plotly",
  "SolidWorks, LabVIEW, Microsoft Office Suite",
];

const activities = [
  "Organizer: nanoHUB AI 4 Science Challenge (2024)",
  "Poster Session Coordinator: MaRDA Annual Meeting (2024)",
  "Graduate Mentor: Purdue Undergraduate Research Programs (2025)",
  "Graduate Teaching Assistant: MSE 230 Structure and Properties of Materials (2023)",
];

const Resume = () => {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <section className="resume-hero">
          <p className="resume-kicker">Professional Snapshot</p>
          <h1 className="resume-title">Ethan Wayne Holbrook</h1>
          <p className="resume-summary">
            PhD candidate in Materials Engineering focused on atomistic modeling, high-performance
            simulation workflows, and automation for reproducible computational science.
          </p>
          <p className="resume-summary">
            West Lafayette, IN | ethanwholbrook@gmail.com | +1 (937) 251-5578
          </p>
          <div className="resume-actions">
            <a href={cvFile} target="_blank" rel="noreferrer" className="resume-btn resume-btn-primary">
              View CV
            </a>
            <a href={cvFile} download="EthanHolbrook_CV.pdf" className="resume-btn resume-btn-secondary">
              Download CV
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="resume-btn resume-btn-secondary"
            >
              View Resume
            </a>
            <a
              href={resumeFile}
              download="EthanHolbrook_Resume.pdf"
              className="resume-btn resume-btn-secondary"
            >
              Download Resume
            </a>
          </div>
          <nav className="resume-jump" aria-label="Resume section navigation">
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
          </nav>
        </section>

        <div className="resume-grid">
          <section className="resume-card" id="experience">
            <h2>Experience</h2>
            <div className="resume-stack">
              {experience.map((item) => (
                <article className="resume-item" key={item.role + item.org}>
                  <div className="resume-item-head">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="resume-org">{item.org}</p>
                  <ul>
                    {item.bullets.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-card" id="publications">
            <h2>Selected Publications</h2>
            <div className="resume-stack">
              {publications.map((item) => (
                <article className="resume-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="resume-org">{item.venue}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-card" id="education">
            <h2>Education</h2>
            <div className="resume-stack">
              {education.map((item) => (
                <article className="resume-item" key={item.degree}>
                  <div className="resume-item-head">
                    <h3>{item.degree}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="resume-org">{item.school}</p>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="resume-side">
            <section className="resume-card" id="skills">
              <h2>Technical Skills</h2>
              <ul className="resume-skill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="resume-card">
              <h2>Activities and Teaching</h2>
              <ul className="resume-skill-list">
                {activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="resume-card">
              <h2>CV Preview</h2>
              <iframe src={cvFile} title="Ethan Holbrook CV" className="resume-pdf-frame" />
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Resume;
