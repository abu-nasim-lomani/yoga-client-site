import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../image/home-yoga-introduce-image.png';
import './Navbar.css'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav class="navbar navbar-expand-lg ">
      <img src={logo} style={{ height: '80px' }} alt="" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Our Portfolio</a>
          </li>
          <li class="nav-item">
            <Link to="/dashboard"><span class="nav-link mr-5" href="#">DashBoard</span></Link>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Contact US</a>
          </li>

          <li class="nav-item">
            {
              loggedInUser.email ?<a class="nav-link mr-5" href="#">{loggedInUser.name}</a>  :
              <Link to="/login"><button className="btn btn-secondary btn-sm ">Login</button></Link>
                
                
            }
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;