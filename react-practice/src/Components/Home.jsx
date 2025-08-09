import React from 'react'
import { useRef } from 'react';

const Home = () => {
  const heading = useRef()

  const changecolor = () =>{
    const h1 = heading.current
    h1.style.color = 'orange'
    h1.innerHTML = "WELCOME to india Rohit Kumar "
  }
  return (
    <>
      <h1 ref={heading}>welcome to home page</h1>
      <button className='border p-1 rounded-md' onClick={changecolor}>change me</button>
      <p>this is paragrap</p>
    </>
  )
}

export default Home;