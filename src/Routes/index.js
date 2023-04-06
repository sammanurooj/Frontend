import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../layout/mainPage/index2'
import Table from '../layout/mainPage/tablePage'
import Signin from '../layout/mainPage/SignInPage'
import Signup from '../layout/mainPage/signupPage'
import Profile from '../layout/mainPage/profilePage'
import Postdata from '../reactQuerry/postData'
import Getdata from '../reactQuerry/index'

const Routing = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/" element={<Signin />} />
        <Route path="/table" element={<Table/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/post" element={<Postdata />} />
        <Route path="/get" element={<Getdata />} />
        </Routes>
      </BrowserRouter>



  </>

  )
}

export default Routing
