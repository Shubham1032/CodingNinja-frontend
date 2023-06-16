import React,{useEffect,useState,useContext} from 'react'
import { store } from '../Context/User';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import './profile.css'
import {MDBCard,
        MDBCardBody,MDBCardImage,MDBBtn,MDBRow,MDBCol,MDBCardText} from 'mdb-react-ui-kit'


const ProfilePage = () => {
  const {user,setUser} = useContext(store)
  console.log(user)
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    async function foo (){
      try {
        const a = localStorage.getItem('token');
        console.log(a)
        const {data} = await axios.post("http://localhost:4000/getcoursesonly",{id:user._id})
        setCart(data)  
        console.log(cart)
      } catch (error) {
        console.log(error.message)
      }
      
    }
   foo()
  },[])
  return (
    <>
    <div className='profilePageMainDiv'>

     <div className='profile-first-head'>
      <li>Home</li>
      <li>User</li>
     </div>
     
     <div className='profile-avtart-info-div'>
        {/* <img src='https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png' width='100px'/> */}
       {/* <div className='avatar'>
      </div>
      <div>Jhon Smith</div>
      <div>Full stack developer</div>  */}
       <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <button className='logout-btn'>Logout</button>
              </MDBCardBody>
            </MDBCard>
     </div>
     {/* <MDBCol > */}
     <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            {/* </MDBCol> */}

        {
          cart && cart.map((data,index)=>{
            return (
              <div className='prchased-Card-main'>
                <div className='haed-card-own' style={{display:'flex'}}>
                  <h2>{data.name}</h2>
                  <div><img src={data.logo} /></div>
                </div>
                <div  style={{display:'flex'}}> 
                  <div className='pb'>{data.hours}+ Hours</div>
                  <div>{data.problems}</div>
                </div>
                <div  style={{display:'flex'}}>
                  <h5>{data.rating}</h5>
                  <Rating name="half-rating" defaultValue={4.8} precision={0.1} readOnly size='small'/>
                  <div>({data.stodents}k)</div>
                </div>
              </div>
              )
          })
        }
     
    </div>
    </>
  )
}

export default ProfilePage