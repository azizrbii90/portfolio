import React from 'react'
import './project-card.css'

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
            {project.demo&&( 
                <a className="project-link" href={project.demo}>
                    <div className="link-button">
                        <i className="fi-rr-globe">Demo</i>
                    </div>
                </a>
            )}
               {project.github&&( 
                <a className="project-link" href={project.github}>
                    <div className="link-button">
                        <i className="devicon-github-original colored">Github</i>
                    </div>
                </a>
            )}
        </div>
        <p>
            {project.about}
        </p>
        <div className="project-tags"> 
                {project.tags.map((tag, index) => {
                    return (
                        <label className="tag">{tag}</label>
                    )
                })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  )
}

export default ProjectCard
