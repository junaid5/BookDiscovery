import React from 'react'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SeeMore=()=> {
  return (
    <Button endIcon={<ArrowForwardIosIcon/>} variant="text" sx={{color: "#FF725E"}}>See More</Button>
  )
}

export default SeeMore