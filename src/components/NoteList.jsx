import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, isArchived }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p>Tidak ada catatan</p>
            ) : (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        isArchived={note.archived}
                        {...note} />
                ))
            )}
        </div>
    );
}

export default NoteList;
