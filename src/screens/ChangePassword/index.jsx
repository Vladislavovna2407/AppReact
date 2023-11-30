import { MainButton } from "../../components/mainButton"
import { LocalizationOptions } from "../PrivateNotes/localizationOptions"
import { Label } from "../../components/Labels"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { useLocalization } from "../../localization/useLocalization"
import { Handlers} from "../../components/Handlers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ChangePassword = () => {
    const { translations } = useLocalization()
    const navigate = useNavigate()
    const [openResolveWindow, setResolveWindow] = useState(false)
    const[newPassword, setNewPassword] = useState('')

    function handleTransition() {
        setResolveWindow(true)
        console.log(`New password:${newPassword}`)
        setNewPassword('')
    }
    function  goToRegister() {
        navigate('/')
    }
   

    return (
        <div>
            <LocalizationOptions />
            <form action="">
            <Header value={translations['changePassword']} />
                <Label name={'EnterPassword'} value={translations['addNewPassword']} />
                <Input
                    state={'text'}
                    value1={translations['addNewPassword']}
                    answer={'Name'}
                    onChange={event=>setNewPassword(event.target.value)}
                />
                <MainButton onClick={()=>handleTransition()} text={translations['submit']} />
                <Handlers
                    isOpen={openResolveWindow}
                    text={translations['newPassword']}
                    onSubmit={goToRegister}
                />

            </form>
        </div>
    )
}