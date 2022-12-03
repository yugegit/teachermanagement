import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';



function TeacherCabin(props) {

  let navigate = useNavigate();



  console.log(props)
  return <>

  <h1>Teachers List</h1>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Batch</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        
        {
          props.data.teachers.map ((e,i) => {
            return <tr key={i} >
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.batch}</td>
              <td>{e.mobile}</td>
              <td>{e.status? <p style={{color : "green"}}>Active</p>:<p style={{color : "red"}}>Inactive</p>}</td>
              <td>
                <Button variant = 'primary' onClick={()=>navigate('/edit-teacher/' + i)}  >Edit</Button>
                &nbsp;
                &nbsp;
                &nbsp;
                <Button variant = 'danger'>Delete</Button>

              </td>

            </tr>
          })
        }
      </tbody>
    </Table>
  
  </>
}

export default TeacherCabin