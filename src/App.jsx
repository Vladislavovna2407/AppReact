import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import './App.css'
import {LoginScreen} from './screens/Login'
import {NotesScreen} from './screens/PrivateNotes'
import {LocalizationProvider} from './localization/LocalizationProvider'
import {PublicNotes} from './screens/PublicNotes'
import {ChangePassword} from './screens/ChangePassword'
import {Provider} from 'react-redux'
import {store} from './redux/store'

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
    path: '/private-notes',
    element: <NotesScreen />,
  },
  {
    path: '/public-notes',
    element: <PublicNotes />,
  },
  {
    path: '/change',
    element: <ChangePassword />,
  },
])

function App() {
  return (
    // We are adding Localization Provider so that we can use our locales and translations inside our project
    <Provider store={store}>
      <LocalizationProvider>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </Provider>
  )
}

export default App
