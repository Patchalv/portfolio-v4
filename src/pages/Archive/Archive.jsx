import { Link } from "react-router-dom";
import { projectData } from "../../data/projectData";
import './Archive.css';



function Archive() {
  return (
    <div className="archive dark">

      <div className="archive-container">

        <div className="archive-heading">
          <i className="fa-solid fa-arrow-left"></i><Link to='/' className='back-link' href=''>Patrick Alvarez</Link>   
        </div>
        <h1>All Projects</h1>
        <section>
          <table>
            <thead>
              <tr>
                <th className="archive-year">Year</th>
                <th className="archive-name">Project</th> 
                <th className="archive-description">Description</th> 
                <th className="archive-tags">Built with</th>    
                <th className="archive-links">Links</th>     
              </tr>   
            </thead>

            <tbody>
              {projectData.map((project) => (
                <tr key={project.name}>
                  <td className="archive-year">{project.year}</td>
                  <td className="archive-name">{project.name}</td>
                  <td className="archive-description">{project.description}</td>
                  <td className="archive-tags">
                    <ul className='tags'>
                      {project.tags ? project.tags.map((tag, idx) => <li key={idx}>{tag}</li>) : null}
                    </ul>
                  </td>
                  <td className="archive-links">
                    <ul className='projectLinks'>
                      {project.linkGithub !== '' ? <li><a href={project.linkGithub}className="fa-brands fa-github"></a></li> : null}
                      {project.linkLive !== '' ? <li><a href={project.linkLive} className="fa-solid fa-arrow-up-right-from-square"></a></li> : null}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      
    </div>
      

  )
}

export default Archive