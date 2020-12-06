import React, { useContext, useEffect, useState, useRef } from "react";
import { PageStateContext } from "../../App";
import "./style.css"

// Data imports
import homework from "../../data/homework.json";
import demos from "../../data/demos.json";
import projects from "../../data/projects.json";
import ContactModal from "../Modal";

const categories = ["Demos", "Projects", "Homework",  "Resume", "About Me"];

const pages= {
    "Demos": Object.keys(demos),
    "Projects": Object.keys(projects),
    "Homework": Object.keys(homework),
    "Resume": [],
    "About Me": []
}

function NavBar(props){

    const [state,dispatch] = useContext(PageStateContext);
    const [category, setCategory] = useState(state.breadcrumbs[0]); 
    const pageRow = useRef();
    const contactButton = useRef();

    // Handle Category clicks
    useEffect(() => {
        if(category === "About Me" || category === "Resume"){
            dispatch({
                type: "viewPage",
                payload: [category]
            });
        }
    }, [category]);

    // Hide pageRow on load
    useEffect(() => {
        pageRow.current.classList.add("customCollapse");
    }, [])

    const dispatchHandler = (path) => {
        return () => {
            dispatch({
                type: "viewPage",
                payload: path
            });
            pageRow.current.classList.add("customCollapse");
        }
    }
    
    const categoryHandler = (str) => {
        return () => {
            // If user clicks the category twice toggle the bar
            if(category === str){
                pageRow.current?.classList.add("customCollapse");
            }
            else{
                pageRow.current?.classList.remove("customCollapse");
            }

            setCategory(str);

            // Prevent About Me from revealing pageRow
            if(str === "About Me"){
                pageRow.current?.classList.add("customCollapse");
                return;
            }

        }
    }

    return (
        <div className="navbar navbar-expand-lg sticky-top" id="NavBar">
            <div id="HeaderContainer">
                {/* Toggle Button */}
                <button id="Toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavButtonContainer">
                    <svg id="TogglerIcon" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrows-expand" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"/>
                    </svg>
                </button>

                {/* Contact Button */}
                <button id="ContactButton" type="button" data-toggle="modal" data-target="#ContactModal" ref={contactButton}>
                    Contact Me
                </button>
            </div>

            {/* Link Rows */}
            <div id="NavButtonContainer" className="collapse-show sticky-top d-lg-flex">
                <div id="NavButtonWrapper">
                    {/* Category Buttons */}
                    <div id="CategoryRow" className="navButtonRow">
                        { 
                            categories.map( str => {

                                return <button 
                                        className={"navButton"} 
                                        onClickCapture={ (str === "Resume")? (() => window.open("https://drive.google.com/file/d/1HF8a9SV1PlUHIL7wSlXnKdrYu4m7fQzE/view?usp=sharing", "_url")) : categoryHandler(str)} 
                                        key={str + "btn"}>
                                    <span className={"navButtonText"+ (state.breadcrumbs[0] === str ? " active" : "")} key={str + "text"}>
                                        {
                                            str
                                        }
                                    </span>
                                </button>
                            })
                        }
                    </div>
                    
                    {/* Page Buttons */}
                    <div id="PageRow" ref={pageRow} className="navButtonRow customCollapse">
                        { 
                            pages[category].map( str => {
                                return <button className={"navButton"} type="button" data-toggle="collapse" data-target="#NavButtonContainer" onClickCapture={dispatchHandler([category, str])} key={str + "btn"}>
                                    <span className={"navButtonText" + (state.breadcrumbs[1] === str ? " active" : "")} key={str + "text"}>
                                        {
                                            (category === "Homework") ? 
                                            str.split(" ").map( (word, index) => <>{word} {index === 0 ? <br /> : ""}</>)
                                            : str
                                        }
                                    </span>
                                </button>
                            })
                        }
                    </div>
                </div>   
            </div>
            <ContactModal button={contactButton}/>
        </div>
    );
}

export default NavBar;