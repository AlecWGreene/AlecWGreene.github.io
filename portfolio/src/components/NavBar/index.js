import React, { useEffect } from "react";
import NavButton from "../NavButton";
import "../NavButton/style.css";

function mapObjectToNavButton(element){
    return <NavButton active={false} text={element.text} target={element.target}/>
}

export default function NavBar(props){

    return (
    <div className="navbar navbar-dark navbar-expand-lg bg-dark container-fluid ">
        <div className="col-lg-5 d-flex flex-row justify-content-end">
                {
                    [{text: "AboutMe", target: "/aboutme"}, {text: "Resume/CV", target: "/resume"}].map(mapObjectToNavButton) 
                }
            </div>
            <span className="navbar-brand col-lg-2 text-center">Alec Greene</span>
            <div className="col-lg-5 d-flex flex-row">
                <NavButton active={false} text="Demos" target={props.targets.demos}/>
                <NavButton active={false} text="Projects" target={props.targets.projects}/>
                <NavButton active={false} text="Assignments" target={props.targets.assignments}/>
        </div>
    </div>);
}