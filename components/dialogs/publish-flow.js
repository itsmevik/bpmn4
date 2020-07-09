import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import LinkIcon from "@material-ui/icons/Link";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  // const [open, setOpen] = React.useState(false);

  const handleCopy = () => {
    const copytxt = document.querySelector("#copyText");
    copytxt.select();
    document.execCommand("copy");
    console.log(props.link);
    props.setClose(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        maxWidth="false"
        keepMounted
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Get Link"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>
              <OutlinedInput
                id="copyText"
                labelWidth={0}
                style={{ width: 500 }}
                value={props.link}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.setClose(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleCopy} color="primary" variant="contained">
            Copy link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
