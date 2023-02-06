import React from "react";
import "./styles.scss";
import "../styles.scss";
import resume from "./Chang_Jeremy_Resume.pdf"
import { Button } from "react95";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {

    const handlePrint = () => {
        window.open("./Chang_Jeremy_Resume.pdf");
    };

    return (
        <section>
            <Button variant="menu" size="sm" onClick={handlePrint}>
                Print
            </Button>
            <div className="scrollable resumeWindow">
                <Document file={resume}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </section>
    );
}