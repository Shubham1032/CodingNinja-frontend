import React,{useEffect} from 'react'
import FootAll from '../Footers/FootAll'
import BannerImage from '../Banners/BannerImage'

const Jabalpur = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // left: 100,
      behavior: "smooth",
    });
  },[])
  return (
    <>
    {/* <Navbar/> */}
    <div >
        <img src='https://files.codingninjas.in/coding-event-desktop-27799.jpg' width='100%' />
    </div>
    <div className='upcomingEventsPageMainContainer'>
      <h1>PAT || KPIT || Shri Ram Group Jabalpur</h1>
      <div className='smallflex'>
        <button>REGISTER NOW</button>
        <p>
        <img src='https://files.codingninjas.in/0000000000001017-24792.png' width='15px'  style={{margin:'0 5px 0 0'}}/>
            
            STARTS ON &nbsp;
            <span>07:00 PM ,8 JUN 2023</span>
        </p>
        <p>
            <img src='https://files.codingninjas.in/0000000000001018-24793.png' width='15px' style={{margin:'0 5px 0 0'}}/>
            PRICE &nbsp;
            <span>FREE</span>
        </p>
        <p>
        <img src='https://files.codingninjas.in/0000000000001019-24794.png' width='15px'  style={{margin:'0 5px 0 0'}}/>
            VENUE &nbsp;
            <span>CODING NINJAS STUDIO</span>
        </p>
      </div>
      <hr></hr>
      <h3> Description</h3>
      <div className='smallContainer2'>
    
      <p>Ready to solve fun, challenging problems? Coding Ninjas is hosting the "KPIT Placement Assessment Test" in collaboration with "Shriram group of Institution ", giving you the opportunity to test and grow your coding abilities while getting a sample of the programming skills needed for a technical career.</p>
      <p>&nbsp;</p>
      <p> Date: 8 june 2034</p>
      {/* <p>&nbsp;</p> */}
      <p>Time : 07:00 - 08:00 PM </p>
      {/* <p>&nbsp;</p> */}
      <p>Duration : 60 MIN</p>
      {/* <p>&nbsp;</p> */}
      <p>So don't wait. Register today and give your caeer that much-needed boost! Participate and test your skills!</p>
      </div>
   
    </div>
    <BannerImage/>
    <FootAll/>

    </>
  )
}

export default Jabalpur