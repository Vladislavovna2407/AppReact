import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import './App.css'
import {LoginScreen} from './screens/Login'
import {NotesScreen} from './screens/Notes'
import {LocalizationProvider} from './localization/LocalizationProvider'

/*
  For the public / private notes question of yours, you are correct.
  You should create separate screen for public notes of other users.
  On this screen you would make separate request to back-end to retrieve public notes of other users
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginScreen />,
  },
  {
    path: '/notes',
    element: <NotesScreen />,
  },
])

function App() {
  return (
    // We are adding Localization Provider so that we can use our locales and translations inside our project
    <LocalizationProvider>
      <RouterProvider router={router} />
    </LocalizationProvider>
  )
}

export default App
