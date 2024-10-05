"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Code, BookText, Briefcase, User } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.JSX.Element;
  icon: React.ReactNode;
}

//experiencia, educación, proyectos, habilidades, intereses
const icons = [Code, BookText, Briefcase, User];
export default function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 75%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData = data.map((item, index) => ({
    ...item,
    icon: icons[index % icons.length],
  }));

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans px-4 sm:px-6 md:px-8 lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 sm:py-14 lg:py-20">
        <div ref={ref} className="relative max-w-7xl mx-auto">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col md:flex-row items-start justify-start pt-10 md:pt-20 lg:pt-40 gap-6 md:gap-10"
            >
              <div className="z-40  text-white sticky flex flex-col bg-black block text-xl sm:text-2xl mb-4 font-bold">
                <div className="relative p-3 bg-black rounded-lg shadow-md flex items-center justify-center">
                  <div className="relative h-10 w-10 rounded-full flex items-center justify-center shadow-lg">
                    {/* Fondo con desenfoque */}
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg"></div>
                    {/* Ícono centrado */}
                    <item.icon className="relative h-6 w-6 text-white z-10" />
                  </div>
                </div>
              </div>

              <div className="relative pl-16 pr-4 w-full  text-white">
                <h3 className=" block text-xl sm:text-2xl mb-4 font-bold text-white">
                  {item.title}
                </h3>
                <h3 className=" block text-xl sm:text-2xl mb-4 font-bold text-white">
                  {item.content}
                </h3>
              </div>
            </div>
          ))}

          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 md:left-16 lg:left-20 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
