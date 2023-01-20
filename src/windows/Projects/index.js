import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function Projects() {

    return (
        <section className="projectsWindow">
            <div className="scrollable -yOnly projectsWindow__body">
                <div className="projectsWindow__bodyInner">
                    <h1 className="mb2">Projects</h1>
                </div>
            </div>
        </section>
    );
}