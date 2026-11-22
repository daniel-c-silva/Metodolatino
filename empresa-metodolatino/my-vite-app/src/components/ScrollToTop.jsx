import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This snaps the scroll to the very top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null; // This component doesn't show anything on screen
}