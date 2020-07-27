import React, { Component } from 'react'
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Nav from "./components/Nav"
import ProjectsPage from "./components/ProjectsPage"
import ContactMe from "./components/ContactMe"
import {Link} from "react-scroll"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Nav />
        <Home />
        <AboutMe />
        <ProjectsPage />
        <ContactMe />
      </div>
      </>
    )
  }
}

