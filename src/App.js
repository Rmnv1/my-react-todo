import React, { useEffect } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList';
import TodoInfo from './components/TodoInfo'

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, title: 'Todo example 1', completed: false},
    {id: 2, title: 'Todo example 2', completed: false},
    {id: 3, title: 'Todo example 3', completed: true},
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=3')
    .then(response => response.json())
    .then(todos => {
      setTodos(todos)
    })
  }, [])
  
  function addItem(newTodoText) {
    let newTodoId = todos.length + 1;
    const newItem = {
      id: newTodoId,
      title: newTodoText,
      completed: false
    }
    if (newItem.title.trim()) {
      setTodos([...todos, newItem])
    } else {
      alert('Введите текст задачи!')
    }
  }

  function deleteItem(id) {
    setTodos(todos.filter(item => item.id !== id))
  }
  
  return (
    <div className="wrapper">
      <div className="frame">
        <TodoAdd onItemAdded={addItem}/>
        <h1 className="todo-list__title">Список задач:</h1>
        { todos.length ? <TodoList todos={todos} onDelete={deleteItem}/> : <TodoInfo/> }
      </div>
    </div>
  );
}

export default App;
