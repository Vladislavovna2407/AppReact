import {MainButton} from '../mainButton'
import './styleWindow.css'
import {Header} from '../Header'
import {useLocalization} from '../../localization/useLocalization'

export const DeleteModal = ({title, isOpen, onSubmit, onCancel}) => {
  const {translations} = useLocalization()

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modalContent">
        <div className="modalHeader">
          <Header value={title} />
        </div>
        <div className="modalFooter">
          <MainButton onClick={onSubmit} text={translations['submit']} />
          <MainButton onClick={onCancel} text={translations['cancel']} />
        </div>
      </div>
    </div>
  )
}
