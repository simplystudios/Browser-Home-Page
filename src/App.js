import './App.css';
import React,{ useEffect, useState } from 'react'

function App() {
  const [Data,setData] = useState([])
  const [repData,setrepData] = useState([])
  useEffect(()=>{
    get()
    fetch("https://api.github.com/users/simplystudios").then((result)=>{
    result.json().then((resp)=>{
      setData(resp)
    })
  })
  })
  const get = () =>{
    return(
      fetch("https://api.github.com/users/simplystudios/repos").then((result)=>{
      result.json().then((resp)=>{
        setrepData(resp)
      })
    })
    )  

  }
  return (
    <div className="App">
      <header>
        <img src={Data.avatar_url}/>
        <h1 id='name'>{Data.name}</h1>
        <h3>{Data.login}</h3>
      </header>
      <div className='repo'>
          <h1>{repData.html_url}</h1>
      </div>
    </div>
  );
}

export default App;
