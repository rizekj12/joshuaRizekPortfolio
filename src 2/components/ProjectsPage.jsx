import React from 'react'
import '../css/ProjectsPage.css'
import Project from "./Project"
import whatToWear from "../images/What-to-Wear.png"
import ThreeAngelsPainting from "../images/ThreeAngelsPainting.png"

export default function ProjectsPage() {
    return (
        <section className="projectsSect" id="projects">
           <h1 className="projectsText">Passion Projects</h1>
            <div className="projectsDiv">

                <div className="topRow">
                <Project
                    name="What-to-Wear"
                    image={whatToWear}
                    description="A Front-End React.Js weather app that renders data from the OpenWeatherAPI. This app tells users what they should wear for the day according to the local weather! "
                    siteLink="http://what-to-wear.surge.sh/"
                    codeLink="https://github.com/rizekj12/What-to-Wear"
                />

                <Project
                    name="My Hero Academia Encyclopedia"
                    image="https://i.ibb.co/zNpxHVS/Screen-Shot-2020-09-21-at-7-11-06-PM.png"
                    description="A Fullstack Encyclopedia application from one of my favorite shows! This application uses a React.Js front-end with an Express and MongoDB back-end. "
                    siteLink="http://my-hero-encyc.surge.sh/"
                    codeLink="https://github.com/rizekj12/MyHeroAcademiaAPI"
                />

                <Project
                    name="Three Angels Painting Business profile"
                    image={ThreeAngelsPainting}
                    description="A collaborative freelance project created with React.JS. This was a business website created for the Three Angels Painting company located in Macon County, NC "
                    siteLink="https://threeangelspainting.surge.sh/"
                    codeLink="https://github.com/rizekj12/ThreeAngelsPainting"
                />

                </div>

                <div className="bottomRow">
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
            </div>
        </section>
    )
}
