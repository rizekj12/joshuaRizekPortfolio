import React from 'react'
import '../css/ProjectsPage.css'
import Project from "./Project"

export default function ProjectsPage() {
    return (
        <section className="projectsSect" id="projects">
           <h1 className="projectsText">Projects</h1>
            <div className="projectsDiv">
               
                <Project
                    name="Final Fantasy Arena"
                    image="https://i.ibb.co/M7MKHCc/Screen-Shot-2020-07-27-at-3-47-16-PM.png"
                    description="A mini-game application utilizing javascript node.js, based on Final Fantasy 7. Users are matched against randomized monsters from the moogle API."
                    siteLink="https://pages.git.generalassemb.ly/rizekj12/FinalFantasyArena/"
                    codeLink="https://github.com/rizekj12/FinalFantasyArena"
                />
                <Project
                    name="Spork"
                    image="https://i.ibb.co/rFwkb2X/Screen-Shot-2020-07-27-at-3-49-04-PM.png"
                    description="A fullstack cooking website made with React.js front-end, Express and MongoDB back-end. A collaberation between five junior developers and three UX designers."
                    siteLink="http://spork-app.surge.sh/"
                    codeLink="https://github.com/rizekj12/spork"
                />
                <Project
                    name="Jot-It"
                    image="https://i.ibb.co/W0vs63x/Screen-Shot-2020-07-27-at-3-52-50-PM.png"
                    description="A fullstack Journal application made with React.Js front-end and Ruby on Rails back-end API designed by me. This application utilizes authentication."
                    siteLink="https://jot-it.netlify.app"
                    codeLink="https://github.com/rizekj12/Jot-It"
                />
                <Project
                    name="Unbored Me!"
                    image="https://i.ibb.co/G9xTBkV/Screen-Shot-2020-07-27-at-3-54-13-PM.png"
                    description=" Unbored Me is a React.js application that utilizes the bored api to allow users to find randomized activities to do when they're bored!"
                    siteLink="https://un-bored-me.netlify.app/"
                    codeLink="https://github.com/rizekj12/unboredMe"
                />
            </div>
        </section>
    )
}
