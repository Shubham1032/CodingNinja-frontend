import React,{useEffect,useState} from 'react'
import axios from 'axios'
const NewsComponent = ({item}) => {
// console.log(item)
  return (
<>
  <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'200px',height:'180px',marginLeft:'60px',marginRight:'40px'}}>
    <img src={item.image}  alt="not found" width='250px' height='100px'/>
    <p>{item.description}</p>
  </div>
</>
  )
}

export default NewsComponent