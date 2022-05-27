import React from "react";
import Card from "@mui/material/Card";
import { Stack, Typography } from "@mui/material";
import { CardContent, CardMedia } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const RecommendCard = ({ card }: any) => {
  return (
    <div data-testid="RecommendCard-element"> 
    <Card sx={{ width: "273px", height: "385px" }}>
      <MoreHorizIcon sx={{marginLeft: "230px",marginTop: "9px",marginBottom: "9px"}}/>
      <CardMedia
        component="img"
        height="191px"
        width="249px"
        image={card.img}
        sx={{ height: "165px", width: "151px",marginLeft: "61px"}}
      />
      <CardContent>
        <Stack spacing={1}>
        <Typography fontSize="16px" fontWeight="400">
          {card.bookName}
        </Typography>
        <Typography fontSize="14px" fontWeight="400" color="#898989">
          {card.bookAuthor}
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
    </Card>
    </div>
  );
};

export default RecommendCard;
