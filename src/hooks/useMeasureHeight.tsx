/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react";
import { HeightContext } from "../context/HeightContext";

export function useMeasureHeight(key: string) {
  const { setHeight } = useContext(HeightContext)!;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(key, ref.current.offsetHeight);
    }

    const handleResize = () => {
      if (ref.current) {
        setHeight(key, ref.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [key, ref]);

  return ref;
}
