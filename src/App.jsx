// import { isFile } from '@babel/types'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
const ToDoItem=(props)=>{
  useEffect(()=>console.log("changed"),props.itemsLeft)
  return(
    <>
      <div className="toDoCreator toDoItem">
          <div className='insideToDoItem'>
            <div className='circle'></div>
            <h4>{props.data}</h4>
          </div>
          <img src="../icon-cross.svg" alt="" />
        </div>
    </>
  )
}



const ToDoItems=(props)=>{
  const [numOfItems,setNumOfItems]=useState(1)
  useEffect(()=>console.log(55),[props.itemsLeft])
  // console.log(props.dataList)
  
  return(
      <>
        {props.dataList?props.dataList:null}

        <div className="toDoCreator status sm-font">
          <p>{props.itemsLeft} items left</p>
          <div className="inside">
            <h4 className='active'>All</h4>
            <h4>Active</h4>
            <h4>Completed</h4>
          </div>
          <p>Clear Completed</p>
        </div>
      </>
  
)
}
// console.log("hi")





function App() {
  const [toDoList, setToDoList] = useState([])
  const [itemsLeft,setItemsLeft]=useState(0)
  
  
  const doIt=(e)=>{
    let data=e.target.value
    toDoList.push(<ToDoItem data={data} key={data} />)
    setItemsLeft((e)=>e=e+1)
    console.log(toDoList)
  }
  
  useEffect(()=>console.log(itemsLeft),[itemsLeft]) 

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

      <ToDoItems dataList={toDoList} itemsLeft={itemsLeft}/>

    </div>
    </>
  )
}

export default App
