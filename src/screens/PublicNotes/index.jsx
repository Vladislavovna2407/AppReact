import {Header} from '../../components/Header'
import {MainButton} from '../../components/mainButton'
import {LocalizationOptions} from '../Notes/localizationOptions'
import './stylePublic.css'
import {useLocalization} from '../../localization/useLocalization'

//let item = { id: 1, title: 'newTitle2', text: 'newText2', tags: ['newTag2'], owner: 'Ira', color: 'pink', isPublic: true }

export const PublicNotes = () => {
  const {translations} = useLocalization()
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
          <MainButton text={translations['removeFavourites']} />
          <MainButton text={translations['addFavourites']} />
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="buttonContainer">
        <LocalizationOptions />
      </div>
      <Header value={translations['publicNotes']} />
      {result}
    </div>
  )
}
