import {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import {ModalWindow} from '../../components/ModalWindow'
import {ExampleNotes} from '../ExampleNotes'
import './styles.css'
import {LocalizationOptions} from './localizationOptions'
import {useLocalization} from '../../localization/useLocalization'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteActionCreator } from '../../redux/reducers/notes'

export const NotesScreen = () => {
  const dispatch= useDispatch()
  const list = useSelector(state => state.notes.notes)
  const {translations} = useLocalization()
  const [modalActive, setModalActive] = useState(false)

  const navigate = useNavigate()

  const handleCreateNote = note => {
    // Logic to create note, will be a request to back-end
    let theLastId = Math.max(...list.map(note => note.id));
    note.id = ++theLastId;
    dispatch(addNoteActionCreator( note))
    console.log('note :>> ', note)
    setModalActive(false)
  }

  const handleCancelCreate = () => {
    setModalActive(false)
  }

  function goPublicNotes() {
    navigate('/public-notes')
  }

  function logout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <div className="buttonContainer">
        <LocalizationOptions />
        <MainButton onClick={logout} text={translations['logout']} />
        <MainButton onClick={() => setModalActive(true)} text={translations['addNote']} />
        <MainButton onClick={goPublicNotes} text={translations['goPublic']} />
      </div>
      {modalActive && (
        <ModalWindow
          title={translations['addNote']}
          isOpen={modalActive}
          onSubmit={handleCreateNote}
          onCancel={handleCancelCreate}
        />
      )}
      <ExampleNotes list={list} />
    </div>
  )
}
