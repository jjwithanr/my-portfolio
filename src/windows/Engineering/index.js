import React from "react";
import { Tabs, Tab, TabBody } from "react95";
import engr7a from "./Final_Report_7A.pdf";
import engr7b from "./Final_Report_7B.pdf";
import "./styles.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Engineering() {

    const pageNumbers7a = [...Array(20).keys()];
    pageNumbers7a.shift();

    const pageNumbers7b = [...Array(24).keys()];
    pageNumbers7b.shift();

    const [state, setState] = React.useState({
        activeTab: 0
    });

    const handleChange = (value) => {
        setState({ activeTab: value });
    };
    
    const { activeTab } = state;

    return (
        <section className="engineeringWindow">
            <Tabs value={activeTab} onChange={handleChange}>
                <Tab value={0}>Quadcopter</Tab>
                <Tab value={1}>Fitness Watch</Tab>
            </Tabs>
            <TabBody>
                {activeTab === 0 && (
                    <div className="scrollable">
                        <Document file={engr7a}>
                            {pageNumbers7a.map(page => (
                                <Page pageNumber={page} />
                            ))}
                        </Document>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className="scrollable">
                        <Document file={engr7b}>
                            {pageNumbers7b.map(page => (
                                <Page pageNumber={page} />
                            ))}
                        </Document>
                    </div>
                )}
            </TabBody>
        </section>
    );
}