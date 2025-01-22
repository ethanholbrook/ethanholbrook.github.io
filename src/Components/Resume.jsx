// filepath: /workspaces/ethanholbrook.github.io/src/Components/Resume.jsx
import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
# Ethan Holbrook

## Experience
- **Job Title** at **Company**
  - Description of job responsibilities and achievements.

## Education
- **Degree** in **Field of Study**
  - University Name, Year of Graduation

## Skills
- Skill 1
- Skill 2
- Skill 3

## Projects
- **Project Title**
  - Description of the project.
`;

const Resume = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Resume;