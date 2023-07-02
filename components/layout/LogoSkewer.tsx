import React, { useEffect, useRef } from "react";
import { Flower } from "../styled/Flower";

// for fun bc why not
export const LogoSkewer = () => {
  const divRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const skewFactor = 0.1;
      const skewX = (e.clientX - window.innerWidth / 2) * skewFactor;
      const skewY = (e.clientY - window.innerHeight / 2) * skewFactor;
      if (divRef.current) {
        // @ts-ignore
        divRef.current.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      {/* @ts-ignore */}
      <div ref={divRef}>
        <Flower />
      </div>
    </>
  );
};
