import { RefObject, useEffect } from "react";

export default function (
  str: string,
  ref: RefObject<HTMLDivElement | null>,
  isDesk: boolean
) {
  useEffect(() => {
    console.log(ref.current?.clientWidth);
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

        line.style.transitionDelay = `${200 * lineIdx}ms`;
        line.style.opacity = "0";
        line.style.translate = "0px 100%";
        line.style.transitionDuration = "0.2s";
        line.style.transitionTimingFunction = "ease-out";

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
        // if (idx === words.length) {
        //   line.style.display = "inline";
        //   ref.current!.style.textWrap = "wrap";
        // }
      }
    }
  }, [isDesk]);
}
