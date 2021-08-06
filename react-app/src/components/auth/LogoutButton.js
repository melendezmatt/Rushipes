import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { refreshPantries } from '../../store/pantries';
import { refreshRecipes } from '../../store/recipes';
const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    dispatch(refreshPantries())
    dispatch(refreshRecipes())
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
