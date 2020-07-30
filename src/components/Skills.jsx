import React from 'react'
import "../css/Skills.css"

export default function Skills() {
    return (
        <div className="skillsDiv">
            <h1 className="skillsText">Some of my Skills!</h1>
            <div className="imagesDiv">
                <img className="skillsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png" alt="Javascript logo" />

                <img className="skillsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="node.js logo" />

                <img className="skillsImg" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react.js logo" />
                <img className="skillsImg" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="html5" />
            </div>

            <div className="imagesDiv2">
                    <img className="skillsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png" alt="css logo" />

                    <img className="skillsImg ruby" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/768px-Ruby_logo.svg.png" alt="ruby logo" />
                    <img className="skillsImg" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png" alt="ruby on rails logo" />
                </div>

        </div>
    )
}
