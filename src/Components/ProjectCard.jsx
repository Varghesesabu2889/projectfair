import React, { useState } from 'react'
import projectimg from '../assets/pro.png'
import project from '../assets/reactpro.jpg'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {Row,Col} from 'react-bootstrap'

function ProjectCard() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
       <Card style={{ width: '18rem' }} className='mt-3 mb-3'>
      <Card.Img  src={projectimg} onClick={handleShow} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        </Card.Body>    
    </Card> 

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Row>
  <Col md={6}>
    <img src={project} alt="project img" style={{width:'250px', height:'200px'}} className='img-fluid'/>
  </Col>
  <Col md={6}>
    <h2>Project Title</h2>
<p>Project Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Praesentium vitae nobis expedita atque maiores dolorem officia at architecto dolor,
   consequuntur dicta! Temporibus doloribus, itaque fugiat quia ab dignissimos rerum qui!</p>
   <p>Languages Used: <span className='fw-bolder'>HTML,CSS,BOOTSTRAP</span></p>
  </Col>
</Row>
<div>
  <a href="" className='me-2 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
  <a href="" className='me-2 btn text-dark'><i class="fa-solid fa-link"></i></a>

</div>




        </Modal.Body>
       
      </Modal>





















    </>
  )
}

export default ProjectCard