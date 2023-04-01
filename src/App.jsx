// import { isFile } from '@babel/types'
import React from 'react'
import { useState } from 'react'
import './App.css'
const ToDoItems=()=>{
  return(

    <div className="toDoCreator toDoItem">
    <div className='insideToDoItem'>
      <div className='circle'></div>
      <h4>Create a new todo...</h4>
    </div>
    <img src="../icon-cross.svg" alt="" />
  </div>
)
}
console.log("hi")

function App() {
  const [toDoList, setToDoList] = useState(["Jog around the park 3*","10 minutes meditation","Read for 1 hour"])

  return (
    <>
    <div className='container'>

      <div className="header">
        <h1>TODO</h1>
        <img src="../icon-moon.svg" alt="" />
      </div>
      <div className="toDoCreator">
        <div className='circle'></div>
        <h4>Create a new todo...</h4>
      </div>


      {toDoList?<ToDoItems listData={toDoList}/>:null}


      <div className="status toDoCreator">
        <div className="inside">
          <h4 className='active'>All</h4>
          <h4>Active</h4>
          <h4>Completed</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
