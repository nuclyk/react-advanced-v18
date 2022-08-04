import React, { useState } from 'react'

// to use states the component needs to be uppercase
// the hook needs to be in the component body
// cannot call conditionally

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  const [text, setText] = useState('hello world')

  console.log(text, setText)

  const handleClick = () => {
    if (text === 'hello world') {
      setText('random value')
    } else {
      setText('hello world')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
