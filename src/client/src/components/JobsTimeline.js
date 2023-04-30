import React from 'react';
import { jobsData } from '../data/data';

const JobsTimeline = () => (
  <div>
    {
                jobsData.map((job) => (
                  <>
                    <div>{job.dates}</div>
                    <h2>jh</h2>
                  </>
                ))
            }
  </div>
);

export default JobsTimeline;
