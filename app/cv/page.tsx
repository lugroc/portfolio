import dynamic from "next/dynamic";
import { HiDownload } from "react-icons/hi";

const PDFViewer = dynamic(() => import("@/components/cv"), {
  ssr: false
});

export default function PDF() {
  return (
    <>
     <section id="CV" className="flex items-center flex-col">
        <a
          className="flex items-center bg-white px-7 py-3 gap-2 m-10 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20"
          href='/cv.pdf'
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <PDFViewer />
      </section>
    </>
  );
}