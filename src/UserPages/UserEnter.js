import React,{useState} from 'react'

import Register from './Register'
import LoginClass from './LoginClass'

const UserEnter = ({toggle}) => {
    const [tg,setTg] = useState(true)
    function change (){
        setTg(!tg)
    }
    function fun ({user}){
        toggle(user)
    }
  return (
    
        <div className='loginFormContainer' style={{zIndex:'10'}}>
         
<div style={{display:'flex',justifyContent:'space-between'}}>

            <h2 style={{fontFamily:'ariel'}}>Login / SignUp</h2>
            <i className="fa-solid fa-x" onClick={fun}></i>
</div>
           
        {tg ? <LoginClass change={change} funToggle={fun}/> : <Register change={change}/>}
       
</div>
   
  )
}

export default UserEnter