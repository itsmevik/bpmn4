import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';
import { useFetchUser } from '../hooks/user';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: 1210,
    position: 'relative'
  },
  loginLink: {
    color: '#FFFFFF'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  userblock: {
    display: 'flex',
    alignItems: 'center'
  },
  userName: {
    marginRight: theme.spacing(1),
    fontSize: 18
  }
}));

export default function Header() {
  const classes = useStyles();
  const { user, loading } = useFetchUser();
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
            </span>
          )}
          {!user && (
            <Link href="/api/login" className={classes.loginLink}>
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
