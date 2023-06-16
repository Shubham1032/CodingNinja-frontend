import React from 'react'
import guideImage from '../Coding Ninja Asset/image-4.png'

const Studio = () => {
  return (
    <>
     <div className='guideCotanier' style={{display:'flex',justifyContent:'stretch'}}>
        <div className='guideContainer-box1'>
            <h4>Coding Ninjas Studio</h4>
            <h1>A platform to help you practice, compete & get ready for interviews</h1>
            <h5>A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world.</h5>
            <h5>Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience</h5>
            <div className='guideBox-last-flex'  style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>500+</h2>
                 <h5>Interview problems with solutions</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>250+</h2>
                 <h5>Interview experience</h5>
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

export default Studio