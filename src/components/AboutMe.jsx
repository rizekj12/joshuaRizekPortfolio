import React from 'react'
import "../css/AboutMe.css"

export default function AboutMe() {
    return (
        <section className="aboutMeSect" id="about-me">
            <div className="aboutMeDiv">
                <h1 className="aboutMeHeader">About me!</h1>
                <p className="aboutMePara">I am software developer who loves to constantly learn and challenge myself through problem-solving. My undergraduate studies in philosophy have helped me to become a strong developer by thinking outside the box and having good conceptual understandings of new concepts.  My passion projects consist of apps that improve mental health and developing games. On my free time I enjoy competitive gaming, mixed martial arts, and traveling! I am someone who enjoys working in diverse groups because I believe we can call learn more from each other as developers as well as people. Check out the rest of my site to see some of my work and reach out to me to work together! </p>
            </div>
            <div className="resourceDiv">
                <a 
                    href="https://github.com/rizekj12">
                        <img 
                            className="otherResource"
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                            alt="GitHub logo"
                         />
                </a>
                <a 
                    href="https://www.linkedin.com/in/joshua-rizek-1a6a28199/">
                        <img 
                            className="otherResource"
                            src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" 
                        />
                </a>
            </div>

        </section>
    )
}
