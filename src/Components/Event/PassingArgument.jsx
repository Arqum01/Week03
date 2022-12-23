import React from 'react'
import { useState } from 'react'

export default function PassingArgument() {
    const [count, setCount] = useState(0)
    const clickHandler=(step)=>{
    setCount(count=>count+step)
  } 
  function clickHandlerByOne(){
clickHandler(1);
  }
  function clickHandlerByTwo(){
    clickHandler(2);
  }
  return (
    <>
    {count}
    <br />
    <button onClick={clickHandlerByOne}>
          Increment counter by one
        </button>
        <br />
        <button onClick={clickHandlerByTwo}>
        Increment counter by two
        </button>
    </>
  )
}
