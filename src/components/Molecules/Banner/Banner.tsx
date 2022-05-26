import React from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import shelf from './BookShelf.png'

const Banner = () => {
  return (
    <Box width="1166px" height="286px" sx={{ backgroundColor: "#8C52C6",marginTop: "70px",borderRadius: "10px" }}>
      <Stack direction="row" spacing={30} >
        <Stack spacing={2} sx={{marginTop: "40px",marginLeft: "30px"}}>
          <Typography fontSize="24px" fontWeight="500" color="white">
            Discover Books
          </Typography>
          <Typography fontSize="14px" fontWeight="400" color="white">
            Through a series of recent breakthroughs, deep learning has boosted
            the entire field of machine learning. Now even programmers who know
            close to nothing about this technology
          </Typography>
          <Button variant="contained" sx={{backgroundColor: "#FF725E",height: "38px", width: "103px",position: "relative", top: "20px"}}>Discover</Button>
        </Stack>
        <img src={shelf} alt="" style={{marginRight: "100px", marginTop: "56px"}}/>
      </Stack>
    </Box>
  );
};

export default Banner;
