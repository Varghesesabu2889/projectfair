import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import{Row,Col} from 'react-bootstrap'
function Projects() {
  return (
    <>
    <Header/>
    <div style={{marginTop:"100px"}} className='projects'>
<h1 className="text-center mb-5">All Projects</h1>
<div className="d-flex justify-content-center align-items-center w-100">
  <div className="d-flex border w-50 rounded mb-3">
    <input type="text" className="form-control" placeholder='Search Project by Technologies'/>
    <i style={{marginLeft:"-50px"}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
  </div>
  
</div>
<Row>
  <Col>
  <ProjectCard/>
  </Col>
</Row>
      
      
    </div>
    </>
  )
}

export default Projects