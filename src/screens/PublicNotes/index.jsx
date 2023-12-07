import {Header} from '../../components/Header'
import {MainButton} from '../../components/mainButton'
import {LocalizationOptions} from '../PrivateNotes/localizationOptions'
import './stylePublic.css'
import {useLocalization} from '../../localization/useLocalization'
import {useNavigate} from 'react-router-dom'
import {Handlers} from '../../components/Handlers'
import {useState} from 'react'
import {NotePreview} from '../../components/NotePreview'

//let item = { id: 1, title: 'newTitle2', text: 'newText2', tags: ['newTag2'], owner: 'Ira', color: 'pink', isPublic: true }

export const PublicNotes = () => {
  const {translations} = useLocalization()
  const navigate = useNavigate()
  const [addHandler, setAddHandler] = useState(false)
  const [removeHandler, setRemoveHandler] = useState(false)
  const [notePreviewActive, setNotePreviewActive] = useState(false)
  const [notePreview, setNoteToPreview] = useState(null)

  const handleReadMore = note => {
    setNoteToPreview(note)
    setNotePreviewActive(true)
  }

  const handleCancelReadMore = () => {
    setNoteToPreview(null)
    setNotePreviewActive(false)
  }

  let publicList = [
    {
      id: 1,
      title: 'newTitle1',
      text: 'newText1',
      tags: ['newTag1'],
      owner: 'Ira',
      color: 'pink',
      isPublic: true,
    },
    {
      id: 2,
      title: 'newTitle2',
      text: 'newText2',
      tags: ['newTag2'],
      owner: 'Ira',
      color: 'grey',
      isPublic: true,
    },
  ]

  function goPrivate() {
    navigate('/private-notes')
  }

  function logout() {
    localStorage.clear()
    navigate('/')
  }


  const result = publicList.map(item => {
    return (
      // As you can see here, we are using "color" property of a note to give every note its own color that will come
      // from back-end in the future and not from our mock local array

      <div key={item.id} className="public" style={{backgroundColor: item.color}}>
        <p>
          <span>{translations['title']}:</span> {item.title}
        </p>
        <p>
          <span>{translations['text']}:</span> {item.text}
        </p>
        <p>
          <span>{translations['owner']}:</span> {item.owner}
        </p>
        <p>
          <span>{translations['tags']}:</span> {item.tags}
        </p>
        <p>
          <span>{translations['type']}: </span>
          {item.isPublic ? 'Public' : 'Private'}
        </p>
        <div className="wrapper">
          {/* With this button we just store our note that we want to delete in state, that we later use in our handleDeleteNote function */}
          <MainButton
            onClick={()=>setRemoveHandler(true)}
            text={translations['removeFavourites']}
          />
          <MainButton onClick={()=>setAddHandler(true)} text={translations['addFavourites']} />
        </div>
        <div className="doubbleButton">
          <MainButton onClick={() => handleReadMore(item)} text={translations['readMore']} />
        </div>
      </div>
    )
  })

  return (
    <div className="containerNotes">
      <div className="buttonContainer">
        <MainButton
          onClick={() => goPrivate()}
          text={translations['goPrivate']}
          className="publicButton"
        />
        <MainButton onClick={logout} text={translations['logout']} />
        <Handlers
          isOpen={removeHandler}
          text={translations['removedFavourites']}
          onSubmit={() => setRemoveHandler(false)}
        />
        <Handlers
          isOpen={addHandler}
          text={translations['addedFavourites']}
          onSubmit={()=>setAddHandler(false)}
        />
        <LocalizationOptions />
      </div>
      <Header value={translations['publicNotes']} />
      {result}
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
