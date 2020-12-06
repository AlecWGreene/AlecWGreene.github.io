import React, { useContext } from "react";
import { PageStateContext } from "../../App";
import "./style.css"

// Component imports
import Resume from "../Resume";
import AboutMe from "../About Me";

// Data imports
import homework from "../../data/homework.json";
import demos from "../../data/demos.json";
import projects from "../../data/projects.json";

const data = {
    "Demos": demos,
    "Homework": homework,
    "Projects": projects
}

function ContentLayer(props){
    const [state, dispatch] = useContext(PageStateContext);

    const renderContent = (data) => {
        const text = data.content || data.description;
        return <>
            {/* Title */}
            <div id="ContentTitle">
                {state.breadcrumbs[1]}
            </div>

            {/* Links */}
            <div id="ContentLinkContainer">
                <div className="contentLinkWrapper"><span className={"contentLinkHeader"}>Repository:  </span><a className={"contentLinkText"}>{data.repository}</a></div>
                {
                    data.deployment ? 
                    <div className="contentLinkWrapper"><span className={"contentLinkHeader"}>Deployment:  </span><a className={"contentLinkText"}>{data.deployment}</a></div>
                    : undefined
                }
            </div>

            {/* Description */}
            <div id="ContentDescription">
                { 
                    text.split("<br />").map((par, index, arr) => {
                        return <> 
                        {par} 
                        {(index !== arr.length - 1)? <><br /><br /></> : ""} </>
                    })
                }
            </div>
        </>;
    }

    return (
        <div className="container-fluid">
        {
            (["About Me", "Resume"].includes(state.breadcrumbs[0])) ? 
            ((state.breadcrumbs[0] === "Resume") ? undefined : <AboutMe />) :
            renderContent(data[state.breadcrumbs[0]][state.breadcrumbs[1]])
        }            

        </div>
    );
}

export default ContentLayer;