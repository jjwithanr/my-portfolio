import React from "react";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="scrollable aboutWindow__body">
                <h1>Welcome to my portfolio website!</h1>
                <div className="aboutWindow__bodyInner">
                    <div className="description">
                        <p>
                            My name is Jeremy Chang and I graduated from UC Irvine in 2022 with a B.S. in Computer Engineering
                            with a minor in Information & Computer Science. Glad you are visiting my website! Double-click on the 
                            icons to open up a window to explore my past projects and experiences!
                        </p>
                        <br />
                        <p>
                            Based in Los Angeles, I'm an apiring full-stack developer and am passionate about 
                            software developement. I am currently open to entry-level software roles!
                        </p>
                    </div>
                    <img 
                        src={require("../../assets/media/profile-picture.jpg")}
                        alt=""
                        width="180"
                    />
                </div>
            </div>
        </section>
    );
}