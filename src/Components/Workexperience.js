import React,{useState,useRef} from 'react'
import noexp from '../Coding Ninja Asset/profile-6.png';
import someexp from '../Coding Ninja Asset/Profile-7.png';
import './Experience.css';

const Workexperience = () => {
const [active,setActive] = useState(false);
const [active2,setActive2] = useState(false);
const noConfirm = useRef();
const yesConfirm = useRef();
    function activeCssnoExp (){
        if(active === false){
        //  noConfirm.current.style.display = "none";
        return ( "noExperience noExp-no-active" )
        }else{
        noConfirm.current.style.display = "block";
        return ( "noExperience noExp-yes-active" );

        }
    }
function activeCssSomeExp (){
    if(active2 === false){
        // yesConfirm.current.style.display = "none";
        return ( "noExperience someExp-no-active" )
    }else{
        yesConfirm.current.style.display = "block";
        return ( "noExperience someExp-yes-active" )
     }
 }
  return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column',color:'black'}}>
        <div>
            <h3>What is your work experience?</h3>
            <p>This will help us recommend the best programs for you.</p>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div className={activeCssnoExp()} onClick={()=>{
                setActive(true);
                setActive2(false);
            }}>
                <img src={noexp}/>
                <div className='exp-box-title'>
                    <span>No work experience</span>
                    <span alignItems="center"> > </span>
                </div>
                <button ref={noConfirm}>Confirm</button>
            </div>
            <div className={activeCssSomeExp()} onClick={()=>{
                setActive(false);
                setActive2(true);
            }}>
            <img src={someexp}/>
            <div className='exp-box-title'>
                    <span>Having work experience</span>
                    <span alignItems="center"> > </span>
                </div>
            <button  ref={yesConfirm}>Confirm</button>
            </div>

        </div>
           
      </div>
    </div>
  )
}

export default Workexperience