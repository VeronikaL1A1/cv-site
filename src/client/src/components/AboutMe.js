import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  DiReact, DiJavascript1, DiCss3, DiHtml5, DiGit,
} from 'react-icons/di';

import PhotoMe from '../assets/pictures/PhotoMe.jpg';
// import fetchData from '../utils/utils';

const AboutMe = ({ pageType }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/VeronikaL1A1').then((response) => setData(response.data)).catch((error) => {
      const replacementData = {
        error: error.message,
        name: 'Veronika Lacusova',
        bio: 'Junior frontend developer with beginner experience in backend NodeJS programming. Keen to learn new technologies, DevOps tools and full stack.',
      }; setData(replacementData);
    });
  }, []);

  const icons = [
    <DiReact fill="#61dbfb" size="2em" />,
    <DiJavascript1 fill="#f7d801" size="2em" />,
    <DiCss3 fill="#014ae0" size="2em" />,
    <DiHtml5 fill="#e96228" size="2em" />,
    <DiGit fill="#e94e31" size="2em" />,
  ];

  const skillBadges = (
    <div className="skill-badges">
      { icons.map((icon, i) => (<div className="skill-badges-single" key={i}>{icon}</div>))}
    </div>
  );

  return (
    <section className={`profile ${pageType}`}>
      <img alt="author profile" id="profile-pic" src={PhotoMe} />
      {data.error ? (
        <p>
          {data.error}
        </p>
      ) : null}
      <h1>
        {data.name}
      </h1>
      <p className="profile-bio">{data.bio}</p>
      {pageType === 'mainPage' ? skillBadges : null}
    </section>
  );
};

AboutMe.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default AboutMe;
