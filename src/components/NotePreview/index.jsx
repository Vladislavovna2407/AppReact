import {MainButton} from '../mainButton'
import '../ModalWindow/styleModalWindow.css'
import {Header} from '../Header'
import {useLocalization} from '../../localization/useLocalization'

export const NotePreview = ({title, isOpen, onCancel, note}) => {
  const {translations} = useLocalization()
  const handleCancel = () => {
    onCancel()
  }

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modalContent">
        <div className="modalBody">
          <div>
            <label>{translations['title']}</label>
            <input disabled value={note.title}/>
          </div>
          <div>
            <label>{translations['text']}</label>
            <input disabled value={note.text} />
          </div>
          <div>
            <label>{translations['owner']}</label>
            <input disabled value={note.owner} />
          </div>
          <div>
            <label>{translations['tags']}</label>
            <input disabled value={note.tags} />
          </div>

          <div>
            <label>{translations['color']}</label>
            <input disabled value={note.color} />
          </div>

          <div className="type">
            <label htmlFor="type">{translations['type']}</label>
            <select disabled value={note.isPublic} name="type">
                {
                    note.isPublic ? (
                        <option value="Public">{translations['public']}</option>
                    ) : (
                        <option value="Private">{translations['private']}</option>
                    )
                }
            </select>
          </div>
          <div>
            <div className="modalFooter">
              <MainButton onClick={handleCancel} text={translations['cancel']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
