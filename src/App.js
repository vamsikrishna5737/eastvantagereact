import React from 'react'
import {useState ,useEffect } from 'react'
import axios from 'axios';
import './index.css';
function App() {
  const [user,setUser] = useState(localStorage.getItem("user"))
  const [mail,setMail] = useState(localStorage.getItem("mail"))
  const getData = async () =>{
      await axios.get('https://randomuser.me/api').then(async (res)=>{
      const {email} = await res.data.results[0]
      const {name} = await  res.data.results[0]
      const name1 =await  name.title+" "+name.first+" "+name.last
      await localStorage.setItem("user",name1)
      await localStorage.setItem("mail",email)
      await setUser(name1)
      await setMail(email)
      console.log(name1,email)
    } )

  }
  useEffect(()=> {
    if (localStorage.getItem("user")){
      return
    } else {
      getData()
    } 
  },[])

  return (
    <div className='data'>
      <h1><strong style={{color:"black"}}>Name:</strong> {user}</h1>
      <h1><strong style={{color:"black"}}>Email:</strong> {mail}</h1>
      <button onClick={()=>{getData()}}>Refresh</button>
    </div>
  )
}

export default App
