import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addProjectAPI } from '../../Services/AllApi';
function Addproject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {addProjectContext,setAddProjectContext}=useContext(addProjectContextResponse)
  const [projectDetails,setProjectdetails]=useState({
    title:"",
    language:"",
    gitHub:"",
    website:"",
    overview:"",
    projectImg:""
  })
  const handleAddproject=async()=>{
    console.log(projectDetails);
    const {title,language,gitHub,website,overview,projectImg}=projectDetails
    if(!title || !language || !gitHub || !website || !overview || !projectImg ){
      alert("Please fill the project details")
    }
    else{
      const reqbody = new FormData()
      reqbody.append('title',title)
      reqbody.append('language',language)
      reqbody.append('gitHub',gitHub)
      reqbody.append('website',website)
      reqbody.append('overview',overview)
      reqbody.append('projectImg',projectImg)

      const token=sessionStorage.getItem("token")
      console.log(token);
      
     if(token){
      const reqheader={
        "content-Type":"multipart/form-json",
        "Authorization":`Bearer ${token}`
      }
      try{
       
        const response =await addProjectAPI(reqbody,reqheader)
        console.log(response);
        setAddProjectContext(response)
        if(response.status==200){
          alert('project added successfully')
          handleClose()
          setProjectdetails({
            title:"",
            language:"",
            gitHub:"",
            website:"",
            overview:"",
            projectImg:""
          })

        }else{
          alert(response.response.data)
        }
        
      }catch(err){
        alert(err)
      }
     }
   
    }
    
  }

  const [preview,setpreview]=useState('')

  //Image file to url convertion

  useEffect(()=>{
   if(projectDetails.projectImg){
    setpreview(URL.createObjectURL(projectDetails.projectImg))
   }
  },[projectDetails.projectImg])

  return (
    <div>
       <Button variant="dark" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Name</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-6 p-3">
            <label >
              <input onChange={e=>setProjectdetails({...projectDetails,projectImg:e.target.files[0]})} type="file" style={{display:'none'}}/>
              <img width={350} height={350} src={preview?preview:"https://cdn.iconscout.com/icon/premium/png-512-thumb/project-management-34-887151.png"} alt="" />
            </label>
            <p className='text-danger'>Only allowes following file type foemats .png, .jpng, .jpg</p>
          </div>
          <div className="col-6">
          <FloatingLabel controlId="floatingInput" onChange={e=>setProjectdetails({...projectDetails,title:e.target.value})} label="Title"className="mb-3">
          <Form.Control type="text" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" onChange={e=>setProjectdetails({...projectDetails,language:e.target.value})} label="Language"className="mb-3">
          <Form.Control type="text" placeholder="Language" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" onChange={e=>setProjectdetails({...projectDetails,gitHub:e.target.value})} label="GitHub"className="mb-3">
          <Form.Control type="text" placeholder="GitHub" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" onChange={e=>setProjectdetails({...projectDetails,website:e.target.value})} label="WebSite"className="mb-3">
          <Form.Control type="text" placeholder="WebSite" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" onChange={e=>setProjectdetails({...projectDetails,overview:e.target.value})} label="Overview"className="mb-3">
          <Form.Control type="text-area" placeholder="Overview" />
          </FloatingLabel>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAddproject} >Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject