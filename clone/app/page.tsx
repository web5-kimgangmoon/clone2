"use client";

import useInitialAnime from "./hooks/useInitialAnime";
import Section1 from "./ui/section1";

export default function Home() {
  useInitialAnime();

  return (
    <div className="relative">
      <Section1 />
      <div className="w-full h-screen bg-red-300"></div>
      <div className="w-full h-screen bg-green-300"></div>
      <div className="w-full h-screen bg-blue-300"></div>
      <div className="w-full h-screen bg-slate-300"></div>
      <div className="w-full h-screen bg-violet-300"></div>
      <div className="w-full h-screen bg-purple-300"></div>
      <div className="w-full h-screen bg-sky-300"></div>
      <div className="w-full h-screen bg-amber-300"></div>
      <div className="w-full h-screen bg-yellow-300"></div>
    </div>
  );
}
