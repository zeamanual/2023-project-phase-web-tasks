import React, { useState } from 'react'
import './style.css'
import TodoInput from '../../components/todoInput/todoInput'
import TodoList from '../../components/todoList/todoList'
import Todo from '../../models/todo'

const Home: React.FC = () => {
  let [todo, setTodo] = useState<Todo>({ id: Date.now().toString(), name: '' })
  let [todos, setTodos] = useState<Todo[]>([])
  let [editMode, setEditMode] = useState<boolean>(false)



  let handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo.name){
      setTodos([...todos, todo])
      setTodo({ id: Date.now().toString(), name: '' })
    }
  }
  let handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  let handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo.name) {
      setTodos(todos.map(existingTodo => ({ ...existingTodo, name: existingTodo.id == todo.id ? todo.name : existingTodo.name })))
      setTodo({ id: Date.now().toString(), name: '' })
      setEditMode(false)
    }

  }

  let changeToEditMode = (todo: Todo) => {
    setEditMode(true)
    setTodo(todo)
  }
  return (
    <div className='home-container'>
      <h2 className='header' >To-Do App</h2>
      <TodoInput handleAddTodo={handleAddTodo} handleEditTodo={handleEditTodo} editMode={editMode} todo={todo} setTodo={setTodo}></TodoInput>
      <TodoList changeToEditMode={changeToEditMode} deleteTodo={handleDeleteTodo} todos={todos} ></TodoList>
    </div>
  )
}

export default Home