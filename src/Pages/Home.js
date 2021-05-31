import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Divider, Grid, Paper } from "@material-ui/core";

import Slide from "./Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 1080,
    backgroundColor: "",
    color: "#2d3436",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: "left",
  },
  root1: {
    maxWidth: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Slide />
      <Grid container direction="row" flex-start alignItems="flex-start">
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
}
