import React from 'react'
import style from "./style.module.css"
import teachersimg from "./Assets/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg"
import studentsimg from "./Assets/indian-school-students-friends-group-EFDEX8.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const Adminpage = () => {
  return (
    <div id={style.Adminpage}>
      <h1>School Management</h1>
        <div id={style.teacherslist}>
            <img src={teachersimg} alt="" />
            <div id={style.content}>
                    <h3>Teachers List</h3>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Check it.</h4>
                    <Link to="/teacherspage"  ><ArrowOutwardIcon id="explore" sx={{height:"50px",width:"60px"}}/></Link >
                </div>
        </div>
        <div id={style.studentslist}>
        <img src={studentsimg} alt="" />
        <div id={style.content}>
                    <h3>Students List</h3>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Check it.</h4>
                    <Link to="/studentspage" ><ArrowOutwardIcon id="explore" sx={{height:"50px",width:"60px"}}/></Link >
                </div>
        </div>
    </div>
  )
}

export default Adminpage