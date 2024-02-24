import React from 'react'
import {  Link } from 'react-router-dom'
import { Form } from "react-bootstrap";
function Auth({register}) {

  const isRegisterForm=register?true:false
  return (
    <div style={{width:"100",height:"100vh",marginTop:"100px"}} className='d-flex justify-content-center'>
<div className="container w-75">
<Link to={"/"} style={{textDecoration:"none",color:"blue"}}><i class="fa-solid fa-left-long"></i>Back To Home</Link>
<div className="card shadow p-5 bg-info">
  <div className="row align-items-center">
    <div className="col-lg-6">
      <img src="https://truid.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruid-usecases.90d0a50f.gif&w=828&q=75" className='rounded-start w-100'  alt="" />
    </div>
    <div className="col-lg-6">
<div className="d-flex align-items-center flex-column">
  <h1 className='fw-bolder text-light mt-2'><i class="fa-solid fa-list-check"></i>Project Fair</h1>
<h5 className='fw-bolder mt-4 pb-3 text-light' >
{
isRegisterForm?"Sign Up to Your Account":"Sign In to Your Account"
  }

</h5>

<Form className="text-light w-100">
{
  isRegisterForm && 
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control type="email" placeholder="Enter Username" />
</Form.Group>

}


<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Enter password" />
    
      </Form.Group>
{
  isRegisterForm?
  <div>
    <button className='btn btn-light mb-2'>
      Register
    </button>
    <p>Already an account ?  Click Here to <Link to={'/login'} style={{textDecoration:"none", color:"blue"}}>Login</Link></p>
  </div>:
    <div>
    <button className='btn btn-light mb-2'>
      Login
    </button>
    <p>Doesn't have any Account? Click Here to <Link to={'/register'} style={{textDecoration:"none", color:"red"}}>Register</Link></p>
  </div>
}





</Form>









</div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Auth