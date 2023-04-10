


import { useState } from 'react'
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
  export default ToDoItems