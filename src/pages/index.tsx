import About from "../components/About";
import Animating from "../components/Animating";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hidden from "../components/Hidden";
import History from "../components/History";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import WhatIDo from "../components/WhatIDo";

function Home() {
  return (
    <div>
      <NavBar name="nav" />
      <Animating name="animating" />
      <About name="about" />
      <WhatIDo name="what-i-do" />
      <Experience name="experience" />
      <History name="history" />
      <Projects name="projects" />
      <Contact name="contact" />
      <Footer />
      <Hidden />
    </div>
  );
}

export default Home;
