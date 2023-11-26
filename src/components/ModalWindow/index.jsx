import {MainButton} from '../mainButton'
import './styleWindow.css'
import {Header} from '../Header'
import {useState} from 'react'

export const ModalWindow = ({title, isOpen, onSubmit, onCancel, note}) => {
  // As you see here we are setting some values from outside. In this case we reuse our "create modal" to also edit our notes.
  // We just put our values from existing note that we want to edit as an initial value of our state
  const [noteTitle, setNoteTitle] = useState(note?.title ?? '')

  const handleNoteTitleChange = event => {
    // Here we handle our input value
    setNoteTitle(event.target.value)
  }

  const handleCancel = () => {
    // Here we handle cancel event, when user presses cancel button inside modal.
    // On top of that we would need to set modal values to default, like here we are setting note title to its default value
    onCancel()
    setNoteTitle('')
  }

  const handleSubmit = () => {
    const newNote = {
      // Here you would add all your note values from state.
      // In case of creation they will be new values, in case of edit, they would be updated ones
      title: noteTitle,
    }
    onSubmit(newNote)
  }

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modalContent">
        <div className="modalHeader">
          <Header value={title} />
        </div>
        <div className="modalBody">
          {/* Here we have only one input for note title. You'll need to add other inputs for text, tags, etc.
          For private and public notes you would have to add a Switch component and store its value as boolean to later send it
          with everything else to back-end to create new note */}
          <input value={noteTitle} onChange={handleNoteTitleChange} />
        </div>
        <div className="modalFooter">
          <MainButton onClick={handleSubmit} text={'Submit'} />
          <MainButton onClick={handleCancel} text={'Cancel'} />
        </div>
      </div>
    </div>
  )
}
