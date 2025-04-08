import { RefObject, useEffect } from "react";
import checkDesktop from "../lib/checkDesktop";
import { AnimationScope } from "motion";

export default function (
  str: string,
  ref: RefObject<HTMLDivElement | null>,
  breakpoint: string,
  scope: AnimationScope<HTMLParagraphElement>
) {
  useEffect(() => {
    const isDesk = checkDesktop(breakpoint) && breakpoint !== "md";
    if (!isDesk) {
      ref.current!.style.textWrap = "no-wrap";
      ref.current!.innerText = "";
      const words = str.split(" ");

      let idx = 0;
      let lineIdx = 0;

      while (idx < words.length) {
        const line = document.createElement("span");
        line.style.width = "max-content";
        line.style.display = "block";

        if (scope?.animations && scope.animations.length === 0) {
          line.style.opacity = "0";
          line.style.translate = "0px 70%";
        }

        ref.current!.appendChild(line);
        while (idx < words.length) {
          if (line.innerText === "") line.innerText += words[idx];
          else line.innerText += " " + words[idx];
          if (line.clientWidth > ref.current!.clientWidth) {
            line.innerHTML = line.innerHTML.replace(" " + words[idx], " ");
            // line.style.display = "inline";
            lineIdx++;
            break;
          } else {
            idx++;
          }
        }
        line.style.width = "";
        // if (idx === words.length) {
        //   line.style.display = "inline";
        //   ref.current!.style.textWrap = "wrap";
        // }
      }
    } else {
      ref.current!.innerHTML = str;
    }
  }, [breakpoint]);
}
