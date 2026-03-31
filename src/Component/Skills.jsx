import React from "react";
import './Skills.css';
const Skills=()=>{
    const skills=[
    {name:"HTML",percent:90},
    {name:"CSS",percent:85},
    {name:"JavaScrpt",percent:60},
    {name:"React",percent:40},
]
   return (

    <div className="skills">
        <h2>Skills</h2>
        {skills.map((skills, index)=>(
           <div className="skill" key={index}>
            <div className="skill-info">
                <span>{skills.name}</span>
                <span>{skills.percent}%</span>
            </div>
<div className="progress-bar">
    <div className="progress" style={{width:`${skills.percent}%`}}>
    </div>
   </div>
</div> 
        ))}
    </div>
)
};
export default Skills
