import React from "react";

import "./styles.scss";

export default function About() {

    return (
        <section className="aboutWindow">
            <div className="scrollable aboutWindow__body">
                <h1>Welcome!</h1>
                <div className="aboutWindow__bodyInner">
                    <img 
                        src={require("../../assets/media/profile-picture.jpg")}
                        alt="Professional personal headshot"
                        className="profile-picture"
                    />
                    <div className="description">
                        <p>
                        My name is Jeremy Chang and I graduated from UC Irvine in Spring 2022 with a B.S. in Computer Engineering and a minor in Information and Computer Science.
                        </p>
                        <br />
                        <p>
                        I'm a new graduate currently based in Los Angeles and seeking entry-level software roles as an aspiring full-stack developer. I have a passion for software development and a record of academic and personal projects that gave me hands-on experience with modern languages, frameworks and tools.
                        </p>
                        <br />
                        <p>
                        My education at UC Irvine provided a strong foundation in computer architecture, programming and problem-solving. I continuously challenged myself through side projects and extracurricular activities, building marketable skills that will help accelerate my career. Please feel free to click on the project icons to explore windows showcasing highlights from my work and experiences
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
