import React from 'react'
import guideImage from '../Coding Ninja Asset/Image-2.png'
const Guide = () => {
  return (
    <>
     <div className='guideCotanier' style={{display:'flex',justifyContent:'stretch'}}>
        <div className='guideContainer-box1'>
            <h4>Well Guided Program</h4>
            <h1>We have invented and perfected the best system to learn coding</h1>
            <h5>Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.</h5>
            <ul type='none'>
                <li><i className="fa-sharp fa-solid fa-circle-check" style={{marginRight:'10px'}}></i>Very short learning videos: 10-15 minutes</li>
                <li><i className="fa-sharp fa-solid fa-circle-check" style={{marginRight:'10px'}}></i>2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes</li>
                <li><i className="fa-sharp fa-solid fa-circle-check" style={{marginRight:'10px'}}></i>Doubts resolved instantly by our Teaching Assitants and Notes for Revision</li>
            </ul>
            <div className='guideBox-last-flex'  style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>100+</h2>
                 <h5>average hours of learning per course</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>100+</h2>
                 <h5>practice problems in each course</h5>
                </div>
                <div  className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>100+</h2>
                 <h5>projects per course</h5>
                </div>
            </div>
        </div>
        <div>
            <img src={guideImage} alt='not found'  className='pltaformImage'/>
        </div>
     </div>
    </>
  )
}

export default Guide