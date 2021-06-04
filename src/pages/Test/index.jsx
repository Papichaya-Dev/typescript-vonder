
import React,{useCallback, useEffect, useState} from 'react'

export default function Test() {
    const [A, setA] = useState(5)
    
    // const Value = useCallback(
    //     () => {
    //         console.log("hello")
    //         console.log(A)
    //     },
    //     [A],
    // )

    function Value(){
        console.log(A)
    }
    useEffect(() => {
        Value()
    }, [])
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => {
          setA(10)
      }}>Chang A</button>
       <button onClick={() => {
          Value()
      }}>Show A</button>
    </div>
  )
}
