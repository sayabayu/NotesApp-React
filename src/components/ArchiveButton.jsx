import React from 'react';

function ArchiveButton({ id, onArchive, isArchived }) {
    return  <button className='archive-button' onClick={() => onArchive(id)}>
                {isArchived ? 'Pindahkan':'Archieve'}
            </button>
    
}

export default ArchiveButton;