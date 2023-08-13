import React from 'react'
import "../css/Nav.css"
import { Link } from "react-scroll"

export default function Nav() {
    return (
        <div className="navDiv">
            <h2 className="navText">Joshua J Rizek  <span>   Full Stack Software Engineer</span></h2>
            <nav>
                <Link className="linkPoint contactMeLink" to='contact-me' smooth={true} duration={1000}>  CONTACT ME  </Link>
                <p>•</p>
                <Link className="linkPoint projectLink" to='projects' smooth={true} duration={1000}>  PROJECTS  </Link>
                <p>•</p>
                <Link className="linkPoint aboutMeLink" to='about-me' smooth={true} duration={1000}>  ABOUT ME  </Link>
                <p>•</p>
                <a className="linkPoint resumeLink" href="https://docs.google.com/document/d/1jXygxFEjb91mB-M_HFwjSN3l5xLv6ugZZWcxRV660BA/edit?usp=sharing">  RESUME  </a>
            </nav>

        </div>
    )
}
