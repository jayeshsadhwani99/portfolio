/* eslint-disable @typescript-eslint/no-explicit-any */
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { CursorProvider } from "./context/CursorContext";
import { HeightProvider } from "./context/HeightContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Project from "./pages/project";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<Project />} />
          </Routes>
        </HeightProvider>
      </CursorProvider>
    </div>
  );
}

export default App;
