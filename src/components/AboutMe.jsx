import React from 'react'
import "../css/AboutMe.css"

export default function AboutMe() {
    return (
        <section className="aboutMeSect" id="about-me">
            <div className="aboutMeDiv">
                <h1 className="aboutMeHeader">More about myself</h1>
                <p className="aboutMePara">
                I am a software engineer who's experience revolves around primarily DevOps and Front-end development work, 
                although I also have full stack experience! So far having a little over of experience in the tech industry
                I continue to love what I do. I enjoy constantly challenging myself with new problems to solve and more tech 
                stacks to learn. I specialized in technologies such as Ansible, Jenkins, Azure fundamentals, Javascript, 
                React.JS and more. On my free time you can find me exploring some trails or mountains with my dog, Traveling 
                and/ or painting. I am always open to helping less experienced developers as well as collaborating with more
                experienced ones. If you want to know more about me, please feel free to reach out on LinkedIn, look through my 
                resume and/or portfolio listed below. Thanks for reading my bio!
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
