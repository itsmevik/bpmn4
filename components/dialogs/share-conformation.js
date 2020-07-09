import {
  Dialog,
  DialogContent,
  FormControl,
  TextField,
  Button,
  Box,
  DialogActions,
} from "@material-ui/core";

const ShareConfirmation = (props) => {
  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>{props.message}</Box>
        </div>
      </DialogContent>
      <DialogActions className="footer">
        <Button
          variant="contained"
          color="secondary"
          className="button"
          onClick={() => props.onConfirm()}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="default"
          className="button"
          color="primary"
          onClick={() => props.onCancel()}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShareConfirmation;
