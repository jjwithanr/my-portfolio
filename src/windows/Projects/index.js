import React from "react";
import { Anchor } from "react95";

import "./styles.scss";

export default function Projects() {

    return (
        <section className="projectsWindow">
            <div className="scrollable projectsWindow__body">
                <h1>Projects</h1>
                <div className="projectsWindow__bodyInner">
                    <Anchor className="projectTitle" href="https://github.com/jjwithanr/kan-read" target="_blank">
                        <h2>KanRead</h2>
                    </Anchor>
                    <h3>Dec 2022: Javascript, HTML, CSS</h3>
                    <p>
                    KanRead is a simple kanban board web application that 
                    tracks the status of what books want to be read. 
                    Users can create, update, and delete books and their 
                    authors as well as view the status of all their books from their index page.
                    </p>
                    <img 
                        src={require("../../assets/media/kan-read.gif")} 
                        alt=""
                    />

                    <Anchor className="projectTitle" href="https://github.com/jjwithanr/kan-read" target="_blank">
                        <h2>ToDo Cal</h2>
                    </Anchor>
                    <h3>Apr 2021: Python, Tkinter, Google Calendar API</h3>
                    <p>
                    ToDo Cal helps users stay accountable by giving them an option to schedule a time to complete them. 
                    When the user has a task listed and confirms their intended time to finish it, ToDo Scheduler will 
                    schedule the earliest time in the coming week that fits their time range on their Google Calendar.
                    </p>
                    <img
                        src={require("../../assets/media/todocal.gif")} 
                        alt=""
                    />
                    <img
                        src={require("../../assets/media/todocal-results.png")}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}