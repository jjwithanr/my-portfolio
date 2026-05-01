const about = {
    label: "About Me",
    header: "Notepad - About Me",
    desktopIcon: require(`../assets/wordpad.png`),
    desktopPosition: 1,
    visibility: [true, true],
};

const projects = {
    label: "Projects",
    header: "My Projects",
    desktopIcon: require(`../assets/projects.png`),
    desktopPosition: 2,
    visibility: [false, false],
};

const engineering = {
    label: "Engineering Projects",
    header: "Engineering Projects",
    desktopIcon: require(`../assets/engineering.png`),
    desktopPosition: 3,
    visibility: [false, false],
};

const resume = {
    label: "Resume",
    header: "Resume",
    desktopIcon: require(`../assets/resume.png`),
    desktopPosition: 4,
    visibility: [false, false],
};


export const WINDOW_OBJ = {
    about,
    projects,
    engineering,
    resume,
};