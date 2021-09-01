
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {

  const dispatch = useDispatch()

  const handleDemoLogin = async (e) => {
    e.preventDefault()
    console.log("eggs")
    await dispatch(login("demo@aa.io", "password"))
  }

  const user = useSelector(state => state.session.user)
  console.log("USER", user)

  let authRoutes = null;

  if (!user){
    authRoutes = (
      <>
        <NavLink className="navbar-login navbar-button" to='/login' exact={true} activeClassName='active'>
           <div className="navbar-button-text">
            Login
          </div>
        </NavLink>
        <div className="navbar-demo navbar-button">
          <button className="navbar-demo-button" onClick={handleDemoLogin} activeClassName='active'>
            <div className="navbar-button-text">
              Demo
            </div>
          </button>
        </div>
        <NavLink className="navbar-signup navbar-button" to='/sign-up' exact={true} activeClassName='active'>
          <div className="navbar-button-text">
            Sign Up
          </div>
        </NavLink>
      </>
    )
  }

  let userRoutes = null

  if (user){
    userRoutes = (
      <>
        <NavLink className="navbar-home navbar-button" to='/' exact={true} activeClassName='active'>
          <div className="navbar-button-text">
              Home
          </div>
        </NavLink>
        <NavLink className="navbar-pages navbar-button" to='/pages' exact={true} activeClassName='active'>
          <div className="navbar-button-text">
            Pages
          </div>
        </NavLink>
        <div className="navbar-logout navbar-button">
          <LogoutButton />
        </div>
      </>
    )
  }

  return (
    <nav className="navbar-container">
      <div className="navbar-links">

        {authRoutes}
        {userRoutes}

      </div>
    </nav>
  );
}

export default NavBar;
