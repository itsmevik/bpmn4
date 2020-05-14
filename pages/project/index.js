import { Fragment } from 'react';
import Layout from '../../components/layout';
import { Grid } from '@material-ui/core';
import ProjectItem from '../../components/project-item';

export default function(props) {
  return (
    <Fragment>
      <Layout gated={true}>
        <div>Project</div>
        <div>
          {/* <Grid item xs={3}>
            <ProjectItem></ProjectItem>
          </Grid> */}
        </div>
      </Layout>
    </Fragment>
  );
}
