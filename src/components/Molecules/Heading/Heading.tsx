import { Stack } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import Buttons from "../../Atoms/Button/Button";

type values={
    content: string;
}

const Heading = ({content}: values) => {
  return (
    <div data-testid="Heading-element">
      <Stack direction="row" spacing={30}  sx={{ marginTop: "70px" }}>
        <Typography fontSize="24px" fontWeight="500" sx={{width: "770px"}}>
          {content}
        </Typography>
        <Buttons
          content="See More  >"
          width="120px"
          endIcon={false}
          height="24px"
          color="#FF725E"
          backgroundColor="white"
          type="text"
        />
      </Stack> 
    </div>
  );
};

export default Heading;
