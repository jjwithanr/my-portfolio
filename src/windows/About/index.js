import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="flex justify-between aboutWindow__header">
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
            <div className="scrollable -yOnly aboutWindow__body">
                <div className="aboutWindow__bodyInner">
                    <h1 className="mb2">ABOUT</h1>
                </div>
            </div>
        </section>
    );
}