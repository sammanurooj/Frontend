import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../layout/mainPage/index2'
import Table from '../layout/mainPage/tablePage'
import Signin from '../layout/mainPage/SignInPage'
import Signup from '../layout/mainPage/signupPage'
import Profile from '../layout/mainPage/profilePage'
import Postdata from '../reactQuerry/postData'
import Getdata from '../reactQuerry/index'
import Createproject from '../layout/mainPage/createProject';
import Auth from '../components/Auth/auth';
import EditForm from '../layout/mainPage/editForm';
import PreviewForm from '../layout/mainPage/previewForm'
import ProjectList from '../layout/mainPage/projectList'


const Routing = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Auth><MainPage/></Auth> }/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/table" element={<Auth><Table/></Auth>} />
        <Route path="/projectlist" element={<Auth><ProjectList/></Auth>} />

      
        <Route path="/signup" element={<Signup/>} />
        <Route path="/edit/:id" element={<EditForm/>} />
        <Route path="/preview/:id" element={<PreviewForm />} />
        <Route path="/createproject" element={<Createproject/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/post" element={<Postdata />} />
        <Route path="/get" element={<Getdata />} />
        </Routes>
      </BrowserRouter>



  </>

  )
}

export default Routing
