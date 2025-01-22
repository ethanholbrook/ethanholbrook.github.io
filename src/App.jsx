// filepath: /workspaces/ethanholbrook.github.io/src/App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Menu from "./Components/Menu";
import NationalParks from "./Components/NationalParks";
import Yosemite from "./Components/parks/Yosemite";
import Zion from "./Components/parks/Zion";
import Resume from "./Components/Resume";

import "./styles.css";

const siteProps = {
  name: "Ethan Holbrook",
  title: "Atomistic Modeler & Software Developer",
  email: "ethanwholbrook@gmail.com",
  gitHub: "ethanholbrook",
  instagram: "ethanwholbrook",
  linkedIn: "ethanholbrook",
  medium: "",
  twitter: "ethanwholbrook",
  youTube: "",
  scholar: "EevfYT0AAAAJ",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Ethan Holbrook</title>
        <meta name="description" content="Ethan Holbrook's personal website." />
      </Helmet>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home title={siteProps.title} />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/national-parks" element={<NationalParks />} />
          <Route path="/parks/yosemite" element={<Yosemite />} />
          <Route path="/parks/zion" element={<Zion />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer
          {...siteProps}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </div>
    </Router>
  );
};

export default App;