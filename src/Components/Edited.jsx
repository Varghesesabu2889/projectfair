import React, { useEffect, useState } from 'react'
import { Button,Modal} from "react-bootstrap"
import { BASE_URL } from './services/baseurl';
import { editProjectAPI } from './services/allAPI';


function Edited({project}) {

  const [projectDetails,setProjectDetails] = useState({
    title:project.title,languages:project.languages,github:project.github,website:project.website,overview:project.overview,projectImage:""
  })
    const [show, setShow] = useState(false);

    const [preview,setPreview] =useState("")

    const handleClose = () => {
      setShow(false)
    setProjectDetails({
      title:project.title,languages:project.languages,github:project.github,website:project.website,overview:project.overview,projectImage:""
 
    })
   setPreview("")
    }
    const handleShow = () => setShow(true);

    useEffect(()=>{
      if(projectDetails.projectImage){
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])

const  handleupdate = async ()=>{
  const {title,languages,github,website,overview,projectImage} = projectDetails
  if(!title|| !languages|| !github|| !website|| !overview|| !projectImage){
    alert("please fill the missing fields")
  }else{
    const reqBody = new FormData()
    reqBody.append('title',title)
    reqBody.append('languages', languages)
    reqBody.append('github', github)  
    reqBody.append('website', website)
    reqBody.append('overview', overview)  
    reqBody.append('projectImage', projectImage)
    preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
    const token = sessionStorage.getItem("token")
    if(preview){
const reqHeader ={
  "Content-Type": "multipart/json",
  "Authorization":`Bearer ${token}`

}
//api call
const result = await editProjectAPI(reqBody,reqHeader)
if(result.status === 200){
  handleClose()
  //pass the responce to the projects
}else{
  console.log(result);
  alert(result.response.data)
}
}else{
  const reqHeader ={
  "Content-Type": "application/json",
  "Authorization":`Bearer ${token}`
}
//api cal
const result = await editProjectAPI(reqBody,reqHeader)
if(result.status === 200){
  handleClose()
  //pass the responce to the projects
}else{
  console.log(result);
  alert(result.response.data)
}
    }
  }
}
  



  return (

    <>
    <button className='btn' onClick={handleShow}><i class="fa-solid fa-pen-to-square" style={{color:'black'}}></i></button>
   
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

<input type="file" style={{display:"none"}} onChange={e=>setProjectDetails({...projectDetails,
projectImage:e.target.files[0]})}/>
<img src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="" width={"300px"} />
</label>  
            </div>
            <div className="col-lg-6">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Project Title'  
                    value={project?.title}
                    onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}
                    />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"  placeholder='Language Used ' 
                     value={project?.languages}
                     onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" placeholder=' Github'
                      value={project?.github}
                      onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Website Link' 
                     value={project?.website}
                     onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}
                       />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"   placeholder='Project Overview'
                    value={project?.overview}
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
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Edited