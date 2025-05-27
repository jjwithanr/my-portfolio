import React from "react";
import { aboutContent } from "../../content";
import "./styles.scss";

export default function About() {
    return (
        <section className="aboutWindow">
            <div className="scrollable aboutWindow__body">
                <h1>{aboutContent.title}</h1>
                <div className="aboutWindow__bodyInner">
                    <img 
                        src={aboutContent.profile.image}
                        alt={aboutContent.profile.alt}
                        className="profile-picture"
                    />
                    <div className="description">
                        {aboutContent.description.map((paragraph, index) => (
                            <React.Fragment key={index}>
                                <p>{paragraph}</p>
                                {index < aboutContent.description.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
