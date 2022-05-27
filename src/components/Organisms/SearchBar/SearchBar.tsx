import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const SearchBar=()=> {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/search")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const searchItems = (searchValue: any) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

 const submitHandler=(e: any)=>{
      e.preventDefault()
      navigate("/search", {
        state: {
          data: filteredResults,
          searchValue: search
        },
      });
 }

  return (
    <div data-testid="SearchBar-element" >
    <Paper
      component="form" onSubmit={submitHandler}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "513px", height: "38px",position: "relative", top: "15px",left: "40px" }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here by book title, author or ISBN"
        onChange={(e) => searchItems(e.target.value)}
      />
    </Paper>
    </div>
  );
}

export default SearchBar