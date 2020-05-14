import {
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Button,
  Box
} from '@material-ui/core';
import { useState } from 'react';

const CreateProject = props => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const projectNameChangeHandler = e => {
    setProjectName(e.target.value);
  };
  const projectDescriptionChangeHandler = e => {
    setProjectDescription(e.target.value);
  };
  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>New Project</Box>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullwidth
              label="Project Name"
              InputLabelProps={{
                shrink: true
              }}
              placeholder="Enter project name"
              value={projectName}
              onChange={projectNameChangeHandler}
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
              placeholder="Enter project description"
              value={projectDescription}
              onChange={projectDescriptionChangeHandler}
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
          onClick={() => props.onSubmit(projectName, projectDescription)}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProject;
