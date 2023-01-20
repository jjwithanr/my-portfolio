import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function Resume() {

    return (
        <section className="resumeWindow">
            <div className="scrollable -yOnly resumeWindow__body">
                <div className="resumeWindow__bodyInner">
                    <h1 className="mb2">Resume</h1>
                </div>
            </div>
        </section>
    );
}