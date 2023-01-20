import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function Projects() {

    return (
        <section className="projectsWindow">
            <div className="flex justify-between projectsWindow__header">
            <div className="flex flex-auto items-center">
                <Button variant="menu" size="sm">
                File
                </Button>
                <Button variant="menu" size="sm">
                Edit
                </Button>
                <Button variant="menu" size="sm">
                View
                </Button>
            </div>
            </div>
            <div className="scrollable -yOnly projectsWindow__body">
                <div className="projectsWindow__bodyInner">
                    <h1 className="mb2">Projects</h1>
                </div>
            </div>
        </section>
    );
}