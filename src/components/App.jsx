import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { LoginPage } from './LoginPage/LoginPage';
import Layout from './Layout/Layout';
import { Homepage } from './Homepage/Homepage';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { ContactPage } from './ContactPage/ContactPage';
import ContactList from './ContactList/ContactList';

export const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Homepage />}

            />
          <Route
            path='contacts'
            element={<ContactPage />}

            />
          <Route
						path='contacts/:id'
						element={
							<Suspense>
								<ContactList />
							</Suspense>
						}
					/>
				</Route>
        <Route
          path='signUp'
          element={<SignUpPage />}

          />
        <Route path='login'
          element={<LoginPage />}

          />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false} />
    </>

  )
}
