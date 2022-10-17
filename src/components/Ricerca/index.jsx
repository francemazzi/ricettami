import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fetchRicette } from "../../redux/features/ricetteLoad";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";

const Ricerca = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const [ric, setRic] = useState("");

  const filterText = (e) => setRic(e.target.value);
  const filter = (e) => {
    // dispatch(filterRicette(inputRef.current.value));
    e.preventDefault();
    dispatch(fetchRicette(ric));
    setRic("");
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          id="standard-basic"
          label="Cerca la ricetta"
          placeholder=""
          variant="standard"
          ref={inputRef}
          onChange={filterText}
        />
        <Button
          variant="contained"
          style={{ height: "20px", marginLeft: "50px" }}
          onClick={filter}
        >
          Ricerca
        </Button>
      </form>
    </Box>
  );
};

export default Ricerca;
