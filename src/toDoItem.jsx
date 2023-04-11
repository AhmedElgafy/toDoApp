
import { useState } from 'react'

const ToDoItem=(props)=>{

  // console.log(props.key)

    const makeCheck=(e)=>{
      
        if(e.target.style.background==''){
          // e.target.src=""
          e.target.style.background='linear-gradient(0deg, hsl(280, 87%, 65%) 0%, hsl(192, 100%, 67%) 100%)'
        }else{
          // e.target.children[0].src="../icon-check.svg"
          e.target.style.background=''
        }
    }

    const handelExit=(e)=>{
      props.setItemsLeft(e=>e=e-1)
      let index=e.target.getAttribute("index")
      console.log(index)
      // console.log(props.removeItemWithId)
      if(index){
        props.removeItemWithId(index)
      }
    }
    // console.log(props.index)
    return(
      <>
        <div className="toDoCreator toDoItem" 
          onClick={(e)=>handelExit(e)}
          key={props.key} id={props.data}>

            <div className='insideToDoItem'>
              <div className='circle '>
                <img src="" alt=""  />
              </div>
              <h4>{props.data}</h4>
            </div>

                <img 
                src="../icon-cross.svg" 
                index={props.index} 
                alt="" 
                />
          </div>
      </>
    )
  }
  export default ToDoItem;