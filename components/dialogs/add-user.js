import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { OutlinedInput } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddUser = (props) => {
  const [addUserMail, setAddUserMail] = useState("");

  const addUserChangeHandler = (e) => {
    setAddUserMail(e.target.value);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        maxWidth="false"
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add User"}</DialogTitle>

        <DialogContent className="dialog-content">
          <DialogContentText id="alert-dialog-slide-description">
            <div>
              <OutlinedInput
                required
                labelWidth={0}
                style={{ width: 400, height: 50 }}
                value={addUserMail}
                onChange={addUserChangeHandler}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="footer">
          <Button
            onClick={() => {
              props.setClose(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => props.onSubmit()}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUser;
