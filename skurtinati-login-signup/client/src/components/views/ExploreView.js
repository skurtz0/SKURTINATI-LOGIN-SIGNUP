import {
  Button,
  Card,
  Container,
  Stack,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Test from "./Test";

const ExploreView = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Container>
          <Navbar />
          <Test />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ExploreView;
