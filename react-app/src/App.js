import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';

import AllPantries from './components/AllPantries';
import SinglePantry from './components/SinglePantry';
import NewPantryForm from './components/NewPantry';
import EditPantryForm from './components/EditPantry';
import { authenticate } from './store/session';
import AllRecipes from './components/AllRecipes';
import NewRecipeForm from './components/NewRecipe';
import EditRecipeForm from './components/EditRecipeForm';
import SingleRecipe from './components/SingleRecipe';
import SplashPage from './components/SplashPage'
import AboutMe from './components/AboutMe'
import LandingPage from './components/LandingPage'
import CatchPage from './components/CatchPage';
import Footer from './components/Footer'

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
          <SplashPage />
          <Footer/>
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
          <SplashPage />
          <Footer/>
        </Route>
        <ProtectedRoute path='/' exact={true} >
          <NavBar />
          <LandingPage />
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
          <SingleRecipe />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/new-recipe' exact={true}>
          <NavBar />
          <NewRecipeForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId/recipe/:recipeId/edit-recipe' exact={true}>
          <NavBar />
          <EditRecipeForm />
        </ProtectedRoute>
        <ProtectedRoute path='/about-me' exact={true}>
          <NavBar />
          <AboutMe />
        </ProtectedRoute>
        <ProtectedRoute path='/*' >
          <NavBar />
          <CatchPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
