// filepath: /workspaces/ethanholbrook.github.io/src/Components/NationalParks.jsx
import React from "react";
import { Link } from "react-router-dom";

const parks = [
  { name: "Yosemite", path: "/parks/yosemite" },
  { name: "Zion", path: "/parks/zion" },
  // Add more parks as needed
];

const NationalParks = () => {
  return (
    <div style={{ padding: "20px", marginTop: "60px" }}>
      <h1>National Parks</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {parks.map((park) => (
          <li key={park.name} style={{ margin: "10px 0" }}>
            <Link to={park.path} style={{ fontSize: "24px", textDecoration: "none", color: "blue" }}>
              {park.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NationalParks;