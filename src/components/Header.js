// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Grid } from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item>
        <h1>Call a Friend</h1>
      </Grid>

      <Grid item>
        <h5>Your friendly contact app</h5>
      </Grid>
    </Grid>
  );
};

export default Header;
