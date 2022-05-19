import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import Login from './Login/Login';
import Navigation from './NavBar/NavBar';
import Allposts from './Posts/AllPosts';
import CreatePost from './Posts/CreatePost';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import SignUp from './SignUp/SignUp';
import ContainerStyle from '../helpers/Container';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Navigation />
        <ContainerStyle>
          <Routes>
            <Route element={<Allposts />} path='/' />
            <Route element={<Login />} path='/login' />
            <Route element={<SignUp />} path='/signup' />
            <Route element={<Profile />} path='/profile/:username' />
            <Route element={<Search />} path='/search' />
            <Route element={<CreatePost />} path='/create-post' />
          </Routes>
        </ContainerStyle>
      </BrowserRouter>
    </div>
  );
}

export default App;
