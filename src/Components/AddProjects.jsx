import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

function AddProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
 <Button variant="info" onClick={handleShow}>
 Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
            <div className="col-lg-6">
            <label>

<input type="file" style={{display:"none"}} />
<img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" width={"200px"}  className='rounded circle'  />
</label>  
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Project Title'    />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"  placeholder='Language Used ' />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder=' Github' />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Website Link' />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Project Overview'/>
                    
                </div>
            </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProjects