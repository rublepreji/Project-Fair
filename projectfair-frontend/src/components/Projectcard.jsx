import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import  { useState } from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { serverURL } from '../../Services/ServerURL';

function Projectcard({project}) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  return (
    <div>
       <MDBCard>
      <MDBCardImage onClick={toggleOpen} src={project ?`${serverURL}/uploads/${project.projectImg}`:'https://th.bing.com/th/id/OIP.OT_ie6721ArOvHdnZVSP4gHaE9?rs=1&pid=ImgDetMain'} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{project.title}</MDBCardTitle>
        
        
      </MDBCardBody>
    </MDBCard>

    <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="container">
              <div className="row">
                <div className="col-6">
                  <img width={'100%'} height={'300px'} src={project ?`${serverURL}/uploads/${project.projectImg}`:"https://th.bing.com/th/id/R.6ee8c948ace2b72d655e4c8e47b28eef?rik=ez6gEUgaRB9s9w&riu=http%3a%2f%2fandrey-eltsov.ru%2fwp-content%2fuploads%2f2020%2f03%2fgfr5v7bh_g232323xd-v_8-4g-j_49fr_j-komp2a.jpg&ehk=W4eYc4gKaK6tiJRnrHj8RqiFNhmzkxtuT6xCWHVjvrc%3d&risl=&pid=ImgRaw&r=0"} alt="Project Image" />
                </div>
                <div className="col-6">
                  <h4>Description</h4>
                  <p>{project.overview}</p>
                  <h4>Technologies</h4>
                  <p>{project.language}</p>
                  <h5>View on</h5>
                  <MDBBtn color='secondary' onClick={toggleOpen}>
                  <FaGithubSquare href={project.gitHub} className='fs-3' /> 
                  </MDBBtn>
                  <MDBBtn color='secondary' onClick={toggleOpen}>
                  <FaLink href={project.website} className='fs-3' />
                  </MDBBtn>  
                </div>
              </div>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  )
}

export default Projectcard