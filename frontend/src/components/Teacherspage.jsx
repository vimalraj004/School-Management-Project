import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import {Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {Link, useNavigate} from "react-router-dom"
import axios  from 'axios';
const Teacherspage = () => {
  let[data,setdata]=useState([])
  let [refresh,setrefresh]=useState(false)
  let navigate=useNavigate()
  let addteachers=()=>{
    navigate("/teachersregpage")
    // console.log("heloo");
  }
  useEffect(()=>{
    axios.get("http://localhost:555/teacherslist")
    .then((x)=>{console.log("i got the teachers data");
                 setdata(x.data)})
    .catch(()=>{console.log("failed to get the teachers data");})
   
  },[refresh])
  let Delete=(id)=>{
    axios.post(`http://localhost:555/deleteteacherscard/${id}`)
    .then(()=>{console.log("data deleted");})
    .catch(()=>{console.log("failed to delete the data");})
    setrefresh(!refresh)
  }
  return (
    <div id={style.Teacherspage}>
        <div id={style.navbar}>
        <h1>Teachers List</h1>
        <Button onClick={addteachers} variant="contained" sx={{height:"40px",width:"90px",marginTop:"10px"}}><AddIcon/>Add Teachers</Button>
        </div>
        <div id={style.profilecard}>
        {data.map((y)=>{
                return(
                  <div id={style.card}>
                    <h1>Name:{y.name}</h1>
                    <h2>Subject:{y.subject}</h2>
                    <h2>Qualification:{y.qualification}</h2>
                    <h2>Mail:{y.mail}</h2>
                    <h2>Gender:{y.gender}</h2>
                    <div id={style.buttonbox2}>
                    <Button  id={style.btn} variant="contained"><Link style={{color:"white",textDecoration:"none"}}  to={`/teacherseditpage/${y._id}`}>Edit</Link></Button>
                    <Button onClick={()=>{Delete(y._id)}} id={style.btn} variant="contained">Delete</Button>
                    </div>
        
                  </div>
                )
        })}
        </div>
    </div>
  )
}

export default Teacherspage