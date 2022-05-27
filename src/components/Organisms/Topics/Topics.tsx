import React from 'react'
import { Grid } from '@mui/material'
import TopicsCard from '../../Molecules/TopicsCard/TopicsCard'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { Stack } from '@mui/material'

const Topics=()=> {
    const [image,setImage]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/topic')
          .then(res=>res.json())
          .then(data=>setImage(data))
      },[])
  return (
    <div data-testid="Topics-element" >
        <Grid container spacing={2} sx={{marginTop: "30px",marginLeft: "5px"}}>
        {image.map(card=>(
          <Grid xs={12} md={6} lg={2}>
            <TopicsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Topics