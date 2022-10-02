import React, { useState } from 'react'

const Counter = () => {
  const  [count, setCount]=useState(0)
  return (
    <div>
    <h1>Counter App</h1>
    <div>
    <p>Count: <b>{count}</b></p> 
    </div>
    <button onClick={ () =>{
        setCount(count+1)
    }} >+</button>
    <button disabled={count === 0} onClick={ () =>{
        setCount(count-1)
    }} >-</button>
    </div>
  )
}

export default Counter