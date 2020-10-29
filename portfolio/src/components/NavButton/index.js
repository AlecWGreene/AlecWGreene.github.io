import React from "react";
import { NavLink, Link } from "react-router-dom"; 

export default function NavButton(props){
    return (
        <div className="nav-item">
            <NavLink className={props.active ? "" : "nav-link"} to={props.target || "/"}>{props.text}</NavLink>
        </div>
    );
}