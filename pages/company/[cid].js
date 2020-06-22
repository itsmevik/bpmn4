import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid, Typography, Button } from "@material-ui/core";
import ProjectItem from "../../components/project-item";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useFetchCompany } from "../../hooks/company";
import { useFetchProjects } from "../../hooks/project";
import AddIcon from "@material-ui/icons/Add";
import CreateProject from "../../components/dialogs/create-project";
import fetch from "isomorphic-fetch";
import DeleteConfirmation from "../../components/dialogs/delete-confirmation";
import Router from "next/router";
import { makeStyles } from "@material-ui/styles";
import EditProject from "../../components/dialogs/edit-project";

const useStyles = makeStyles((theme) => ({
  gridClass: {
    position: "relative",
  },
}));

export default function (props) {
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { cid } = router.query;
  const { companyFromAPI, companyLoading } = useFetchCompany(user, cid);
  const { projectsFromAPI, projectsLoading } = useFetchProjects(user, cid);
  const [projects, setProjects] = useState(projectsFromAPI);
  const [createProjectDialogOpened, setCreateProjectDialogOpened] = useState(
    false
  );
  const [editProjectDialogClose, setEditProjectDialogClose] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState("");
  const [projectNameToDelete, setProjectNameToDelete] = useState("");
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);
  useEffect(() => {
    setProjects(projectsFromAPI);
  }, [projectsFromAPI]);

  if (companyFromAPI == null && !companyLoading) {
    router.push("/dashboard");
  }

  const handleCreateProjectButtonClick = () => {
    setCreateProjectDialogOpened(true);
  };

  const handleDeleteProject = (projectId, projectName) => {
    setProjectIdToDelete(projectId);
    setProjectNameToDelete(projectName);
    setDeleteConfirmationDialogOpened(true);
  };

  const handleEditProject = (projectId) => {
    Router.push(`/project/${projectId}`);
  };

  const closeCreateProjectDialog = () => {
    setCreateProjectDialogOpened(false);
  };

  const createNewProject = async (projectName, projectDescription) => {
    const projectInfo = await fetch("/api/create-project", {
      method: "POST",
      body: JSON.stringify({
        user_sub: user.sub,
        name: projectName,
        description: projectDescription,
        company_id: cid,
      }),
    });
    if (projectInfo.ok) {
      var newProjectInfo = await projectInfo.json();
      closeCreateProjectDialog();
      if (projects) {
        var updatedProjects = [...projects, newProjectInfo.response];
        setProjects(updatedProjects);
      } else {
        setProjects([newProjectInfo.response]);
      }
    }
  };

  const editProject = async (name, description, projectData) => {
    const projectInfo = await fetch("/laravel/projects/update-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_sub: user.sub,
        project_id: projectData.p_id,
        name: name,
        description: description,
      }),
    });
    if (projectInfo.ok && name != projectData.name) {
      var newProjectInfo = await projectInfo.json();
      if (projects) {
        let index = projects.findIndex(
          (element) => element.p_id == projectData.p_id
        );
        const filteredItems = projects.filter(
          (item) => item.p_id !== projectData.p_id
        );
        filteredItems.splice(index, 0, newProjectInfo[0]);
        var updatedProjects = filteredItems;
        setProjects(updatedProjects);
        closeEditProjectDialog();
      }
    } else if (description != projectData.description) {
      var newProjectInfo = await projectInfo.json();
      if (projects) {
        let index = projects.findIndex(
          (element) => element.p_id == projectData.p_id
        );
        const filteredItems = projects.filter(
          (item) => item.p_id !== projectData.p_id
        );
        filteredItems.splice(index, 0, newProjectInfo[0]);
        var updatedProjects = filteredItems;
        setProjects(updatedProjects);
        closeEditProjectDialog();
      }
    } else {
      closeEditProjectDialog();
    }
  };
  const closeEditProjectDialog = () => {
    setEditProjectDialogClose(true);
  };
  const openEditProjectDialog = () => {
    setEditProjectDialogClose(false);
  };
  const getProjectsList = (projects, projectsLoading) => {
    const classes = useStyles();
    if (!projectsLoading) {
      if (projects) {
        return projects.map((project, index) => {
          return (
            <Grid
              key={index}
              item
              className={classes.gridClass}
              xs={12}
              sm={4}
              lg={3}
              sy={""}
            >
              <ProjectItem
                closeEdit={editProjectDialogClose}
                callClose={openEditProjectDialog}
                editProject={(projectName, projectDescription, projectData) =>
                  editProject(projectName, projectDescription, projectData)
                }
                project={project}
                onDelete={(projectId, projectName) =>
                  handleDeleteProject(projectId, projectName)
                }
                onEdit={(projectId) => handleEditProject(projectId)}
              ></ProjectItem>
            </Grid>
          );
        });
      }
      return <div>You don't have any Projects</div>;
    }
  };

  const deleteConfirmationDialogCancel = () => {
    setDeleteConfirmationDialogOpened(false);
  };

  const deleteConfirmationDialogConfirm = async () => {
    const projectInfo = await fetch("/api/delete-project", {
      method: "POST",
      body: JSON.stringify({
        user_sub: user.sub,
        project_id: projectIdToDelete,
      }),
    });
    if (projectInfo.ok) {
      var updatedProjects = projects.filter(
        (project) => project.p_id != projectIdToDelete
      );
      setProjects(updatedProjects);
      setDeleteConfirmationDialogOpened(false);
    } else {
      setDeleteConfirmationDialogOpened(false);
    }
  };

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <Grid container>
          <Grid item xs={12}>
            <div className="main-title">
              <Typography variant="h3">
                {companyFromAPI ? companyFromAPI.name : ""}
              </Typography>
              <Typography>
                {companyFromAPI ? companyFromAPI.description : ""}
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
                onClick={() => handleCreateProjectButtonClick()}
              >
                Create a Project
              </Button>
            </Grid>

            {getProjectsList(projects, projectsLoading)}
          </Grid>
        </div>
        <CreateProject
          open={createProjectDialogOpened}
          onCancel={closeCreateProjectDialog}
          onSubmit={createNewProject}
        ></CreateProject>
        <DeleteConfirmation
          message={`Are you sure to delete ${projectNameToDelete}?`}
          open={deleteConfirmationDialogOpened}
          onCancel={deleteConfirmationDialogCancel}
          onConfirm={deleteConfirmationDialogConfirm}
        ></DeleteConfirmation>
      </Layout>
    </Fragment>
  );
}
