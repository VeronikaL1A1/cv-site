import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
  AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMail,
} from 'react-icons/ai';

import { contactBarData } from '../data/data';

export const NavBar = () => (
  <nav className="nav-bar">
    <NavLink to="/">Curriculum Vitae</NavLink>
    <NavLink to="/photographies">Photographies</NavLink>
  </nav>
);

export const ContactBar = () => {
  const icons = {
    linkedin: <AiFillLinkedin />,
    instagram: <AiFillInstagram />,
    email: <AiFillMail />,
    github: <AiFillGithub />,
  };
  return (
    <div>
      {contactBarData.map(({ icon, path }, i) => (<a href={path} key={i}>{icons[icon]}</a>))}
    </div>

  );
};
