import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid, Typography, Button } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import FlowItem from "../../components/flow-item";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useFetchFlows } from "../../hooks/flow";
// import { useFetchProjects } from "../../hooks/project";
import { useFetchProject } from "../../hooks/project";
import { useFetchCompany } from "../../hooks/company";

import AddIcon from "@material-ui/icons/Add";
import CreateFlow from "../../components/dialogs/create-flow";
import fetch from "isomorphic-fetch";
import DeleteConfirmation from "../../components/dialogs/delete-confirmation";
import Router from "next/router";
import dynamic from "next/dynamic";
import emptyBPMN from "../../components/bpmn/empty.bpmn";
import { makeStyles } from "@material-ui/styles";
import EditFlow from "../../components/dialogs/edit-flow";

const useStyles = makeStyles((theme) => ({
  gridClass: {
    position: "relative",
  },
}));
export default function (props) {
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { projectid, cid } = router.query;
  const { flowsFromAPI, flowsLoading } = useFetchFlows(projectid, user);
  const [flows, setFlows] = useState(flowsFromAPI);

  const { projectFromAPI, projectLoading } = useFetchProject(user, projectid);
  const { companyFromAPI, companyLoading } = useFetchCompany(user, cid);
  // const { projectsFromAPI, projectsLoading } = useFetchProjects(
  //   user,
  //   projectid
  // );
  console.log(projectFromAPI);

  //console.log(companyFromAPI, cid);
  const [editFlowDialogClose, setEditFlowDialogClose] = useState(false);

  const [createFlowDialogOpened, setCreateFlowDialogOpened] = useState(false);
  const [flowIdToDelete, setFlowIdToDelete] = useState("");
  const [flowNameToDelete, setFlowNameToDelete] = useState("");
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);
  useEffect(() => {
    setFlows(flowsFromAPI);
  }, [flowsFromAPI]);

  // if (companyFromAPI == null && !companyLoading) {
  //   router.push("/dashboard");
  // }

  const handleCreateFlowButtonClick = () => {
    setCreateFlowDialogOpened(true);
  };

  const handleDeleteFlow = (flowId, flowName) => {
    setFlowIdToDelete(flowId);
    setFlowNameToDelete(flowName);
    setDeleteConfirmationDialogOpened(true);
  };

  const handleEditFlow = (flowId) => {
    Router.push(`/flow/${flowId}`);
  };

  const companyClick = () => {
    Router.push(`/company/${projectFromAPI.company_id}`);
  };
  const projectClick = () => {
    Router.push(`/project/${projectid}`);
  };

  const closeCreateFlowDialog = () => {
    setCreateFlowDialogOpened(false);
  };

  const createNewFlow = async (flowName, flowDescription) => {
    var file = new File([emptyBPMN], "emptyBPMN.xml", { type: "text/plain" });
    var formData = new FormData();

    formData.append("user_sub", user.sub);
    formData.append("project_id", projectid);
    formData.append("flow_file", file);
    formData.append("name", flowName);
    formData.append("description", flowDescription);

    const flowInfo = await fetch("/laravel/flows/create-flow", {
      method: "POST",
      // headers: { "content-type": "multipart/form-data" },
      body: formData,
    });
    console.log("flows", flowInfo);

    if (flowInfo.ok) {
      var newFlowInfo = await flowInfo.json();
      closeCreateFlowDialog();
      if (flows) {
        // console.log("newflow", newFlowInfo.response[0]);
        // console.log("flows", flowInfo);

        var updatedFlows = [...flows, newFlowInfo.response[0]];

        setFlows(updatedFlows);
      } else {
        setFlows([newFlowInfo.response]);
      }
    }
  };

  const editFlow = async (flowName, flowDescription, flowData) => {
    //var file = new File([emptyBPMN], "emptyBPMN.xml", { type: "text/plain" });
    var formData = new FormData();
    formData.append("f_id", flowData.f_id);
    formData.append("name", flowName);
    //formData.append("flow_file", file);
    formData.append("user_sub", user.sub);
    // formData.append("description", flowDescription);

    const flowInfo = await fetch("/laravel/flows/update-flow", {
      method: "POST",

      body: formData,
    });
    if (flowInfo.ok && flowName != flowData.flowName) {
      var newFlowInfo = await flowInfo.json();

      if (flows) {
        let ind = flows.findIndex((element) => element.f_id == flowData.f_id);
        let filteredItems = flows.filter((item) => item.f_id !== flowData.f_id);

        filteredItems.splice(ind, 0, newFlowInfo.response);
        var updatedFlows = filteredItems;

        setFlows(updatedFlows);
        closeEditFlowDialog();
      }
    } else if (flowDescription != flowData.flowDescription) {
      var newFlowInfo = await flowInfo.json();
      if (flows) {
        let index = flows.findIndex((element) => element.f_id == flowData.f_id);
        const filteredItems = flows.filter(
          (item) => item.f_id !== flowData.f_id
        );
        filteredItems.splice(index, 0, newFlowInfo.response);
        var updatedFlows = filteredItems;
        setFlows(updatedFlows);
        closeEditFlowDialog();
      }
    } else {
      closeEditFlowDialog();
    }
  };

  const closeEditFlowDialog = () => {
    setEditFlowDialogClose(true);
  };
  const openEditFlowDialog = () => {
    setEditFlowDialogClose(false);
  };

  const getFlowsList = (flows, flowsLoading) => {
    const classes = useStyles();

    if (!flowsLoading) {
      if (flows) {
        // if (flows.response) flows = flows.response;
        // console.log("flows", flows);

        return flows.map((flow, index) => {
          return (
            <Grid
              className={classes.gridClass}
              key={index}
              item
              xs={12}
              sm={4}
              lg={3}
            >
              <FlowItem
                closeEdit={editFlowDialogClose}
                callClose={openEditFlowDialog}
                editFlow={(flowName, flowDescription, flowData) =>
                  editFlow(flowName, flowDescription, flowData)
                }
                flow={flow}
                onDelete={(flowId, flowName) =>
                  handleDeleteFlow(flowId, flowName)
                }
                onEdit={(flowId) => handleEditFlow(flowId)}
              ></FlowItem>
            </Grid>
          );
        });
      }
      return <div>You don't have any Flows</div>;
    }
  };

  const deleteConfirmationDialogCancel = () => {
    setDeleteConfirmationDialogOpened(false);
  };

  const deleteConfirmationDialogConfirm = async () => {
    const flowInfo = await fetch("/laravel/flows/delete-flow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_sub: user.sub,
        f_id: flowIdToDelete,
      }),
    });
    if (flowInfo.ok) {
      var updatedFlows = flows.filter((flow) => flow.f_id != flowIdToDelete);
      setFlows(updatedFlows);
      setDeleteConfirmationDialogOpened(false);
    } else {
      setDeleteConfirmationDialogOpened(false);
    }
  };

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/dashboard">
            Home
          </Link>
          <Link color="inherit" href="" onClick={companyClick}>
            {projectFromAPI ? projectFromAPI.company_name : ""}
          </Link>
          <Link color="textPrimary" href="" onClick={projectClick}>
            {projectFromAPI ? projectFromAPI.name : ""}
          </Link>
        </Breadcrumbs>
        <Grid container>
          <Grid item xs={12}>
            <div className="main-title">
              <Typography variant="h4">
                {projectFromAPI ? projectFromAPI.name : ""}
              </Typography>
              <Typography>
                {projectFromAPI ? projectFromAPI.description : ""}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleCreateFlowButtonClick()}
              >
                Create a Flow
              </Button>
            </Grid>

            {getFlowsList(flows, flowsLoading)}
          </Grid>
        </div>
        <CreateFlow
          open={createFlowDialogOpened}
          onCancel={closeCreateFlowDialog}
          onSubmit={createNewFlow}
        ></CreateFlow>
        <DeleteConfirmation
          message={`Are you sure to delete ${flowNameToDelete}?`}
          open={deleteConfirmationDialogOpened}
          onCancel={deleteConfirmationDialogCancel}
          onConfirm={deleteConfirmationDialogConfirm}
        ></DeleteConfirmation>
      </Layout>
    </Fragment>
  );
}
