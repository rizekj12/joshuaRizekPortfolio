import React from 'react'
import "../css/AboutMe.css"

export default function AboutMe() {
    return (
        <section className="aboutMeSect" id="about-me">
            <div className="aboutMeDiv">
                <h1 className="aboutMeHeader">More about myself</h1>
                <p className="aboutMePara">
                I am a Software Engineer who is passionate about the growing dynamic nature of the tech
                industry along with a desire to solve practical problems. I have a background in Philosophy
                from my undergraduate studies which has helped me problem solve in unique ways and quickly
                learn new technologies on a deeper conceptual level. While I have experience working with back-end
                frameworks and building full-stack projects, I have grown to enjoy front-end development the most.
                What makes me so passionate about Software Engineering is the endless growth potential within the field.
                As someone who considers himself a life-long learner, I enjoy the fact that there are always new 
                frameworks, languages and technical concepts to learn. In my free time when I’m not coding I enjoy 
                creating art, competitive gaming, hiking, fitness, and traveling. I am someone who appreciates working
                with a diverse team where I can learn from others professional experience because it is my belief that
                we do not get anywhere in life without learning from others. Please feel free to check out the rest of
                my site to see some of my passion projects and reach out to me if you are interested in working together! 
                </p>
            
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
            </div>

        </section>
    )
}
