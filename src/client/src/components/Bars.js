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
    linkedin: <AiFillLinkedin size="1.5em" />,
    instagram: <AiFillInstagram size="1.5em" />,
    email: <AiFillMail size="1.5em" />,
    github: <AiFillGithub size="1.5em" />,
  };
  return (
    <div className="contact-bar">
      <div>Connect at:</div>
      {contactBarData.map(({ icon, path }, i) => (<div className="contact-bar-icon shadow-box" key={i}><a href={path} key={i}>{icons[icon]}</a></div>))}
    </div>

  );
};
