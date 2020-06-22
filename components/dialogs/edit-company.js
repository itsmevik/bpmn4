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

const EditCompany = (props) => {
  const [companyName, setCompanyName] = useState(
    props.companyData ? props.companyData.name : ""
  );
  const [companyDescription, setCompanyDescription] = useState(
    props.companyData ? props.companyData.description : ""
  );
  const companyNameChangeHandler = (e) => {
    setCompanyName(e.target.value);
  };
  const companyDescriptionChangeHandler = (e) => {
    setCompanyDescription(e.target.value);
  };
  let companyDetails = props.companyData ? props.companyData : "";

  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>Edit Company</Box>
          <FormControl fullWidth="true">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth="true"
              label="Project Name"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Enter company name"
              value={companyName}
              onChange={companyNameChangeHandler}
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
              placeholder="Enter company description"
              value={companyDescription}
              onChange={companyDescriptionChangeHandler}
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
          onClick={() => props.onSubmit(companyName, companyDescription)}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCompany;
