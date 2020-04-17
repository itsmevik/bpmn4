import { Fragment, useState } from 'react';
import Layout from '../../components/layout';
import { useFetchUser, useUser } from '../../hooks/user';
import { Card, Typography, Grid, Box, Button } from '@material-ui/core';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';
import CreateCompanyDialog from '../../components/dialogs/create-company';
import { getRandomString } from '../../utils';
import { useFetchCompanies } from '../../hooks/company';
import CompanyItem from '../../components/company-item';

function Dashboard(props) {
  const { user, loading } = useFetchUser();
  const { companies, companiesLoading, setCompanies } = useFetchCompanies(user);
  console.log(companies);
  const [newCompanyDialogOpened, setNewCompanyDialogOpened] = useState(false);
  const handleCreateCompanyButtonClick = () => {
    setNewCompanyDialogOpened(true);
  };
  const closeNewCompanyDialog = () => {
    setNewCompanyDialogOpened(false);
  };
  const createNewCompany = async (companyName, companyDescription) => {
    const companyInfo = await fetch('/api/create-company', {
      method: 'POST',
      body: JSON.stringify({
        user_sub: user.sub,
        name: companyName,
        description: companyDescription
      })
    });
    if (companyInfo.ok) {
      var newCompanyInfo = await companyInfo.json();
      console.log(newCompanyInfo);
      closeNewCompanyDialog();
      if (companies) {
        var updatedCompanies = [...companies, newCompanyInfo.response[0]];
        setCompanies(updatedCompanies);
        console.log(updatedCompanies);
      } else {
        setCompanies([newCompanyInfo]);
      }
    } else {
      closeNewCompanyDialog();
    }
    console.log(companyInfo);
  };
  const getCompaniesList = (companies, companiesLoading) => {
    if (!companiesLoading) {
      if (companies) {
        return companies.map(company => {
          return (
            <Grid item xs={3}>
              <CompanyItem company={company}></CompanyItem>
            </Grid>
          );
        });
      }
    }
  };
  return (
    <Fragment>
      <Layout gated={true}>
        {/* <div className="dashboard-nameblock">
          <div>Welcome {user && user.name}!</div>
          <div>Dashboard</div>
        </div> */}
        <div>
          <Grid container>
            <Grid item xs={12}>
              <div className="main-title">
                <Typography variant="h3">Dashboard</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleCreateCompanyButtonClick()}
              >
                Create a Company
              </Button>
            </Grid>

            {getCompaniesList(companies, companiesLoading)}
          </Grid>
        </div>
      </Layout>
      <CreateCompanyDialog
        open={newCompanyDialogOpened}
        onCancel={closeNewCompanyDialog}
        onSubmit={createNewCompany}
      ></CreateCompanyDialog>
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
          .main-title {
            margin-top: 22px;
          }
        `}
      </style>
    </Fragment>
  );
}

export default Dashboard;
