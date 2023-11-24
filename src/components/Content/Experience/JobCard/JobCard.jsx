function JobCard({job, hover}) {
    const tags = job.tags;
    const className = hover ? 'jobcard hovered' : 'jobcard' 

 
    return (
    <div className={className}>
        <div className='job-dates-wrapper'>
            <span className="job-dates">{job.dates}</span>
        </div>
        <div className='job-details-wrapper'>
            <h3>{job.title} - {job.company}</h3>
            <span className="job-description">{job.description}</span>
            <ul className='tags'>
                    {tags ? tags.map((tag, idx) => <li key={idx}>{tag}</li>) : null}
            </ul>
        </div>      
    </div>
  )
}

export default JobCard