import React from 'react'
import { useState } from 'react'

export default function Eventhandling() {
    const [count, setCount] = useState(0)
  const clickHandler=()=>{
setCount(count=>count+1)
  }
  return (
    <>
    <button onClick={clickHandler}>
          count is {count}
        </button>
       
    </>
  )
}
