import React,{useEffect,useState,useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Headers/Navbar';
import axios from 'axios'
import Rating from '@mui/material/Rating';
import Payment from '../Payment-Box/Payment';

const SinglePageCourse = () => {
  const Navigate = useNavigate();
  const singleProductID = useParams();
  const [product,setProduct] = useState({});
const [popup,setPopup] = useState(false);
 const main = useRef(); 

 useEffect(()=>{
   async function get (){
     const {data} = await axios.get(`http://localhost:4000/getOne/${singleProductID._id}`)
     setProduct(data)
    }
    get()
  },[])
  console.log(product)
  function render (a){
    console.log(a)
    setPopup(false)
  }
  function foo (){
    if(popup === true){
      main.current.style.visibility='blur';
      return ( <Payment render={render} product={product}/> )
    }else{
      return ( "" )
    }
  }
  return (
    <div ref={main}>
    {/* <Navbar/> */}
    <div className='singlePage-top-banner'>
    <div id='singlePage-homeIcon-Line'>
     <div className='homeLineChild' onClick={()=>Navigate('/')}>Home</div>
     <div className='homeLineChild'> - </div>
     <div className='homeLineChild'> Courses </div>
     <div className='homeLineChild'> - </div>
     <div className='homeLineChild'> {product.name}... </div>
    </div>
      <div className='singlePage-banner-second-box'>
       <div className='sgw'>
        <h1 style={{margin:'10px 0 20px 0'}}>{product.name}</h1>
        <h3 style={{margin:'10px 0 20px 0'}}>for Beginners and Experience Learners</h3>
        <p style={{margin:'10px 0 20px 0',color:'	#d2d2d6',lineHeight:'25px'}}>{product.about}</p>
        <div style={{margin:'10px 0 10px 0'}}>
          <span style={{margin:'10px 15px 1px 0',fontSize:'x-large'}}>{product.rating}</span>
          <Rating name="half-rating" defaultValue={4.8} precision={0.1} readOnly size='large'/>
          <span style={{marginLeft:'15px',fontSize:'x-large'}}>({product.noOfrating})</span>
        </div>
        <div style={{margin:'20px 0 20px 0'}}>
          <button onClick={()=>setPopup(true)} style={{fontSize:'large',marginLeft:'10px',padding: '20px 20px 20px 20px',background: 'orangered',border: 'none',color: 'white',width: '200px',borderRadius: '5px'}}>Enroll Now </button>
          <button  style={{fontSize:'large',marginLeft:'10px',padding: '20px 20px 20px 20px',background: 'white',border: 'none',color: 'orangered',width: '200px',borderRadius: '5px'}}>Try for Free</button>
        </div>
        <hr></hr>
        <div style={{margin:'10px 0 10px 0',display:'flex'}}>
          <div style={{margin:'10px 10px 10px 0'}}>
            <h2>{product.students}</h2>
            <p style={{margin:'10px 0 10px 0',fontSize:'small'}}>Students enroll</p>
          </div>
          <div style={{margin:'10px 10px 10px 0'}}>
            <h2> {product.problems}</h2>
            <p style={{margin:'10px 0 10px 0',fontSize:'small'}}>problems</p>  
          </div>
          <div style={{margin:'10px 10px 10px 0'}}>
            <h2>{product.months}</h2>
            <p style={{margin:'10px 0 10px 0',fontSize:'small'}}>months</p>
          </div>
          <div style={{margin:'10px 10px 10px 0'}}>
            <h2>{product.hours}</h2>
            <p style={{margin:'10px 0 10px 0',fontSize:'small'}}>hours of vedio lecture</p>
          </div>
        </div>
       </div>
       <div className='singlePageImageDiv'>
        <img src='https://files.codingninjas.com/cdn-cgi/image/width=434/python-10821.png' />
       </div>
      </div>
    
    </div>
    {foo()}
    </div>
  )
}

export default SinglePageCourse