import Link from "next/link";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import checkDesktop from "../lib/checkDesktop";
import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  const isDesk = useMemo(() => checkDesktop(breakpoint), [breakpoint]);
  const [isOn, setIsOn] = useState(false);
  return (
    <header>
      <motion.nav
        className="fixed z-[999] md:z-[0] top-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-2 h-14 p-1 bg-zinc-200/50 backdrop-blur-xl text-[1.1rem] text-center rounded-lg"
        initial={{ translateY: 0 }}
        animate={
          isDesk
            ? { translateY: [-100, 0], zIndex: [0, 999] }
            : { translateY: 0 }
        }
        transition={
          isDesk
            ? {
                translateY: { times: [0, 1], duration: 0.5, delay: 1.9 },
                zIndex: { duration: 0 },
              }
            : { duration: 0 }
        }
      >
        <Link
          className={
            "block p-3 hover:bg-neutral-200/50 transition-colors duration-500 rounded-lg"
          }
          href={"#about"}
        >
          About
        </Link>
        <Link
          className={
            "block p-3 hover:bg-neutral-200/50 transition-colors duration-500 rounded-lg"
          }
          href={"#work"}
        >
          Work
        </Link>
        <Link
          className={
            "h-full bg-white hover:bg-black hover:text-white transition-all duration-500 overflow-hidden group rounded-lg"
          }
          href={"#connect"}
        >
          <div className="group-hover:-translate-y-13 transition-transform duration-500">
            <div className="block p-3">Let's connect</div>
            <div className="block p-3">Let's connect</div>
          </div>
        </Link>
      </motion.nav>
      <MenuBtn isOn={isOn} setIsOn={setIsOn} />
      <NavMenu_mobile isOn={isOn}></NavMenu_mobile>
    </header>
  );
}

export const MenuBtn = ({
  isOn,
  setIsOn,
}: {
  isOn: boolean;
  setIsOn: (is: boolean) => void;
}) => {
  return (
    <button className="fixed top-0 left-0 z-[999] flex sm:hidden items-center justify-end w-full h-24 pr-8">
      <div
        className="flex justify-center items-center py-2 px-3 bg-zinc-200/50 backdrop-blur-xl rounded-xl cursor-pointer"
        onClick={() => setIsOn(!isOn)}
      >
        <div className="relative w-10 h-8">
          <div
            className={clsx(
              "absolute top-2 left-2 w-6 h-[2px] border border-black transition-all duration-400",
              isOn && "rotate-[-45deg] translate-y-2 delay-200"
            )}
          ></div>
          <div className="absolute top-4 left-2 w-6 flex">
            <div
              className={clsx(
                "w-3 h-[2px] overflow-hidden before:content-[''] before:block before:w-3 before:border before:border-black before:transition-transform before:delay-400",
                isOn && "before:translate-x-full before:delay-[0ms]"
              )}
            ></div>
            <div
              className={clsx(
                "w-3 h-[2px] overflow-hidden before:content-[''] before:block before:w-3 before:border before:border-black before:transition-transform before:delay-400",
                isOn && "before:-translate-x-full before:delay-[0ms]"
              )}
            ></div>
          </div>
          <div
            className={clsx(
              "absolute top-6 left-2 w-6 h-[2px] border border-black transition-all duration-400",
              isOn && "rotate-[45deg] -translate-y-2 delay-200"
            )}
          ></div>
        </div>
      </div>
    </button>
  );
};

const NavMenu_mobile = ({ isOn }: { isOn: boolean }) => {
  return (
    <div className="fixed z-[998] top-6 right-0 block sm:hidden pr-8">
      <motion.nav
        className="flex flex-col gap-2 p-1 bg-zinc-200/50 backdrop-blur-xl  text-[1.1rem] text-right rounded-lg"
        initial={{ translateY: -300 }}
        animate={isOn ? { translateY: [-300, 55] } : { translateY: -300 }}
        transition={{
          translateY: { times: [0, 1], duration: 0.5 },
        }}
      >
        <Link
          className={
            "block p-3 hover:bg-neutral-200/50 duration-500 rounded-lg"
          }
          href={"#about"}
        >
          About
        </Link>
        <Link
          className={
            "block p-3 hover:bg-neutral-200/50 duration-500 rounded-lg"
          }
          href={"#work"}
        >
          Work
        </Link>
        <Link
          className={
            "h-12 bg-white hover:bg-black hover:text-white transition-all duration-500 overflow-hidden group rounded-lg"
          }
          href={"#connect"}
        >
          <div className="group-hover:-translate-y-13 transition-transform duration-500">
            <div className="block p-3">Let's connect</div>
            <div className="block p-3">Let's connect</div>
          </div>
        </Link>
      </motion.nav>
    </div>
  );
};
