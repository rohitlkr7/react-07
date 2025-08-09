import React, { useState } from 'react'

const One = () => {
    const [count , setcount] = useState(0)
  return (
    <div className='border w-[500px] h-[ 200px] bg-cyan-700 text-white m-auto p-10 rounded-4xl ' >
        <h1>count increase - {count}</h1>
        <button className='border bg-amber-500 rounded-xl p-2 mt-10 ' onClick={()=>{setcount(count+1)}}>increase +</button>
        <button className='border bg-amber-500 rounded-xl p-2 mt-10 m-5' onClick={()=>{setcount(count-1)}}>increase -</button>
    </div>
  )
}

export default One