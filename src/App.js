import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import MyAppBar from './components/MyAppBar';

import { CircularProgress } from '@mui/material';

const Login = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */)
);
const Registration = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */)
);
const Contacts = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */)
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => authSelectors.getIsFetchingCurrent
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <MyAppBar />

      <Container style={{ maxWidth: '1650px', paddingBottom: '40px' }}>
        {isFetchingCurrentUser ? (
          <CircularProgress />
        ) : (
          <Routes>
            <PublicRoute path="/" exact redirectTo="/contacts" restricted>
              <HomePage />
            </PublicRoute>

            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
            >
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
              <PublicRoute path="/register" redirectTo="/contacts" restricted>
                <RegisterPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Routes>
        )}
      </Container>
    </>
  );
}

export default App;
