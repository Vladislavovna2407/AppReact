import {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import './styleMoke.css'
import {DeleteModal} from '../../components/DeleteModal'
import {ModalWindow} from '../../components/ModalWindow'
import {useLocalization} from '../../localization/useLocalization'
import { NotePreview } from '../../components/NotePreview'

export const ExampleNotes = ({list}) => {
  const {translations} = useLocalization()
  const [deleteModalActive, setModalActive] = useState(false) // Видно ли окно удаления? Да/Нет
  const [noteToDelete, setNoteToDelete] = useState(null) // Какую заметку удаляем?

  const [notePreviewActive, setNotePreviewActive] = useState(false);
  const [notePreview, setNoteToPreview] = useState(null)

  const [editModalActive, setEditModalActive] = useState(false)
  const [noteToEdit, setNoteToEdit] = useState(null)

  const handleDelete = note => {
    setNoteToDelete(note)
    setModalActive(true)
  }

  const handleEdit = note => {
    // Here we firstly save the note that we want to edit to our state and then open the modal window
    setNoteToEdit(note)
    setEditModalActive(true)
  }

  const handleReadMore = note => {
    setNoteToPreview(note);
    setNotePreviewActive(true);
  };

  const handleCancelReadMore = () => {
    setNoteToPreview(null);
    setNotePreviewActive(false);
  };

  const result = list.map(item => {
    return (
      // As you can see here, we are using "color" property of a note to give every note its own color that will come
      // from back-end in the future and not from our mock local array
      <div key={item.id}  className='card' style={{backgroundColor: item.color}}>
        <p>
          <span>{translations['title']}</span> {item.title}
        </p>
        <p>
          <span>{translations['text']}</span> {item.text}
        </p>
        <p>
          <span>{translations['owner']}</span> {item.owner}
        </p>
        <p>
          <span>{translations['tags']}</span> {item.tags}
        </p>
        <p>
          <span>{translations['type']} </span>
          {item.isPublic ? 'Public' : 'Private'}
        </p>
        <div className="wrapper">
          {/* With this button we just store our note that we want to delete in state, that we later use in our handleDeleteNote function */}
          <MainButton onClick={() => handleDelete(item)} text={translations['deleteNote']} />
          <MainButton onClick={() => handleEdit(item)} text={translations['editNote']} />
        </div>
        <div className ='doubbleButton'>
          <MainButton  onClick={()=> handleReadMore(item)}  text={translations['readMore']}/>
        </div>
      </div>
    )
  })

  const handleCancelDelete = () => {
    setModalActive(false)
    setNoteToDelete(null)
  }

  const handleDeleteNote = () => {
    // Here we would be using the logic to delete our note with a request to back-end
    console.log('--', noteToDelete)
    setModalActive(false)
  }

  const handleEditNote = note => {
    // Here we would perform another back-end request to edit our note
    console.log('note :>> ', note)
    setEditModalActive(false)
  }

  const handleCancelEdit = () => {
    setEditModalActive(false)
    setNoteToEdit(null)
  }

  return (
    <div className="container">
      {result}
      <DeleteModal
        title={translations['wantToDelete']}
        isOpen={deleteModalActive}
        onSubmit={handleDeleteNote}
        onCancel={handleCancelDelete}
      />
      {/* Here we reuse the same modal window that we use to create but with some changes inside it.
      Also you may notice that we use a different approach, where we add a condition to render our modal window.
      Because in your case modal window was hidden by the power of css, so only on the UI, but from React point of view it was
      always there in the DOM, so for our case we need this modal to live its lifecycle, which means
      it has to be mounted and unmounted when we open it or close it */}
      {editModalActive && (
        <ModalWindow
          title={translations['wantToEdit']}
          isOpen={editModalActive}
          note={noteToEdit}
          onSubmit={handleEditNote}
          onCancel={handleCancelEdit}
        />
      )}
      {notePreviewActive && (
        <NotePreview
          title={translations['readMore']}
          isOpen={notePreviewActive}
          note={notePreview}
          onCancel={handleCancelReadMore}
        />
      )}
    </div>
  )
}
