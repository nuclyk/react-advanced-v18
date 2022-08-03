import React, { useState } from 'react'

const UseStateBasics = () => {
  const value = useState(1)[0]
  const handles = useState(1)[1]

  console.log(value, handles)

  return <h2>useState basic example</h2>
}

export default UseStateBasics
