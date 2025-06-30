import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

   useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${location.pathname}`, window.scrollY.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      handleBeforeUnload();  
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

   useLayoutEffect(() => {
    const savedPosition = parseInt(sessionStorage.getItem(`scroll-${location.pathname}`) || "0");

    if (navigationType === "POP") {
      window.scrollTo(0, savedPosition);
    } else {
       window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location, navigationType]);

  return null;
};

export default ScrollHandler;
