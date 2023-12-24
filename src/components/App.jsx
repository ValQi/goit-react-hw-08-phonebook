import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};