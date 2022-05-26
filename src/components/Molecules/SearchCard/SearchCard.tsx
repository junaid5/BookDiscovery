import React from 'react'
import Card from "@mui/material/Card";
import { Stack, Typography } from "@mui/material";
import { CardContent, CardMedia } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import author from './Auoth.png'

const SearchCard=({card}: any)=> {
  return (
    <Card sx={{ width: "571px", height: "287px",marginTop: "20px" }}>
      <Stack direction="row">
      <CardMedia
        component="img"
        height="191px"
        width="249px"
        image={card.img}
        sx={{ height: "239px", width: "184px",marginLeft: "10px",marginTop: "20px"}}
      />
      <Stack>
      <CardHeader
        avatar={
          <img src={author} alt="" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={card.bookAuthor}
        subheader="Author"
      />
      <CardContent>
        <Stack spacing={1}>
        <Typography fontSize="16px" fontWeight="500">
          {card.bookName}
        </Typography>
        <Typography fontSize="12px" fontWeight="400">
          {card.description}
        </Typography>
        <Typography fontSize="14px" fontWeight="400" color="#898989">
          {card.category}
        </Typography>
        <Stack spacing={2}>
            <Stack direction="row" >
                <Typography fontSize="14px" fontWeight="400" color="#898989">{card.stars}</Typography>
                <StarIcon sx={{height: "12px", width: "12px", color: "#FFB500",marginTop: "4px"}}/>
            </Stack>
            <Stack direction="row" >
                <Typography fontSize="14px" fontWeight="400" color="#898989">{card.ratings}</Typography>
                <BookmarkBorderIcon sx={{color: "#898989",marginLeft: "100px"}}/>
                <ShareOutlinedIcon sx={{color: "#898989",marginLeft: "10px"}}/>
            </Stack>
        </Stack>
        </Stack>
      </CardContent>
      </Stack>
      </Stack>
    </Card>
  )
}

export default SearchCard