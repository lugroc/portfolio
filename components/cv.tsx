
"use client";
// import default react-pdf entry
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { HiDownload } from "react-icons/hi";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "@/pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file] = useState("./cv.pdf");
  const [numPages, setNumPages] = useState(0);
  
  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }) {
    setNumPages(nextNumPages);
  }
  return (
    <div className="flex items-center flex-col">
      <a 
        className="flex items-center bg-white px-7 py-3 gap-2 m-10 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20"
        href='./cv.pdf'
        download>
          Download File
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={1.2}
          />
        ))}
      </Document>
    </div>
  );
}