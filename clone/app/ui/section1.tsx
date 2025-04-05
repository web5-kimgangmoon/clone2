import {
  TBLetterA,
  TBLetterD,
  TBLetterE,
  TBLetterI,
  TBLetterL,
  TBLetterN,
  TBLetterO,
  TBLetterP,
  TBLetterS,
  TBLetterT,
} from "@icongo/tb";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import checkDesktop from "../lib/checkDesktop";
import Image from "next/image";

export default function Section1() {
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  const isDesk = useMemo(() => checkDesktop(breakpoint), [breakpoint]);
  return (
    <section className="relative flex flex-col justify-end items-center w-full h-screen text-5xl text-white bg-title-section overflow-hidden">
      <div className="absolute top-4 left-0 block sm:hidden w-max h-max">
        <Image
          src={"/logo.png"}
          alt="logo"
          // fill
          width={200}
          height={250}
          style={{ objectFit: "contain" }}
          className="h-13"
        />
      </div>
      <motion.article
        className="relative hidden sm:block w-full h-[10vw] px-[23%] overflow-hidden z-11"
        style={{ translateY: "4vw" }}
        animate={
          isDesk
            ? {
                translateY: [0, "-3vw", "4vw"],
              }
            : { translateY: "4vw" }
        }
        transition={
          isDesk
            ? {
                times: [0, 0.5, 1],
                duration: 0.4,
                delay: 0.4,
                ease: "circInOut",
              }
            : { duration: 0 }
        }
      >
        <motion.div
          className="flex justify-center w-full h-full max-w-[100vw] -translate-y-full"
          initial={{ translateY: "10vw" }}
          animate={
            isDesk
              ? {
                  translateY: [0, "10vw"],
                  color: ["rgba(77, 77, 77,1)", "rgba(255,255,255,1)"],
                }
              : { translateY: "10vw", color: "rgba(255,255,255,1)" }
          }
          transition={
            isDesk
              ? {
                  color: { times: [0, 1], delay: 1.4, duration: 0.3 },
                  translateY: { times: [0, 1], duration: 0.15 },
                }
              : { duration: 0 }
          }
        >
          <TBLetterD className="w-full h-full" />
          <TBLetterA className="w-full h-full" />
          <TBLetterN className="w-full h-full" />
          <TBLetterI className="w-full h-full" />
          <TBLetterE className="w-full h-full" />
          <TBLetterL className="w-full h-full" />
        </motion.div>
      </motion.article>
      <motion.article
        className="relative z-20 hidden sm:block w-full h-[10vw] overflow-hidden"
        initial={{ translateY: "2vw" }}
        animate={
          isDesk
            ? {
                translateY: [0, "4vw", "2vw"],
              }
            : { translateY: "2vw" }
        }
        transition={
          isDesk
            ? {
                times: [0, 0.5, 1],
                duration: 0.4,
                delay: 0.85,
                ease: "circInOut",
              }
            : { duration: 0 }
        }
      >
        <motion.div
          className="flex w-full h-full -translate-y-full"
          initial={{ translateY: "10vw" }}
          animate={
            isDesk
              ? {
                  translateY: [0, "10vw"],
                  color: ["rgba(77, 77, 77,1)", "rgba(255,255,255,1)"],
                }
              : { translateY: "10vw", color: "rgba(255,255,255,1)" }
          }
          transition={
            isDesk
              ? {
                  translateY: { times: [0, 1], duration: 0.15, delay: 0.2 },
                  color: { times: [0, 1], delay: 1.4, duration: 0.3 },
                }
              : { duration: 0 }
          }
        >
          <TBLetterS className="w-full h-full" />
          <TBLetterT className="w-full h-full" />
          <TBLetterO className="w-full h-full" />
          <TBLetterO className="w-full h-full" />
          <TBLetterP className="w-full h-full" />
          <TBLetterE className="w-full h-full" />
          <TBLetterN className="w-full h-full" />
          <TBLetterD className="w-full h-full" />
          <TBLetterA className="w-full h-full" />
          <TBLetterA className="w-full h-full" />
          <TBLetterL className="w-full h-full" />
        </motion.div>
      </motion.article>
      <motion.div
        className="absolute bottom-0 left-[15%] right-[unset] sm:left-[unset] sm:right-[10vw] w-[90%] max-w-[30rem] sm:w-[30rem] aspect-[2/3] grayscale"
        animate={isDesk ? { zIndex: [0, 11] } : { zIndex: 10 }}
        transition={isDesk ? { duration: 0.15, delay: 1.4 } : { duration: 0 }}
      >
        <svg viewBox="0 0 200 300">
          <path
            d="M0 0 L150 0 C 150 0, 200 0, 200 50 L200 50 L200 300 L 0 300 L0 0 Z"
            fill="green"
          />
        </svg>
      </motion.div>
      <motion.div
        className="hidden md:block absolute top-0 left-0 w-full h-screen bg-white z-10"
        animate={isDesk ? { translateY: "-100vh" } : { translateY: "0vh" }}
        transition={
          isDesk
            ? { duration: 0.5, delay: 1.4, ease: "easeInOut" }
            : { duration: 0 }
        }
      />
    </section>
  );
}
