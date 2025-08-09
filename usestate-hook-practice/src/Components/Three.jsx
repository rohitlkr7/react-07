import React, { useState } from 'react'

const Three = () => {
    const [show , setShow] = useState(true);
  return (
    <div className='border w-[500px] h-[ 200px] bg-cyan-700 text-white m-auto p-10 rounded-4xl'>
        {
            show &&
            <h1>Rohit kumar</h1>
        }
        <button className='border bg-amber-500 rounded-xl p-2 mt-10' onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Three;