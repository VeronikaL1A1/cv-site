import React from 'react';
import PropTypes from 'prop-types';

import { DiReact, DiJavascript1, DiCss3, DiHtml5, DiGit } from "react-icons/di";

import PhotoMe from "../assets/pictures/PhotoMe.jpg"

const AboutMe = ({pageType}) => {
    
    const icons = [
        <DiReact fill="#61dbfb" size="2em"/>,
        <DiJavascript1 fill="#f7d801" size="2em"/>,
        <DiCss3 fill="#014ae0" size="2em"/>,
        <DiHtml5 fill="#e96228" size="2em"/>,
        <DiGit fill="#e94e31" size="2em"/>
    ];

    const skillBadges = (
        <div className='skill-badges'>
           { icons.map((icon, i)=>{return (<div className='skill-badges-single' key={i}>{icon}</div>)})}
        </div>
    );

    return (
        <div className={`profile-container ${pageType}`}> 
         <img alt="author profile" id= "profile-pic" src={PhotoMe}/>
         <p>sdgfsdgsdg
            sdgfsdgsdgsdfsdg
         </p>
         {pageType === 'mainPage' ? skillBadges : null}
        </div>
    )

};

export default AboutMe;