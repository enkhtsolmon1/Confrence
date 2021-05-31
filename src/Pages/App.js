import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
  ButtonGroup,
} from "@material-ui/core";
import { Redirect, Route, Switch, useHistory } from "react-router";
import PostAddIcon from "@material-ui/icons/PostAdd";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import BookIcon from "@material-ui/icons/Book";
import HomeIcon from "@material-ui/icons/Home";
import Home from "./Home";
import Lists from "./Lists";
import ResCTX from "../Context/ResearchContext";
import Burgtel from "./Burtgel";
import Hutulbur from "./hurulbur";
import MyLink from "./MyLink";

function Copyright() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6">ЗОХИОН БАЙГУУЛАГЧ</Typography>
      <Typography variant="body">
        ХИС-ийн Багшийн хөгжил зайны сургалтын төв, Нээлттэй боловсролын төв
        Байгалийн шинжлэл, технологийн сургуулийн Математик, мэдээлэл зүйн
        тэнхим {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  texts: {
    color: "white",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    color: "#ecf0f1",
    backgroundColor: "#006cff",
  },
  appBar: {
    color: "#fff",
    backgroundColor: "#007eff ",
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(0),
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  menu: {
    width: 300,
    textTransform: "uppercase",
  },
}));

const App = (props) => {
  const { lang, setLang } = useContext(ResCTX);
  const withs = props.width;
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [loginopen, setOpen] = React.useState(false);

  const LoginOpen = () => {
    setOpen(true);
  };

  const LoginClose = () => {
    setOpen(false);
  };
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const [Menus, setMenus] = useState([
    {
      Mname: "Нүүр",
      Ename: "home page",
      Cname: "主页",
      Rname: "домашняя страница",
      Link: "/home",
      icon: <HomeIcon color="primary" fontSize="small" />,
    },
    {
      Mname: "УДИРДАМЖ",
      Ename: "GUIDELINES",
      Cname: "指南",
      Rname: "МЕТОДИЧЕСКИЕ РЕКОМЕНДАЦИИ",
      Link: "/udirdamj",
      icon: <GroupAddIcon color="primary" fontSize="small" />,
    },
    {
      Mname: "Хөтөлбөр",
      Ename: "The program",
      Cname: "该程序",
      Rname: "Программа",
      Link: "/link",
      icon: <BookIcon color="primary" fontSize="small" />,
    },
    {
      Mname: "Бүртгэл",
      Ename: "Registration",
      Cname: "登记",
      Rname: "Регистрация",
      Link: "/burtgel",
      icon: <LocalLibraryIcon color="primary" fontSize="small" />,
    },
  ]);
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Drawer style={{}} anchor="right" open={menu} onClose={closeMenu}>
          <div
            className={classes.menu}
            role="presentation"
            onClick={closeMenu}
            onKeyDown={closeMenu}
          >
            <List>
              {Menus.map((el, index) => {
                return (
                  <>
                    <ListItem
                      button
                      onClick={() => {
                        history.push(`${el.Link}`);
                        closeMenu();
                      }}
                    >
                      <ListItemIcon>{el.icon}</ListItemIcon>
                      <ListItemText primary={el.Mname} />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </div>
        </Drawer>
        <Dialog
          open={loginopen}
          onClose={LoginClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Нэвтрэх хэсэг</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              name="loginName"
              autoFocus
              margin="dense"
              label="Email хаяг"
              type="text"
              fullWidth
            />
            <TextField
              name="password"
              autoFocus
              margin="dense"
              label="Нууц үг"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary">
              Нэвтрэх
            </Button>
            <Button variant="contained" onClick={LoginClose} color="secondary">
              Болих
            </Button>
          </DialogActions>
        </Dialog>
        <AppBar position="sticky" color="inherit" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Avatar
              onClick={() => {
                history.push("/");
              }}
              aria-label="recipe"
              src="http://clouduni.mn:3000/upload/programfiles/khu.png"
            />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
              style={{
                marginLeft: 20,

                textTransform: "uppercase",
              }}
            >
              {(withs === "sm" ||
                withs === "md" ||
                withs === "lg" ||
                withs === "xl") &&
                "Эрдэм шинжилгээний бага хурал"}
            </Typography>
            {(withs === "xl" || withs === "lg" || withs === "md") && (
              <>
                <ButtonGroup size="small" variant="text">
                  {Menus.map((el, index) => {
                    return (
                      <Button
                        onClick={() => {
                          history.push(`${el.Link}`);
                        }}
                        color="inherit"
                      >
                        {lang === "Монгол" && el.Mname}
                        {lang === "China" && el.Cname}
                        {lang === "Russia" && el.Rname}
                        {lang === "English" && el.Ename}
                      </Button>
                    );
                  })}{" "}
                  <TextField
                    onChange={(e) => {
                      setLang(e.target.value);
                    }}
                    style={{ marginLeft: 10, color: "#fff" }}
                    variant="standard"
                    name="gender"
                    fullWidth
                    select
                    SelectProps={{ native: true }}
                  >
                    {["Монгол", "English", "Russia", "China"].map(
                      (el, index) => (
                        <option key={index} value={el}>
                          {el}
                        </option>
                      )
                    )}
                  </TextField>
                </ButtonGroup>
              </>
            )}
            {(withs === "xs" || withs === "sm") && (
              <IconButton color="inherit" onClick={openMenu}>
                <MenuIcon color="primary" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/jagsaalt" exact component={Lists} />
          <Route path="/" exact component={Home} />
          <Container fixed>
            <Route path="/burtgel" exact component={Burgtel} />
            <Route path="/udirdamj" exact component={Hutulbur} />
            <Route path="/link" exact component={MyLink} />
          </Container>
        </Switch>

        <footer className={classes.footer}>
          <Container maxWidth="sm">
            {/* <Typography variant="body1">bla bla bla</Typography> */}
            <Copyright />
          </Container>
        </footer>
      </CssBaseline>
    </div>
  );
};
App.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(App);
