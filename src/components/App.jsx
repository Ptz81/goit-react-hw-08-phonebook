import { useAuth } from 'hooks';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../components/pages/Home'));
const RegisterPage = lazy(() => import('../components/pages/Register'));
const LoginPage = lazy(() => import('../components/pages/Login'));
const TasksPage = lazy(() => import('../components/pages/Tasks'));
const ContactPage = lazy(() => import('../components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
          /> */}
           <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
