import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid, Typography, Button } from "@material-ui/core";
import FlowItem from "../../components/flow-item";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useFetchFlows } from "../../hooks/flow";
// import { useFetchProjects } from "../../hooks/project";
import AddIcon from "@material-ui/icons/Add";
import CreateFlow from "../../components/dialogs/create-flow";
import fetch from "isomorphic-fetch";
import DeleteConfirmation from "../../components/dialogs/delete-confirmation";
import Router from "next/router";
import dynamic from "next/dynamic";
import emptyBPMN from "../../components/bpmn/empty.bpmn";

export default function (props) {
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { projectid } = router.query;
  const { flowsFromAPI, flowsLoading } = useFetchFlows(projectid, user);

  // const { projectsFromAPI, projectsLoading } = useFetchProjects(
  //   user,
  //   projectid
  // );
  const [flows, setFlows] = useState(flowsFromAPI);
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

  const closeCreateFlowDialog = () => {
    setCreateFlowDialogOpened(false);
  };

  const createNewFlow = async (flowName, flowDescription) => {
    var file = new File([emptyBPMN], "emptyBPMN.xml", { type: "text/plain" });
    console.log("fsfs", file);
    var formData = new FormData();

    formData.append("user_sub", user.sub);
    formData.append("project_id", projectid);
    formData.append("flow_file", file);
    formData.append("name", flowName);
    formData.append("description", flowDescription);

    const flowInfo = await fetch("/laravel/create-flow", {
      method: "POST",
      // headers: { "content-type": "multipart/form-data" },
      body: formData,
    });
    if (flowInfo.ok) {
      var newFlowInfo = await flowInfo.json();
      closeCreateFlowDialog();
      if (flows) {
        console.log("newflow", newFlowInfo.response[0]);
        console.log("flows", flows);

        var updatedFlows = [...flows, newFlowInfo.response[0]];

        setFlows(updatedFlows);
      } else {
        setFlows([newFlowInfo.response]);
      }
    }
  };

  const getFlowsList = (flows, flowsLoading) => {
    if (!flowsLoading) {
      if (flows) {
        // if (flows.response) flows = flows.response;
        console.log("flows", flows);

        return flows.map((flow) => {
          return (
            <Grid item xs={12} sm={4} lg={3}>
              <FlowItem
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
    const flowInfo = await fetch("/laravel/delete-flow", {
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
        {/* <Grid container>
          <Grid item xs={12}>
            <div className="main-title">
              <Typography variant="h3">
                {flowsFromAPI ? flowsFromAPI.name : ""}
              </Typography>
              <Typography>
                {flowsFromAPI ? flowsFromAPI.description : ""}
              </Typography>
            </div>
          </Grid>
        </Grid> */}
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
