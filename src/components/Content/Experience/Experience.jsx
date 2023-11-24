import './Experience.css';
import JobCard from './JobCard/JobCard';
import { jobData } from '../../../data/jobData';
import { useState } from 'react';


function Experience() {
    const [ jobHover, setJobHover ] = useState(false);

    function onMouseEnter() {
        setJobHover(true);
    }
    
    function onMouseLeave() {
        setJobHover(false);
    }
    

  return (
    <section 
        data-section
        id="experience" 
        className='experience-container'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <h2>Experience</h2>
        
        {jobData.map((job) => (
            <JobCard key={job.id} job={job} hover={jobHover}/> 
        ))}

        <a className='resume-link' href='https://drive.google.com/file/d/1VcGDA_grCdhptmYTyOZ91LsKPIuZg0Fn/view?usp=sharing'>View Full Resume </a><i className="fa-solid fa-arrow-right"></i>

    </section>
  )
}

export default Experience