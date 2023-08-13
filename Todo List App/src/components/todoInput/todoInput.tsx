import React from 'react'
import './style.css'
import Todo from '../../models/todo'

interface Props {
    setTodo: React.Dispatch<React.SetStateAction<Todo>>,
    todo:Todo ,
    editMode:boolean,
    handleAddTodo:(e:React.FormEvent)=>void,
    handleEditTodo:(e:React.FormEvent)=>void
}

const TodoInput:React.FC<Props> = ({editMode,setTodo,todo,handleAddTodo,handleEditTodo}) => {

    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setTodo({...todo,name:e.target.value})
    }
    return (
        <div className='todo-input-outer-container'>
            <form onSubmit={editMode ? handleEditTodo : handleAddTodo} className='todo-input-container'>
                <input onChange={handleChange} value={todo.name} type='text' className='todo-input-container__field' placeholder='Task name'></input>
                <div className='todo-input-container__separator'>
                </div>
                <button className='todo-input-container__btn'
                >
                   { editMode ? "Save": "Add"}
                    </button>
            </form>
        </div>
    )
}

export default TodoInput