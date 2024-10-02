import React from "react";
import Beams from "../components/Beams";
import HeroSection from "../components/HeroSection";
import Tabs from "../components/Tabs";
import TabsDemo from "../components/TabsDemo";
import Project from "../components/Project";
import { TimelineDemo } from "../components/TimeLineDemo";

function Portfolio() {
  return (
    <>
      <HeroSection/>
      <Beams />
      <TimelineDemo />
    </>
  );
}

export default Portfolio;
