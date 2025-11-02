import React, { useEffect } from "react";

/**
 * Wrap pages with <FixedFrame> to keep content between fixed header & footer.
 * It measures both bars and sets CSS variables so layout adapts on resize.
 */
export default function FixedFrame({ children }) {
  useEffect(() => {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    const setVars = () => {
      const h = header?.offsetHeight ?? 0;
      const f = footer?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
      document.documentElement.style.setProperty("--footer-h", `${f}px`);
    };

    setVars();
    const roHeader = header ? new ResizeObserver(setVars) : null;
    const roFooter = footer ? new ResizeObserver(setVars) : null;
    roHeader?.observe(header);
    roFooter?.observe(footer);
    window.addEventListener("resize", setVars);

    return () => {
      roHeader?.disconnect();
      roFooter?.disconnect();
      window.removeEventListener("resize", setVars);
    };
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        paddingTop: "var(--header-h, 0px)",
        paddingBottom: "var(--footer-h, 0px)",
        minHeight:
          "calc(100vh - var(--header-h, 0px) - var(--footer-h, 0px))",
      }}
    >
      {children}
    </div>
  );
}
