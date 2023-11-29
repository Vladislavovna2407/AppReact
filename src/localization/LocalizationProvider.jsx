import React, {useState} from 'react'
import {en} from './en'
import {ru} from './ru'

// Here we are creating Localization context with some default values
export const LocalizationContext = React.createContext({
  locale: 'en',
  setLocale: () => {},
})

// Here we store our translations
const translations = {
  ru,
  en,
}

export const LocalizationProvider = ({children}) => {
  // As you can see we are storing our locale values in the state, so we can change it
  const [locale, setLocale] = useState('en')

  // That is the handler we use to update our locale values
  const handleChangeLocale = newLocale => {
    if (!['en', 'ru'].includes(newLocale)) return

    setLocale(newLocale)
  }

  return (
    // Firstly we are adding our provider with real values which we use inside our project
    <LocalizationContext.Provider
      value={{
        locale,
        setLocale: handleChangeLocale,
        translations: translations[locale],
      }}>
      {children}
    </LocalizationContext.Provider>
  )
}
