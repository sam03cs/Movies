import './Profile.css'
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7"> 
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://img.freepik.com/premium-vector/popcorn-striped-tub_157999-54.jpg?w=2000"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
              </div>
              </MDBCard>
              <MDBTypography tag="h5">Joe Derbit</MDBTypography>
                  <MDBCardText>Avid Movie Watcher</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">JoeDerb@Gmail.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">777 777 7777</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
              <MDBCardBody className="text-black p-4">
                <MDBRow>
                </MDBRow>
              </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}





