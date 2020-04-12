import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  deleteAllBtn: {
    margin: "1rem"
  }
}));

export default function DeleteAllDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
            <Button variant="outlined"
            className={classes.deleteAllBtn}
            onClick={handleClickOpen}
            endIcon={<HighlightOffIcon />}>
              Alles Löschen
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Einkaufsliste löschen?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Möchten Sie wirklich alle EInträge in der Einkaufsliste löschen?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Oh Gott, NEIN!
                </Button>
                <Button onClick={() => {
                  props.onClick();
                  handleClose();
                }}  color="primary">
                  {props.text}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
  );
}
