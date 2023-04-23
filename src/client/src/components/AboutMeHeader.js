import React from 'react';
import PropTypes from 'prop-types';

import PhotoMe from "../assets/pictures/PhotoMe.jpg"
import htmlPicture from "../assets/pictures/html5.jpeg";

const AboutMeHeader = ({pageType}) => {
    const skillBadges = (
        <div>
            <img src={htmlPicture}/>
        </div>
    )
return (
    <div className={`header-container-${pageType}`}>
        <img src={PhotoMe}/>
        <p></p>
        {pageType === 'mainPage' ? skillBadges : null}
    </div>
)

};

export default AboutMeHeader;