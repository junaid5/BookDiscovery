import React from 'react'
import avatar from './Ellipse 7.png'

const Avatar=()=> {
  return (
    <div data-testid="avatar-element">
    <img src={avatar} style={{position: "relative", top: "18px",left: "55px"}} alt=""/>
    </div>
  )
}

export default Avatar