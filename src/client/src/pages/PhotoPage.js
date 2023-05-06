import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import AboutMe from '../components/AboutMe';
import { pictures } from '../data/data';

const PhotoPage = ({ data }) => {
  const [picNum, setPicNum] = useState(0);
  return (
    <section className="photographies centred">
      <aside className="hidden">
        <AboutMe data={data} pageType="photoPage" />
      </aside>

      <div className="photographies-container">
        <div className="photographies-carussel">
          <img alt="myown" className="photographies-carussel-content" src={pictures[picNum]} />
        </div>
        <div className="photographies-btns">
          <button type="button" onClick={() => picNum > 0 && setPicNum(picNum - 1)}>
            <AiFillCaretLeft />
          </button>
          <button type="button" onClick={() => picNum < (pictures.length - 1) && setPicNum(picNum + 1)}>
            <AiFillCaretRight />
          </button>

        </div>

      </div>
    </section>

  );
};

PhotoPage.propTypes = {
  data: PropTypes.object.isRequired,
};
export default PhotoPage;
