import React from 'react';
import { jobsData } from '../data/data';

const JobsTimeline = () => (
  <div className="jobs-container">
    {
                jobsData.map((job) => (
                  <>
                    <div className="jobs-dates centred-text">
                      {' '}
                      <hr />
                      {job.dates}
                      <hr />
                    </div>
                    <h2>
                      {job.companyName}
                      {' '}
                      -
                      {' '}
                      <span>
                        {job.position}
                      </span>
                    </h2>

                    <p>{job.description}</p>
                  </>
                ))
            }
  </div>
);

export default JobsTimeline;
