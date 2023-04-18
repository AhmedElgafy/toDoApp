
import { useState } from 'react'

const ToDoItem=({ele})=>{

  

    const makeCheck=(e)=>{
      
        if(e.target.style.background==''){
          // e.target.src=""
          e.target.style.background='linear-gradient(0deg, hsl(280, 87%, 65%) 0%, hsl(192, 100%, 67%) 100%)'
        }else{
          // e.target.children[0].src="../icon-check.svg"
          e.target.style.background=''
        }
    }

    const handelExit=(e)=>
    {
      props.setItemsLeft(e=>e=e-1)
      let index=e.target.getAttribute("index")
      
      if(index){
        props.removeItemWithId(index)
        console.log(e.target)
      }
    }
    return(
      <>
        <div className="toDoCreator toDoItem" 
          onClick={(e)=>handelExit(e)}>

            <div className='insideToDoItem'>
              <div className='circle '>
                <img src="" alt=""  />
              </div>
              <h4>{ele.data}</h4>
            </div>

                <img 
                src="../icon-cross.svg" 
                alt="" 
                />
          </div>
      </>
    )
  }
  export default ToDoItem;