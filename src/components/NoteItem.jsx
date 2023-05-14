import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <div className="note-item-content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            <div className="note-item-action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>
        </div>
    );
}

export default NoteItem;