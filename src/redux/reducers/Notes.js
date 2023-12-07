const initialState = {
  notes: [
    {
      id: 1,
      title: 'title1',
      text: 'text1',
      tags: ['tag1'],
      owner: 'Samir',
      color: 'steelblue',
      isPublic: false,
    },
    {
      id: 2,
      title: 'title2',
      text: 'text2',
      tags: ['tag2'],
      owner: 'Samir',
      color: 'tomato',
      isPublic: false,
    },
    {
      id: 3,
      title: 'title3',
      text: 'text3',
      tags: ['tag3'],
      owner: 'Samir',
      color: 'darkgreen',
      isPublic: false,
    },
    {
      id: 4,
      title: 'title4',
      text: 'text4',
      tags: ['tag4'],
      owner: 'Samir',
      color: 'steelblue',
      isPublic: false,
    },
  ],

}
export const deleteNoteActionCreator = noteToDelete => ({
  type: 'DELETE_NOTE',
  payload: noteToDelete,
})

export const updateNoteActionCreator = updatedNote => ({
  type: 'UPDATE_NOTE',
  payload: updatedNote,
})

export const addNoteActionCreator = addNote => ({
  type: 'ADD_NOTE',
  payload: addNote
})

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      }
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) return action.payload
          return note
        })
      }
    default:
      return state
  }
}
