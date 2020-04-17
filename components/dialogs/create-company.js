import {
  Dialog,
  DialogContent,
  FormControl,
  TextField,
  Button,
  Box,
  DialogActions
} from '@material-ui/core';
import { useState } from 'react';

const CreateCompanyDialog = props => {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const companyNameChangeHandler = e => {
    setCompanyName(e.target.value);
  };
  const companyDescriptionChangeHandler = e => {
    setCompanyDescription(e.target.value);
  };
  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>Create a new Company</Box>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullwidth
              label="Company Name"
              InputLabelProps={{
                shrink: true
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
              fullwidth
              label="Description"
              InputLabelProps={{
                shrink: true
              }}
              placeholder="Enter company description"
              value={companyDescription}
              onChange={companyDescriptionChangeHandler}
              autoFocus
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
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateCompanyDialog;
