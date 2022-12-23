import React from 'react'
import ListKeyMap from './ListKeyMap'

export default function List() {
    const names=[
        {
            id:1,
            name:"Arqum",
            age:20,
            profession:"Web Developer" 
        },
        {
            id:2,
            name:"Ali",
            age:20,
            profession:"Web Developer" 
        },
        {
            id:3,
            name:"Moazzam",
            age:20,
            profession:"Web Developer" 
        }
    ]
    const namelist=names.map(n=> <ListKeyMap key={n.id} n={n}/>)
  return (
    <>
       {namelist}
    </>
  )
}
