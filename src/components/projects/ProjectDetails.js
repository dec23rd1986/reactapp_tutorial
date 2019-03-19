import React from 'react'

const ProjectDetails= (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title -{id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis enim eius inventore quis sit laudantium, odit dolorem, magni, aliquid eligendi at accusamus officia ipsa! Hic odio iusto quaerat eveniet!</p>
            </div>
            <div className="card-action rey lighten-4 grey-text">
                <div className="">Posted by Net Ninja</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
