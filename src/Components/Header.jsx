import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {Container  } from 'react-bootstrap';
function Header({insideDashboard}) {
  return (
    <div>
      <Navbar className=" position-fixed top-0 w-100" style={{backgroundColor:"blue"}}>
        <Container>
          <Navbar.Brand>
          <Link to={"/"} style={{textDecoration:"none",color:"black", fontSize:"30px"}}><i class="fa-solid fa-list-check me-2"></i>
            Project Fair</Link>
          </Navbar.Brand>
          {
          insideDashboard &&
          <button className="btn align-items-right border">Logout</button>

          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header