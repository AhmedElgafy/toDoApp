// import { isFile } from '@babel/types'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
// const array = [2, 5, 9];


// const index = array.indexOf(2);
// // if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// // }

const ToDoItem=(props)=>{
  const handelExit=(e)=>{
    props.setItemsLeft(e=>e=e-1)
    // console.log(e.target.id)
    props.removeItemWithId(e.target.id)
  }
  const makeCheck=(e)=>{
    
    e.target.style.backgroundImage="no-repeat url(../icon-check.svg)"
    e.target.style.backgroundColor="black"
    e.target.style.backgroundPosition="center"

    console.log(e.target.style)
  }
  return(
    <>
      <div className="toDoCreator toDoItem" id={props.data}>
          <div className='insideToDoItem'>
            <div className='circle 'onClick={makeCheck}></div>
            <h4>{props.data}</h4>
          </div>
          <img key2={props.key2} src="../icon-cross.svg" id={props.key2} alt="" 
          onClick={(e)=>handelExit(e)}
          />
        </div>
    </>
  )
}



const ToDoItems=(props)=>{
  const [numOfItems,setNumOfItems]=useState(1)
  // useEffect(()=>null,[numOfItems])
  const clearzList=()=>{props.setToDoList([]);props.setItemsLeft(0)}
  return(
      <>
        {props.dataList.map((element)=>element)}
        <div className="toDoCreator status sm-font">
          <p>{props.itemsLeft} items left</p>
          <div className="inside">
            <h4 className='active'>All</h4>
            <h4>Active</h4>
            <h4>Completed</h4>
          </div>
          <p onClick={clearzList}>Clear Completed</p>
        </div>
      </>
  
)
}





function App() {
  const [toDoList, setToDoList] = useState([])
  const [itemsLeft,setItemsLeft]=useState(0)
  const [key,setKey]=useState(0)

  const removeItemWithId=(key)=>{
    //if key == element ---> get the index of element ------> and remove it 
    for(let element of toDoList){
        let index=toDoList.indexOf(element)
        // console.log(key)
        if(element.props.key2==key){
          toDoList.splice(index,1)
      }
    }
  }
  
  
  const doIt=(e)=>{
    let data=e.target.value
    if(data){
      let key2 =key
      toDoList.push(<ToDoItem key2={key2} setItemsLeft={setItemsLeft} removeItemWithId={removeItemWithId} data={data} id={data}  />)
      setKey(e=>e=e+1)
      setItemsLeft((e)=>e=e+1)
      e.target.value=""
    }
  }


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

      <ToDoItems setToDoList={setToDoList} dataList={toDoList} setItemsLeft={setItemsLeft} itemsLeft={itemsLeft}/>

    </div>
    </>
  )
}

export default App
