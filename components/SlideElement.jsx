"use client";

import { useEffect, useRef } from "react";

export const SlideElement = ({ children, slideFrom }) => {

  const slideClass = slideFrom === "right" ? "slide-right" : "slide-left";

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.2});

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={slideClass}>
      { children }
    </div>
  );
};