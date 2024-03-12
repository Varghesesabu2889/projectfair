import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'

function AddProjects() {

  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",github:"",website:"",overview:"",projectimage:""
  })
  console.log(projectDetails);
    const [show, setShow] = useState(false);

    const handleClose = () =>{ setShow(false)
    setProjectDetails({
      title:"",languages:"",github:"",website:"",overview:"",projectimage:""

    })
    setPreview("")
    }
    const handleShow = () => setShow(true);

    const [preview,setPreview] =useState("")

    useEffect(()=>{
      if(projectDetails.projectimage){
        setPreview(URL.createObjectURL(projectDetails.projectimage))
      }
    },[projectDetails.projectimage])
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

<input type="file" style={{display:"none"}} onChange={e=>setProjectDetails({...projectDetails,projectimage:e.target.files[0]})}/>
<img src={preview?preview:"https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} alt="" width={"200px"}  className='rounded circle' 
/>
</label>  
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Project Title'  
                    value={projectDetails.title}
                    onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}
                    />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"  placeholder='Language Used ' 
                     value={projectDetails.languages}
                     onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}


                    />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder=' Github'
                      value={projectDetails.github}
                      onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Website Link' 
                     value={projectDetails.website}
                     onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}
                       />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Project Overview'
                    value={projectDetails.overview}
                    onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}
                    />
                    
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