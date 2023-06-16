import React,{useEffect} from 'react'
import FootAll from '../Footers/FootAll'
import BannerImage from '../Banners/BannerImage'

const Codestorm = () => {
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
      <h1>Codestorm | IIT Una</h1>
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
      <span>Who tcan participate:</span>
      <p>Codestorm coding contests is open to programmers from IIT Una.</p>
      <p>&nbsp;</p>
      <span>About the contest:</span>
      <p> In this contest, the coders compete while also improving their overall algorithmic knowledge. The coding contest helps students and professionals to tackle a problem by reading the concepts one doesn't know, and also gain practical experience by coding the solution to the problem, thus improving their skills significantly. This coding competition packs the excitement of programming with the fun of learning into one compelling challenge. Don't forget to try out a sample problem if you are new to Coding Ninjas Studio.</p>
      {/* <p>&nbsp;</p> */}
      
      </div>
   
    </div>
    <BannerImage/>
    <FootAll/>

    </>
  )
}

export default Codestorm