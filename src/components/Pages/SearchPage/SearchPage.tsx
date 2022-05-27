import React from "react";
import { useLocation } from "react-router-dom";
import TopBar from "../../Organisms/TopBar/TopBar";
import { Grid } from "@mui/material";
import SearchCard from "../../Molecules/SearchCard/SearchCard";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThemeProvider } from "@mui/material";
import theme from '../../../Theme'

const SearchPage = () => {
  const location = useLocation();
  const nam: any = location.state;
  const data = nam.data;
  console.log(nam.searchValue);
  return (
    <div data-testid="SearchPage-element"  >
      <ThemeProvider theme={theme}>
      <TopBar />
      <Container>
        <Stack direction="row">
          <Typography
            fontSize="24px"
            fontWeight="500"
            sx={{ marginTop: "30px", marginRight: "570px" }}
          >
            Search Results for {nam.searchValue}
          </Typography>
          <Button
            sx={{
              width: "128px",
              height: "42px",
              marginTop: "30px",
              marginLeft: "5px",
              color: "#606060"
            }}
            endIcon={<ArrowDropDownIcon />}
            variant="outlined"
          >
            Categories
          </Button>
          <Button
            sx={{
              width: "128px",
              height: "42px",
              marginTop: "30px",
              marginLeft: "5px",
              color: "#606060"
            }}
            endIcon={<ArrowDropDownIcon />}
            variant="outlined"
          >
            Sort by
          </Button>
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "2px", marginLeft: "5px" }}
        >
          {data.map((card: any) => (
            <Grid xs={12} md={6} lg={6}>
              <SearchCard card={card} />
            </Grid>
          ))}
        </Grid>
        <Stack spacing={1} direction="row" sx={{marginTop: "20px",marginLeft: "710px"}}>
          <Typography fontSize="16px" fontWeight="500" sx={{marginTop: "4px",marginRight: "30px"}}>
            1 to {data.length}of {data.length} results
          </Typography>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {"<"}
          </Button>
          <Button
          color="warning"
            variant="contained"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "white",
            }}
          >
            {"1"}
          </Button>
          <Button
          color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {"2"}
          </Button>
          <Button
          color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {"..."}
          </Button>
          <Button
          color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {"9"}
          </Button>
          <Button
          color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {"10"}
          </Button>
          <Button
          color="warning"
            variant="outlined"
            sx={{
              maxWidth: "24px",
              maxHeigth: "24px",
              minHeight: "24px",
              minWidth: "24px",
              color: "#FF725E",
            }}
          >
            {">"}
          </Button>
        </Stack>
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default SearchPage;
