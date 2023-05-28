import React from 'react';

function NoteSearch({ search, onSearch }) {
    return (
        <div className="note-app-header">
            <h1>My Notes</h1>
            <div className="note-search">
                <input value={search} id="search" type="text" placeholder="Cari catatan ..." onChange={(event)=> onSearch(event)}/>
            </div>
        </div>
    )
  }
  
  export default NoteSearch