import React,{useEffect,useState,useRef} from 'react'
import Guide from './Guide';
import Doubt from './Doubt';
import Mock from './Mock';
import Placement from './Placement';
import Resources from './Resources';
import Studio from './Studio';

const Platform = () => {
  const content = useRef()
  const [data,setData] = useState(1);
 
    function toggleActiveStyles (){
 
  }
  useEffect(()=>{
    function wait (){
      setInterval(()=>{
        if(data < 6 ){
          setData(data+1)
        }else{
          setData(1)
        }
      },4000)
     }
    //  wait()
  },[data])
  console.log(content)
 function foo (){
  if(data === 1){
    return (  <Guide/>)
  }
  if(data === 2){
    return (  <Doubt/>)
  }
  if(data === 3){
    return (  <Studio/>)
  }
  if(data === 4){
    return (  <Mock/>)
  }
  if(data === 5){
    return (  <Placement/>)
  }
  if(data === 6){
    return ( <Resources/>)
  }
 }
  // content.current.style.color="red"
  return (
    <>
    <div className='platform-background-container'>
      <div className='platform-main-box'>
        <div className='platform-heading'>
        <h2>A One Stop Platform</h2>
        <h4>Practice and learn till you are perfect</h4>   
        </div>
        <div className='platform-nav-box'>
          <div className='' onClick={()=>{setData(1)}}>GUIDED PRGRAM</div>
          <div className='' onClick={()=>setData(2)}>DOUBT RESOLUTION</div>
          <div className='' onClick={()=>setData(3)}>CODING NINJAS STUDIOS</div>
          <div className='' onClick={()=>setData(4)}>MOCK INTERVIEW</div>
          <div className='' onClick={()=>setData(5)}>PLACEMENT CELL</div>
          <div className='' onClick={()=>setData(6)}>FREE RESOURCES</div>
        </div>
        <div className='animateCoponentRender'>
        {foo()}
        </div>

      </div>
    </div>
    </>
  )
}

export default Platform