import { useEffect, useState } from "react";
// import { disableScroll } from "../utlis/zoom";
export function useWindowDims() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowDims, setWindowDims] = useState({
    width: undefined,
    height: undefined,
  });
  const handleResize = () => {
    setWindowDims({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  // const hanldeOrientationChange = () => {
  //   handleResize();
  // };
  useEffect(() => {
    // disableScroll();
    window.addEventListener("resize", handleResize);
    // window.addEventListener("orientationchange", hanldeOrientationChange);
    handleResize();
    return () => {
      window.removeEventListener("orientationchange", handleResize);
      // window.addEventListener("orientationchange", hanldeOrientationChange);
    };

    // eslint-disable-next-line
  }, []);
  return { ...windowDims, handleResize };
}