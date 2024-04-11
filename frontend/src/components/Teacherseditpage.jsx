import {React,useEffect,useState} from 'react'
import style from "./style.module.css"
import {useNavigate,useParams} from "react-router-dom"
import axios from "axios"
import { TextField,FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,Button } from '@mui/material'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Teacherseditpage = () => {
    let[name,setname]=useState("")
    let[mail,setmail]=useState("")
    let[qualification,setqualification]=useState("")
    let[subject,setsubject]=useState("")
    let[gender,setgender]=useState("")
    let[password,setpassword]=useState("")
    let[confirmpass,setconfirmpass]=useState("")

    const [showPassword, setShowPassword] = useState(false);

    let[namecolor,setnamecolor]=useState(true)
    let[mailcolor,setmailcolor]=useState(true)
    let[qualificationcolor,setqualificationcolor]=useState(true)
    let[subjectcolor,setsubjectcolor]=useState(true)
    let[passwordcolor,setpasswordcolor]=useState(true)
    let[confirmpasscolor,setconfirmpasscolor]=useState(true)

    let navigate=useNavigate()
    let params=useParams()

    let getname=(e)=>{
         setname(e.target.value)
           if(e.target.value.length>=4&&e.target.value.match(stringregex)){
                setnamecolor(true)
            }
            else{
                setnamecolor(false)
                }
    }
    let getmail=(e)=>{
        setmail(e.target.value)
        if(e.target.value.match(emailregex)){
            setmailcolor(true)
        }
        else{
            setmailcolor(false) 
        }
    }
    let getqualification=(e)=>{
        setqualification(e.target.value)
        if(e.target.value.length>=3&&e.target.value.match(stringregex)){
            setqualificationcolor(true)
        }
        else{
            setqualificationcolor(false)
        }
    }
    let getsubject=(e)=>{
        setsubject(e.target.value)
        if(e.target.value.length>=4&&e.target.value.match(stringregex)){
            setsubjectcolor(true)
        }
        else{
            setsubjectcolor(false) 
        }
    }
    let getgender=(e)=>{
        setgender(e.target.value)
    }
    let getpassword=(e)=>{
        setpassword(e.target.value)
        if(e.target.value.length>=8&&e.target.value.match(passregex)){
            setpasswordcolor(true)
        }
        else{
            setpasswordcolor(false)
        }
    }
    let getconfirmpass=(e)=>{
        setconfirmpass(e.target.value)
        if(e.target.value.match(password)){
            setconfirmpasscolor(true)
        }
        else{
            setconfirmpasscolor(false)
        }
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    let payload={
        name,
        mail,
        qualification,
        subject,
        gender,
        password,
        confirmpass

    }
    let emailregex=/.+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    let stringregex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    let passregex=/^[a-zA-Z]+[0-9]{2,4}[!@#$%]{2,4}$/
     useEffect(()=>{
        axios.get(`http://localhost:555/teacherseditpage/${params.id}`)
        .then((x)=>{console.log("i got particular staff details",x);
                    setname(x.data.name)
                    setmail(x.data.mail)
                    setqualification(x.data.qualification)
                    setsubject(x.data.subject)
                    setgender(x.data.gender)
                    setpassword(x.data.password)
                    setconfirmpass(x.data.confirmpass)})
        .catch(()=>{console.log("i didnt get particular staff details");})
     },[])

    let update=()=>{
       
        if(name.length>=4&&name.match(stringregex)&&mail.match(emailregex)&&qualification.length>=3&&qualification.match(stringregex)&&subject.length>=4&&subject.match(stringregex)&&password.length>=8&&password.match(passregex)&&confirmpass.match(password)){
            console.log(payload);
            
           axios.post(`http://localhost:555/teachersupdatedata/${params.id}`,payload)
           .then((x)=>{console.log("staff data updated",x);})
           .catch(()=>{console.log("failed to update the staff data");})
            navigate("/teacherspage")
        }
        else{
            if(name.length>=4&&name.match(stringregex)){
                setnamecolor(true)
            }
            else{
                if(name.length>=4&&name.match(stringregex)){
                    setnamecolor(true)
                }
                else{
                    setnamecolor(false)
                }
                if(mail.match(emailregex)){
                    setmailcolor(true)
                }
                else{
                    setmailcolor(false) 
                }
                if(qualification.length>=3&&qualification.match(stringregex)){
                    setqualificationcolor(true)
                }
                else{
                    setqualificationcolor(false)
                }
                if(subject.length>=4&&subject.match(stringregex)){
                    setsubjectcolor(true)
                }
                else{
                    setsubjectcolor(false) 
                }
                if(password.length>=8&&password.match(passregex)){
                    setpasswordcolor(true)
                }
                else{
                    setpasswordcolor(false)
                }
                if(confirmpass.match(password)){
                    setconfirmpasscolor(true)
                }
                else{
                    setconfirmpasscolor(false)
                }
                
            }
        }
    }
  return (
    <div id={style.Teacherseditpage}>
         <h1>Edit page</h1>
        <div id={style.form}>
        <TextField required helperText={namecolor?"":"please fill the name"} color={namecolor?"primary":"error"} value={name} onChange={getname} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Enter your Name" variant="outlined" />
        <TextField required helperText={mailcolor?"":"please fill the mail"} color={mailcolor?"primary":"error"} value={mail} onChange={getmail} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Enter your Emailid" variant="outlined" />
        <TextField required helperText={qualificationcolor?"":"please fill the qualification"} color={qualificationcolor?"primary":"error"} value={qualification} onChange={getqualification} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Qualification" variant="outlined" />
        <TextField required helperText={subjectcolor?"":"please fill the subject"} color={subjectcolor?"primary":"error"} value={subject} onChange={getsubject} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Subject " variant="outlined" />
        <FormControl sx={{marginTop:"40px"}}>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup value={gender} onChange={getgender} aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
       </RadioGroup>
       </FormControl>
        {/* <TextField required helperText={passwordcolor?"":"please fill the password"} color={passwordcolor?"primary":"error"} value={password} onChange={getpassword} id="outlined-basic" sx={{width:"300px",height:"20px"}} label="Enter the password" variant="outlined" />
        <TextField required helperText={confirmpasscolor?"":"please fill the confirm password"} color={confirmpasscolor?"primary":"error"} value={confirmpass} onChange={getconfirmpass} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Confirm pssword" variant="outlined" /> */}

<FormControl  required helperText={passwordcolor?"":"please fill the password"} color={passwordcolor?"primary":"error"} sx={{ m: 1, width: '32ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={getpassword} 
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
 <FormControl required helperText={confirmpasscolor?"":"please fill the confirm password"} color={confirmpasscolor?"primary":"error"}  sx={{ m: 1, width: '32ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={confirmpass} 
            onChange={getconfirmpass}
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
        <Button onClick={update} variant="contained" sx={{height:"30px",width:"90px",marginTop:"15px"}}>update</Button>
        </div>
    </div>
  )
}

export default Teacherseditpage