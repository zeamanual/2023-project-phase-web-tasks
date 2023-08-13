import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import './style.css'
import Todo from '../../models/todo'
interface Props {
  todo:Todo,
  changeToEditMode:(t:Todo)=>void,
  deleteTodo:(id:string)=>void
}

const SingleTodo:React.FC<Props> = ({changeToEditMode,deleteTodo,todo}) => {
  return (
    <div className="card-container">
      <div className='single-todo-container'>
        <p>{todo.name}</p>
        <div className='single-todo-container__actions'>
          <MdEdit onClick={_=>changeToEditMode(todo)} className='single-todo-container__icon'></MdEdit>
          <MdDelete onClick={_=>deleteTodo(todo.id)} className='single-todo-container__icon'></MdDelete>
        </div>
      </div>
    </div>
  )
}

export default SingleTodo