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
import { makeStyles } from "@material-ui/styles";
import EditCompany from "../../components/dialogs/edit-company";
import { useFetchGetAllFlows } from "../../hooks/flow";
import GetAllFlows from "../../components/allFlows-item";
const useStyles = makeStyles((theme) => ({
  gridClass: {
    position: "relative",
  },
}));
function Dashboard(props) {
  const { user, userLoading } = useFetchUser();
  useEffect(() => {
    console.log("login&&&&&&");
    console.log(user, userLoading);

    if (!user && !userLoading) {
      console.log("login");

      Router.push("/api/login");
    }
  }, [userLoading]);

  const { companiesFromAPI, companiesLoading } = useFetchCompanies(user);

  const { AllFlowsFromAPI, AllFlowsLoading } = useFetchGetAllFlows(user);

  console.log(AllFlowsFromAPI);

  const [companies, setCompanies] = useState(companiesFromAPI);

  const [allFlows, setAllFlows] = useState(AllFlowsFromAPI);
  console.log(allFlows, AllFlowsFromAPI);
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);

  useEffect(() => {
    setCompanies(companiesFromAPI);
  }, [companiesFromAPI]);

  useEffect(() => {
    setAllFlows(AllFlowsFromAPI);
  }, [AllFlowsFromAPI]);

  const [newCompanyDialogOpened, setNewCompanyDialogOpened] = useState(false);
  const [companyIdToDelete, setCompanyIdToDelete] = useState("");
  const [companyNameToDelete, setCompanyNameToDelete] = useState("");
  const [editCompanyDialogClose, setEditCompanyDialogClose] = useState(false);
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

    const res = await fetch("/laravel/companies/get-all/flows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_sub: user.sub,
      }),
    });

    var allFlow = res.ok ? await res.json() : null;
    //console.log(allFlow);
    setAllFlows(allFlow);
    return allFlow;
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
        setCompanies([newCompanyInfo.response[0]]);
      }
    } else {
      closeNewCompanyDialog();
    }
  };

  const editCompany = async (name, description, companyData) => {
    console.log(companyData);

    const companyInfo = await fetch("/laravel/companies/update-company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: companyData.c_id,
        name: name,
        description: description,
        user_sub: user.sub,
      }),
    });
    if (companyInfo.ok && name != companyData.name) {
      var newCompanyInfo = await companyInfo.json();
      console.log(newCompanyInfo, companies);

      if (companies) {
        let ind = companies.findIndex(
          (element) => element.c_id == companyData.c_id
        );
        let updatedCompanies = companies.filter(
          (item) => item.c_id != companyData.c_id
        );
        updatedCompanies.splice(ind, 0, newCompanyInfo.edit_company[0]);
        console.log(updatedCompanies, companies);
        setCompanies(updatedCompanies);
        closeEditCompanyDialog();
      }
    } else if (description != companyData.description) {
      var newCompanyInfo = await companyInfo.json();
      if (companies) {
        let index = companies.findIndex(
          (element) => element.c_id == companyData.c_id
        );
        const filteredItems = companies.filter(
          (item) => item.c_id !== companyData.c_id
        );
        filteredItems.splice(index, 0, newCompanyInfo[0]);
        var updatedCompanies = filteredItems;
        setCompanies(updatedCompanies);
        closeEditCompanyDialog();
      }
    } else {
      closeEditCompanyDialog();
    }
  };

  const closeEditCompanyDialog = () => {
    // setNewCompanyDialogOpened(true);
    setEditCompanyDialogClose(true);
  };
  const openEditCompanyDialog = () => {
    //setNewCompanyDialogOpened(false);
    setEditCompanyDialogClose(false);
  };
  const handleFlowClick = (flow_id) => {
    console.log(flow_id);
    Router.push(`/flow/${flow_id}`);
  };

  const getAllflowsList = (allFlows, AllFlowsLoading) => {
    if (!AllFlowsLoading) {
      if (allFlows) {
        return (
          <GetAllFlows
            Item={allFlows}
            onFlowClick={(flow_id) => handleFlowClick(flow_id)}
          ></GetAllFlows>
        );
      }
    }
  };

  const getCompaniesList = (companies, companiesLoading) => {
    const classes = useStyles();
    if (!companiesLoading) {
      if (companies) {
        return companies.map((company) => {
          return (
            <Grid className={classes.gridClass} item xs={12} sm={4} lg={3}>
              <CompanyItem
                closeEdit={editCompanyDialogClose}
                callClose={openEditCompanyDialog}
                editCompany={(companyName, companyDescription, companyData) =>
                  editCompany(companyName, companyDescription, companyData)
                }
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
  // if (!user || userLoading) {
  //   return "";
  // }
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
        <div style={{ marginTop: 50 }}>
          {getAllflowsList(allFlows, AllFlowsLoading)}
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
