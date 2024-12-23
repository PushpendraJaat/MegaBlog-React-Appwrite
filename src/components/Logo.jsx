import React from 'react'
import logo from '../../src/img/mlogo.jpg'


function Logo({ style }) {
  return (
    <div>
      <img src={logo} alt="new logo" style={style} />
    </div>
  )
}

export default Logo
