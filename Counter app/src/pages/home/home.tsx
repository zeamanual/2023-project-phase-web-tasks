import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const Home: React.FC = () => {

  let [value, setValue] = useState(0)

  let textRef  = useRef(null)

  let incrementHandler = ()=>{
    setValue(prev=>prev+1)
  }

  let decrementHandler = ()=>{
    setValue(prev=>prev-1)
  }

  useEffect(()=>{
    document.title=String(value)
  },[value])


  return (
    <div className='home-container'>
      <h2 className='home-container__header' >Counter</h2>
      <div className='home-container__value'>
        <p ref={textRef}  className='home-container__value__text'>{value}</p>
      </div>
      <div className="home-container__btn">
        <button onClick={incrementHandler} className='home-container__btn--decrement'>Increase</button>
        <button onClick={decrementHandler} className='home-container__btn--increment'>Decrease</button>
      </div>
    </div>
  )
}

export default Home