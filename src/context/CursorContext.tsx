// CursorContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";

interface CursorContextType {
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const value = {
    hovered,
    setHovered,
  };

  function mouseMoveHandler(e: MouseEvent) {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    updatePosition();
  }

  function scrollHandler() {
    updatePosition();
  }

  function updatePosition() {
    const x = window.scrollX + mouse.current.x;
    const y = window.scrollY + mouse.current.y;

    document.documentElement.style.setProperty("--cursor-x", `${x}px`);
    document.documentElement.style.setProperty("--cursor-y", `${y}px`);
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

  useEffect(() => {
    if (hovered) {
      document.documentElement.style.setProperty("--cursor-size", "480px");
    } else {
      document.documentElement.style.setProperty("--cursor-size", "32px");
    }
  }, [hovered]);

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};
