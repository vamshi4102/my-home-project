import React from 'react'
import "./styles/reusable-styles.scss"
function CustomHeading({title="",description=""}) {
  return (
    <div className='custom-heading'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default CustomHeading
