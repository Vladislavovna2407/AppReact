import {MainButton} from '../mainButton'
import './styleWindow.css'
import {Header} from '../Header'

export const DeleteModal = ({title, isOpen, onSubmit, onCancel}) => {
  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modalContent">
        <div className="modalHeader">
          <Header value={title} />
        </div>
        <div className="modalFooter">
          <MainButton onClick={onSubmit} text={'Submit'} />
          <MainButton onClick={onCancel} text={'Cancel'} />
        </div>
      </div>
    </div>
  )
}
