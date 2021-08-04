
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoUserButton from './auth/DemoUserButton';
import { getAllUserPantries} from '../../store/pantries';
import { getAllUserRecipes} from '../../store/recipes';

const NavBar = () => {
  const loggedInUser = useSelector(state => state.session.user)
  const id = loggedInUser?.id
  const dispatch = useDispatch();

  const currPantries = useSelector((state) => {
      return state.pantries
  })

  const currRecipes = useSelector((state) => {
    return state.recipes
  })

  useEffect(() => {
      dispatch(getAllUserPantries(id))
      dispatch(getAllUserRecipes(id))
  }, [dispatch, id])


  let navContent;
  if (loggedInUser) {
    navContent = (
      <ul className='navbar'>
        <li className='navbar__link'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to={`/users/${loggedInUser?.id}/pantries`} exact={true} activeClassName='active'>
            Pantries
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink to={`/users/${loggedInUser?.id}/recipes`} exact={true} activeClassName='active'>
            Recipes
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
      {navContent}
    </nav>
  );
}

export default NavBar;
