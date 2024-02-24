import React from 'react'
import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';
function Profile() {
  const [open, setOpen] = useState(false);
  return (
  <div className="card shadow p-5 mt-5 me-2" Zindex={"1"}>
<div className="d-flex justify-content-between">
<h1>Profile</h1>
<button  onClick={() => setOpen(!open)} className='btn btn-outside-info'><i class="fa-solid fa-angle-right"></i></button>
</div>
<Collapse in={open} dimension="width">
<div className="row justify content center mt-3">
<label>

<input type="file" style={{display:"none"}} />
<img src="https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif" alt="" width={"200px"} height={"200px"} className='rounded circle'  />
</label>
<div className="mt-3">
<input type="text" className='form-control' placeholder='Github' />
<br />
<input type="text" className='form-control' placeholder='Linkedin' />

</div>
<div className="mt-3 text-align-center d-grid">
<button className='btn btn-warning d-grid'>Update</button>
</div>
</div>
</Collapse>
 </div>
  )
}

export default Profile