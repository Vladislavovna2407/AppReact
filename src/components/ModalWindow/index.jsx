import { MainButton } from '../mainButton'
import './styleModalWindow.css'
import { Header } from '../Header'
import { useState } from 'react'
import { useLocalization } from '../../localization/useLocalization'

export const ModalWindow = ({ title, isOpen, onSubmit, onCancel, note }) => {
  const { translations } = useLocalization()
  // As you see here we are setting some values from outside. In this case we reuse our "create modal" to also edit our notes.
  // We just put our values from existing note that we want to edit as an initial value of our state
  const [noteTitle, setNoteTitle] = useState(note?.title ?? '')
  const [noteText, setNoteText] = useState(note?.text ?? '');
  const [noteOwner, setNoteOwner] = useState(note?.owner ?? '')
  const [noteTags, setNoteTags] = useState(note?.tags ?? '')
  const [noteColor, setNoteColor] = useState(note?.color ?? '')
  const [noteType, setNoteType] = useState((note?.isPublic ?? false) ? "Public" : "Private")

  const handleNoteTitleChange = event => {
    // Here we handle our input value
    setNoteTitle(event.target.value)
  }

  const handleNoteTextChange = event => {
    setNoteText(event.target.value);
  }

  const handleNoteOwnerChange = event => {
    setNoteOwner(event.target.value)
  }

  const handleNoteTagsChange = event => {
    setNoteTags(event.target.value)
  }

  const handleNoteColorChange = event => {
    setNoteColor(event.target.value)
  }

  const handleNoteTypeChange = event => {
    setNoteType(event.target.value)
  }

  const handleCancel = () => {
    // Here we handle cancel event, when user presses cancel button inside modal.
    // On top of that we would need to set modal values to default, like here we are setting note title to its default value
    onCancel()
    setNoteTitle('')
    setNoteText('')
    setNoteOwner('')
    setNoteTags('')
    setNoteColor('')
    setNoteType('')
  }

  const handleSubmit = () => {
    const newNote = {
      // Here you would add all your note values from state.
      // In case of creation they will be new values, in case of edit, they would be updated ones
      title: noteTitle,
      text: noteText,
      owner: noteOwner,
      tags: noteTags,
      color: noteColor,
      type: noteType
     
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
          <div>
            <label>{translations['title']}</label>
            <input value={noteTitle} onChange={handleNoteTitleChange} />
          </div>
          <div>
            <label>{translations['text']}</label>
            <input value={noteText} onChange={handleNoteTextChange} />
          </div>
          <div>
            <label>{translations['owner']}</label>
            <input value={noteOwner} onChange={handleNoteOwnerChange} />
          </div>
          <div>
            <label >{translations['tags']}</label>
            <input value={noteTags} onChange={handleNoteTagsChange} />
          </div>

          <div>
            <label >{translations['color']}</label>
            <input value={noteColor} onChange={handleNoteColorChange} />
          </div>

          <div className='type'>
            <label htmlFor="type">{translations['type']}</label>
            <select value={noteType} name='type' onChange={handleNoteTypeChange} >
              <option value="Private">{translations['private']}</option>
              <option value="Public">{translations['public']}</option>
            </select>
          </div>
          <div>
            <div className="modalFooter">
              <MainButton onClick={handleSubmit} text={translations['submit']} />
              <MainButton onClick={handleCancel} text={translations['cancel']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
