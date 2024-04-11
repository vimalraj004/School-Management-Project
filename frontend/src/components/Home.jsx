import React, { useRef, useState } from 'react'
import style from "./style.module.css"
import { TextField,Button,FormControl } from '@mui/material'
import { Form, Link, useNavigate } from 'react-router-dom'
import Adminpage from './Adminpage'
import  axios  from 'axios'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Home = () => {
   
    let [form1,setform1]=useState(true)
    let [form2,setform2]=useState(false)
    let [form3,setform3]=useState(false)

    let [adminname,setadminname]=useState("")
    let [adminpass,setadminpass]=useState("")
    let [teachermail,setteachermail]=useState("")
    let [teacherpass,setteacherpass]=useState("")
    let [studentmail,setstudentmail]=useState("")
    let [studentpass,setstudentpass]=useState("")

    const [showPassword, setShowPassword] = React.useState(false);
    let navigate=useNavigate()

    let getadminname = (e)=>{
         setadminname(e.target.value)
    }
    let getadminpass = (e)=>{
        setadminpass(e.target.value)
   }
   
   let getteachermail = (e)=>{
    setteachermail(e.target.value)
}
let getteacherpass = (e)=>{
   setteacherpass(e.target.value)
}
let getstudentmail = (e)=>{
    setstudentmail(e.target.value)
}
let getstudentpass = (e)=>{
   setstudentpass(e.target.value)
}

  
    let admin=()=>{
        setform1(true)
        setform2(false)
        setform3(false)
        
    }
    let payload2={
        adminname,
        adminpass
    }
    let adminbtn=()=>{
        axios.post("https://school-management-project-4.onrender.com/adminlogin",payload2)
        .then((res)=>{console.log(res);
                       if(res.data=="usernot found"){
                        alert("Invalid username")
                       }
                       else if(res.data.password!=adminpass){
                        alert("Wrong password")
                       }
                       else{
                        // navigate(`/staffpage/${res.data._id}`)
                        navigate("/Adminpage")
                       }
                      })
        .catch((err)=>{console.log(err);})
        
    }
    // if(adminname=="vimalraj" && adminpass=="9791"){
    //     navigate("/Adminpage")
    // }
    // else{
    //     navigate("/home")
    // }
    let teachers=()=>{
        setform1(false)
        setform2(true)
        setform3(false)
       
    }
    let payload={
        teachermail,
        teacherpass
    }
    let teacherbtn=()=>{
        axios.post("https://school-management-project-4.onrender.com/teacherlogin",payload)
        .then((res)=>{console.log(res);
                       if(res.data=="usernot found"){
                        alert("Invalid usermail")
                       }
                       else if(res.data.password!=teacherpass){
                        alert("Wrong password")
                       }
                       else{
                        navigate(`/staffpage/${res.data._id}`)
                       }
                      })
        .catch((err)=>{console.log(err);})
    }
    let students=()=>{
        setform1(false)
        setform2(false)
        setform3(true)
    }
    let payload1={
        studentmail,
        studentpass
    }
    let studentbtn=()=>{
        axios.post("https://school-management-project-4.onrender.com/studentlogin",payload1)
        .then((res)=>{console.log(res);
                       if(res.data=="usernot found"){
                        alert("Invalid usermail")
                       }
                       else if(res.data.password!=studentpass){
                        alert("Wrong password")
                       }
                       else{
                        navigate(`/clientpage/${res.data._id}`)
                       }
                      })
        .catch((err)=>{console.log(err);})
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <div id={style.bg}>
        <h1>School Management</h1>
        <div id={style.buttonbox}>
            <div id={style.movebtn}></div>
            <button  onClick={admin}>Admin</button>
            <button  onClick={teachers}>Teachers</button>
            <button   onClick={students}>Students</button>

        </div>
        <div id={style.forms}>
            <div id={style.form1} style={{display:form1?"block":"none"}}>
            <TextField value={adminname} onChange={getadminname} id="outlined-basic" sx={{width:"300px",marginTop:"20px",marginLeft:"50px"}} label="Enter your Name" variant="outlined" />
            {/* <TextField value={adminpass} onChange={getadminpass} id="outlined-basic" sx={{width:"300px",marginTop:"20px",marginLeft:"50px"}} label=" Enter your Password" variant="outlined" /> */}
 <FormControl  value={adminpass} onChange={getadminpass} sx={{ m: 1, width: '34ch',marginLeft:"50px",marginTop:"20px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Enter your Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
 </FormControl>

            <Button onClick={adminbtn} variant="contained" sx={{marginTop:"30px",marginLeft:"120px"}}>Admin submit</Button>
            </div>
            <div id={style.form2} style={{display:form2?"block":"none"}}>
            <TextField value={teachermail} onChange={getteachermail} id="outlined-basic" sx={{width:"300px",marginTop:"20px" ,marginLeft:"50px"}} label="Enter your mail id" variant="outlined" />
            {/* <TextField value={teacherpass} onChange={getteacherpass} id="outlined-basic" sx={{width:"300px",marginTop:"20px" ,marginLeft:"50px"}} label="Enter your Password" variant="outlined" /> */}
            <FormControl  value={adminpass} onChange={getadminpass} sx={{ m: 1, width: '34ch',marginLeft:"50px",marginTop:"20px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Enter your Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
 </FormControl>
            <Button onClick={teacherbtn} variant="contained" sx={{marginTop:"30px" ,marginLeft:"120px"}}>Teachers submit</Button>
            </div>
            <div id={style.form3} style={{display:form3?"block":"none"}}>
            <TextField value={studentmail} onChange={getstudentmail} id="outlined-basic" sx={{width:"300px",marginTop:"20px" ,marginLeft:"50px"}} label="Enter your mail id" variant="outlined" />
            {/* <TextField value={studentpass} onChange={getstudentpass} id="outlined-basic" sx={{width:"300px",marginTop:"20px" ,marginLeft:"50px"}} label="Enter your Password" variant="outlined" /> */}
            <FormControl  value={adminpass} onChange={getadminpass} sx={{ m: 1, width: '34ch',marginLeft:"50px",marginTop:"20px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Enter your Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
 </FormControl>
            <Button onClick={studentbtn} variant="contained" sx={{marginTop:"30px" ,marginLeft:"120px"}}>Students submit</Button>
            </div>
        </div>
    </div>
  )
}

export default Home