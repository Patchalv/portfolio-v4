function JobCard({job, hover}) {
    const tags = job.tags;
    const className = hover ? 'jobcard hovered' : 'jobcard' 

 
    return (
    <div className={className}>
        <div className='job-dates-wrapper'>
            <span className="job-dates">{job.dates}</span>
        </div>
        <div className='job-details-wrapper'>
        <a href={job.url} target="_blank" rel="noreferrer"><h3>{job.title} {job.company ? '-' : null} {job.company} <i className="fa-solid fa-arrow-up rotated"></i></h3></a>
            <span className="job-description">{job.description}</span>
            <ul className="achievements">
                {job.achievements ? job.achievements.map((achievement, idx) => <li key={idx}>{achievement}</li>) : null}
            </ul>
            <ul className='tags'>
                    {tags ? tags.map((tag, idx) => <li key={idx}>{tag}</li>) : null}
            </ul>
        </div>      
    </div>
  )
}

export default JobCard