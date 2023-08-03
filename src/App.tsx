import "./App.css";
import About from "./components/About";
import Animating from "./components/Animating";
import Hidden from "./components/Hidden";
import NavBar from "./components/NavBar";
import { CursorProvider } from "./context/CursorContext";
import { HeightProvider } from "./context/HeightContext";

function App() {
  return (
    <div>
      <CursorProvider>
        <HeightProvider>
          <NavBar name="nav" />
          <Animating name="animating" />
          <About name="about" />

          <Hidden />
        </HeightProvider>
      </CursorProvider>
    </div>
  );
}

export default App;
