import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="scrollable aboutWindow__body">
                <div className="aboutWindow__bodyInner">
                    <h1 className="mb2">Welcome to my portfolio website!</h1>
                    <p className="mb2">
                        I'm Jeremy Chang and I am a UCI graduate with a B.S. in Computer Engineering
                        with a minor in Information & Computer Science.
                    </p>

                    <img src={require("../../assets/profile-picture.jpg")} />

                    <p>
                        Based in L.A., I'm an apiring full-stack developer and am passionate about 
                        software developement and am open to entry-level roles in the tech industry.
                    </p>
                </div>
            </div>
        </section>
    );
}