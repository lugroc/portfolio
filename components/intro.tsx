"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className="relative">
          
          <Image
            src="/portrait.png"
            alt="Portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className=" bg-sky-500 h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <div className="flex items-center p-8 text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <p className="font-bold dark:text-white">Luciano Guerrero</p>
        </div>
      </div>

      <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        A <span className="font-bold text-orange-500">Software Engineer</span> aspiring to join a team where I can demonstrate my skills as{" "}
        <span className="font-bold text-orange-500">Developer</span> and collaborate to create impactful solutions
      </div>
      
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        
        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/cv"
        >
          Check CV{" "}
          <FiFileText className="opacity-60 group-hover:translate-y-0.5 transition" />
        </Link>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/luciano-guerrero-564485301/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin link"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/lugroc"
          target="_blank"
          rel="noopener noreferrer"
          title="Github link"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
