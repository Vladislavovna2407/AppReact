import React, {useState} from 'react'
import {MainButton} from '../../components/mainButton'
import {Input} from '../../components/Input'
import {Label} from '../../components/Labels'
import {Header} from '../../components/Header'
import './styleLogin.css'
import '../../App.css'

export const LoginScreen = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')

  function showUser() {
    console.log(`Username: ${name}, surname: ${surname}, password: ${password}`)
    setName('')
    setSurname('')
    setPassword('')
  }

  return (
    <form>
      <Header value={'Registration form'} />
      <Label name={'Name'} value={'Name'} />
      <Input
        state={'text'}
        value1={'Enter your name'}
        answer={'Name'}
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <Label name={'Surname'} value={'Surname'} />
      <Input
        state={'text'}
        value1={'Enter your surname'}
        answer={'Surname'}
        value={surname}
        onChange={event => setSurname(event.target.value)}
      />
      <Label name={'Password'} value={'Password'} />
      <Input
        state={'password'}
        value1={'Enter your password'}
        answer={'Password'}
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <MainButton text={'Submit'} onClick={showUser} />
    </form>
  )
}
