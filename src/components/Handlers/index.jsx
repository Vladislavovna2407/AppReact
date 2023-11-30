import { Header } from "../Header"
import { useLocalization } from "../../localization/useLocalization"
import { LocalizationOptions } from "../../screens/PrivateNotes/localizationOptions"
import { MainButton } from "../mainButton"


export const Handlers = ({isOpen,text,onSubmit}) => {
    const {translations} = useLocalization()
 
    return (
        <div className={isOpen ? 'modal active' : 'modal'}>
      <div className="modalContent">
        <div className="modalHeader">
          <Header value={text} />
        </div>
        <div className="modalFooter">
          <MainButton onClick={onSubmit} text={translations['submit']} />
        </div>
      </div>
    </div>
    )
}