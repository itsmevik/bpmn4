import {
  Dialog,
  DialogContent,
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

const CreateProject = () => {
  return (
    <Dialog>
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
              value=""
              autoFocus
            ></TextField>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions className="footer">
        <Button color="default" className="button">
          Cancel
        </Button>
        <Button variant="container" color="primary" className="button">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProject;
