import React from 'react';
import PropTypes from 'prop-types';
// import { ContactBar } from '../components/Bars';
import AboutMe from '../components/AboutMe';
import JobsTimeline from '../components/JobsTimeline';
import { hobbies } from '../data/data';

const MainPage = ({ data }) => (
  <section className="main">
    <div className="main-about centred">
      <aside className="hobbies hidden">
        <div className="title title-font">
          My hobbies
          <br />
          and
          <br />
          passions
        </div>
        <ul>
          {hobbies.map((hobby, i) => (
            <li key={i}>
              <hr />
              {hobby}
              <hr />
            </li>
          ))}
        </ul>
      </aside>
      <AboutMe data={data} pageType="mainPage" />
    </div>
    <section className="jobs">
      <h1 className="title-font centred-text">Professional experience</h1>
      <JobsTimeline />
    </section>
  </section>
);

MainPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MainPage;
