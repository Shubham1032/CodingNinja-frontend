import React from 'react'
import guideImage from '../Coding Ninja Asset/image-7.png'

const Resources = () => {
  return (
    <>
     <div className='guideCotanier' style={{display:'flex',justifyContent:'stretch'}}>
        <div className='guideContainer-box1'>
            <h4>Free Resources</h4>
            <h1>Tons of resources to enable you to learn for free & stay up to date</h1>
            <h5>We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world.</h5>
            <h5>A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas.</h5>
            <div className='guideBox-last-flex'  style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>15+</h2>
                 <h5>events conducted every month</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>30+</h2>
                 <h5>articles published every month</h5>
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

export default Resources