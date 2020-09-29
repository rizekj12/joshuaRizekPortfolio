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
                <img className="skillsImg" src="http://iamcolinmalcolm.surge.sh/static/media/postgresql.9474528e.svg" alt="postgresql"/>
                <img className="skillsImg" src="http://iamcolinmalcolm.surge.sh/static/media/git.8e4cd62e.svg" alt="git"/>
            </div>
            <div className="imagesDiv2">
                    <img className="skillsImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png" alt="css logo" />
                    <img className="skillsImg ruby" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/768px-Ruby_logo.svg.png" alt="ruby logo" />
                    <img className="skillsImg" src="http://iamcolinmalcolm.surge.sh/static/media/rails.cdbc91a7.svg" alt="ruby on rails logo" />
                    <img className="skillsImg" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt=""/>
                    <img className="skillsImg mongo" src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt=""/>
                </div>

        </div>
    )
}
