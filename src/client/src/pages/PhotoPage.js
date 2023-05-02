import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import AboutMe from '../components/AboutMe';

const PhotoPage = ({ data }) => (
  <section className="photographies centred">
    <aside className="hidden">
      <AboutMe data={data} pageType="photoPage" />
    </aside>

    <div className="photographies-container">
      {/* <div><img alt={description} src="" /></div> */}
      <button type="button">
        <AiFillCaretLeft />
      </button>
      <button type="button">
        <AiFillCaretRight />
      </button>

    </div>
  </section>

);

PhotoPage.propTypes = {
  data: PropTypes.object.isRequired,
};
export default PhotoPage;
