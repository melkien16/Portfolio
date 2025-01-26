import { Fragment } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import About from "./components/Main/About";
import Hero from "./components/Main/Hero";
import Experience from "./components/Main/Ex"; // Fixed spelling
import Skills from "./components/Main/Skills";
import Contact from "./components/Main/Contact";
import TestimonialsSection from "./components/Main/TestimonialsSection";
import ProjectsSection from "./components/Main/ProjectsSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/projects" element={<ProjectsSection />} />
        {/* <Route path="/testimonials" element={<TestimonialsSection />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/experience" element={<Experience />} />{" "} */}
        {/* Fixed spelling */}
      </Routes>
      <Footer /> {/* Moved outside of Routes */}
    </Router>
  );
}

export default App;
