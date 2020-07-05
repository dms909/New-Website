import React from "react";
import Header from "./components/Sections/Header";
import AboutMe from "./components/Sections/AboutMe";
import PersonalProjects from "./components/Sections/PersonalProjects";
import EducationExperienceSelector from "./components/Sections/EducationExperienceSelector";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <EducationExperienceSelector />
      <PersonalProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
