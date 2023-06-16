import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import NewsComponent from '../Pages/NewsComponent';

const News = () => {
  const [news,setNews] = useState([]);
  const [initial,setInitial] = useState(0);
  const [final,setFinal] = useState(7);
  const left = useRef();
  const right = useRef();
useEffect(()=>{
  async function foo (){
    const {data} = await axios.get('http://localhost:4000/getNews')
    setNews(data)
    console.log(news)
  }
  foo()
    },[])
 function clickLeft(){
    setInitial(0);
    setFinal(7)
    right.current.style.display = 'block'
    left.current.style.display = "none"
 }
  function clickRight(){
    setInitial(7);
    setFinal(15)
    right.current.style.display = 'none'
    left.current.style.display = 'block'
}
  return (
    <div style={{margin:'40px'}}>
    <h2 style={{marginLeft:'150px',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'x-large'}}>Coding Ninjas in the News</h2>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',boxSizing:"border-box",paddingLeft:'80px',paddingRight:'80px',position:'relative'}}>
  {
      news.slice(initial,final).map((item,index)=>{
          return (
            <NewsComponent item={item} key={index}/>
          )
    })
  }
   <div onClick={clickLeft} ref={left} style={{position:'absolute',
   left:'0',top:'40%',
   fontSize:'xx-large',
   padding:'20px',
   borderRadius:'95px',
   boxShadow:'gray 1px 1px 10px 1px',
   display:'none'
}}>
  <i className="fa-solid fa-arrow-left"></i>
  </div>
  <div onClick={clickRight} ref={right} style={{position:'absolute',right:'0',top:'40%',fontSize:'xx-large',padding:'20px',borderRadius:'95px',boxShadow:'gray 1px 1px 10px 1px'}}>
  <i className="fa-solid fa-arrow-right"></i>
  </div>
  </div>
    </div>
  )
}

export default News