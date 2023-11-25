import './App.css'
import {LoginScreen} from './screens/Login'
import {NotesScreen} from './screens/Notes'
import {ExampleNotes} from './screens/MokeNotes'

function App() {
  return (
    <div>
      <LoginScreen />
      <NotesScreen />

      <ExampleNotes />
    </div>
  )
}

export default App
