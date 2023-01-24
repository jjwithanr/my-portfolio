import React from "react";
import "./styles.scss";
import "../styles.scss";
import resume from "./Chang_Jeremy_Resume.pdf"
import { Button } from "react95";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {

    return (
        <section>
            {/* <Button variant="menu" size="sm">
                <a href={resume} download="Resume">
                Download
                </a>
            </Button> */}
            <div className="scrollable">
                <Document file={resume}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </section>
    );
}