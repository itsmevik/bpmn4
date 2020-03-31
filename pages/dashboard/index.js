import { Fragment } from 'react';
import Layout from '../../components/layout';
import { useFetchUser } from '../../hooks/user';
import { Card, Typography, Grid, Box } from '@material-ui/core';
import Link from 'next/link';

export default function() {
  const { user, loading } = useFetchUser();
  return (
    <Fragment>
      <Layout gated={true}>
        <div className="dashboard-nameblock">
          <div>Welcome {user && user.name}!</div>
          <div>Dashboard</div>
        </div>
        <div>
          <Grid item xs={3}>
            <Link href="/projects">
              <Card>
                <div className="card-content">
                  <Typography>Projects</Typography>
                </div>
              </Card>
            </Link>
          </Grid>
        </div>
      </Layout>
      <style jsx>
        {`
          .card-content {
            cursor: pointer;

            padding: 8px 16px;
            background-color: #673ab7;
            color: #ffffff;
          }
          .dashboard-nameblock {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            margin-bottom: 20px;
          }
        `}
      </style>
    </Fragment>
  );
}
