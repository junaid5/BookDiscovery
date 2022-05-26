import React from 'react'
import Button from '@mui/material/Button';
import {  useNavigate } from "react-router-dom";

const HomeButton=()=> {
  const navigate = useNavigate();
  return (
    <Button onClick={()=> navigate('/')} variant="text" sx={{backgroundColor: "#8C52C6", color: "white", height: "22px", width: "38px",position: "relative", top: "23px",left: "40px"}}>Home</Button>
  )
}

export default HomeButton