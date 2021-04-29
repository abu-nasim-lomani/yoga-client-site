import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <img src={loggedInUser.photoURL} style={{borderRadius:'50%', marginLeft:'30px', marginBottom:'50px'}} alt=""/>
                <li>
                    <Link to="/" className="text-white">
                         <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/books" className="text-white">
                         <span>Books</span> 
                    </Link>
                </li>
                
                <li>
                    <Link to="/dashboard/feedback" className="text-white">
                         <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/admin" className="text-white" >
                        <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/course" className="text-white" >
                        <span>Course</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addCourse" className="text-white" >
                        <span>Add Course</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white">  <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;