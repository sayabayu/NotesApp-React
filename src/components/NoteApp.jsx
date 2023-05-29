import React from 'react';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: ''
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
      
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
        this.setState({notes});
    }


    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onNoteSearchHandler(event) {
        this.setState(() => {
          return {
            search : event.target.value
          }
        })
      }
   

    render() {
        const noteSearch = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase())
        );
  
        const daftarNote = noteSearch.filter((note) => {
            return note.archived === false;
          });
        const archivedNote = noteSearch.filter((note) => {
            return note.archived === true;
        });
        return (
            <div className="body-note-app">  
                <NoteSearch notes={noteSearch} search={this.state.search} onSearch={this.onNoteSearchHandler} />

                <NoteInput addNote={this.onAddNoteHandler} />    
                <h2>Catatan Aktif</h2>
                <NoteList notes={daftarNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
               
                <h2>Arsip</h2>
                <NoteList notes={archivedNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
               
            </div>
        );
    }
}

export default NoteApp;