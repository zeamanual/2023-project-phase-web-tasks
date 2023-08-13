import React from 'react'
import SingleTodo from '../singleTodo/singleTodo'
import './style.css'
import Todo from '../../models/todo'

interface Props {
  todos:Todo[],
  changeToEditMode:(t:Todo)=>void,
  deleteTodo:(id:string)=>void
}

const TodoList:React.FC<Props> = ({changeToEditMode,deleteTodo,todos}) => {
  return (
    <div className='todo-list-container'>
      {
        todos.map(todo=>{
          return <SingleTodo changeToEditMode={changeToEditMode}  deleteTodo={deleteTodo} todo={todo} ></SingleTodo>
        })
      }
    </div>
  )
}

export default TodoList