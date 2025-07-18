import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top instantly when route changes
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollReset;
