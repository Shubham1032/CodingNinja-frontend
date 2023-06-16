import React,{useEffect,useState,useRef} from 'react'
import image1 from '../Coding Ninja Asset/Profile-1.webp'
import image2 from '../Coding Ninja Asset/Profile-2.webp'
import image3 from '../Coding Ninja Asset/Profile-3.webp'
import image4 from '../Coding Ninja Asset/Profile-4.webp'
import image5 from '../Coding Ninja Asset/Profile-5.webp'

const Ninjas = () => {
 
  return (
    <>
    <div>
      <h1 style={{textAlign:'center'}}>14,000+ CODING NINJAS TO INSPIRE YOU</h1>
      <div className='containerNinjas'>
        <div className="ninjasChild ninjasChild1 " >
        <h2>CS novice to Google</h2>
        <div width='100px'>

        <pre className='para'>
         Despite being from a tier 3 college, I would like to
    <br/>thank my mentors & teachers at Coding Ninjas who
    <br/>helped me land a job at Google. Both Parikh sir and 
    <br/>Ankush sir are brilliant teachers who know how to
    <br/>explain difficult concepts in an easy way.
    </pre>
        </div>
         <br/>
        <h3>Pareksha Manchanda</h3>
        <p>Software Engineer</p>
        <img className='ninjaCompanyImage' src='https://i.insider.com/55e5cbfd9dd7cc10008b756d?width=1000&format=jpeg&auto=webp' width='100px'/>
        <img src={image1} width='200px' className='profilePhotu'/>
 </div>
        <div className='ninjasChild ninjasChild2'>
          <h2>College dropout to a pacakage of 10LPA</h2>
          <div  width='100px'>

          <pre className='para'>The experience and knowledge I learned at Coding
          <br></br> Ninjas greatly sharpened my skills and allowed me
          <br/>  to pass the HackerRank and technical interview 
          <br/> rounds. The placement team coordinated 
          <br/> everything perfectly and it was unbelievable to get 
          <br/> an offer letter of 10 LPA. Grateful to Coding Ninjas.</pre>
          </div>
          <div>
          <h3>Pareksha Manchanda</h3>
          <p>Software Engineer</p>
          </div>
          <img className='ninjaCompanyImage'  src='https://i.insider.com/55e5cbfd9dd7cc10008b756d?width=1000&format=jpeg&auto=webp' width='100px'/>
          <img src={image2} width='200px'  className='profilePhotu'/>
        </div>
        <div className='ninjasChild ninjasChild3'>
          <h2>Non-CS branch to Top Company</h2>
          <div  width='100px'>
            
          <pre className='para'>My experience with Coding Ninjas was wonderful.
          <br/>The courses strengthened my concepts and helped
          <br/>me in my interviews. The faculty was amazing.
          <br/>I would definitely recommend Coding Ninjas</pre>
            </div>
          <div>
          <h3>Satwika Bhattacharjee</h3>
          <p>Analyst</p>
          </div>
          <img  className='ninjaCompanyImage' src='https://i.insider.com/55e5cbfd9dd7cc10008b756d?width=1000&format=jpeg&auto=webp' width='100px'/>
          <img src={image3} width='200px'  className='profilePhotu'/>
        </div>
        <div className='ninjasChild ninjasChild4'>
          <h2>Tier-3 college to 6 stars on CodeChef</h2>
          <div width='100px'>

          <pre className='para'>It has been a crazy ride from being a novice CS<br/> student to a 6 star Coder and ICPC Regionalist.<br/> I would like to thank Coding Ninjas for helping a<br/> Tier-3 college student explore such opportunities.</pre>
          </div>
          <div>
          <h3>Rahul Lather</h3>
          <p>Member of Technical staff</p>
          </div>
          <img  className='ninjaCompanyImage' src='https://i.insider.com/55e5cbfd9dd7cc10008b756d?width=1000&format=jpeg&auto=webp' width='100px'/>
          <img src={image4} width='200px'  className='profilePhotu'/>
        </div>
        <div className='ninjasChild ninjasChild5'>
          <h2>Non Engineer to Investment Bank</h2>
          <div  width='100px'>
            
          <pre>Coding Ninjas is one of the best learning platforms.
            <br/> I enrolled into C++ Foundation with Data Structures.
            <br/> The course content was very informative and well
            <br/> structured. The way Ankush Sir and Nidhi Ma'am
          <br/> explain a topic is commendable. My approach 
          <br/>towards solving a problem completely changed.</pre>
            </div>
          <div>
          <h3>Richa Sharma </h3>
          <p>SEP Intern</p>
          </div>
          <img  className='ninjaCompanyImage' src='https://i.insider.com/55e5cbfd9dd7cc10008b756d?width=1000&format=jpeg&auto=webp' width='100px'/>
          <img src={image5} width='200px'  className='profilePhotu'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ninjas