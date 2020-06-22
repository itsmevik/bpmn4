import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
// import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { makeStyles } from "@material-ui/styles";

import LibraryAddIcon from "@material-ui/icons/LibraryAdd";

const useStyles = makeStyles((theme) => ({
  iconButtons: {
    position: "absolute",
    right: 20,
    top: 15,
    zIndex: 1,
  },
}));
export default function FlowItemMenu(props) {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    props.onEdit();
  };

  const handleDelete = () => {
    handleClose();
    props.onDelete();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  return (
    <div className={classes.iconButtons}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>
      <Menu
        classes={{
          paper: "action-btn-menu",
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>
          <EditIcon />
          <span>Edit Flow</span>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteIcon />
          <span>Delete Flow</span>
        </MenuItem>
      </Menu>
    </div>
  );
}
