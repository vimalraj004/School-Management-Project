import {React ,useEffect,useState} from 'react'
import style from "./style.module.css"
import {Button} from "@mui/material"
import { Link,useParams } from 'react-router-dom';
import axios  from 'axios';
const Staffpage = () => {
    let[data,setdata]=useState("") 
    let params=useParams()
     console.log(params);
  useEffect(()=>{
    axios.get(`https://school-management-project-4.onrender.com/clientpage/${params.id}`)
    .then((x)=>{console.log("i got the student data",x);
                console.log(x.data);
                 setdata(x.data)})
    .catch(()=>{console.log("failed to get the student data");})
   
  },[])
  let edit=()=>{
    alert("Only Admin can edit your profile")
  }
  let Delete=()=>{
    alert("Only Admin can delete your profile")
  }
  return (
    <div id={style.clientpage}>
        <h1>{data.name} Details</h1>
        <div id={style.profilecard}>
               <div id={style.card}>
                    <h1>Name:{data.name}</h1>
                    <h2>Age:{data.age}</h2>
                    <h2>Class :{data.std}</h2>
                    <h2>Mail:{data.mail}</h2>
                    <h2>Gender:{data.gender}</h2>
                    <div id={style.buttonbox2}>
                    <Button  onClick={edit} id={style.btn} variant="contained">Edit</Button>
                    <Button onClick={Delete} id={style.btn} variant="contained">Delete</Button>
                    </div>
        
                  </div>
        </div>
    </div>
  )
}
// commented by mugilan
export default Staffpage
