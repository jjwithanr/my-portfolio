import React from "react";
import { Anchor } from "react95";
import { projectsContent } from "../../content";
import "./styles.scss";

export default function Projects() {
    return (
        <section className="projectsWindow">
            <div className="scrollable projectsWindow__body">
                <h1>{projectsContent.title}</h1>
                <div className="projectsWindow__bodyInner">
                    {projectsContent.projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <Anchor className="projectTitle" href={project.link} target="_blank">
                                <h2>{project.title}</h2>
                            </Anchor>
                            <h3>{project.date}: {project.technologies}</h3>
                            <p>{project.description}</p>
                            {project.images.map((image, imageIndex) => (
                                <img 
                                    key={imageIndex}
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}