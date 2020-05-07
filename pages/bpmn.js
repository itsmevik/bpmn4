import dynamic from 'next/dynamic';
import Layout from '../components/layout';
import { Drawer, makeStyles } from '@material-ui/core';
//import BPMNContainer from '../components/bpmn/bpmn-container';
import { drawerWidth } from '../constants';
import { minHeight } from '@material-ui/system';
import { useFetchUser } from '../hooks/user';
const BPMNContainer = dynamic(
  () => import('../components/bpmn/bpmn-container'),
  { ssr: false }
);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

export default function() {
  const classes = useStyles();
  const { user, userLoading } = useFetchUser();
  return (
    <React.Fragment>
      <Layout fullWidth={true} user={user} userLoading={userLoading}>
        {/* <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        ></Drawer> */}
        <div className={classes.bpmnContainer}>
          <BPMNContainer></BPMNContainer>
        </div>
      </Layout>
    </React.Fragment>
  );
}
