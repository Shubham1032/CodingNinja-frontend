import React,{useEffect} from 'react'
import BannerImage from '../Banners/BannerImage'

const Bitblitz = () => {
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
    <div style={{paddingLeft:'10px',paddingRight:'10px'}}>
        <img src='https://files.codingninjas.in/bitblitz-web-1-27873.png' width='100%' />
    </div>
    <div className='upcomingEventsPageMainContainer'>
      <h1>BitBlitz || IEEE WIE MUJ </h1>
      <div className='smallflex'>
        <button>REGISTER NOW</button>
        <p>
        <img src='https://files.codingninjas.in/0000000000001017-24792.png' width='15px'  style={{margin:'0 5px 0 0'}}/>
            
            STARTS ON &nbsp;
            <span>06:00 PM ,10 JUN 2023</span>
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
      <span>Who can participate :</span>
      <p>Coding Ninjas Studio Special coding contests are open to students of the college for which the contest is created. Everyone, from freshers to professionals, can participate in this contest.</p>
      <p>&nbsp;</p>
      <span>About the contest: </span>
      <p> In this contest, the coders compete while also improving their overall algorithmic knowledge. The coding contest helps students and professionals to tackle a problem by reading the concepts one doesn't know, and also gain practical experience by coding the solution to the problem, thus improving their skills significantly. This coding competition packs the excitement of programming with the fun of learning into one compelling challenge. Don't forget to try out a sample problem if you are new to the platform.</p>
      <p>&nbsp;</p>
      
      </div>
    </div>
   <BannerImage/>
    <FootAll/>

    </>
  )
}

export default Bitblitz