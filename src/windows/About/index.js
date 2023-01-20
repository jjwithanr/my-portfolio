import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="scrollable -yOnly aboutWindow__body">
                <div className="aboutWindow__bodyInner">
                    <h1 className="mb2">ABOUT</h1>
                </div>
            </div>
        </section>
    );
}