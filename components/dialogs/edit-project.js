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

const EditProject = (props) => {
  const [projectName, setProjectName] = useState(
    props.projectData ? props.projectData.name : ""
  );
  const [projectDescription, setProjectDescription] = useState(
    props.projectData ? props.projectData.description : ""
  );
  const projectNameChangeHandler = (e) => {
    setProjectName(e.target.value);
  };
  const projectDescriptionChangeHandler = (e) => {
    setProjectDescription(e.target.value);
  };
  let projectDetails = props.projectData ? props.projectData : "";

  return (
    <Dialog open={props.open}>
      <DialogContent className="dialog-content">
        <div>
          <Box>Edit Project</Box>
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
              placeholder="Enter project name"
              value={projectName}
              onChange={projectNameChangeHandler}
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
          variant="contained"
          color="primary"
          className="button"
          onClick={() => props.onSubmit(projectName, projectDescription)}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProject;
