import React, { useState } from 'react'
import { MainButton } from '../../components/mainButton'
import { Input } from '../../components/Input'
import { Label } from '../../components/Labels'
import { Header } from '../../components/Header'
import './styleLogin.css'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { LocalizationOptions } from '../PrivateNotes/localizationOptions'
import { useLocalization } from '../../localization/useLocalization'

export const LoginScreen = () => {
  const { translations } = useLocalization()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function showUser() {
    let user = {
      username: name,
      password: password
    }
    //console.log(user) //`Username: ${name}, surname: ${surname}, password: ${password}`)

    const url = 'https://dull-pear-haddock-belt.cyclic.app/auth';
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response =>  response.json()
     
      )
      .then(response => {
        //TODO: save to localstorage
     
        localStorage.setItem('token',response.token)

        console.log(response);

        setName('')
        setSurname('')
        setPassword('')

        navigate('/private-notes')
      })
      .catch(error => alert(' User Not Found!'));
  }

  function changePassword() {
    navigate('/change')
  }

  return (
    <div className="buttonContainer">
      <LocalizationOptions />
      <MainButton onClick={changePassword} text={translations['changePassword']} />
      <form>
        <Header value={translations['regester']} />
        <Label name={'Name'} value={translations['name']} />
        <Input
          state={'text'}
          value1={translations['yourName']}
          answer={'Name'}
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Label name={'Password'} value={translations['password']} />
        <Input
          state={'password'}
          value1={translations['yourPassword']}
          answer={'Password'}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <MainButton text={translations['submit']} onClick={showUser} />
      </form>
    </div>
  )
}



/*<Label name={'Surname'} value={translations['surname']} />
        <Input
          state={'text'}
          value1={translations['regester']}
          answer={'Surname'}
          value={surname}
          onChange={event => setSurname(event.target.value)}
        />*/