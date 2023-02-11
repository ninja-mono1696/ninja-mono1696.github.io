import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Github from "./components/github/Github";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
// import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Work />
        <Github />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
