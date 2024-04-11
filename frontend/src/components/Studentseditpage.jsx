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

const Studentseditpage = () => {
    let[name,setname]=useState("")
    let[mail,setmail]=useState("")
    let[std,setstd]=useState("")
    let[age,setage]=useState("")
    let[gender,setgender]=useState("")
    let[password,setpassword]=useState("")
    let[confirmpass,setconfirmpass]=useState("")

    const [showPassword, setShowPassword] = useState(false);

    let[namecolor,setnamecolor]=useState(true)
    let[mailcolor,setmailcolor]=useState(true)
    let[stdcolor,setstdcolor]=useState(true)
    let[agecolor,setagecolor]=useState(true)
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
    let getstd=(e)=>{
        setstd(e.target.value)
        if(e.target.value.length>=3){
            setstdcolor(true)
        }
        else{
            setstdcolor(false)
        }
    }
    let getage=(e)=>{
        setage(e.target.value)
        if(e.target.value.length>=1&&e.target.value.match(numberregex)){
            setagecolor(true)
        }
        else{
            setagecolor(false) 
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
        std,
        age,
        gender,
        password,
        confirmpass

    }
    let emailregex=/.+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    let stringregex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    let numberregex=/^[0-9]+$/
    let passregex=/^[a-zA-Z]+[0-9]{2,4}[!@#$%]{2,4}$/
     useEffect(()=>{
        axios.get(`http://localhost:555/studentseditpage/${params.id}`)
        .then((x)=>{console.log("i got particular staff details",x);
                    setname(x.data.name)
                    setmail(x.data.mail)
                    setstd(x.data.std)
                    setage(x.data.age)
                    setgender(x.data.gender)
                    setpassword(x.data.password)
                    setconfirmpass(x.data.confirmpass)})
        .catch(()=>{console.log("i didnt get particular staff details");})
     },[])

    let update=()=>{
        console.log("heloo");
        if(name.length>=4&&name.match(stringregex)&&mail.match(emailregex)&&std.length>=3&&password.length>=8&&password.match(passregex)&&confirmpass.match(password)){
            console.log(payload);
            
           axios.post(`http://localhost:555/studentsupdatedata/${params.id}`,payload)
           .then((x)=>{console.log("staff data updated",x);})
           .catch(()=>{console.log("failed to update the staff data");})
            navigate("/studentspage")
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
                if(std.length>=3){
                    setstdcolor(true)
                }
                else{
                    setstdcolor(false)
                }
                if(age.length>=1&&age.match(numberregex)){
                    setagecolor(true)
                }
                else{
                    setagecolor(false) 
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
  return (
    <div id={style.studentseditpage}>
         <h1>Edit page</h1>
        <div id={style.form}>
        <TextField required helperText={namecolor?"":"please fill the name"} color={namecolor?"primary":"error"} value={name} onChange={getname} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Enter your Name" variant="outlined" />
        <TextField required helperText={mailcolor?"":"please fill the mail"} color={mailcolor?"primary":"error"} value={mail} onChange={getmail} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Enter your Emailid" variant="outlined" />
        <TextField required helperText={stdcolor?"":"please fill the std"} color={stdcolor?"primary":"error"} value={std} onChange={getstd} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="class" variant="outlined" />
        <TextField required helperText={agecolor?"":"please fill the age"} color={agecolor?"primary":"error"} value={age} onChange={getage} id="outlined-basic" sx={{width:"300px",height:"20px",marginTop:"40px"}} label="Age " variant="outlined" />
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

export default Studentseditpage