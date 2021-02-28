import React from 'react';
import ProjectSummary from './summary';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
           { projects && projects.map(project => {
               return (
                   <ProjectSummary project={project} key={project.id} />
               )
           })}
        </div>

    )
}

export default ProjectList;
