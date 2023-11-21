import {MainButton} from '../../components/mainButton'
import {Input} from '../../components/Input'
import {Label} from '../../components/Labels'
import {Header} from '../../components/Header'

export const LoginScreen = () => {
  return (
    <form>
      <Header value={'Registration form'} />
      <Label name={'Name'} value={'Name'} />
      <Input state={'text'} value={'Enter your name'} answer={'Name'} />
      <Label name={'Surname'} value={'Surname'} />
      <Input state={'text'} value={'Enter your surname'} answer={'Surname'} />
      <Label name={'Password'} value={'Password'} />
      <Input state={'password'} value={'Enter your password'} answer={'Password'} />
      <MainButton text={'Submit'} />
    </form>
  )
}
