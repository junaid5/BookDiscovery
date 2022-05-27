import React from 'react'
import { Stack } from '@mui/material'
import CardReport from '../../Atoms/CardReports/CardReport'
import r1 from './R1.png'
import r2 from './R2.png'
import r3 from './R3.png'
import r4 from './R4.png'

const CardReports=()=> {
  return (
    <div data-testid="CardReports-element">
    <Stack direction="row" spacing={2} sx={{marginTop: "60px"}}>
        <CardReport image={r1} heading="CURRENTLY READING" number="26"/>
        <CardReport image={r2} heading="BOOKS TO READ" number="74"/>
        <CardReport image={r3} heading="BOOKS READ" number="30"/>
        <CardReport image={r4} heading="TARGET PER YEAR" number="100"/>
    </Stack>
    </div>
  )
}

export default CardReports