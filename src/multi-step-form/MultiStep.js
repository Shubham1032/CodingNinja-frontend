import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MultiStep = () => {
    const [state,setState] = useState(0);
    const [selectWidth,setSelectWidth] = useState(520)

    function imagebyState (){
      if(state === 0){
       return ( "multi-form-ninjaimage1" ) 
      }
      else if (state === 1){
       return ( "multi-form-ninjaimage2" )
      }
      else if(state === 2){
       return ( "multi-form-ninjaimage3" )
      }
    }
    const [data,setData] = useState({

    })
useEffect(()=>{
  
})
 function nextBtn (){
  if(state === 0){
    setState(state+1)
  }else if(state === 1){
    setState(state+1)
  }
 }

function backBtn (){
  if(state >0 && state < 3){
    setState(state-1)
  }
}

const FormFirst = ()=>{
   return(
    <>
    <div className='form-first-heading'>Welcome to the Ninja Famiy!</div>
    <div id='welcomeImage'> <img className='welcomeImg' src='https://files.codingninjas.in/ft-onboarding-welcome-msg-5707.svg' alt='welcome'/></div>
    <div className='form-first-heading heading2'>Personal Details</div>
    <form>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div className='form-1-radio'><input type='radio' name='type' /> <span></span>I am an Indian student</div>
        <div className='form-1-radio'><input type='radio' name='type'/> <span></span>I am an international student</div>
        </div>
        <div className='fields'>
            <div className='fieldsChilds'><TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  className='nameTextfield'
        />
        </div>
            <div className='fieldsChilds'>
            <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Contact No"
                  name="phone"
                  type='number'
                  autoComplete="phone"
                />
       </div>
        <div className='fieldsChilds'>
        <TextField
                  autoComplete="given-name"
                  name="Address1"
                  required
                  fullWidth
                  id="Address1"
                  label="Address Line 1"
                  autoFocus
                  className='nameTextfield'
        />
        </div>
        <div className='fieldsChilds'>
        <TextField
                  autoComplete="given-name"
                  name="Address2"
                  required
                  fullWidth
                  id="Address2"
                  label="Address Line 2"
                  autoFocus
                  className='nameTextfield'
        />
        </div>
        <div className='fieldsChilds'>
            <TextField
                  required
                  fullWidth
                  id="Pincode"
                  label="Pin Code"
                  name="Pincode"
                  type='number'
                  autoComplete="Pincode"
                />
       </div>
       
      </div>
    </form>
    </>
    )
  }
const FormSecond = ()=>{
 return (
    <>
        <div className='form-first-heading'>Academic/Professional Details</div>
        <div className='para-form-2'>Help us undestand more about you to help us deliver a tailored experience.</div>
        <div className='nameTextfield'>
        <FormControl required sx={{ m: 0, minWidth: 520 }}>
        <InputLabel id="demo-simple-select-required-label">Graduation Year</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        //   value={age}
          label="Graduation Year *"
        //   onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2010}>2010</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
        <div className='nameTextfield'>
        <FormControl required sx={{ m: 0, minWidth: 520 }}>
        <InputLabel id="demo-simple-select-required-label">Degree</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        //   value={age}
          label="Graduation Year *"
        //   onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value='B.E/B.Tech'>B.E/B.Tech</MenuItem>
          <MenuItem value='B.Com'>B.Com</MenuItem>
          <MenuItem value='M.Com'>M.Com</MenuItem>
          <MenuItem value='BSc'>BSc</MenuItem>
                  
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
        <div className='nameTextfield'>
        <FormControl required sx={{ m: 0, minWidth: 520 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        //   value={age}
          label="Branch *"
        //   onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value='EC'>Elecronics & Communication</MenuItem>
          <MenuItem value='Mechanical'>Mechanical</MenuItem>
          <MenuItem value='Electrical'>Electrical</MenuItem>
          <MenuItem value='Civil'>Civil</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
        <div className='nameTextfield'>
         <TextField
            required
            fullWidth
            id="College"
            label="College Name"
            name="College"
            type='text'
            autoComplete="College"
        />
        <FormHelperText>College Name Required</FormHelperText>
        </div>
        <div className='nameTextfield'>
         <TextField
            required
            fullWidth
            id="Company"
            label="Company Name"
            name="Company"
            type='text'
            autoComplete="Company"
        />
        <FormHelperText>Company Name Required</FormHelperText>
        </div>
    </>
  )
}    
const FormThird = ()=>{
    return (
        <>
        <div className='form-first-heading'>What are tour Goals?</div>
       <div className='nameTextfield'>
       <div className='radio-tag-head'>With this course I wish to</div>
       <div className='nameTextfield'>
        <FormControl required sx={{ m: 0, minWidth: 520 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        //   value={age}
          label="Branch *"
        //   onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value='EC'>Elecronics & Communication</MenuItem>
          <MenuItem value='Mechanical'>Mechanical</MenuItem>
          <MenuItem value='Electrical'>Electrical</MenuItem>
          <MenuItem value='Civil'>Civil</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
       </div>
       <div className='nameTextfield'>
       <div className='radio-tag-head'>What is the kind of Company you aspire to get into?</div>
       <div className='nameTextfield'>
        <FormControl required sx={{ m: 0, minWidth: 520 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
        //   value={age}
          label="Branch *"
        //   onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value='EC'>Elecronics & Communication</MenuItem>
          <MenuItem value='Mechanical'>Mechanical</MenuItem>
          <MenuItem value='Electrical'>Electrical</MenuItem>
          <MenuItem value='Civil'>Civil</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
        </div>
       </div>
        </>
    )
}
  function renderForm (){
    switch(state){
        case 0:
            return (<FormFirst/>);
            break;
        case 1:
            return (<FormSecond/>);
            break;
        case 2:
                return (<FormThird/>);
            break;
                
      }
  }
  
    return (
    <>
       <div className='multiStep-main-box'>
        <div>
            <div className='multi-form-mainContainer'>
              <div>
                   {renderForm()}
              </div>
            </div>
                <div className='multiform-footer'><button id='backBtn'onClick={backBtn}><img src='https://classroom.codingninjas.com/assets-app/images/onboarding/arrow-left.svg' /><span>Back</span></button><button id='nextBtn' onClick={nextBtn}><span>{state<2 ? "NEXT" : "FINISH"}</span><img src='https://classroom.codingninjas.com/assets-app/images/onboarding/arrow-right.svg' /></button></div>
        </div>
            <div className='multi-form-ninjaimage-box'>
                <div className={imagebyState()}></div>
            </div>
       </div>
    </>
  )
}

export default MultiStep