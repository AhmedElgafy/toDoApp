


import { useState } from 'react'
import ToDoItem from './toDoItem'


const ToDoItems=({data,numOfItems})=>{
    // const [numOfItems,setNumOfItems]=useState(numOfItems)
    const clearzList=()=>{0}
    console.log(numOfItems)



    return(
        <>
          {data.map(ele=><ToDoItem ele={ele} key={ele.id}/>)}
          <div className="toDoCreator status sm-font">
            <p> {numOfItems} items left</p>
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