import { createContext, useState, ReactNode } from "react";

interface HeightContextProps {
  heights: Record<string, number>;
  setHeight: (key: string, height: number) => void;
}

export const HeightContext = createContext<HeightContextProps | undefined>(
  undefined
);

interface HeightProviderProps {
  children: ReactNode;
}

export function HeightProvider({ children }: HeightProviderProps) {
  const [heights, setHeights] = useState<Record<string, number>>({});

  const setHeight = (key: string, height: number) => {
    setHeights((prevHeights) => ({ ...prevHeights, [key]: height }));
  };

  return (
    <HeightContext.Provider value={{ heights, setHeight }}>
      {children}
    </HeightContext.Provider>
  );
}
