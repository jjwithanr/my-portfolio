import React from "react";
import { Button, Anchor } from "react95";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="scrollable aboutWindow__body">
                    <h1>Welcome to my portfolio website!</h1>
                <div className="aboutWindow__bodyInner">
                    <div className="description">
                        <p>
                            I'm Jeremy Chang and I graduated from UC Irvine in 2022 with a B.S. in Computer Engineering
                            with a minor in Information & Computer Science.
                        </p>
                        <br />
                        <p>
                            Based in L.A., I'm an apiring full-stack developer and am passionate about 
                            software developement. I am currently open to entry-level software roles!
                        </p>
                    </div>
                    <div className="picture"> 
                        <img src={require("../../assets/profile-picture.jpg")} />
                    </div>
                </div>
            </div>
        </section>
    );
}