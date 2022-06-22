import React from 'react'
import { useState } from 'react'
import './index.css';
function App() {
  const [obj1,setObj1]=useState([])
  const handlesubmit = (e)=>{
    e.preventDefault()
    const val ={
      "name":e.target.elements.name.value,
      "location":e.target.elements.location.value
    }
    setObj1([...obj1,val])
    }
  const delt = (idx)=>{
    console.log(idx)
    obj1.splice(idx,1)
    setObj1([...obj1])

  }
  
  
  return (
    <div>
    <form className='top' onSubmit={handlesubmit}>
      <label for="name"><strong>Name</strong></label>
      <input type="text" id="name" name="name" placeholder="enter name"/>
      <label style={{marginLeft:"10px"}}for="location"><strong>Location</strong></label>
      <input type="text" id="location" name="location" placeholder="enter location"/>
      <button type ="submit">add</button>
    </form>
    <table style={{margin:"30px 0 0 35%",width:"30%"}} border={4}>
      <thead>
        <tr className='box'>
          <th>name</th>
          <th>location</th>
          <th>delete</th>
        </tr>
      </thead>
    <tbody>
      {obj1.map((val,idx)=> (
        <tr key={idx}>
          <th>{val.name}</th>
          <th>{val.location}</th>
          <th><button onClick={()=>{delt(idx)}}>del</button></th>
        </tr>
      ))}

    </tbody>
    </table>
    </div>


  )
}

export default App
