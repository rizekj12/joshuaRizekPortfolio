import React, { Component } from 'react'
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Nav from "./components/Nav"
import ProjectsPage from "./components/ProjectsPage"
import ContactMe from "./components/ContactMe"
import Skills from "./components/Skills"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Nav />
        <Home />
        <AboutMe />
        <Skills />
        <ProjectsPage />
        <ContactMe />
      </div>
      </>
    )
  }
}

