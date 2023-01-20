import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function Resume() {

    return (
        <section className="resumeWindow">
            <div className="flex justify-between resumeWindow__header">
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
            <div className="scrollable -yOnly resumeWindow__body">
                <div className="resumeWindow__bodyInner">
                    <h1 className="mb2">Resume</h1>
                </div>
            </div>
        </section>
    );
}