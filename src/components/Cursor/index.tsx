import { useEffect, useRef } from "react";
import { useCursor } from "../../hooks/useCursor";
import "../../index.css";

const Cursor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const { hovered } = useCursor();

  function mouseMoveHandler(e: MouseEvent) {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    updatePosition();
  }

  function scrollHandler() {
    updatePosition();
  }

  function updatePosition() {
    console.log("updating....");
    const cursor = ref.current;
    const x = window.scrollX + mouse.current.x;
    const y = window.scrollY + mouse.current.y;

    console.log(x, y);
    if (cursor) {
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      document.documentElement.style.setProperty("--cursor-x", `${x}px`);
      document.documentElement.style.setProperty("--cursor-y", `${y}px`);
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={`cursor ${hovered ? "hovered" : ""}`} ref={ref}></div>;
};

export default Cursor;
