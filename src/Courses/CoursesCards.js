import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Cards from './Cards';

const Courses = () => {
  const [courses,setCourses] = useState([]);
  const [cardDetail,setCardDetail] = useState([])
  const [state,setState] = useState({
    activeObject:null,
    objects:[{ id: 1,name:"Data structures and algorithms"},{ id: 2,name:"Competitive Programming"},{ id: 3,name:"Interview Preparation"},{ id: 4,name:"Analytics & Data Science"},{ id: 5,name:"Web Development"}]
  })

  useEffect(()=>{
  async function foo (){
  const {data} = await axios.get('http://localhost:4000/getAll')
  setCourses(data)
  console.log(courses)
  }
  foo()
  console.log("first")
  toggleActive(0)
  },[])



 async function toggleActive (index){
    setState({...state, activeObject: state.objects[index]})
    if(index === 0){
      console.log(courses)
      const ab = courses.filter((data)=>{return data.category === "Data structures and algorithms"})
      console.log(index,ab)
      setCardDetail(ab)
    }
    if(index === 1){
      const ab = courses.filter((data)=>data.category === "Competitive Programming")
      setCardDetail(ab)
    }
    // if(index === 2){
    //   const ab = courses.filter((data)=>data.category === "Interview Preparation")
    //   setCardDetail(ab)
    // }
    if(index === 3){
      const ab = courses.filter((data)=>data.category === "Analytics & Data Science")
      setCardDetail(ab)
    }
    if(index === 4){
      const ab = courses.filter((data)=>data.category === "Web Development")
      setCardDetail(ab)
    }

  }
  function toggleActiveStyles (index){
    if(state.objects[index] === state.activeObject){
      return "courses-butn btn-active"
    }else{
      return "courses-butn btn-inactive"
    }
  }
  return (
    <>
   <div className='courses-card-main-container'>
     <div className='course-card-container-head'>
     <h2> Courses speciallyy curated for you</h2>
     <h4>No work experience</h4>
    </div>
    <div >
      <div className='courses-toggle-button'>
    {
      state.objects.map((e,i)=>(
        <button key={i} className={toggleActiveStyles(i)} onClick={()=>{toggleActive(i)}}>{e.name}</button>  
        ))
      }
      </div>
    </div>
    <Cards detail={cardDetail}/>
    
   </div>

   </>
  )
}

export default Courses