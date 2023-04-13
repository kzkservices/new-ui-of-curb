import React from "react";
import Introduction from "../components/home/Introduction";
import IntroductionSm from "../components/home/IntroductionSm";
import { useWindowDims } from "../utils/useWindowDims";

const Home = () => {
  const { width } = useWindowDims();
  return <>
  {width > 700 ? <Introduction /> : <IntroductionSm />}
  </>;
};

export default Home;
