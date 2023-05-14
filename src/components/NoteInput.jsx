import React from 'react';


class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <input class="note-input-title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea class="note-input-body" type="text" placeholder="Tuliskan catatan mu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;