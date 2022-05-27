import React from "react";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Icon from '../../Atoms/Icon/Icon'
import Buttons from "../../Atoms/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import Avatar from "../../Atoms/Avatar/Avatar";
import bell from '../../Atoms/Icon/Bell.png'
import logo from '../../Atoms/Icon/logo.png'

const TopBar = () => {
  return ( 
    <div data-testid="TopBar-element" >
    <Box width="1366px" height="68px" sx={{ backgroundColor: "#8C52C6" }}>
      <Container>
        <Stack direction="row">
        <Icon height="30px" width="135px" img={logo} margin="0"/>
          <Buttons
            content="Home"
            width="54px"
            endIcon={false}
            height="30px"
            color="white"
            backgroundColor="#8C52C6"
            type="text"
          />
          <Buttons
            content="Explore"
            width="100px"
            endIcon={true}
            height="30px"
            color="white"
            backgroundColor="#8C52C6"
            type="text"
          />
          <Buttons
            content="My Library"
            width="130px"
            endIcon={true}
            height="30px"
            color="white"
            backgroundColor="#8C52C6"
            type="text"
          />
          <SearchBar />
          <Icon height="24px" width="20px" img={bell} margin="90px" />
          <Avatar />
        </Stack>
      </Container>
    </Box>
    </div>
  );
};

export default TopBar;
