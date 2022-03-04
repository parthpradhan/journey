import React from 'react'

export default function Header({handleToggleDarkMode}) {
  return (
    <div className='header'>
      <h1>Note-It</h1>
      <button onClick={() =>{handleToggleDarkMode((previousMode)=> !previousMode)}}className='save'>Toggle Mode</button>
    </div>
  )
}
