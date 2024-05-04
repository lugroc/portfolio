"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
        My workflow for coding is{" "}
        <span className="font-medium">Linux</span> with{" "}
        <span className="font-medium">NeoVim</span>, i love the performance and moving around without mouse interaction.
        Currently reading <span className="italic">"100 Go Mistakes and How to Avoid Them"</span> but I usually use{" "} 
        <span className="font-medium">Python, Java, Node.js and React</span>. 
      </p>
    </section>
  );
}
