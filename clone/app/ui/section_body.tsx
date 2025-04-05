import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Section_body() {
  return (
    <section className="relative bg-white pt-32">
      <div className="w-[90vw] max-w-[64rem] mx-auto pb-72">
        <p className="text-3xl leading-12">
          Creative with a passion for digital product design and low code
          development. A background in the music industry further enriches my
          perspective. I thrive on collaborating with individuals who bring
          forth innovative ideas.
        </p>
      </div>
      <BgText />
    </section>
  );
}

const BgText = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useScroll({ target: ref });
  const [v, setV] = useState(-20);

  const animeV = useTransform(scroll.scrollYProgress, [-20, 20], [0, 1]);
  return (
    <div className="sticky top-20 left-0" ref={ref}>
      <div className="flex flex-col items-center text-[13rem] leading-49 tracking-tight">
        <motion.h1>recent projects</motion.h1>
        <motion.h1>recent projects</motion.h1>
      </div>
    </div>
  );
};
