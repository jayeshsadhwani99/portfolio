import { gsap } from "gsap";
import SplitType from "split-type";

export function useTextAnimate(selector: string) {
  const text = new SplitType(selector, { types: "words, chars" });
  gsap.from(text.chars, {
    duration: 0.03,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });

  return;
}
