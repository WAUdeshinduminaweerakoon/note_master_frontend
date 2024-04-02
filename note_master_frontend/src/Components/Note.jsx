import React from 'react';

const Note = ({ id, text, editHandler, deleteHandler }) => {
  return (
    <div className='relative items-center justify-center px-3'>
      <div className='w-full h-full p-10 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
        <div className='w-full h-full p-5 overflow-auto bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50'>
          {text}
        </div>
        <div className='flex justify-end mt-2'>
          <button className='px-1 mr-2 text-xl text-black border border-black rounded-md hover:text-gray-300 focus:outline-none bg-gradient-to-r from-sky-500 to-indigo-500' onClick={() => deleteHandler(id)}>Delete</button>
          <button className='px-1 text-xl text-black border border-black rounded-md hover:text-gray-300 focus:outline-none bg-gradient-to-r from-sky-500 to-indigo-500' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Note;

