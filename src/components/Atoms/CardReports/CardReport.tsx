import React from 'react'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const CardReport=({image,heading,number}: any)=> {
  return (
    <Box width="273px" height="104px" sx={{backgroundColor: "#FAFAFA"}}>
        <Stack direction="row" spacing={4} >
            <img height="24px" width="24px" src={image} alt="" style={{marginLeft: "20px",marginTop: "35px"}} />
            <Stack  >
                <Typography fontSize="12px" fontWeight="400" color="#898989" sx={{marginTop: "20px"}}>{heading}</Typography>
                <Typography fontSize="24px" fontWeight="500" color="#606060">{number}</Typography>
            </Stack>
        </Stack>
    </Box>
  )
}

export default CardReport