import { useDispatch } from "react-redux"
import { deleteTodo } from "../redux"

export default function Todo({ todo }) {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{todo.name}</span> {' '}
      <button 
        onClick={() => {
          dispatch(deleteTodo(todo.id))
        }}>X</button>
    </div>
  )
}
