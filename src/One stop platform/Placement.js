import React from 'react'
import guideImage from '../Coding Ninja Asset/image-6.png'

const Placement = () => {
  return (
    <>
     <div className='guideCotanier' style={{display:'flex',justifyContent:'stretch'}}>
        <div className='guideContainer-box1'>
            <h4>Placement cell</h4>
            <h1>Placement Cell - A dedicated team to help you land the best opportunities</h1>
            <h5>Curated openings and industry referrals to ensure you have access to the best opportunities out there.</h5>
            <h5>Our placement cell works closely with you to help you reach closer to your professional goals.</h5>
            <div className='guideBox-last-flex'  style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>7.6 LPA</h2>
                 <h5>average CTC</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>300+</h2>
                 <h5>Hiring Partners</h5>
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

export default Placement