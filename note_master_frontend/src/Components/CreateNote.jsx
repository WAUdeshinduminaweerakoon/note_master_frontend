import React, { useState } from "react";
import axios from 'axios';
import Note from './Note'; 
import { Cookies, CookiesProvider, useCookies } from 'react-cookie'



const CreateNote = ({id , inputText, setInputText , setNotes}) => {
    const charLimit = 200 - inputText.length;
    const cookies = new Cookies();

    const saveHander = async () => {
        try {
            const response = await axios.post('http://20.106.202.73:3001/note/create', { _id: id, email: cookies.get('email'), note: inputText });
            console.log(response.data);
            setNotes(response.data); // Update notes with the response data
            setInputText('');
            window.location.reload();
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

  return (
    <div className='relative items-center justify-center w-full p-3 '>
     
      <div className='w-full h-full p-10 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
        {/* <div><h2>fttttttttttttt</h2></div> */}
        <textarea 
        cols = {20}
        rows = {5}
        value={inputText}
        placeholder='Type new note......'
        onChange={(e) => setInputText(e.target.value)}
        
        maxLength={200}
        className='w-full h-full p-5 text-black placeholder-gray-800 bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50 '
        >

        </textarea>
        <div className='flex items-center justify-between '>
            <span>{charLimit}</span>
            <button onClick={saveHander} className='px-1 text-xl text-black border border-black rounded-md hover:text-gray-300 focus:outline-none bg-gradient-to-r from-sky-500 to-indigo-500'>Save</button>

        </div>
      
    </div>
    </div>
  )
}

export default CreateNote;