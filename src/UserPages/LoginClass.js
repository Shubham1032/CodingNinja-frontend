import React,{useContext} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import { store } from '../Context/User';


const LoginClass = ({change,funToggle}) => {
  const {user,setUser} = useContext(store)
    function fun (){
        change()
    }
    const handleSubmit =async (event) => {
      try {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
      const obj = {
        email:data.get('email'),
        password:data.get('password')
      }
      const response = await axios.post('http://localhost:4000/login',{obj})
      console.log(response.data)
      alert("response.data")
      if(response.data === "wrong password"){
        console.log(response.data)
        alert("Wrong Password")
      }else if(response.data === "E-mail not exist"){
         alert("E-mail not exist")
      }
      else{
        alert("Login successfull")
        console.log(response.data)
        setUser(response.data.userExist)
        localStorage.setItem("token",response.data.token)
        funToggle(user)      
      }
      } catch (error) {
        alert("error")
        console.log(error.message)
      }
    };
  return (
  <>
   
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate  onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}     
            >
              Sign In
            </Button>
            <Grid container>
       
              <Grid item >
                <Link  variant="body2" onClick={fun}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </>
  )
}

export default LoginClass