import React,{useState} from 'react'
import Gif from '../Coding Ninja Asset/Gif.webp'
import Typewriter from "typewriter-effect"

const HomeBanner = () => {
  
  return (
    <>
     <div className='homeBanner'>
        <div className='homeContainer'>
     <div>
        <div className='typewriter'>&nbsp;
        <Typewriter 
        options={{
            autoStart: true,
            loop: true,
            delay: 40,
            
            strings:[
                "Be more than a Coder",
                "Chasing Jobs? Let the jobs chase you",
                "World has enough coders",
            ],
        }}/></div>
        <h1>Be a Coding Ninja</h1>
        <p>50000 students from 300 colleges have trusted us</p>
        <button >Explore Our Programs</button>
     </div>
     <div>
        <img className='animationGif' src={Gif} />
     </div>
        </div>
     </div>
        <div className='homebanner-smallbanner'>
            <h1>If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you.</h1>
            <h4 style={{textAlign:'center'}}>NO MATTER WHATIT TAKES!</h4>
            <div>
                <div className='smallBanner-child-flex' >
                    <img src='https://files.codingninjas.in/boxicon1-9659.svg' width='40px' style={{marginRight:'10px'}}/>
                    <p>Content designed by IIT & Stanford alumni</p>
                    </div>
                <div className='smallBanner-child-flex' >
                    <img src='https://files.codingninjas.in/boxicon2-9658.svg' width='40px' style={{marginRight:'10px'}}/>
                    <p>Instant 1:1 doubt resolution</p>
                    </div>
                <div className='smallBanner-child-flex' >
                    <img src='https://files.codingninjas.in/boxicon3-9657.svg' width='40px' style={{marginRight:'10px'}}/>
                    <p>Practical learning with 100+ problem & 10+ projects in each course</p>
                    </div>
            </div>
        </div>
    </>
  )
}

export default HomeBanner