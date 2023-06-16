import React,{useEffect} from 'react'
import Navbar from '../Headers/Navbar'
import FootAll from '../Footers/FootAll'
import BannerImage from '../Banners/BannerImage'

const CodekazeHiring = () => {
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
        <img src='https://files.codingninjas.in/codekaze-31-27235.jpg' width='100%' />
    </div>
    <div className='upcomingEventsPageMainContainer'>
      <h1>CodeKaze june'23 - India's Biggest Hiring Challenge</h1>
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
      <p>Coding Ninjas presents CodeKaze in association with Naukri ( Info-Edge) which is the largest and one of its kind pan-India hiring challenge for all Tech enthusiasts across the country. This is the flagship event of Coding Ninjas, where you can compete with coders across the country, get access to amazing jobs/internships with </p>
      <p>&nbsp;</p>
      <p> <span>Policybazaar, Cars24, Flutura, Zelta Tech, Pratisthan, Wisdm Labs , Maurya Consultancy, Ira Technologies, HealthAsyst, nCircle Tech, Growfitter, Sleeves UP, PANELiQ, GyanDhan, Keshcutai, Ocean friend, Cedat Centres, Languify, Newton Solutions, OptionTown, Claimbuddy, Amar Ujala, Wiom, Nadhukan, SaralX, GDA, UnicoConnect, Meshwaram & Advisors, Malhari Projects and many more </span></p>
      <p>&nbsp;</p>
      <ul>
        <li><span>Who can participate - </span>Codekaze contest is open to programmers from all across the glob.Everyone from freshers to professional can participate.</li>
        <li><span>Round 1(Online Aptitude Round) : </span>This is a qualifing round will be live on<span> 10 june from 8PM to 10PM.</span> The participants will have to answer<span> 30 mcq Aptitude based MCQs in 70 Minutes.</span></li>
        <li><span>Round 2 (Online Coding Round) : </span>Candidates qualifying Round 1 will move on to Round 2 which will be live on<span> 17th June from 6PM to 10PM.</span> The participants will have to answer <span>6 Coding Based Questions </span>(Java/C++/Python) in<span> 3 hours. </span></li>
        <li><span>Interview and Placement : </span>The selected participants will be contacted by our placement team for the further process</li>
      </ul>
      </div>
    </div>
<BannerImage/>
    <FootAll/>

    </>
  )
}

export default CodekazeHiring