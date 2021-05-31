import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import LinkIcon from "@material-ui/icons/Link";
import { Button, Grid } from "@material-ui/core";

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
  },
  media: {
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const history = useHistory();

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Grid
      style={{ marginTop: 10 }}
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={2}
    >
      {/* <ComingSoon /> */}
      <Grid>
        <Button
          target="_blank"
          href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_ZWUwODJjNjItZmM2OC00YTY0LTg5OGYtNTU0YzFjYWRlMTg2%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252221bc79ca-3a3f-4e1a-a8ba-a8355e6135e5%2522%252c%2522Oid%2522%253a%252205a9cb6b-80e6-46b2-b00e-fce2f39d54cf%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=c515ee1f-0cf3-4152-8ecd-085498e13127&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true&fbclid=IwAR1C8M872hJQQUiiHcszukN6OCu1oIFkkEn_i60RfdAzkHND16qdkD6YYTY"
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Хурлын линк
        </Button>
      </Grid>

      <Grid style={{ alignItems: "center" }} item xs={12}>
        <img
          className={classes.media}
          src="http://clouduni.mn:5000/images/khu_link01.jpg"
          alt=""
        />
      </Grid>
      <Grid style={{ alignItems: "center" }} item xs={12}>
        <img
          className={classes.media}
          src="http://clouduni.mn:5000/images/khu_link03.jpg"
          alt=""
        />
      </Grid>
    </Grid>
  );
}
