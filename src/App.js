import React,{useState} from 'react'
import Navbar from './Headers/Navbar'
import Routess from './Routes/Routes'
import CallbackForm from './Components/CallbackForm'
import {store} from './Context/User'

const App = () => {
  const [data,setData] = useState({});
  const [user,setUser] = useState({});

  return (
    <div>
      <store.Provider value={{user,setUser}}>
   <Routess/>
      </store.Provider>
    </div>
  )
}

export default App
