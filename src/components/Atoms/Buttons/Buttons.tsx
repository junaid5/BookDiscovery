import React from 'react'
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Buttons=({content,width}: any)=> {
  return (
    <Button endIcon={<ArrowDropDownIcon/>} variant="text" sx={{backgroundColor: "#8C52C6", color: "white", height: "22px", width: {width},position: "relative", top: "23px",left: "40px"}}>{content}</Button>
  )
}

export default Buttons