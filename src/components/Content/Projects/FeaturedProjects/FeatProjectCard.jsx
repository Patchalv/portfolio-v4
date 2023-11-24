function FeatProjectCard({ hovered, name, description, tags, linkLive, linkGithub, image }) {
    const projectTags = tags;
    const className = hovered ? 'featProject hovered' : 'featProject' 

 
    return (
    <div className={className}>
        <div className='featProject-image-wrapper'>
            <img src={image} width='100%'/>
        </div>
        <div className='featProject-details-wrapper'>
            <h3>{name}</h3>
            <span className="featProject-description">{description}</span>
            <ul className='projectLinks'>
                <li><a href={linkGithub} className="fa-brands fa-github"></a></li>
                <li><a href={linkLive} className="fa-solid fa-arrow-up-right-from-square"></a></li>
            </ul>
        
            <ul className='tags'>
                    {projectTags ? projectTags.map((tag, idx) => <li key={idx}>{tag}</li>) : null}
            </ul>
        </div>      
    </div>
  )

}

export default FeatProjectCard