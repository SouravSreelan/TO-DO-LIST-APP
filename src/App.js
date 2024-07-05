import React, { useState } from 'react';
import './App.css';
   
  
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [deletedToDos, setDeletedToDOs] = useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Yeeayyy, it's Sunday 😍✨ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=> {setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> {setToDos([...toDos,{id:Date.now() ,text:toDo, status:false}])}} className="fas fa-plus"></i>
      </div>
      {toDos.map((obj)=> {
        return(
          <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj.status= e.target.checked
                }
                return obj2
              }))
            } }  value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right"> 
            <i onClick={()=> {
              setDeletedToDOs([...deletedToDos, obj])
              setToDos(toDos.filter(obj2 => obj2.id !== obj.id ))
            }} className="fas fa-times"></i>
          </div>
        </div>
      </div>

        )
      })}
      <div className="mt-5 right"> 
       <h1>Active Task:</h1></div>
      {toDos.map((obj)=>{
       
        if(obj.status){
        return(
          <>
          <div className='inside-div'>
         
          <p>{obj.text}</p></div></>
        )}
        return null
 })}
 <div className="left"> 
       <h1>Deleted Task:</h1>
       {deletedToDos.map((obj)=>
        (
        <div className='inside-div' key={obj.id}> <p>{obj.text}</p></div>
      ) )}
      </div>
    </div>
  );
}

export default App;
  
