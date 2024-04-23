"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While studying{" "}
        <span className="font-medium">Software Engineering</span> I made the decision to focus on{" "}
        <span className="font-medium">Node.js</span> developing{" "}
        <span className="italic">RESTful APIs</span> with Express.js, then i incorporated{" "} 
        <span className="font-medium">TypeScript and React</span> to my stack. 
        My passion for continuous learning made me explore cloud technologies like{" "}
        <span className="font-medium">AWS, Google Cloud and Docker.</span>
      </p>

      <p>
        Currently reading <span className="italic">100 Go Mistakes and How to Avoid Them</span>. My workflow for coding is Linux using NeoVim as my IDE.
      </p>
    </section>
  );
}
