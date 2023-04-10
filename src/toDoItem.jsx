
import { useState } from 'react'

const ToDoItem=(props)=>{
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
      // console.log(e.target.id)
    //   props.removeItemWithId(e.target.id)
      console.log(e.target)
    }
    return(
      <>
        <div className="toDoCreator toDoItem" key={props.key} id={props.data}>
            <div className='insideToDoItem'>
              <div className='circle 'onClick={(e)=>makeCheck(e)}>
                <img src="" alt=""  />
              </div>
              <h4>{props.data}</h4>
            </div>
            <div onClick={(e)=>handelExit(e)}>

                <img 
                src="../icon-cross.svg" 
                key={5} alt="" 
                />
            </div>
          </div>
      </>
    )
  }
  export default ToDoItem;