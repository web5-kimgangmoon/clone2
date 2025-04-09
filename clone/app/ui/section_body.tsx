import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import {
  motion,
  useAnimate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { MouseEventHandler, useCallback, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import checkDesktop from "../lib/checkDesktop";
import { animationTime } from "../lib/globalValue";
import useLineDivde from "../hooks/useLineDivde";

export default function Section_body() {
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  const isDesk = useMemo(() => checkDesktop(breakpoint), [breakpoint]);
  return (
    <motion.section
      className="relative bg-white block md:hidden"
      animate={isDesk ? { display: ["none", "block"] } : { display: "block" }}
      transition={
        isDesk
          ? { times: [0, 1], duration: 0, delay: animationTime }
          : { duration: 0 }
      }
    >
      <Paragram />
      <BgText />
      <Projects />
      <div className="pb-20 sm:pb-36"></div>
    </motion.section>
  );
}

const Paragram = () => {
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  // const isDesk = useMemo(() => {
  //   return checkDesktop(breakpoint) && breakpoint !== "md";
  // }, [breakpoint]);

  const [scope, animate] = useAnimate<HTMLParagraphElement>();
  const ref = useRef<HTMLDivElement | null>(null);
  useLineDivde(
    "Creative with a passion for digital product design and low code development. A background in the music industry further enriches my perspective. I thrive on collaborating with individuals who bring forth innovative ideas.",
    ref,
    breakpoint,
    scope
  );

  const scroll = useScroll({ target: ref });
  scroll.scrollYProgress.on("change", (l) => {
    if (
      l < 1 &&
      scope.current.getElementsByTagName("span").length !== 0 &&
      scope.animations.length === 0
    ) {
      const spans = ref.current!.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        const target = spans.item(i)!;
        animate(
          target,
          {
            translate: "0px 0%",
            opacity: 1,
          },
          {
            duration: 0.3,
            delay: 0.3 * i,
          }
        );
      }
    }
  });
  return (
    <div
      className="w-[90vw] max-w-[64rem] mx-auto pt-32 pb-72"
      ref={scope}
      id="about"
    >
      <p
        className="text-2xl xs:text-sm sm:text-3xl sm:leading-12 md:text-wrap"
        ref={ref}
      >
        <span className="opacity-0">
          Creative with a passion for digital product design and low code
          development. A background in the music industry further enriches my
          perspective. I thrive on collaborating with individuals who bring
          forth innovative ideas.
        </span>
      </p>
    </div>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scroll.scrollYProgress, [0, 1], ["0rem", "-3rem"]);
  const y_reverse = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ["0rem", "3rem"]
  );
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  const isPhone = useMemo(
    () => breakpoint === "xs" || breakpoint === "xxs",
    [breakpoint]
  );

  const springY = useSpring(y, { bounce: 0 });
  const springY_reverse = useSpring(y_reverse, { bounce: 0 });
  return (
    <div
      className="relative z-1 flex flex-col xs:flex-row gap-5 w-[90vw] max-w-[64rem] mx-auto"
      ref={ref}
    >
      <motion.div
        className={`flex flex-col gap-5 w-full pt-[3rem]`}
        style={{
          translateY: isPhone ? 0 : springY,
        }}
      >
        <Item
          img={"#"}
          href={"#"}
          t={"Design & Development"}
          p={"Website for the trendiest café in Arnhem: Jinbo Cafe"}
        />
        <Item
          img={"#"}
          href={"#"}
          t={"Development"}
          p={"Development for Klauw Collective Community"}
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 w-full"
        style={{
          translateY: isPhone ? 0 : springY_reverse,
        }}
      >
        <Item
          img={"#"}
          href={"#"}
          t={"Design & Development"}
          p={"Onepager for platinum dj & producer Justin Mylo"}
        />
        <Item
          img={"#"}
          href={"#"}
          t={"Design & Development"}
          p={"Website for photobooth rental company"}
        />
      </motion.div>
    </div>
  );
};

const Item = ({
  t,
  p,
  href,
  img,
}: {
  t: string;
  p: string;
  href: string;
  img: string;
}) => {
  const vx = useMotionValue(0);
  const vy = useMotionValue(0);
  const x = useTransform(vx, [-1, 0, 1], [-30, 0, 30]);
  const y = useTransform(vy, [-1, 0, 1], [-30, 0, 30]);

  const springX = useSpring(x, { bounce: 0 });
  const springY = useSpring(y, { bounce: 0 });

  const imgRef = useRef<HTMLImageElement | null>(null);
  const onMouseMove: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
    const imgBound = imgRef.current!.getClientRects()[0];
    const centerX = imgBound.width / 2;
    const centerY = imgBound.height / 2;

    const x = e.clientX - centerX - imgBound.left;
    const y = e.clientY - centerY - imgBound.top;

    vx.set(x / centerX);
    vy.set(y / centerY);
  }, []);

  const onMouseOut: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
    vx.jump(0);
    vy.jump(0);
  }, []);

  return (
    <motion.a
      className="relative w-full group"
      href={href}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      <div className="relative">
        <div className="w-full aspect-[4/5] overflow-hidden bg-red-300 rounded-2xl">
          <Image
            className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
            src={"/" + img}
            alt={img}
            width={504}
            height={630}
            style={{ objectFit: "contain" }}
            ref={imgRef}
          />
        </div>
        <motion.div
          className="absolute top-[calc(50%-60px)] left-[calc(50%-60px)] hidden md:flex justify-center items-center w-[120px] h-[120px] bg-gray-200/50 rounded-full scale-0 group-hover:scale-100 transition-[scale] duration-500"
          style={{ x: springX, y: springY }}
        >
          <ArrowUpRightIcon className="w-1/4 h-1/4" strokeWidth={2.5} />
        </motion.div>
      </div>
      <h3 className="py-3">
        <div className="px-3 py-1 bg-gray-100 w-max rounded-2xl text-base">
          {t}
        </div>
      </h3>
      <p className="text-2xl sm:text-[2rem] sm:leading-10">{p}</p>
    </motion.a>
  );
};

const BgText = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = useScroll({
    target: ref,
    offset: [`-10% end`, "end -5%"],
  });

  const x = useTransform(scroll.scrollYProgress, [0, 1], ["20%", "-20%"]);
  const reverse_x = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ["-20%", "20%"]
  );
  const springX = useSpring(x, { bounce: 0 });
  const springx_reverse = useSpring(reverse_x, { bounce: 0 });
  return (
    <div
      className="sticky top-[10%] left-0 pb-48 xs:pb-64 md:pb-0 text-zinc-100 overflow-hidden"
      ref={ref}
    >
      <div
        className="flex flex-col text-[4rem] md:text-[13rem] leading-16 xs:leading-6 md:leading-45 tracking-tight text-nowrap"
        id="work"
      >
        <motion.h1 style={{ translateX: springX }} className="text-left">
          recent projects
        </motion.h1>
        <motion.h1
          style={{ translateX: springx_reverse }}
          className="text-right"
        >
          recent projects
        </motion.h1>
      </div>
    </div>
  );
};
