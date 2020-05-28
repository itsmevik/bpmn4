import {
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { useState } from "react";

const CreateFlow = (props) => {
  const [flowName, setFlowName] = useState("");
  const [flowDescription, setFlowDescription] = useState("");
  const flowNameChangeHandler = (e) => {
    setFlowName(e.target.value);
  };
  const flowDescriptionChangeHandler = (e) => {
    setFlowDescription(e.target.value);
  };
  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>New Flow</Box>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullwidth
              label="Flow Name"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter flow name"
              value={flowName}
              onChange={flowNameChangeHandler}
              autoFocus
            ></TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullwidth
              label="Description"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter flow description"
              value={flowDescription}
              onChange={flowDescriptionChangeHandler}
              multiline
            ></TextField>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions className="footer">
        <Button
          color="default"
          className="button"
          onClick={() => props.onCancel()}
        >
          Cancel
        </Button>
        <Button
          variant="container"
          color="primary"
          className="button"
          onClick={() => props.onSubmit(flowName, flowDescription)}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFlow;
