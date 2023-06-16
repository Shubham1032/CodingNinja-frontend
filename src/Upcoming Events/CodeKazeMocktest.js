import React,{useEffect} from 'react'
import FootAll from '../Footers/FootAll'
import BannerImage from '../Banners/BannerImage'

const CodeKazeMocktest = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // left: 100,
      behavior: "smooth",
    });
  },[])
  return (
    <> <div>
    <img src='https://files.codingninjas.in/coding-event-desktop-27601.jpg' width='100%' />
</div>
<div className='upcomingEventsPageMainContainer'>
  <h1>CodeKaze june'23 Round 1 Mock Test</h1>
  <div className='smallflex'>
    <button>REGISTER NOW</button>
    <p>
    <img src='https://files.codingninjas.in/0000000000001017-24792.png' width='15px'  style={{margin:'0 5px 0 0'}}/>
        
        STARTS ON &nbsp;
        <span>12:30 PM ,25 MAY 2023</span>
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
  <p>Prepare yourself for the biggest pan-India hiring challenge, 'Codekaze'23' , by taking the mock test for Round 1. This round of the contest consists of aptitude questions only, and taking this mock test will help you become familiar with the platform. So invite your friends and challenge them and train yourself for Codekaze'23.</p>
  <p>&nbsp;</p>
  <p> <span>Format of the round</span></p>
  <p>&nbsp;</p>
  <ul>
    <li><span>Uestions type : </span>Aptitude question (30)</li>
    <li><span>Time : </span> 1 hr</li>
    <li><span>Platform : </span>Coding Ninjas Studio</li>
  </ul>
  </div>
</div>
<BannerImage/>
<FootAll/>

</>
  )
}

export default CodeKazeMocktest