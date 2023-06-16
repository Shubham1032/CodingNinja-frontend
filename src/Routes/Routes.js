import React from 'react'
import Navbar from '../Headers/Navbar'
import FLinks from '../Footers/FLinks'
import Footer from '../Footers/Footer'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import FootAll from '../Footers/FootAll'
import CodekazeHiring from '../Upcoming Events/CodekazeHiring'
import CodeKazeMocktest from '../Upcoming Events/CodeKazeMocktest'
import RoadmapDSA from '../Upcoming Events/RoadmapDSA'
import Jabalpur from '../Upcoming Events/Jabalpur'
import SinglePageCourse from '../Components/SinglePageCourse'
import ProfilePage from '../Profile-Page/ProfilePage'
import MultiStep from '../multi-step-form/MultiStep'
import Workexperience from '../Components/Workexperience'

const Routess = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/footer' element={<FootAll/>}/>
        <Route path='/events/codeKaze-Hiring' element={<CodekazeHiring/>}/>
        <Route path='/events/codeKaze-mock-test' element={<CodeKazeMocktest/>}/>
        <Route path='/events/codeKaze-roadmap-dsa' element={<RoadmapDSA/>}/>
        <Route path='/events/jabalpur' element={<Jabalpur/>}/>
        <Route path='/singleCourse/:_id' element={<SinglePageCourse/>}/>
        <Route path='/profilePage' element={<ProfilePage/>}/>
        <Route path='/multi-step-form' element={<MultiStep/>}/>
        <Route path='/workExprience' element={<Workexperience/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Routess