import { Fragment } from 'react';
import Layout from '../../components/layout';
import { Grid, Typography } from '@material-ui/core';
import ProjectItem from '../../components/project-item';
import { useRouter } from 'next/router';
import { useFetchUser } from '../../hooks/user';
import { useFetchCompany } from '../../hooks/company';

export default function(props) {
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { cid } = router.query;
  const { companyFromAPI, companyLoading } = useFetchCompany(user, cid);

  if (companyFromAPI == null && !companyLoading) {
    router.push('/dashboard');
  }

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <Grid container>
          <Grid item xs={12}>
            <div className="main-title">
              <Typography variant="h3">
                {companyFromAPI ? companyFromAPI.name : ''}
              </Typography>
              <Typography>
                {companyFromAPI ? companyFromAPI.description : ''}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div>
          <Grid item xs={3}>
            <ProjectItem></ProjectItem>
          </Grid>
        </div>
      </Layout>
    </Fragment>
  );
}
