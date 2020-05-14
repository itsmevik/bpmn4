import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useFetchUser, useUser } from "../../hooks/user";
import { Card, Typography, Grid, Box, Button } from "@material-ui/core";
import Link from "next/link";
import AddIcon from "@material-ui/icons/Add";
import CreateCompanyDialog from "../../components/dialogs/create-company";
import { getRandomString } from "../../utils";
import { useFetchCompanies } from "../../hooks/company";
import CompanyItem from "../../components/company-item";
import Router from "next/router";
import DeleteConfirmation from "../../components/dialogs/delete-confirmation";

function Dashboard(props) {
  const { user, userLoading } = useFetchUser();
  const { companiesFromAPI, companiesLoading } = useFetchCompanies(user);

  const [companies, setCompanies] = useState(companiesFromAPI);
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);

  useEffect(() => {
    setCompanies(companiesFromAPI);
  }, [companiesFromAPI]);

  const [newCompanyDialogOpened, setNewCompanyDialogOpened] = useState(false);
  const [companyIdToDelete, setCompanyIdToDelete] = useState("");
  const [companyNameToDelete, setCompanyNameToDelete] = useState("");

  const handleCreateCompanyButtonClick = () => {
    setNewCompanyDialogOpened(true);
  };
  const closeNewCompanyDialog = () => {
    setNewCompanyDialogOpened(false);
  };
  const handleDeleteCompany = (companyId, companyName) => {
    setCompanyIdToDelete(companyId);
    setCompanyNameToDelete(companyName);
    setDeleteConfirmationDialogOpened(true);
  };
  const handleEditCompany = (companyId) => {
    Router.push(`/company/${companyId}`);
  };
  const deleteConfirmationDialogCancel = () => {
    setDeleteConfirmationDialogOpened(false);
  };
  const deleteConfirmationDialogConfirm = async () => {
    const companyInfo = await fetch("/api/delete-company", {
      method: "POST",
      body: JSON.stringify({
        user_sub: user.sub,
        company_id: companyIdToDelete,
      }),
    });
    if (companyInfo.ok) {
      var updatedCompanies = companies.filter(
        (company) => company.c_id != companyIdToDelete
      );
      setCompanies(updatedCompanies);
      setDeleteConfirmationDialogOpened(false);
    } else {
      setDeleteConfirmationDialogOpened(false);
    }
  };
  const createNewCompany = async (companyName, companyDescription) => {
    const companyInfo = await fetch("/api/create-company", {
      method: "POST",
      body: JSON.stringify({
        user_sub: user.sub,
        name: companyName,
        description: companyDescription,
      }),
    });
    if (companyInfo.ok) {
      var newCompanyInfo = await companyInfo.json();
      closeNewCompanyDialog();
      if (companies) {
        var updatedCompanies = [...companies, newCompanyInfo.response[0]];
        setCompanies(updatedCompanies);
      } else {
        setCompanies([newCompanyInfo]);
      }
    } else {
      closeNewCompanyDialog();
    }
  };
  const getCompaniesList = (companies, companiesLoading) => {
    if (!companiesLoading) {
      if (companies) {
        return companies.map((company) => {
          return (
            <Grid item xs={12} sm={4} lg={3}>
              <CompanyItem
                company={company}
                onDelete={(companyId, companyName) =>
                  handleDeleteCompany(companyId, companyName)
                }
                onEdit={(companyId) => handleEditCompany(companyId)}
              ></CompanyItem>
            </Grid>
          );
        });
      }
      return <div>You don't have any companies</div>;
    }
  };
  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
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
      <DeleteConfirmation
        message={`Are you sure to delete company ${companyNameToDelete}?`}
        open={deleteConfirmationDialogOpened}
        onCancel={deleteConfirmationDialogCancel}
        onConfirm={deleteConfirmationDialogConfirm}
      ></DeleteConfirmation>
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
