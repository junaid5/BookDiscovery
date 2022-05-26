import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import RecommendCard from '../../Molecules/RecommendCard/RecommendCard'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import SeeMore from '../../Atoms/Buttons/SeeMore'

const Recommendation=()=> {
    const [image,setImage]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/recommendation')
          .then(res=>res.json())
          .then(data=>setImage(data))
      },[])
  return (
    <div>
        <Stack direction="row" spacing={102} sx={{marginTop: "70px"}}>
            <Typography fontSize="24px" fontWeight="500">Recommendations</Typography>
            <SeeMore/>
        </Stack>
        <Grid container spacing={2} sx={{marginTop: "30px",marginLeft: "5px"}}>
        {image.map(card=>(
          <Grid xs={12} md={6} lg={3}>
            <RecommendCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Recommendation