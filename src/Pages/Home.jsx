import React from 'react'
import{Row,Col} from 'react-bootstrap'
import titleimage from '../assets/mernproject.gif'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
  <div className="container-fluid rounded" style={{backgroundColor:""}}>
  <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                        <h1 className='fw-bolder text-dark'><i class="fa-solid fa-list-check"></i>Project-Fair</h1>
                        <p className='align-items-justify text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi error asperiores, sunt fugiat consectetur totam voluptas tempore exercitationem! Recusandae qui neque, incidunt quod molestiae amet fugit molestias nihil eligendi temporibus.</p>
                         <Link to={'/login'} className='btn btn-warning border border-rounded'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
                    </Col>

                    <Col sm={12} md={6}>
                    <img width={'500px'} src={titleimage} alt="" />
                    </Col>


                </Row>
  </div>
  {/* all projects */}
  <div className="all-projects mt-4">
    <h1 className='fw-bolder text-center'>Explore Your Projects</h1>
<marquee scrollAmount={25}>
    <Row>
      <Col sm={12} md={6} lg={3} >
        <ProjectCard/>
      </Col>
    </Row>
    </marquee>
    <div className="text-center"><Link to={"./projects"}>View More Projects</Link></div>
  </div>
  </>
  )
}

export default Home