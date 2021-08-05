
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUserButton from './auth/DemoUserButton';
import { AiFillHome } from 'react-icons/ai'
import { RiFridgeFill } from 'react-icons/ri'
import { GiCookingPot } from 'react-icons/gi'

const NavBar = () => {
  const loggedInUser = useSelector(state => state.session.user)
  const id = loggedInUser?.id

  let navContent;
  if (loggedInUser) {
    navContent = (
      <ul className='navbar'>
        <li className='navbar__link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <AiFillHome />
            Home
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to={`/users/${loggedInUser?.id}/pantries`} exact={true} activeClassName='active'>
            <RiFridgeFill />
            My Pantries
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to={`/users/${loggedInUser?.id}/recipes`} exact={true} activeClassName='active'>
            <GiCookingPot />
            My Recipes
          </NavLink>
        </li>
        <li className="navbar__button">
          <LogoutButton />
        </li>
      </ul>)
  } else {
    navContent = (
      <ul className='navbar'>
        <li className='navbar__link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <AiFillHome />
            Home
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className="navbar__button">
          <DemoUserButton />
        </li>
      </ul>)
  }
  return (
    <nav>
      { loggedInUser? <div className="nav-logo">
          <NavLink id="navbar__brand-home" to='/' exact={true} activeClassName='active'>
              <img src='https://user-images.githubusercontent.com/79602970/128381947-80552022-bcfe-4294-92c7-b5174ba826e0.png' alt='logo' id='navbar__logo' />
          </NavLink>
        </div> : <div className="nav-logo">
          <NavLink id="navbar__brand-home" to='/' exact={true} activeClassName='active'>
              <img src='https://user-images.githubusercontent.com/79602970/128381947-80552022-bcfe-4294-92c7-b5174ba826e0.png' alt='logo' id='navbar__logo' />
          </NavLink>
        </div>}
      {navContent}
    </nav>
  );
}

export default NavBar;
