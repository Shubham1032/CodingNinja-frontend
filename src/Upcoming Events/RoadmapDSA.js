import React,{useEffect} from 'react'
import FootAll from '../Footers/FootAll'
import BannerImage from '../Banners/BannerImage'
const RoadmapDSA = () => {
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
        <img src='https://files.codingninjas.in/roadmap-to-dsa-27819.webp' width='100%' />
    </div>
    <div className='upcomingEventsPageMainContainer'>
      <h1>Roadmap to DSA || IEE MUJ</h1>
      <div className='smallflex'>
        <button>REGISTER NOW</button>
        <p>
        <img src='https://files.codingninjas.in/0000000000001017-24792.png' width='15px'  style={{margin:'0 5px 0 0'}}/>
            
            STARTS ON &nbsp;
            <span>03:00 PM ,7 JUN 2023</span>
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
      <p>About the Event :</p>
      <p>Join our collaborative webinar, "DSA Accelerator: Roadmap to Coding Excellence," in association with IEEE MUJ, and fast-track your journey to becoming a proficient programmer in Data Structures and Algorithms (DSA).</p>
      <p>&nbsp;</p>
      <p> This power-packed session is designed to equip both beginners and experienced developers with the necessary skills to excel in coding challenges. Our expert speaker, backed by the prestigious IEEE MUJ, will guide you through a comprehensive roadmap, demystify complex algorithms, and provide practical tips for optimization.</p>
      <p>&nbsp;</p>
      <p>About the Speaker : </p>
      <p>Introducing Shantanu, a highly professional and skilled public speaker who specialises in DSA, general career guidance, portfolio creation, competitive programming, Git and GitHub, freshmen induction, AI/ML, full-stack development (MERN and MEAN stack), data analytics, system design, cybersecurity, game development, cloud, communication, Java, Spring Boot, and Django. With extensive experience in public speaking, this speaker is well-equipped to deliver engaging and informative presentations on these topics, providing audiences of all skill levels with valuable insights and knowledge. Whether you are a novice or an experienced professional, the expertise of this speaker will help you improve your skills and advance your career.</p>
      </div>
     <div className='thirdContainer'>
        <button>competitive Programming</button>
        <button>Coding Concepts</button>
        <button>Online Coding Event</button>
        <button>Efficient Coding</button>
     </div>
    </div>
    <BannerImage/>
    <FootAll/>

    </>
  )
}

export default RoadmapDSA