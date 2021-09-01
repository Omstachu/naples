
import React from 'react';
import { NavLink, } from 'react-router-dom';
import {useSelector} from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {

  const user = useSelector(state => state.session.user)
  console.log("USER", user)

  let authRoutes = null;

  if (!user){
    authRoutes = (
      <>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </>
    )
  }

  return (
    <nav>
      <div className="navbar-links">
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        {authRoutes}
        <div>
          <NavLink to='/pages' exact={true} activeClassName='active'>
            Pages
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
