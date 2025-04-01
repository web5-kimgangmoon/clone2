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
import { animate } from "motion";
import { inertia, motion } from "motion/react";
import Image from "next/image";

export default function Section1() {
  return (
    <>
      <section className="relative flex flex-col justify-end items-center w-full h-screen text-5xl text-white bg-title-section overflow-hidden">
        <article className="sm:flex hidden justify-center w-full max-w-[100vw] h-[10vw] px-[23%] translate-y-[45px]">
          <TBLetterD className="w-full h-full" />
          <TBLetterA className="w-full h-full" />
          <TBLetterN className="w-full h-full" />
          <TBLetterI className="w-full h-full" />
          <TBLetterE className="w-full h-full" />
          <TBLetterL className="w-full h-full" />
        </article>
        <article className="sm:flex hidden w-full h-[10vw] translate-y-[45px] z-10">
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
        </article>
        <div className="absolute bottom-0 left-[15%] sm:left-[85%] translate-x-[50%] sm:translate-x-[0%] w-[90%] max-w-[30rem] sm:w-[30rem] aspect-[2/3] grayscale">
          <svg viewBox="0 0 200 300">
            <path
              d="M0 0 L150 0 C 150 0, 200 0, 200 50 L200 50 L200 300 L 0 300 L0 0 Z"
              fill="green"
            />
          </svg>
        </div>
      </section>
      <Curtain />
    </>
  );
}

// const Curtain = () => {
//   return (
//     <motion.div
//       className={
//         "fixed top-0 left-0 w-full h-screen bg-slate-300 overflow-hidden"
//       }
//       initial={{ height: "100%" }}
//       animate={{ height: 0 }}
//       transition={{ duration: 0.5, delay: 2, ease: "easeIn" }}
//     >
//       <div className="flex flex-col justify-end items-center w-full h-[100vh] text-5xl">
//         <div className="flex justify-center w-full max-w-[100vw] h-[10vw] px-[23%]">
//           <TBLetterD className="w-full h-full" />
//           <TBLetterA className="w-full h-full" />
//           <TBLetterN className="w-full h-full" />
//           <TBLetterI className="w-full h-full" />
//           <TBLetterE className="w-full h-full" />
//           <TBLetterL className="w-full h-full" />
//         </div>
//         <div className="flex w-full h-[10vw]">
//           <TBLetterS className="w-full h-full" />
//           <TBLetterT className="w-full h-full" />
//           <TBLetterO className="w-full h-full" />
//           <TBLetterO className="w-full h-full" />
//           <TBLetterP className="w-full h-full" />
//           <TBLetterE className="w-full h-full" />
//           <TBLetterN className="w-full h-full" />
//           <TBLetterD className="w-full h-full" />
//           <TBLetterA className="w-full h-full" />
//           <TBLetterA className="w-full h-full" />
//           <TBLetterL className="w-full h-full" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const Curtain = () => {
  return (
    <motion.div
      className={
        "fixed top-0 left-0 z-10 w-full h-screen bg-white overflow-hidden"
      }
      initial={{ height: "100%" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.5, delay: 2.5, ease: "easeIn" }}
    >
      <div className="flex flex-col justify-end items-center w-full h-[100vh] text-5xl">
        <motion.div
          className="w-full h-[10vw] px-[23%] overflow-hidden"
          initial={{ translateY: 0 }}
          animate={{
            translateY: [0, -45, 45],
            transition: { times: [0, 0.5, 1], duration: 0.3, delay: 1 },
          }}
        >
          <motion.div
            className="flex justify-center w-full h-full max-w-[100vw] -translate-y-full"
            initial={{ translateY: 0 }}
            animate={{
              translateY: "10vw",
              transition: { duration: 0.3 },
            }}
          >
            <TBLetterD className="w-full h-full" />
            <TBLetterA className="w-full h-full" />
            <TBLetterN className="w-full h-full" />
            <TBLetterI className="w-full h-full" />
            <TBLetterE className="w-full h-full" />
            <TBLetterL className="w-full h-full" />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full h-[10vw] overflow-hidden"
          initial={{ translateY: 0 }}
          animate={{
            translateY: [0, 90, 45],
            transition: { times: [0, 0.5, 1], duration: 0.3, delay: 1.5 },
          }}
        >
          <motion.div
            className="flex w-full h-full -translate-y-full"
            initial={{ translateY: 0 }}
            animate={{
              translateY: "10vw",
              transition: { duration: 0.3, delay: 0.5 },
            }}
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
        </motion.div>
      </div>
    </motion.div>
  );
};

// const Curtain = () => {
//   return (
//     <div
//       className={
//         "fixed top-0 left-0 w-full h-screen bg-white overflow-hidden animate-curtainUp"
//       }
//     >
//       <div className="flex flex-col justify-end items-center w-full h-[100vh] text-5xl">
//         <div className="w-full h-[10vw] px-[23%] overflow-hidden animate-upDown_push">
//           <div className="flex justify-center w-full h-full max-w-[100vw] -translate-y-full animate-titleDown">
//             <TBLetterD className="w-full h-full" />
//             <TBLetterA className="w-full h-full" />
//             <TBLetterN className="w-full h-full" />
//             <TBLetterI className="w-full h-full" />
//             <TBLetterE className="w-full h-full" />
//             <TBLetterL className="w-full h-full" />
//           </div>
//         </div>
//         <div className="w-full h-[10vw] overflow-hidden animate-upDown_pushed">
//           <div className="flex w-full h-full -translate-y-full animate-titleDown2">
//             <TBLetterS className="w-full h-full" />
//             <TBLetterT className="w-full h-full" />
//             <TBLetterO className="w-full h-full" />
//             <TBLetterO className="w-full h-full" />
//             <TBLetterP className="w-full h-full" />
//             <TBLetterE className="w-full h-full" />
//             <TBLetterN className="w-full h-full" />
//             <TBLetterD className="w-full h-full" />
//             <TBLetterA className="w-full h-full" />
//             <TBLetterA className="w-full h-full" />
//             <TBLetterL className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
