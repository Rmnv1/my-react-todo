import React from 'react'
import AddTodoIcon from '../icons/AddTodoIcon'

export default function TodoAdd( {onItemAdded} ) {

  const [newTodoText, setTodoText] = React.useState('')

  function submitHandler(e) {
    e.preventDefault();
    setTodoText('')
  }

  return (
    <form action="" className="todo-create" onSubmit={(e) => submitHandler(e)}>
      <input className="todo-create__field" type="text" placeholder="Введите задачу" value={newTodoText} onChange={(event) => setTodoText(event.target.value)}/>
      <button className="todo-create__btn" onClick={() => onItemAdded(newTodoText)}><AddTodoIcon/></button>
    </form>
  )
}
