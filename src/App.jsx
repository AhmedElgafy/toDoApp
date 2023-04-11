// import { isFile } from '@babel/types'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import ToDoItem from './toDoItem'
import ToDoItems from './toDoItems'

function App() {
  let key=Math.random()

  //------------------------states-------------------
  const [toDoList, setToDoList] = useState([])
  const [itemsLeft,setItemsLeft]=useState(0)
  
  
  
  //------------------------handlers-------------------
  const removeItemWithId=(key)=>{
    toDoList.map(ele=>{console.log(ele.index)})
    const newList=toDoList.filter((element)=>element.index!=key)
    setToDoList(newList)
    console.log(newList) 
  }
  
  const doIt=(e)=>{
    let data=e.target.value
    if(data){
      toDoList.push(<ToDoItem  setItemsLeft={setItemsLeft} removeItemWithId={removeItemWithId} index={key} data={data} id={data}  />)
      setItemsLeft((e)=>e=e+1)
      e.target.value=""
    }
  }
  // console.log(key)

  //------------------------renderers------------------------------
  return (
    <>
    <div className='container'>

      <div className="header">
        <h1>TODO</h1>
        <img src="../icon-moon.svg" alt="" />
      </div>
      <div className="toDoCreator">
        <div className='circle'></div>
        <input type="text" onKeyDown={(e)=>e.key=="Enter"?doIt(e):null} placeholder='Create a new todo...' />
        {/* <h4>Create a new todo...</h4> */}
      </div>

      <ToDoItems key={key} setToDoList={setToDoList} dataList={toDoList} setItemsLeft={setItemsLeft} itemsLeft={itemsLeft}/>

    </div>
    </>
  )
}

export default App
