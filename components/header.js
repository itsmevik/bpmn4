import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";
import { useFetchUser } from "../hooks/user";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: 1210,
    position: "relative",
  },
  loginLink: {
    color: "#FFFFFF",
  },
  logoutLink: {
    textDecorationLine: "none",
    color: "#000000",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  userblock: {
    display: "flex",
    alignItems: "center",
  },
  userName: {
    marginRight: theme.spacing(1),
    fontSize: 18,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  var { user } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BPMN
          </Typography>
          {user && (
            <span className={classes.userblock}>
              <span className={classes.userName}>Welcome {user.name}!</span>
              <Avatar alt={user.name} src={user.picture}></Avatar>

              <div className={classes.root}>
                <div>
                  <IconButton
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>

                          <MenuItem>
                            <a
                              href="/api/logout"
                              className={classes.logoutLink}
                            >
                              Logout
                            </a>
                          </MenuItem>
                          {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Popper>
                </div>
              </div>
            </span>
          )}
          {/* {!user && (
            <Link href="/api/login" className={classes.loginLink}>
              Login
            </Link>
          )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
