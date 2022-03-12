import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 1, name: "Buy milk" },
    { id: 2, name: "Buy egg" },
    { id: 3, name: "Call mama" },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        name: action.payload
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload)
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})

export default store
