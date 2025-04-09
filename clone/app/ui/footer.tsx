import { InstagramIcon } from "@/public/InstagramIcon";
import { LinkedInIcon } from "@/public/LinkedInIcon";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import checkDesktop from "../lib/checkDesktop";
import { motion } from "motion/react";
import { animationTime } from "../lib/globalValue";

export default function Footer() {
  const breakpoint = useSelector<
    { breakpoint: { breakpoint: string } },
    string
  >((state) => state.breakpoint.breakpoint);
  const isDesk = useMemo(() => checkDesktop(breakpoint), [breakpoint]);
  return (
    <motion.footer
      id="connect"
      className="relative z-1 py-16 xs:py-12 sm:py-24 bg-zinc-100"
      animate={isDesk ? { display: ["none", "block"] } : { display: "block" }}
      transition={
        isDesk
          ? { times: [0, 1], duration: 0, delay: animationTime }
          : { duration: 0 }
      }
    >
      <section className="pb-12 sm:pb-20 sm:min-w-[870px] w-[85vw] xs:w-[90vw] sm:w-[95vw] md:max-w-[80rem] mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-[4rem] text-gray-800 leading-6 xs:leading-4 sm:leading-20">
          Tell me what's next.
        </h2>
        <address className="flex flex-col gap-4 xs:gap-6 sm:gap-0 sm:flex-row justify-between sm:items-end not-italic text-2xl xs:text-3xl sm:text-[4rem] leading-8 sm:leading-16">
          <Link
            href={"mailto:hello@danielstoopendaal.nl"}
            className="block text-zinc-400 hover:text-zinc-300 transition-colors duration-400"
          >
            hello@danielstoopendaal.nl
          </Link>
          <div className="flex gap-3 xs:gap-4 h-[24px]">
            <Link href={"#"}>
              <InstagramIcon />
            </Link>
            <Link href={"#"}>
              <LinkedInIcon />
            </Link>
          </div>
        </address>
      </section>
      <section className="flex justify-between w-[85vw] xs:w-[90vw] sm:w-[95vw] max-w-[80rem] mx-auto pt-10 sm:pt-6 md:pt-10 border-t text-[1.1rem] xs:text-lg tracking-tight">
        <small className="block pt-0 xs:pt-4 md:pt-0">
          © 2024 Daniel Stoopendaal. All rights reserved.
        </small>
        <Link href={"#"} className="block w-[160px] aspect-[5]">
          <Image
            src={"/certified_partner_badge_white.png"}
            alt="certified_partner_badge_white.png"
            className="block shrink"
            width={160}
            height={32}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </section>
    </motion.footer>
  );
}
