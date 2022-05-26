import React from 'react'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Container } from '@mui/material'
import Icon from '../../Atoms/BookIcon/Icon'
import HomeButton from '../../Atoms/Buttons/HomeButton'
import Buttons from '../../Atoms/Buttons/Buttons'
import SearchBar from '../../Atoms/SearchBar/SearchBar'
import BellIcon from '../../Atoms/BellIcon/BellIcon'
import Avatar from '../../Atoms/Avatar/Avatar'

const TopBar=()=> {
  return (
    <Box width="1366px" height="68px" sx={{backgroundColor: '#8C52C6'}}>
        <Container>
        <Stack direction="row">
        <Icon height= "30px" width= "135px"/>
        <HomeButton/>
        <Buttons content="Explore" width="100px"/>
        <Buttons content="My Library" width="150px"/>
        <SearchBar/>
        <BellIcon/>
        <Avatar/>
        </Stack>
        </Container>
    </Box>
  )
}

export default TopBar