import React from 'react'
import logo from './logo.png'

const Icon=({height, width}: any)=> {
  return (
    <div style={{backgroundColor: "#8C52C6", height: `${height}`, width: `${width}`, position: "relative", top: "20px"}}>
    <img  src={logo} height={height} width={width} alt=""/>
    </div>
  )
}

export default Icon