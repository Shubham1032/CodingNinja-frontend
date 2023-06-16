import React,{useEffect, useState} from 'react'
import Rating from '@mui/material/Rating';
import { Link,useNavigate } from 'react-router-dom';
const Cards = ({detail}) => {
  useEffect(()=>{
    window.scrollTo({
      top: 100,
      // left: 100,
      behavior: "smooth",
    });
  },[])
  const [data,setData] = useState([]);
  const navigate = useNavigate()
  // setData(detail)
    console.log(detail)
    const navigaetFun = (data)=>{
    navigate(`/singleCourse/${data._id}`)
    }
  return (
    <>
      <div className='card-main-box'>
        {/* <Link to={`singleCourse/${detail._id}`} > */}
    {detail.map((data,index)=>(
      <div key={index} className='main-card' onClick={()=>{navigaetFun(data)}}>
        <div style={{display:'flex',height:'60%',padding:'10px 0 10px 0',justifyContentL:'center'}}>
          <h3 className='course-mini-card-head'>{data.name}</h3>
          <img src={data.logo} width='40px'/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:'small'}}>
        <span style={{margin:'0px 0 10px 0'}}>{data.hours}+ Hours</span>
        <span>{data.problems}</span>
        </div>
        <div>
          <span>{data.rating}</span>
          <Rating name="half-rating" defaultValue={4.8} precision={0.1} readOnly size='small'/>
          <span>({data.noOfrating})</span>
        </div>

        </div>
    )
    )}
{/* </Link> */}
    </div>
    </>

  )
}

export default Cards