import React, { useState } from 'react'

const Two = () => {
    const [color , setColor] = useState('red')
  return (
    <div className='border w-[500px] h-[ 200px] bg-cyan-700 text-white m-auto p-10 rounded-4xl'>
        <h1 style={{color:color, fontSize:30,}}>Hello sir</h1>
        <button className='border bg-amber-500 rounded-xl p-2 mt-10' onClick={()=>setColor(color === "red" ? "blue" : "red")} >change color</button>
    </div>
  )
}

export default Two;