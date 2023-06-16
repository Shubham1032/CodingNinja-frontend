import React from 'react'
import guideImage from '../Coding Ninja Asset/image-3.png'

const Doubt = () => {
  return (
    <>
     <div className='guideCotanier'>
        <div className='guideContainer-box1'>
            <h4>Doubt Resolution</h4>
            <h1>Get your doubts resolved instantly with live 1:1 mentor support.</h1>
            <h5>In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!</h5>
            <h5>We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.</h5>
            <div className='guideBox-last-flex' style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>100+</h2>
                 <h5>doubts resolved per hour</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>20 min</h2>
                 <h5>avg. doubt resolution time</h5>
                </div>
                
            </div>
        </div>
        <div className='platformImage' >
            <img src={guideImage} alt='not found' className='pltaformImage'/>
        </div>
     </div>
    </>
  )
}

export default Doubt