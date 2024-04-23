
"use client";
// import default react-pdf entry
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
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
    <div className='max-w-full'>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={1.25}
            
          />
        ))}
      </Document>
    </div>
  );
}