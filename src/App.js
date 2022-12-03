
import './App.css';
import DashBoard from './Component/DashBoard';
import SideBar from './Component/SideBar';
import AllStudent from './Component/AllStudent';
import AddStudent from './Component/AddStudent';
import AddTeacher from './Component/AddTeacher';
import TeacherCabin from './Component/TeacherCabin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import EditStudent from './Component/EditStudent';
import EditTeacher from './Component/EditTeacher';


function App() {
  

  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: "20",
    pending: "26"

  }

  let [students,setStudents] = useState([])
  let [teachers,setTeachers] = useState([])


  

  return <>
  <Router>
    <div style={{display: "grid",gridTemplateColumns:"17% 85%"}}>
      <div>
        <SideBar/>
      </div>
     <div>
       <Routes>
          <Route path='*' element={  <DashBoard data={data}/>} />

          <Route path='/dashboard' element={  <DashBoard data={data}/>} />
          <Route path='/all-student' element={<AllStudent data = {{students}}/>}/>
          <Route path='/add-student' element={<AddStudent data = {{students,setStudents}}/>}/>
          <Route path='/edit-student/:id' element={<EditStudent data = {{students,setStudents}}/>}/>
          <Route path='/teacher-cabin' element={<TeacherCabin data = {{teachers}}/>}/>
          <Route path='/add-teacher' element={<AddTeacher data = {{teachers,setTeachers}}/>}/> 
          <Route path='/edit-teacher/:id' element={<EditTeacher data = {{teachers,setTeachers}}/>}/>

          


        </Routes>
      </div>
    </div>
 </Router>
 
  </>
  
}

export default App;
