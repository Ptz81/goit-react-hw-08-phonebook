import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from './Homepage/Homepage';
import { Options } from './Options/Options';
import { SignUpPage } from './SignUpPage/SignUpPage';
import { LoginPage } from './LoginPage/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage/>}/>
        <Route path='/'element={<Options/>}/>
      </Route>
      <Route path='/signUp' element = {<SignUpPage/>} />
      <Route path='/login' element={ <LoginPage/>} />
    </Routes>
  )
}
