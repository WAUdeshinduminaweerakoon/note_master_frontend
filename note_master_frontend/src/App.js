import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Cookies, CookiesProvider, useCookies } from 'react-cookie'


import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Notes from './Components/Notes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  
  const cookies = new Cookies();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (cookies.get('isAuthenticated')) {
      setIsAuthenticated(cookies.get('isAuthenticated'))
    }
  }, []);
  const handleSignOut = () => {
    cookies.set('email', null, { path: '/' });
    cookies.set('isAuthenticated', false, { path: '/' });

    setIsAuthenticated(false);
    
  };
  return (
    <BrowserRouter>
    <div  className="flex flex-col h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <div className="flex-1 p-12 overflow-y-auto ">
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/SignIn' element={<SignIn setAuthentication={setIsAuthenticated}/>}></Route>
        <Route path='/Notes' element={<Notes/>}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
  </BrowserRouter>
    
    
  
  );
}

export default App;