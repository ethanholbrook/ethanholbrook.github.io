/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Dashboard from "./Components/Dashboard";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed as properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
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
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        <Routes>
          {/* Root route - displays Home, About, and Portfolio as before */}
          <Route
            path="/"
            element={
              <>
                <Home name={siteProps.name} title={siteProps.title} />
                <About />
                <Portfolio />
              </>
            }
          />
          
          {/* New Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
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
