import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return <>
  <div>
  
  {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <div className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to = '/dashboard'>
                     <div className="nav-link" href="index.html">
                         <i className="fas fa-fw fa-tachometer-alt"></i>
                         <span>Dashboard</span>
                     </div>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Student-Management
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to='/add-student'>
                   <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                      aria-expanded="true" aria-controls="collapseTwo">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>AddStudent</span>
                    </div>
               </Link>
                
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <Link to='/all-student'>
                   <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                      aria-expanded="true" aria-controls="collapseUtilities">
                       <i className="fas fa-fw fa-wrench"></i>
                      <span>AllStudent</span>
                    </div>
                </Link>
                
            </li>

             {/* <!-- Heading --> */}
             <div className="sidebar-heading">
                Teacher-Management
            </div>

             {/* <!-- Nav Item - Pages Collapse Menu --> */}
             <li className="nav-item">
                <Link to='/add-teacher'>
                   <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                      aria-expanded="true" aria-controls="collapseTwo">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>Add Teacher</span>
                    </div>
               </Link>
                
            </li>

             {/* <!-- Nav Item - Utilities Collapse Menu --> */}
             <li className="nav-item">
                <Link to='/teacher-cabin'>
                   <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                      aria-expanded="true" aria-controls="collapseUtilities">
                       <i className="fas fa-fw fa-wrench"></i>
                      <span>Teacher-Cabin</span>
                    </div>
                </Link>
                
            </li>

            

          

           
           
           
            

        </ul>
        {/* <!-- End of Sidebar --> */}

  </div>
  </>
  
}

export default SideBar