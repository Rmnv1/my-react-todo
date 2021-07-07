import React from 'react'

export default function TodoItem( {text, onDelete, index} ) {

  const [taskParams, setTaskParams] = React.useState([
    { isCompleted: false }
  ])

  function toggleTaskStatus() {
    setTaskParams(taskParams => {
      return { isCompleted: !taskParams.isCompleted}
    })
  }

  let classNames = 'todo-item__content';
  if (taskParams.isCompleted) {
    classNames += ' done'
  }

  return (
    <li className="todo-item">
      <span className={classNames}>
          <input type="checkbox" id={`todo-input_${index}`} className="checkbox-field" onClick={toggleTaskStatus}/>
          <label className="check" htmlFor={`todo-input_${index}`}> 
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </label>
        <span className="todo-item__text">{ text }</span>
      </span>
      <span className="todo-item__close" title="Удалить задачу" onClick={onDelete}>&times;</span>
    </li>
  )
}
