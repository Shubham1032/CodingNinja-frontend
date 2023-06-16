import React,{useState,useRef,useContext} from 'react'
import UserEnter from '../UserPages/UserEnter';
import { store } from '../Context/User';
import {useNavigate} from 'react-router-dom'
import Workexperience from '../Components/Workexperience';

const Navbar = () => {
  const Navigate = useNavigate();
  const {user,setUser} = useContext(store)
  const [navcolor,setNavcolor] = useState(false);
  // const [showNavExternal, setShowNavExternal] = useState(false);
  const [seen, setSeen] = useState(false);
  const [userShow,setUserShow] = useState(false);
  const [data,setData] = useState({});
 const login = useRef();
 const username = useRef()
 function show(){
  if(userShow === false){
    username.current.style.display='none'
    
  }
  if(userShow === true){
    username.current.style.display='block'
     login.current.style.display='none'

  }
}
  function togglePop (user) {
      setSeen(!seen);
      console.log("user coming from login popup",user)
      setUserShow(true)
      setData(user)
      console.log(data)
      show()
  };
  function profilepage (){
    Navigate("/multi-step-form")
  }

window.addEventListener('scroll',()=>{
  if(window.scrollY > 50){
  setNavcolor(false)
}else  {
  setNavcolor(true)
}})
window.addEventListener('resize',()=>{
  if(window.innerWidth < 1000){
    console.log("innerWidth")
  }
})
  return (
    <>
     <div id='mainNavbar' className={navcolor ? "mainNavbar-nocolor" : "mainNavbar-color"}>
        <div className='subNavbar'>
     <div className='child' style={{justifyContent:'center',alignItems:'center'}}>
        <img src='https://www.codingninjas.com/careercamp/wp-content/uploads/2022/06/logo-05.png' alt='not found' width='70px' color='white' style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}/>
     </div>
     <div className='child child2'>
     
     <div class="dropdown">
  <button class="dropbtn">Courses</button>
  <div class="dropdown-content">
<Workexperience/>
  </div>
</div>   
</div>
     <div className='child child3'>
     <div class="dropdown">
  <button class="dropbtn">Scholorship</button>
  <div class="dropdown-content">
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
  </div>
</div> 
     </div>
     <div className='child child4'>
     <div class="dropdown">
  <button class="dropbtn">Community</button>
  <div class="dropdown-content">
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
  </div>
</div> 
     </div>
     <div className='child child5'>
     <div class="dropdown">
  <button class="dropbtn">Practice</button>
  <div class="dropdown-content">
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
    <div>Contest</div>
    <div>Guided Paths</div>
    <div>Code Problems</div>
    <div>Interview Experiences</div>
    <div>Mock Test</div>
  </div>
</div> 
     </div>
     <div className='child child6'>
     <img src='https://www.codingninjas.com/careercamp/wp-content/uploads/2022/06/logo-05.png' alt='not found' width='70px' color='white' style={{backgroundColor:'white'}}/>

     </div>
     <div className='child child7'>
    
<button ref={login} onClick={togglePop} className='loginBtn'>Login</button>
<button ref={username} className='afterlogin' style={{display:'none'}} onClick={profilepage}>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <p style={{justifyContent:'center',alignItems:'center',paddingTop:"5px"}}>My classroom</p>
    <p className='nav-name'>s</p>
   </div>
  
  </button>
     </div>
     <div className='child child8'>
    <button className='enrollBtn' onClick={()=>{
        window.scrollTo({
          top: 2800,
          // left: 100,
          behavior: "smooth",
        });
    }}>Enroll Now</button>
     </div>
        </div>
     </div>

            {seen ? <UserEnter toggle={togglePop} /> : null}



    </>
  )
}

export default Navbar