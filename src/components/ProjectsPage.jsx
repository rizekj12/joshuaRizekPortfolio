import React from 'react'
import '../css/ProjectsPage.css'
import Project from "./Project"

export default function ProjectsPage() {
    return (
        <section id="projects">
        <div className="projectsDiv">
            <h1 className="projectsText">Projects</h1>
            <Project 
                name="Final Fantasy Arena"
                image="https://i.ibb.co/M7MKHCc/Screen-Shot-2020-07-27-at-3-47-16-PM.png"
                description="A mini-game application utilizing vanilla javascript that is based on the Final Fantasy 7 video game series. Users are matched against randomized monsters from the moogle API."
                siteLink="https://pages.git.generalassemb.ly/rizekj12/FinalFantasyArena/"
                codeLink="https://github.com/rizekj12/FinalFantasyArena"
            />
            <Project 
                name="Spork"
                image="https://i.ibb.co/rFwkb2X/Screen-Shot-2020-07-27-at-3-49-04-PM.png"
                description="Spork is a fullstack cooking website made with React.js front-end, Express and MongoDB back-end. Spork was designed as a collaberation between five junior developers and three UX designers. This app is designed to help users find simple recipees as well as ingredient substitutes!"
                siteLink=""
                codeLink=""
            />
            <Project 
                name="Jot-It"
                image="https://i.ibb.co/W0vs63x/Screen-Shot-2020-07-27-at-3-52-50-PM.png"
                description="Jot-It is a fullstack Journal application made with React.Js front-end and Ruby on Rails back-end API designed by me. This application utilizes authentication to allow users to make their own accounts for their personal Journal entries and moods to be saved and tracked over time"
                siteLink=""
                codeLink=""
            />
            <Project
                name="Unbored Me!"
                image="https://i.ibb.co/G9xTBkV/Screen-Shot-2020-07-27-at-3-54-13-PM.png"
                description=" Unbored Me is a React.js application that utilizes the bored api to allow users to find randomized activities to do when they're bored! Unbored Me also allows users to search for activities based on certain filters that utilizes different API end-points."
                siteLink=""
                codeLink=""
             />


        </div>
        </section>
    )
}
