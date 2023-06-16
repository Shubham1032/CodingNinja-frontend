import React from 'react'
import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const EventsComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
  
    <h1 style={{textAlign:'center',fontFamily:'Arial, Helvetica, sans-serif'}}>UPCOMING EVENTS</h1>

     <div className='eventComponent-main-container'>
      {/* <Carousel> */}
      {/* <Carousel responsive={responsive}> */}
        
      <div className='eventsCard'>
      <Link to='/events/codeKaze-Hiring' >
        <div className='event-card-image'>
          <img src='https://files.codingninjas.in/codekaze-31-27235.jpg' width='100%' height='100%'/>
        </div>
      </Link>
        <div style={{padding:'10px'}}>
          <h4>CodeKaze June'23 -India's Biggest Hiring Challenge</h4>
          <span>Starts on</span><br></br>
          <p>08:30 AM, 10 jun 2023</p>
        </div>
      </div>
      <div className='eventsCard'>
      <Link to='/events/codeKaze-mock-test' >
        <div className='event-card-image'>
        <img src='https://files.codingninjas.in/coding-event-desktop-27601.jpg' width='100%' height='100%'/>

        </div>
      </Link>
        <div style={{padding:'10px'}}>
          <h4>CodeKaze June'23 -India's Biggest Hiring Challenge</h4>
          <span>Starts on</span><br></br>
          <p>08:30 AM, 10 jun 2023</p>
        </div>
      </div>
      <div className='eventsCard'>
      <Link to='/events/codeKaze-roadmap-dsa' >
        <div className='event-card-image'>
        <img src='https://files.codingninjas.in/coding-event-desktop-27799.jpg' width='100%' height='100%'/>

        </div>
      </Link>
        <div style={{padding:'10px'}}>
          <h4>CodeKaze June'23 -India's Biggest Hiring Challenge</h4>
          <span>Starts on</span><br></br>
          <p>08:30 AM, 10 jun 2023</p>
        </div>
      </div>
      <div className='eventsCard'>
      <Link to='/events/jabalpur' >
        <div className='event-card-image'>
        <img src='https://files.codingninjas.in/coding-event-desktop-27799.jpg' width='100%' height='100%'/>

        </div>
      </Link>
        <div style={{padding:'10px'}}>
          <h4>CodeKaze June'23 -India's Biggest Hiring Challenge</h4>
          <span>Starts on</span><br></br>
          <p>08:30 AM, 10 jun 2023</p>
        </div>
      </div>
      
      <div className='eventsCard'>
      <Link to='/events/codeKaze-Hiring' >
        <div className='event-card-image'>
        <img src='https://files.codingninjas.in/bitblitz-web-1-27873.png' width='100%' height='100%'/>

        </div>
      </Link>
        <div style={{padding:'10px'}}>
          <h4>CodeKaze June'23 -India's Biggest Hiring Challenge</h4>
          <span>Starts on</span><br></br>
          <p>08:30 AM, 10 jun 2023</p>
        </div>
      </div>

{/* </Carousel>; */}
    

    
   
      {/* </Carousel> */}
     </div>
    </>
  )
}

export default EventsComponent