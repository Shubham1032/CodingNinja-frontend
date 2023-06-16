import React from 'react'
import guideImage from '../Coding Ninja Asset/image-5.png'

const Mock = () => {
  return (
    <>
     <div className='guideCotanier' style={{display:'flex',justifyContent:'stretch'}}>
        <div className='guideContainer-box1'>
            <h4>Mock Interviews</h4>
            <h1>Mock Interviews to help you get prepared for your real interview</h1>
            <h5>Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews.</h5>
            <h5>The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview.</h5>
            <div className='guideBox-last-flex'  style={{display:'flex',justifyContent:'space-between'}}>
                <div className='smallflex-guide' style={{display:'flex',flexDirection:'column'}}>
                 <h2>10</h2>
                 <h5>Mock Interviews (with selected course plans)</h5>
                </div>
                <div className='smallflex-guide'  style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                 <h2>500+</h2>
                 <h5>Industry mentors</h5>
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

export default Mock