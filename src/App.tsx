/* eslint-disable @typescript-eslint/no-explicit-any */
import Lenis from "@studio-freight/lenis";
import "./App.css";
import About from "./components/About";
import Animating from "./components/Animating";
import Hidden from "./components/Hidden";
import NavBar from "./components/NavBar";
import WhatIDo from "./components/WhatIDo";
import { CursorProvider } from "./context/CursorContext";
import { HeightProvider } from "./context/HeightContext";
import Experience from "./components/Experience";

function App() {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div>
      <CursorProvider>
        <HeightProvider>
          <NavBar name="nav" />
          <Animating name="animating" />
          <About name="about" />
          <WhatIDo name="what-i-do" />
          <Experience name="experience" />
          <Hidden />
        </HeightProvider>
      </CursorProvider>
    </div>
  );
}

export default App;
