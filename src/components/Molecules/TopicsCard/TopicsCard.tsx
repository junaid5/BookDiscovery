import React from 'react'
import { Stack, Typography } from '@mui/material'

const TopicsCard=({card}: any)=> {
  return (
    <div data-testid="TopicsCard-element">
    <Stack>
        <img src={card.img} style={{borderRadius: "12px",marginBottom: "10px"}} height="134px" width="178px" alt="" />
        <Typography fontSize="14px" fontWeight="600">{card.content}</Typography>
    </Stack>
    </div>
  )
}

export default TopicsCard