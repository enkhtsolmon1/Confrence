import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { Card, CardMedia, Dialog, Grid } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "ЦАХИМ СУРГАЛТАД ТУЛГАМДАЖ БУЙ АСУУДАЛ, ШИЙДЭЛ",
    imgPath:
      "https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },

  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  media: {
    // opacity: 0.7,
    height: 800,
    textAlign: "center",
    paddingTop: theme.spacing(20),
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <img
          style={{ width: "100%" }}
          src="http://clouduni.mn:5000/images/khu_link02.jpg"
          alt=""
        />
      </Dialog>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <>
            <Card key={index}>
              <CardMedia
                className={classes.media}
                image={step.imgPath}
                title="Contemplative Reptile"
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    style={{
                      padding: 20,
                      height: "500%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                    }}
                    item
                    xs={12}
                  >
                    <img
                      style={{ height: 100 }}
                      src="http://clouduni.mn:3000/upload/programfiles/khu.png"
                      alt=""
                    />
                    <Typography style={{ color: "" }} gutterBottom variant="h5">
                      ХОВД ИХ СУРГУУЛЬ
                    </Typography>
                    <Typography gutterBottom variant="h2">
                      {step.label}
                    </Typography>
                    <Typography
                      style={{
                        color: "#fff",
                      }}
                    >
                      2021 оны 05-р сарын 17 нд 09:00 цагт
                    </Typography>
                    <Button
                      onClick={handleClickOpen}
                      size="medium"
                      variant="contained"
                      style={{
                        backgroundColor: "#f1c40f",
                        margin: 10,
                      }}
                    >
                      Эрдэм шинжилгээний бага хурал
                    </Button>
                  </Grid>
                </Grid>
              </CardMedia>
            </Card>
          </>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      /> */}
    </div>
  );
}

export default SwipeableTextMobileStepper;
