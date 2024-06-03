"use client";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Card from "../ui/Card";

export default function CardView() {
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item xs={4}
      height={"100%"}
      sx={{
        backgroundImage: `url('/images/bg-main-${
          isBelowSm ? "mobile" : "desktop"
        }.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={1}
      position={"relative"}
    >
      <Card />
    </Grid>
  );
}
