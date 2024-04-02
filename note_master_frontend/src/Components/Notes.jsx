import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNote from './CreateNote';
import { v4 as uuid } from 'uuid';
import Note from './Note';
import { useCookies } from 'react-cookie';

const Notes = () => {
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle] = useState(null);
    const [cookies] = useCookies(['email']);

    const editHandler = (id, text) => {
        setEditToggle(id);
        setInputText(text);
    }

    const saveHander = () => {
        if (editToggle) {
            setNotes(notes.map((note) => (
                note._id === editToggle ?
                { ...note, note: inputText } :
                note
            )));

        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    _id: uuid(),
                    note: inputText
                }
            ]);
        }

        setInputText("");
        setEditToggle(null);

    };

    const updateNotes = async () => {
        try {
            const response = await axios.get('http://20.106.202.73:3001/note/get-notes/' + cookies.email);
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    
    const deleteHandler = async (id) => {
        try {
            await axios.post('http://20.106.202.73:3001/note/delete-note', {
                email: cookies.email,
                _id: id
            });
            updateNotes(); // Refresh notes after successful deletion
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };
    

    useEffect(() => {
        updateNotes();
    }, []);

    useEffect(() => {
        // This useEffect will run whenever 'notes' state changes
        updateNotes();
    }, [notes]);

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {notes.map((note) => (
                editToggle === note._id ? (
                    <CreateNote
                        key={note._id}
                        id={note._id}
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHander}
                        setNotes={updateNotes}
                    />
                ) : (
                    <Note
                        key={note._id}
                        id={note._id}
                        text={note.note}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    />
                )
            ))}
            {editToggle == null && (
                <CreateNote
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHandler={saveHander}
                    setNotes={updateNotes}
                />
            )}
        </div>
    );
}

export default Notes;