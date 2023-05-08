import React from 'react'
import {logo} from '../../assets/index'
import  '../../css/Nav.css'

export default function Navbar() {
  return (
    <div className='nav-main'>
        <div>
          <img src={logo} alt="logo" />
        </div>
    </div>
  )
}
