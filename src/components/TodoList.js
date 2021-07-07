import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onDelete }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => <TodoItem text={todo.title} key={todo.id} index={index} onDelete={() => onDelete(todo.id)}/>)}
      </ul>
    </div>
  )
}
