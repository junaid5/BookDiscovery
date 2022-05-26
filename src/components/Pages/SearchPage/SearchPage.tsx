import React from 'react'
import { useLocation } from "react-router-dom";
import TopBar from '../../Molecules/TopBar/TopBar';
import { Grid } from '@mui/material';
import SearchCard from '../../Molecules/SearchCard/SearchCard';
import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SearchPage=()=> {
  const location = useLocation();
  const nam: any = location.state;
  const data=nam.data
    console.log(nam.searchValue)
  return (
    <div>
     <TopBar/>
     <Container>
     <Stack direction="row">
     <Typography fontSize="24px" fontWeight="500" sx={{marginTop: "30px"}}>Search Results for {nam.searchValue}</Typography>
     <Button sx={{width: "128px", height: "42px",marginTop: "30px",marginLeft: "650px"}} endIcon={<ArrowDropDownIcon/>} variant="outlined">Categories</Button>
     <Button sx={{width: "128px", height: "42px",marginTop: "30px",marginLeft: "5px"}} endIcon={<ArrowDropDownIcon/>} variant="outlined">Sort by</Button>
     </Stack>
     <Grid container spacing={2} sx={{marginTop: "2px",marginLeft: "5px"}}>
        {data.map((card: any)=>(
          <Grid xs={12} md={6} lg={6}>
            <SearchCard card={card} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  )
}

export default SearchPage