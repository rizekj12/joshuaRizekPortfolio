import React from 'react'
import "../css/Project.css"


export default function Project(props) {
    return (
        <div className="entireDiv">
            <h3>{props.name}</h3>
            <div className="indProjectDiv">
                <img className="projectImg" src={props.image} alt="" />
                <p className="projectDes">{props.description}</p>
            </div>
            <div className="buttonDiv">
                    <a href={props.siteLink}>
                        <button className="projectButton">Check the look!</button>
                    </a>
                    <a href={props.codeLink}>
                        <button className="projectButton">Check the code!</button>
                    </a>
                </div>
        </div>
    )
}
