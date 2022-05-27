import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import ReadingCard from '../../Molecules/ReadingCard/ReadingCard'

const Reading=()=> {
    const [image,setImage]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/readingBooks')
          .then(res=>res.json())
          .then(data=>setImage(data))
      },[])
  return (
    <div data-testid="Reading-element" >
        <Grid container spacing={2} sx={{marginTop: "30px",marginLeft: "5px"}}>
        {image.map(card=>(
          <Grid xs={12} md={6} lg={3}>
            <ReadingCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Reading