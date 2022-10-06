import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";


function App() {
  const [notes,setNotes] =useState(JSON.parse(localStorage.getItem('react-notes-app'))||[
    {
    id: nanoid(),
    text:"This is a sample note",
    date:'12/01/2022'
  }
]);
const [searchText,setSearchText] = useState('');
const [toggle,setToggle] = useState(false)
   



useEffect(()=>{

 
    localStorage.setItem('react-notes-app',JSON.stringify(notes))

  
},[notes])


const addNote =(text)=>{
  const date  = new Date();
  const newNote ={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  setNotes(notes.concat(newNote))

  //else we use the below method

  // const newNotes = [...notes,newNote];
  // setNotes(newNotes)
}

const deleteNote =(id)=>{
   const newNotes =  notes.filter((note)=>
         note.id !== id
    )
    setNotes(newNotes)
}
console.log(notes)
  return (
    <div className={`${toggle && 'dark-mode'}`}>
    <div className='container'>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Search handleSearchNote={setSearchText}/>
     <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
     </div>
     </div>
  );
}

export default App;
