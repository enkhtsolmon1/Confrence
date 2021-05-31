import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from "@material-ui/icons/Link";

import ResearchCTX from "../Context/ResearchContext";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert from "@material-ui/lab/Alert";
import { Redirect, useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));
const Burgtel = () => {
  const { resState, addRes, loading } = useContext(ResearchCTX);
  const history = useHistory();

  const classes = useStyles();

  const researcher = {
    imagePath: "",
    lname: "",
    fname: "",
    regnum: "",
    gender: "",
    email: "",
    password: "12345689",
    phone: "",
    phone_order: "",
    bname: "",
    about: "",
    aimag: "",
    mergejil: "",
    tugsen_surguuli: "",
    zeregtsol: "",
    amjilt: "",
  };
  const [formData, updateFormData] = React.useState(researcher);
  const formhandleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    history.push("/conference");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={loading}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Амжилттай бүртгэгдлээ{" "}
          <Typography>Email хаягаа шалгана уу!!!</Typography>
        </Alert>
      </Snackbar>

      <Grid style={{ marginTop: 20 }} container justify="center">
        {!loading ? (
          <>
            <Grid
              style={{ textAlign: "center", color: "#013a91" }}
              item
              xs={12}
            >
              <Typography
                className={classes.paper1}
                variant="h5"
                component="h2"
                gutterBottom
              >
                ЭРДЭМ ШИНЖИЛГЭЭНИЙ ХУРЛЫН БҮРТГЭЛ ХААГДСАН
              </Typography>
              <Typography>
                "ЦАХИМ СУРГАЛТАД ТУЛГАМДАЖ БУЙ АСУУДАЛ, ШИЙДЭЛ” ЭШ-ний хурал,
                2021.05.17-ны Даваа гараг, Ховдын 09:00, УБ-ын 10:00 цагт болно.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* <Grid
              style={{ maxWidth: 700 }}
              container
              justify="center"
              spacing={2}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="email"
                  required
                  fullWidth
                  label="Е-мэйл"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="lname"
                  required
                  fullWidth
                  label="Эцэг/эхийн нэр"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="fname"
                  required
                  fullWidth
                  label="Нэр"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="gender"
                  label="Хүйс"
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                >
                  <option aria-label="None" value="" />l
                  {["Эрэгтэй", "Эмэгтэй"].map((el, index) => (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="phone"
                  required
                  fullWidth
                  label="Утас"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  required
                  name="phone_order"
                  fullWidth
                  label="Яаралтай үед холбоо барих дугаар"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="bname"
                  required
                  fullWidth
                  label="Байгууллагын нэр"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="about"
                  required
                  fullWidth
                  label="Илтгэлийн нэр"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="aimag"
                  required
                  fullWidth
                  label="Аймаг"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="mergejil"
                  required
                  fullWidth
                  label="Мэргэжил"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="tugsen_surguuli"
                  required
                  fullWidth
                  label="Төгссөн сургууль"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="zeregtsol"
                  required
                  fullWidth
                  label="Багшийн зэрэг цол"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={formhandleChange}
                  name="amjilt"
                  required
                  fullWidth
                  label="Гаргасан амжилт"
                />
              </Grid>
              <Grid
                style={{ marginTop: 20 }}
                container
                justify="flex-end"
                item
                xs={12}
              >
                <Button
                  fullWidth
                  size="medium"
                  onClick={() => {
                    addRes(formData);
                  }}
                  variant="contained"
                  color="primary"
                >
                  Бүртгүүлэх
                </Button>
              </Grid>
            </Grid> */}
          </>
        ) : (
          <Grid
            style={{ textAlign: "center", color: "#013a91" }}
            container
            justify="center"
            item
            xs={4}
          >
            <Typography>БҮРТГЭЛ АМЖИЛТТАЙ БОЛЛОО</Typography>
            <Typography variant="body1">
              Тодруулах зүйл байвал дараах дугаараас лавлана уу? 99008092,
              99994976
            </Typography>
          </Grid>
        )}
        {/* <Grid style={{ marginTop: 20 }} container justify="center" item xs={12}>
          <Typography color="secondary">
            Та бүртгэлийн мэдээлэл хүлээж авахдаа и-мэйл хаягийнхаа Inbox болон
            Spam - аа шалгана уу.
          </Typography>
        </Grid> */}
      </Grid>
      <Grid style={{ marginTop: 20 }} container justify="center">
        <Grid></Grid>
        <Button
          target="_blank"
          href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_ZWUwODJjNjItZmM2OC00YTY0LTg5OGYtNTU0YzFjYWRlMTg2%40thread.v2%2F0%3Fcontext%3D%257B%2522Tid%2522%253A%252221bc79ca-3a3f-4e1a-a8ba-a8355e6135e5%2522%252C%2522Oid%2522%253A%252205a9cb6b-80e6-46b2-b00e-fce2f39d54cf%2522%257D%26fbclid%3DIwAR0DoZ5zWL8720W9L2xCPlXGtgVgo-_WaLvKxUIk0tOgwUnhZx10WThzHj4%26anon%3Dtrue&type=meetup-join&deeplinkId=eef671dc-5420-4e8e-a470-df8d6ce0cec2&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Хурлын линк
        </Button>
      </Grid>
      <Grid
        style={{ marginTop: 20, textAlign: "center", color: "#013a91" }}
        container
        justify="center"
      >
        <Typography>
          Туршилтын холболт: 2021.05.16-ны Ням гараг, Ховдын-10:00, УБ-ын 11:00
          цагт
        </Typography>
      </Grid>
      <Grid style={{ marginTop: 20 }} container justify="center">
        <Button
          target="_blank"
          href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YzVjMTUzZmYtMmIzOC00MGI5LThjYWEtYmY2ZWEzOGFmYmE3%40thread.v2%2F0%3Fcontext%3D%257B%2522Tid%2522%253A%252221bc79ca-3a3f-4e1a-a8ba-a8355e6135e5%2522%252C%2522Oid%2522%253A%252205a9cb6b-80e6-46b2-b00e-fce2f39d54cf%2522%257D%26fbclid%3DIwAR0DoZ5zWL8720W9L2xCPlXGtgVgo-_WaLvKxUIk0tOgwUnhZx10WThzHj4%26anon%3Dtrue&type=meetup-join&deeplinkId=6b3e360f-51d9-472c-9e8c-7862b944ee07&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Туршилтын линк
        </Button>
      </Grid>

      <Grid
        style={{ marginTop: 20, marginBottom: 20 }}
        container
        justify="center"
      >
        <img
          width="90%"
          src="http://clouduni.mn:5000/images/poster.jpg"
          alt=""
        />
      </Grid>
      <Grid
        style={{ marginTop: 20, marginBottom: 20 }}
        container
        justify="center"
      >
        <Button
          target="_blank"
          href="http://clouduni.mn:5000/images/poster.jpg"
          size="medium"
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Оролцогчийн арын фон зураг татах
        </Button>
      </Grid>
    </>
  );
};

export default Burgtel;
