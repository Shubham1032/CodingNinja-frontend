import React, { useEffect } from 'react'
import Navbar from '../Headers/Navbar'
import FootAll from '../Footers/FootAll'
import CallbackForm from '../Components/CallbackForm'
import PlacementAt from '../Components/PlacementAt'
import LoginClass from '../UserPages/LoginClass'
import Rating from '../Components/Rating'
import Banner2_two from '../Banners/Banner2_two'
import News from '../Footers/News'
import BannerImage from '../Banners/BannerImage'
import NavbarTwo from '../Headers/Nav2'
import Ninjas from '../Components/Ninjas'
import HomeBanner from '../Banners/HomeBanner'
import RenderCarousel from '../Components/EventsComponent'
import EventsComponent from '../Components/EventsComponent'
import SideClickArrow from '../Components/SideClick'
import Platform from '../One stop platform/Platform'
import CoursesCards from '../Courses/CoursesCards'
const Home = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // left: 100,
      behavior: "smooth",
    });
  },[])
  return (
    <div>
        <Navbar/>
        {/* <NavbarTwo/> */}
        {/* <BannerImage /> */}
        <HomeBanner/>
       <Ninjas/>
        <Banner2_two/>
        {/* <RenderCarousel/> */}
        <Platform/>
        <div>

        <CoursesCards/>
        </div>
        <PlacementAt/>
        <Rating/>
        <CallbackForm/>
        <News/>
        <EventsComponent/>
        <FootAll/>
   
    </div>
  )
}

export default Home