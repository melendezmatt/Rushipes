import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import AllPantries from './components/AllPantries';
import SinglePantry from './components/SinglePantry';
import NewPantryForm from './components/NewPantry';
import EditPantryForm from './components/EditPantry';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantries' exact={true}>
          <AllPantries />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantry/:pantryId' exact={true}>
          <SinglePantry />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/new-pantry' exact={true}>
          <NewPantryForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantry/:pantryId/edit-pantry' exact={true}>
          <EditPantryForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
