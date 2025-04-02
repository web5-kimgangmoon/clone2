import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function useInitialAnime() {
  useEffect(() => {
    const prevent = (e: Event) => {
      e.preventDefault();
    };
    // window.scrollBy({ behavior: "instant", top: -10000, left: 0 });
    window.addEventListener("scroll", prevent, { passive: false });
    window.addEventListener("wheel", prevent, { passive: false });
    window.addEventListener("touchmove", prevent, { passive: false });
    window.addEventListener("mouseup", prevent, { passive: false });
    window.addEventListener("mousedown", prevent, { passive: false });
    const timer_scroll = setTimeout(() => {
      window.scrollTo(0, 0);
      clearTimeout(timer_scroll);
    }, 2500);
    const timer = setTimeout(() => {
      window.removeEventListener("scroll", prevent);
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("touchmove", prevent);
      window.removeEventListener("mouseup", prevent);
      window.removeEventListener("mousedown", prevent);
      clearTimeout(timer);
    }, 3000);
  }, []);
}
