import React from 'react'
import { useState,useEffect } from 'react'
import ToDoItems from './toDoItems'

function App() {
  

  //------------------------states-------------------
  const [toDoList, setToDoList] = useState([])
  const [itemsLeft,setItemsLeft]=useState(0)
  const [viewMode,setViewMode]=useState("dark")
  const [styling,setStyling]=useState({inputStyle:""})

  
  
  //------------------------handlers-------------------
  useEffect(()=>setItemsLeft(toDoList.length),[toDoList])
  
  const togglingModes=(e)=>
  { 
    if(viewMode=="light"){      
      e.src="../icon-moon.svg"
      setViewMode("dark")
      document.body.classList.toggle("darkBody")
      setStyling({...styling,inputStyle:""})
    }else{
      setViewMode("light")
      setStyling({...styling,inputStyle:"darkToDoCreator"})
      document.body.classList.toggle("darkBody")
      e.src="../icon-sun.svg"
    }
  }
  
  const doIt=(e)=>{
    let data=e.target.value
    if(data)
    {
      setToDoList([...toDoList,{id:Math.random(),data:data,
        active:true,
        completed:false}])
        // setItemsLeft(e=>e+=1)
        setItemsLeft(toDoList.length+1)
    }
    e.target.value=""
  }
  //------------------------renderers------------------------------
  return (
    <>
    <div className='container'>

      <div className="header" >
        <h1>TODO</h1>
        <img src="../icon-moon.svg" alt="" onClick={(e)=>togglingModes(e.target)} />
      </div>
      <div className={`someShadow toDoCreator ${styling.inputStyle}`}>
        <div className='circle'></div>
        <input type="text" className={styling.inputStyle}
            onKeyDown={(e)=>e.key=="Enter"?doIt(e):null} 
            placeholder='Create a new todo...' />
      </div>

      {toDoList.length!=0?<ToDoItems setToDoList={setToDoList}
                            styling={styling}
                            setStyling={setStyling}
                            setItemsLeft={setItemsLeft}
                            numOfItems={itemsLeft}
                              data={toDoList}/>:null}
    </div>
    </>
  )
}



export default App
