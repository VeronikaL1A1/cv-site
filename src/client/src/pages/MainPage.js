import React from 'react';
// import PropTypes from 'prop-types';
// import { ContactBar } from '../components/Bars';
import AboutMe from '../components/AboutMe';
import JobsTimeline from '../components/JobsTimeline';
import { hobbies } from '../data/data';

const MainPage = () => (
  <div className="main-container">
    <div className="main-container-about">
      <aside>
        <div className="hobbies">
          <div className="title">
            My hobbies
            <br />
            and
            <br />
            passions
          </div>
          <ul>
            {hobbies.map((hobby, i) => (
              <li key={i}>
                <span> ∞</span>
                {hobby}
                <span> ∞</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <AboutMe pageType="mainPage" />
    </div>
    <section>
      <h1>Professional experience</h1>
      <JobsTimeline />
    </section>
  </div>
);

export default MainPage;
