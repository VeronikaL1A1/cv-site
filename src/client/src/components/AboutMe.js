import React from 'react';

import PropTypes from 'prop-types';
import {
  DiReact, DiJavascript1, DiCss3, DiHtml5, DiGit,
} from 'react-icons/di';

import PhotoMe from '../assets/pictures/PhotoMe.jpg';

const AboutMe = ({ pageType, data }) => {
  const icons = [
    <DiReact fill="#61dbfb" size="2em" />,
    <DiJavascript1 fill="#f7d801" size="2em" />,
    <DiCss3 fill="#014ae0" size="2em" />,
    <DiHtml5 fill="#e96228" size="2em" />,
    <DiGit fill="#e94e31" size="2em" />,
  ];

  const skillBadges = (
    <div className="skill-badges">
      { icons.map((icon, i) => (<div className="skill-badges-single shadow-box" key={i}>{icon}</div>))}
    </div>
  );

  console.log(data);
  return (
    <section className={`profile ${pageType}`}>
      <img alt="author profile" id="profile-pic" src={PhotoMe} />
      { data.error && (
        <p>
          Sorry, no github data:
          {' '}
          {data.error}
        </p>
      )}
      {Object.keys(data) === 0 && (
        <h3>Loading github data ...</h3>
      )}
      <h1 className="title-font centred-text">
        {data.name}
      </h1>
      <p className="profile-bio">{data.bio}</p>
      {pageType === 'mainPage' ? skillBadges : null}
    </section>
  );
};

AboutMe.propTypes = {
  pageType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default AboutMe;
