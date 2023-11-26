import {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import {ModalWindow} from '../../components/ModalWindow'
import {ExampleNotes} from '../MokeNotes'
import './styles.css'
import {LocalizationOptions} from './localizationOptions'
import {useLocalization} from '../../localization/useLocalization'

let list = [
  {id: 1, title: 'title1', text: 'text1', tags: ['tag1'], owner: 'Samir', color: 'steelblue'},
  {id: 2, title: 'title2', text: 'text2', tags: ['tag2'], owner: 'Samir', color: 'tomato'},
  {id: 3, title: 'title3', text: 'text3', tags: ['tag3'], owner: 'Samir', color: 'darkgreen'},
  {id: 4, title: 'title4', text: 'text4', tags: ['tag4'], owner: 'Samir', color: 'steelblue'},
]

export const NotesScreen = () => {
  const {translations} = useLocalization()
  const [modalActive, setModalActive] = useState(false)

  const handleCreateNote = note => {
    // Logic to create note, will be a request to back-end
    console.log('note :>> ', note)
  }

  const handleCancelCreate = () => {
    setModalActive(false)
  }

  return (
    <div>
      <div className="buttonContainer">
        <LocalizationOptions />
        <MainButton onClick={() => setModalActive(true)} text={translations['addNote']} />
      </div>
      {modalActive && (
        <ModalWindow
          title={'Добавление заметки'}
          isOpen={modalActive}
          onSubmit={handleCreateNote}
          onCancel={handleCancelCreate}
        />
      )}
      <ExampleNotes list={list} />
    </div>
  )
}
