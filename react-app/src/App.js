import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Page from './components/Page';
import List from './components/List';
import PageList from './components/PageList'
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

        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        <ProtectedRoute path='/pages/:pageId' exact={true} >
          <Page />
        </ProtectedRoute>

        <ProtectedRoute path='/pages' exact={true} >
          <PageList />
        </ProtectedRoute>

        <ProtectedRoute path='/lists/:listId' exact={true} >
          <List />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
