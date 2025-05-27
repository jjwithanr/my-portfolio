export const projectsContent = {
    title: "Projects",
    projects: [
        {
            title: "KanRead",
            link: "https://github.com/jjwithanr/kan-read",
            date: "Dec 2022",
            technologies: "Javascript, HTML, CSS",
            description: "KanRead is a simple kanban board web application that tracks the status of what books want to be read. Users can create, update, and delete books and their authors as well as view the status of all their books from their index page.",
            images: [
                {
                    src: require("../assets/media/kan-read.gif"),
                    alt: "KanRead application demo"
                }
            ]
        },
        {
            title: "ToDo Cal",
            link: "https://github.com/jjwithanr/kan-read",
            date: "Apr 2021",
            technologies: "Python, Tkinter, Google Calendar API",
            description: "ToDo Cal helps users stay accountable by giving them an option to schedule a time to complete them. When the user has a task listed and confirms their intended time to finish it, ToDo Scheduler will schedule the earliest time in the coming week that fits their time range on their Google Calendar.",
            images: [
                {
                    src: require("../assets/media/todocal.gif"),
                    alt: "ToDo Cal application demo"
                },
                {
                    src: require("../assets/media/todocal-results.png"),
                    alt: "ToDo Cal results"
                }
            ]
        }
    ]
}; 