import React from 'react';
import homeimg from '../Image/Homepageimg.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2"> 
      <div className="flex items-center justify-center col-span-1 md:col-span-1"> 
        <div className="object-cover object-center p-5 bg-white border-2 border-black rounded-full h-97 w-97">
          <img src={homeimg} alt="Logo" className="object-cover object-center border-2 border-black rounded-full h-96 w-96" />
        </div>
      </div>
      <div className="col-span-1 md:col-span-1"> 
        {/* <div className="object-cover object-center w-full h-full border-2 border-blue-500 rounded-3xl"> */}
          <div>
           <div className='items-center justify-center p-10 '>
            <h1 className='text-5xl text-gray-700'>Note Master</h1>
           </div>
           <div className='items-center justify-center pl-10 '>
             <h2 className='text-2xl text-orange-950 '>"Effortlessly Capture, Organize, and Access Your Thoughts Anytime, Anywhere with <span className='text-3xl '>Note Master</span> ."</h2>
           </div>
           <div className='items-center justify-center pl-10 '>
            <h3 className='pt-4 text-2xl text-rose-900'>"Start Your Note-Taking Journey - Sign Up Now!"</h3>
            <Link to="/signup" className="text-2xl text-white hover:text-gray-300">Sign Up</Link>
           </div>
           <div className='items-center justify-center pl-10 '>
            <h3 className='pt-4 text-2xl text-rose-900'>"Ready to Unlock Your Ideas? Sign In Here"</h3>
            <Link to="/signin"  className="text-2xl text-white hover:text-gray-300">Sign In</Link>
           </div>

        </div> 
      </div>
    </div>
  );
};

export default Home;




