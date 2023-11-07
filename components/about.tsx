"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a self-taught developer with a background in{" "}
        <span className="italic">Computer Science Engineering</span>, I'm deeply
        passionate about technology and web app development. I specialize in
        building{" "}
        <span className="italic">
          low-latency, scalable, and user-friendly projects
        </span>
        , with React and Next.js as my preferred tools. Staying updated with
        tech trends through articles and newsletters keeps me sharp, and I'm
        driven by a <span className="underline">love</span> for problem-solving.
      </p>

      <p>
        I've had the privilege of working across diverse industries, including
        <span className="italic"> FMCG, Consulting, Telecom, and Logistics</span>, broadening my perspective on
        tech's applications. Outside of coding, I'm an avid <span className="italic">badminton player</span>. My
        ultimate goal is to create a meaningful application, and I'm
        particularly interested in the edtech sector, recognizing the
        transformative power of education.
      </p>
    </motion.section>
  );
}
