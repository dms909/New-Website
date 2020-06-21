import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalProjects from "./components/PersonalProjects";
import EducationExperienceSelector from "./components/EducationExperienceSelector";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <EducationExperienceSelector />
      <PersonalProjects />
    </div>
  );
}

export default App;
