"use client";

import ReactLenis from "lenis/react";
import Section1 from "./ui/section1";
import { useId } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import ResizeContainer from "./components/resizeContainer";

export default function Home() {
  const root_id = useId();

  // useInitialAnime();
  // useEffect(() => {
  //   const make_term = setTimeout(() => {
  //     const root = createRoot(document.getElementById(root_id)!);
  //     root.render(
  //       <>
  //         <div className="w-full h-screen bg-red-300"></div>
  //         <div className="w-full h-screen bg-green-300"></div>
  //         <div className="w-full h-screen bg-blue-300"></div>
  //         <div className="w-full h-screen bg-slate-300"></div>
  //         <div className="w-full h-screen bg-violet-300"></div>
  //         <div className="w-full h-screen bg-purple-300"></div>
  //         <div className="w-full h-screen bg-sky-300"></div>
  //         <div className="w-full h-screen bg-amber-300"></div>
  //         <div className="w-full h-screen bg-yellow-300"></div>
  //       </>
  //     );
  //     clearTimeout(make_term);
  //   }, 3000);
  // }, []);
  return (
    <ReactLenis root>
      <Provider store={store}>
        <ResizeContainer>
          <Section1 />
          <div className="relative" id={root_id}></div>
        </ResizeContainer>
      </Provider>
    </ReactLenis>
  );
}
