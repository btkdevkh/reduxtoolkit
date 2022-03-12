import {useState} from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux'

export default function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [todoName, setTodoName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(todoName))
  }

  return (
    <div>
      { todos.length > 0 && todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type={'text'} 
          placeholder={'Todo name'} 
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
