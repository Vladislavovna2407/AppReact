import { MainButton } from '../mainButton'
import './styleWindow.css'
import { Header } from '../Header'



export const ModalWindow = ({active, setActive,value,text,onClick1,onClick2,text1,text2}) => {
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
            <div className="modalContent">
                <div className='modalHeader'>
                    <Header value={value}/>
                </div>
                <div className='modalBody'>
                    <p>{text}</p>
                </div>
                <div className='modalFooter'>
                    <MainButton onClick={onClick1} text={text1}/>
                    <MainButton onClick={onClick2} text={text2}/>
                </div>
            </div>
        </div>
    )
}