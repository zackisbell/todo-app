import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"

import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([
    { input: 'Add your first to-do and get it to-done!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Unfinished')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    // update/edit/modify To-Do
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos:currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
    </>
  )
}

export default App
