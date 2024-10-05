"use client";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const paths = [
  "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
  "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
  "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
  "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
  "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
  "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
  "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
  "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
  "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
  "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
  "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
];

export const Beams = React.memo(({ className }: { className?: string }) => {
  const [visiblePaths, setVisiblePaths] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePaths((prevPaths) => {
        const newPaths = [...prevPaths];
        if (newPaths.length < paths.length) {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * paths.length);
          } while (newPaths.includes(newIndex));
          newPaths.push(newIndex);
        } else {
          newPaths.splice(Math.floor(Math.random() * newPaths.length), 1);
        }
        return newPaths;
      });
    }, 200); // Cambia una línea cada segundo

    return () => clearInterval(interval);
  }, []);

  const animation = useMemo(
    () => ({
      x1: ["0%", "100%"],
      x2: ["0%", "95%"],
      y1: ["0%", "100%"],
      y2: ["0%", "93%"],
    }),
    []
  );

  const renderPaths = useCallback(() => {
    return visiblePaths.map((index) => (
      <motion.path
        key={`path-${index}`}
        d={paths[index]}
        stroke={`url(#linearGradient-${index})`}
        strokeOpacity="1"
        strokeWidth="0.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    ));
  }, [visiblePaths]);

  const renderGradients = useCallback(() => {
    return paths.map((_, index) => (
      <motion.linearGradient
        id={`linearGradient-${index}`}
        key={`gradient-${index}`}
        gradientUnits="userSpaceOnUse"
        animate={animation}
        transition={{
          duration: Math.random() * 5 + 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <stop stopColor="#18CCFC" stopOpacity="0" offset="0%" />
        <stop stopColor="#18CCFC" offset="10%" />
        <stop stopColor="#6344F5" offset="32.5%" />
        <stop stopColor="#AE48FF" stopOpacity="0" offset="100%" />
      </motion.linearGradient>
    ));
  }, [animation]);

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1100 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="100%" height="100%" fill="black" />
        {renderPaths()}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feComposite in="coloredBlur" in2="SourceGraphic" operator="over" />
          </filter>
          {renderGradients()}
        </defs>
      </svg>
    </div>
  );
});

Beams.displayName = "Beams";

export default Beams;
