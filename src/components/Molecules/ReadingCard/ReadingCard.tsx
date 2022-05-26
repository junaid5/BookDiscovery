import React from 'react'
import Card from "@mui/material/Card";
import { Stack, Typography } from '@mui/material';
import { CardContent, CardMedia } from "@mui/material";

const ReadingCard=({card}: any)=> {
  return (
    <Card sx={{ width: "273px", height: "140px"}}>
        <Stack direction="row">
            <CardMedia 
            component="img"
            height="118px"
            width="91px"
            image={card.img}
            sx={{ height: "118px", width: "91px",marginTop: "10px",marginLeft: "10px" }}
            />
            <Stack>
                <CardContent>
                    <Typography fontSize="14px" fontWeight="400">
                        {card.bookName}
                    </Typography>
                    <Typography fontSize="12px" fontWeight="400" color="#898989">
                        By {card.bookAuthor}
                    </Typography>
                    <Typography fontSize="12px" fontWeight="400" color="#898989">
                        Category- {card.category}
                    </Typography>
                    <Typography fontSize="12px" fontWeight="400" color="#898989" sx={{marginTop: "40px"}}>
                        {card.pagesLeft} pages left
                    </Typography>
                </CardContent>
            </Stack>
        </Stack>
    </Card>
  )
}

export default ReadingCard