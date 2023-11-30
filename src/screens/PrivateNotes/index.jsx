import {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import {ModalWindow} from '../../components/ModalWindow'
import {ExampleNotes} from '../ExampleNotes'
import './styles.css'
import {LocalizationOptions} from './localizationOptions'
import {useLocalization} from '../../localization/useLocalization'
import {useNavigate} from 'react-router-dom'

let list = [
  {
    id: 1,
    title: 'title1',
    text: 'text1',
    tags: ['tag1'],
    owner: 'Samir',
    color: 'steelblue',
    isPublic: false,
  },
  {
    id: 2,
    title: 'title2',
    text: 'text2',
    tags: ['tag2'],
    owner: 'Samir',
    color: 'tomato',
    isPublic: false,
  },
  {
    id: 3,
    title: 'title3',
    text: 'text3',
    tags: ['tag3'],
    owner: 'Samir',
    color: 'darkgreen',
    isPublic: false,
  },
  {
    id: 4,
    title: 'title4',
    text: 'text4',
    tags: ['tag4'],
    owner: 'Samir',
    color: 'steelblue',
    isPublic: false,
  },
]

export const NotesScreen = () => {
  const {translations} = useLocalization()
  const [modalActive, setModalActive] = useState(false)
 
  const navigate = useNavigate()

  const handleCreateNote = note => {
    // Logic to create note, will be a request to back-end
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
   navigate('/')
 }

  return (
    <div>
      <div className="buttonContainer">
        <LocalizationOptions />
        <MainButton onClick={logout} text={translations['logout']}/>
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
