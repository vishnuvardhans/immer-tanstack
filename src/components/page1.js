import React from 'react'
import demo from '../store'
function Page1() {
const { val } = demo();
  return (
    <div>Page1 {val}</div>
   
  )
}

export default Page1