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
import AllRecipes from './components/AllRecipes';

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
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true}>
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <NavBar />
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantries' exact={true}>
          <NavBar />
          <AllPantries />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantry/:pantryId' exact={true}>
          <NavBar />
          <SinglePantry />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/new-pantry' exact={true}>
          <NavBar />
          <NewPantryForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/pantry/:pantryId/edit-pantry' exact={true}>
          <NavBar />
          <EditPantryForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/recipes' exact={true}>
          <NavBar />
          <AllRecipes />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/recipe/:recipeId' exact={true}>
          <NavBar />
          <SinglePantry /> // FIX
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/new-recipe' exact={true}>
          <NavBar />
          <NewPantryForm /> // FIX
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/recipe/:recipeId/edit-recipe' exact={true}>
          <NavBar />
          <EditPantryForm /> // FIX
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
