"use client";

import ReactLenis from "lenis/react";
import Section1 from "./ui/section1";
import store from "./redux/store";
import { Provider } from "react-redux";
import ResizeContainer from "./components/resizeContainer";
import Header from "./ui/header";
import Section_body from "./ui/section_body";

export default function Home() {
  return (
    <ReactLenis root>
      <Provider store={store}>
        <ResizeContainer>
          <Header />
          <Section1 />
          <Section_body />
        </ResizeContainer>
      </Provider>
    </ReactLenis>
  );
}
