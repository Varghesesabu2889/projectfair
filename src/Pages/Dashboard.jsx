import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
function Dashboard() {
  return (
   <>
   <Header insideDashboard />
   <Row style={{marginTop:"100px"}}>
   <Col sm={12} md={8}>

<h2>Welcome <span className='text-warning'>User</span></h2>

{/* My projects */}
<MyProjects/>


     </Col>
     <Col sm={12} md={4}>


{/*  Profile */}
<Profile/>


     </Col>
     </Row>
   </>
  )
}

export default Dashboard