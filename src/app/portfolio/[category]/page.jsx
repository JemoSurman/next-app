import React from 'react'

function category({params}) {
  console.log(params)
  return (
    <div>{params.category}</div>
  )
}

export default category