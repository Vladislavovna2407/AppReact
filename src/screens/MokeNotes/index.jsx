import {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import './styleMoke.css'
import {DeleteModal} from '../../components/DeleteModal'
import {ModalWindow} from '../../components/ModalWindow'

export const ExampleNotes = ({list}) => {
  const [modalActive, setModalActive] = useState(false)
  const [noteToDelete, setNoteToDelete] = useState(null)

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

  const result = list.map(item => {
    return (
      // As you can see here, we are using "color" property of a note to give every note its own color that will come
      // from back-end in the future and not from our mock local array
      <div key={item.id} className="card" style={{backgroundColor: item.color}}>
        <p>
          <span>Title:</span> {item.title}
        </p>
        <p>
          <span>Text:</span> {item.text}
        </p>
        <p>
          <span>Owner:</span> {item.owner}
        </p>
        <p>
          <span>Tags:</span> {item.tags}
        </p>
        <div className="wrapper">
          {/* With this button we just store our note that we want to delete in state, that we later use in our handleDeleteNote function */}
          <MainButton onClick={() => handleDelete(item)} text={'Удалить'} />
          <MainButton onClick={() => handleEdit(item)} text={'Редактировать'} />
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
  }

  const handleEditNote = note => {
    // Here we would perform another back-end request to edit our note
    console.log('note :>> ', note)
  }

  const handleCancelEdit = () => {
    setEditModalActive(false)
    setNoteToEdit(null)
  }

  return (
    <div className="container">
      {result}
      <DeleteModal
        title="Are you sure you want to delete this note?"
        isOpen={modalActive}
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
          title={'Редактирование заметки'}
          isOpen={editModalActive}
          note={noteToEdit}
          onSubmit={handleEditNote}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  )
}
