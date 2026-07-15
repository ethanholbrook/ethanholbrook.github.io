// filepath: /workspaces/ethanholbrook.github.io/src/App.jsx
import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Site-wide chrome loads eagerly; each route is code-split so a visitor only
// downloads the JavaScript for the page they're on (e.g. the Dashboard's
// charting library is no longer part of the initial homepage bundle).
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FixedFrame from "./Layout/FixedFrame";

const Home = lazy(() => import("./Components/Home"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const Menu = lazy(() => import("./Components/Menu"));
const NationalParks = lazy(() => import("./Components/NationalParks"));
const Yosemite = lazy(() => import("./Components/parks/Yosemite"));
const Zion = lazy(() => import("./Components/parks/Zion"));

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

const primaryColor = "#1f4a36";
const secondaryColor = "#3f8f68";

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Ethan Holbrook</title>
        <meta name="description" content="Ethan Holbrook's personal website." />
      </Helmet>

      <div id="main">
        {/* Fixed site-wide header (be sure it has id="site-header" in Header.jsx) */}
        <Header />

        {/* Content wrapper that spaces content between fixed header & footer */}
        <FixedFrame>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home title={siteProps.title} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/national-parks" element={<NationalParks />} />
              <Route path="/parks/yosemite" element={<Yosemite />} />
              <Route path="/parks/zion" element={<Zion />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/resume" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </FixedFrame>

        {/* Fixed site-wide footer (be sure it has id="site-footer" in Footer.jsx) */}
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
