import React from 'react'
import Home from './components/Home'
import Adminpage from './components/Adminpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Teacherspage from './components/Teacherspage'
import Students from './components/Students'
import Teachersregpage from './components/Teachersregpage'
import Teacherseditpage from './components/Teacherseditpage'
import Studentsregpage from './components/Studentsregpage'
import Studentseditpage from './components/Studentseditpage'
import Staffpage from './components/Staffpage'
import Clientpage from "./components/Clientpage"

const App = () => {
  return (
    <div >
   
        <BrowserRouter>
         <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<Adminpage/>} path='/Adminpage'></Route>
            <Route element={<Teacherspage/>} path='/teacherspage'></Route>
            <Route element={<Teachersregpage/>} path='/teachersregpage'></Route>
            <Route element={<Teacherseditpage/>} path='/teacherseditpage/:id'></Route>
            <Route element={<Students/>} path='/studentspage'></Route>
            <Route element={<Studentsregpage/>} path='/studentsregpage'></Route>
            <Route element={<Studentseditpage/>} path='/studentseditpage/:id'></Route>
            <Route element={<Staffpage/>} path='/staffpage/:id'></Route>
            <Route element={<Clientpage/>} path='/clientpage/:id'></Route>
         </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App