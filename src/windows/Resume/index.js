import React from "react";
import "./styles.scss";
import myResume from "./Chang_Jeremy_Resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {

    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        // <section className="resumeWindow">
        //     <div className="scrollable -yOnly resumeWindow__body">
        //         {/* <div className="resumeWindow__bodyInner">
        //             <h1 className="mb2">Resume</h1>
        //         </div> */}
        //     </div>
        // </section>
                <Document
                    file="/src/windows/Resume/Chang_Jeremy_Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={numPages} />
                </Document>
    );
}