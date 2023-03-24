import React from 'react'
import "./Error.css"
const Error = () => {
  return (
    <div className='errorContainer'>
      <div className='error'>
        <p>😅</p>
        <p>
          Its not you it's me.
        </p>
          <span>or the API daily limit is reached</span>
      </div>
    </div>
  )
}

export default Error