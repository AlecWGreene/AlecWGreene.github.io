import React from "react";
import "./style.css";

function AboutMe(props){
    return (
        <div id="AboutMe" className="mx-auto">
                <p>My name is Alec Greene, and thanks for visiting my portfolio! I am a gameplay programmer specializing in AI systems and system design. 
                I am familiar with the Unity and Unreal engines through many courses on Udemy and personal projects. I have been coding since middle school,
                doing projects in C++, python, C#, and JavaScript. I am a very passionate individual, bringing drive, vision, and dedication to every project I participate in. I am relentless in my pursuit of knowledge and 
                my ambition is only superceded by my persistence.</p>
                {<><br/></>}
                <p>The fall of my eigth grade year, my geometry teacher showed me the website Khan Academemy and encouraged me to seek out the answers to questions I had. This seemingly small moment
                turned out to be a crucial turning point, as I began to devour the courses. By the end of my eight grade year, I had self taugh myself precalculus and differential calculus, using the MIT open courseware alongside 
                Khan Academy to teach my self integral calculus over the summer. Leading into Freshman year, I fought with the school to allow me to test out of Algebra II, and used my time in precalculues to study my teacher's old college text books.
                By the end of fall, I had taught myself Multivariable calculus and at the end of the school year was nearly finished with my teacher's differential equations textbook. Concurrently, I was participating in the Michigan 
                Math Mentorship program where I was learning group theory, and had completed a project that my mentor (A post-doc at the University of Michigan) said could be turned into a publication. The last three years of high school, I
                dual-enrolled at the University of Michigan taking the Math 185 course where I eventually got a written recommendation to be moved up to the Math 296 (Abstract Algebra) course the next semester. </p>
                {<><br/></>}
                <p>During first three years after high school, I learned module-based group representation theory in Oxford, England, partcipated in a 2-person independent study on representation theory at UofM, and during my year at UofM I performed research through the UROP program where I wrote a 14 page
                paper <span style={{fontStyle: "italic"}}>On the Approximation of Quatnum using Lattices</span> that was submitted to the journal Quantum Information & Computation. After that year, I struggled with some mental health issues due to some life events. When I emerged from this period of my life, I
                was a little burnt out and lost. However, when I started on the possibility of going into game development, I found my spark again. I have always had an inclination for Game Design; I used to create maps for my brother and I to play in CS:Source using the Hammer SDK, I did the same thing for Age of Mythology,
                 I created different mazes for a month straight in high school to see if I could stump my friend, and I had been playing video games my entire life. I have been playing league of legends on amateur teams for the past 2 years, and have been following the Dev blogs that some of the game developers at Riot write.</p>
                {<><br/></>}
                <p>In the present, I have completed Michigan State's full stack web development bootcamp, and am looking for jobs as a game developer. If you are interested in reaching out to me, professionally or colloquially, click the contact me button on the top right
                and I'll get back to you as soon as I can!</p>
        </div>
    );
}

export default AboutMe;