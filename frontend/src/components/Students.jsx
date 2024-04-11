import {React,useState,useEffect} from 'react'
import style from "./style.module.css"
import {Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {Link, useNavigate} from "react-router-dom"
import axios  from 'axios';

const Students = () => {
  let[data,setdata]=useState([])
  let [refresh,setrefresh]=useState(false)
  let navigate=useNavigate()
  let addstudents=()=>{
    navigate("/studentsregpage")
    // console.log("heloo");
  }
  useEffect(()=>{
    axios.get("https://school-management-project-4.onrender.com/studentslist")
    .then((x)=>{console.log("i got the students data");
                 setdata(x.data)})
    .catch(()=>{console.log("failed to get the students data");})
   
  },[refresh])
  let Delete=(id)=>{
    axios.post(`https://school-management-project-4.onrender.com/deletestudentscard/${id}`)
    .then(()=>{console.log("data deleted");})
    .catch(()=>{console.log("failed to delete the data");})
    setrefresh(!refresh)
  }
  return (
    <div id={style.Studentspage}>
        <div id={style.navbar}>
        <h1>Students List</h1>
        <Button onClick={addstudents} variant="contained" sx={{height:"40px",width:"90px",marginTop:"10px"}}><AddIcon/>Add students</Button>
        </div>
        <div id={style.profilecard}>
        {data.map((y)=>{
                return(
                  <div id={style.card}>
                    <h1>Name:{y.name}</h1>
                    <h2>Age:{y.age}</h2>
                    <h2>Class:{y.std}</h2>
                    <h2>Mail:{y.mail}</h2>
                    <h2>Gender:{y.gender}</h2>
                    <div id={style.buttonbox2}>
                    <Button  id={style.btn} variant="contained"><Link style={{color:"white",textDecoration:"none"}}  to={`/studentseditpage/${y._id}`}>Edit</Link></Button>
                    <Button onClick={()=>{Delete(y._id)}} id={style.btn} variant="contained">Delete</Button>
                    </div>
        
                  </div>
                )
        })}
        </div>
    </div>
  )
}

export default Students