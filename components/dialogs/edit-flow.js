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

const EditFlow = (props) => {
  const [flowName, setFlowName] = useState(
    props.flowData ? props.flowData.name : ""
  );
  const [flowDescription, setFlowDescription] = useState(
    props.flowData ? props.flowData.description : ""
  );
  const flowNameChangeHandler = (e) => {
    setFlowName(e.target.value);
  };
  const flowDescriptionChangeHandler = (e) => {
    setFlowDescription(e.target.value);
  };
  //let flowDetails = props.companyData ? props.companyData : "";

  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>Edit Flow</Box>
          <FormControl fullWidth="true">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth="true"
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
              fullWidth="true"
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
          variant="contained"
          color="primary"
          className="button"
          onClick={() => props.onSubmit(flowName, flowDescription)}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFlow;
