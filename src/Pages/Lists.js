import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ResearchCTX from "../Context/ResearchContext";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Lists() {
  const { resState, addRes, loading, deleteRes } = useContext(ResearchCTX);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Устгах үйлдэл хийхдээ итгэлтэй байна уу?"}
        </DialogTitle>

        <DialogActions>
          <Button
            onClick={() => {
              deleteRes(id);
              handleClose();
            }}
            color="primary"
          >
            Тийм
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>

      <Grid style={{ padding: 50 }} container spacing={2}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>№</TableCell>
                <TableCell align="left">Аймаг</TableCell>
                <TableCell align="left">Байгууллга</TableCell>
                <TableCell align="left">Овог</TableCell>
                <TableCell align="left">Нэр</TableCell>
                <TableCell align="left">Хүйс</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Утас</TableCell>
                <TableCell align="left">Илтгэлийн нэр</TableCell>
                <TableCell align="left">Мэргэжил</TableCell>
                <TableCell align="left">Төгссөн сургууль</TableCell>
                <TableCell align="left">Багшийн зэрэг цол</TableCell>
                <TableCell align="left">Гаргасан амжилт</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resState.success &&
                resState.researcher.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{row.aimag}</TableCell>
                    <TableCell align="left">{row.bname}</TableCell>
                    <TableCell align="left">{row.lname}</TableCell>
                    <TableCell align="left">{row.fname}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      {row.phone},{row.phone_order}
                    </TableCell>
                    <TableCell align="left">{row.about}</TableCell>
                    <TableCell align="left">{row.mergejil}</TableCell>
                    <TableCell align="left">{row.tugsen_surguuli}</TableCell>
                    <TableCell align="left">{row.zeregtsol}</TableCell>
                    <TableCell align="left">{row.amjilt}</TableCell>
                    <TableCell align="left">
                      <IconButton
                        onClick={() => {
                          handleClickOpen();
                          setId(row._id);
                        }}
                        aria-label="delete"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
