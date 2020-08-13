import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid, Typography, Button } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import ProjectItem from "../../components/project-item";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useFetchCompany } from "../../hooks/company";
import { UseFetchUserAddedToCompany } from "../../hooks/company";
//import { UseFetchGetAllUsers } from "../../hooks/company";
import { useFetchProjects } from "../../hooks/project";
import AddIcon from "@material-ui/icons/Add";
import CreateProject from "../../components/dialogs/create-project";
import fetch from "isomorphic-fetch";
import DeleteConfirmation from "../../components/dialogs/delete-confirmation";
import Router from "next/router";
import { makeStyles } from "@material-ui/styles";
import EditProject from "../../components/dialogs/edit-project";

//import AddUser from "../../components/dialogs/add-user";
import SearchUser from "../../components/dialogs/search-user";
import UsersList from "../../components/company-users-item";
import DeleteCompanyUserConfirmation from "../../components/dialogs/DeleteCompanyUserConfirmation";
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
  const { usersFromAPI, usersLoading } = UseFetchUserAddedToCompany(user, cid);
  console.log(usersFromAPI, usersLoading);

  const [projects, setProjects] = useState(projectsFromAPI);
  const [companyusers, setCompanyusers] = useState(usersFromAPI);
  console.log(companyusers);
  const [createProjectDialogOpened, setCreateProjectDialogOpened] = useState(
    false
  );
  const [editProjectDialogClose, setEditProjectDialogClose] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState("");
  const [projectNameToDelete, setProjectNameToDelete] = useState("");

  const [companyUserIdToDelete, setcompanyUserIdToDelete] = useState("");
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);

  const [
    deleteUserConfirmationDialogOpened,
    setDeleteUserConfirmationDialogOpened,
  ] = useState(false);
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false);

  useEffect(() => {
    setProjects(projectsFromAPI);
  }, [projectsFromAPI]);

  useEffect(() => {
    setCompanyusers(usersFromAPI);
  }, [usersFromAPI]);

  // useEffect(() => {
  //   setAllUsers(AllUsersFromAPI);
  // }, [AllUsersFromAPI]);

  //console.log(companyusers.map((row) => row.email));

  if (companyFromAPI == null && !companyLoading) {
    router.push("/dashboard");
  }
  const companyClick = () => {
    Router.push(`/company/${cid}`);
  };

  const handleCreateProjectButtonClick = () => {
    setCreateProjectDialogOpened(true);
  };

  const handleDeleteProject = (projectId, projectName) => {
    setProjectIdToDelete(projectId);
    setProjectNameToDelete(projectName);
    setDeleteConfirmationDialogOpened(true);
  };

  const handleDeleteCompanyUser = (UserID) => {
    console.log(UserID);
    setcompanyUserIdToDelete(UserID);
    setDeleteUserConfirmationDialogOpened(true);
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
      console.log(newProjectInfo.response);
      closeCreateProjectDialog();
      if (projects) {
        var updatedProjects = [...projects, newProjectInfo.response];
        setProjects(updatedProjects);
      } else {
        setProjects([newProjectInfo.response]);
      }
    }
  };

  const addUserToCompany = async (UserMail) => {
    console.log(UserMail);
    var formData = new FormData();
    formData.append("company_id", cid);
    formData.append("user_sub", user.sub);
    formData.append("email", UserMail);
    formData.append("is_admin", 1);
    const userInfo = await fetch("/laravel/companies/add-user-to-company", {
      method: "POST",
      body: formData,
    });
    if (userInfo.ok) {
      console.log("userInfo.ok");
      var newUserInfo = await userInfo.json();
      console.log(newUserInfo);
      closeUserAddDialogOpened();
      if (companyusers) {
        var updateCompanyUsers = [...companyusers, newUserInfo.user];
        console.log(companyusers, updateCompanyUsers);

        setCompanyusers(updateCompanyUsers);
      } else {
        setCompanyusers(newUserInfo);
      }

      // console.log(newUserInfo.user);
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
  const handleAddUserButtonClick = () => {
    // console.log("add-user");
    setAddUserDialogOpened(true);
  };

  const closeUserAddDialogOpened = () => {
    setAddUserDialogOpened(false);
  };

  const handleUserAddDialogConfirmed = () => {
    setAddUserDialogOpened(false);
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

  const getCompanyUsersList = (companyusers, usersLoading) => {
    const classes = useStyles();

    if (!usersLoading) {
      if (companyusers) {
        return (
          <UsersList
            Item={companyusers}
            onDelete={(UserID) => handleDeleteCompanyUser(UserID)}
          ></UsersList>
        );
      }
    }
  };

  const deleteConfirmationDialogCancel = () => {
    setDeleteConfirmationDialogOpened(false);
  };

  const deleteUserConfirmationDialogCancel = () => {
    setDeleteUserConfirmationDialogOpened(false);
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

  const deleteCompanyUserDialogConfirm = async () => {
    var formData = new FormData();

    console.log("deleted");
    formData.append("company_id", cid);

    formData.append("user_sub", user.sub);
    formData.append("user_id", companyUserIdToDelete);

    const userInfo = await fetch(
      "/laravel/companies/delete-user-from-company",
      {
        method: "POST",
        body: formData,
      }
    );
    if (userInfo.ok) {
      var updateCompanyUsers = companyusers.filter(
        (companyUser) => companyUser.user_id != companyUserIdToDelete
      );

      setCompanyusers(updateCompanyUsers);
      setDeleteUserConfirmationDialogOpened(false);
    } else {
      setDeleteUserConfirmationDialogOpened(false);
    }
  };

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/dashboard">
            Home
          </Link>
          <Link color="textPrimary" href="" onClick={companyClick}>
            {companyFromAPI ? companyFromAPI.name : ""}
          </Link>
        </Breadcrumbs>
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => handleAddUserButtonClick()}
          >
            Add User
          </Button>
        </div>

        <div>{getCompanyUsersList(companyusers, usersLoading)}</div>
        <div>
          <Grid container spacing={2} style={{ marginTop: 5 }}>
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
        {/* <AddUser
          open={addUserDialogOpened}
          setClose={closeUserAddDialogOpened}
          onSubmit={addUserToCompany}
          user={user}
        ></AddUser> */}
        <SearchUser
          open={addUserDialogOpened}
          setClose={closeUserAddDialogOpened}
          onSubmit={(UserMail) => addUserToCompany(UserMail)}
          user={user}
        ></SearchUser>
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
        <DeleteCompanyUserConfirmation
          message={`Are you sure to delete?`}
          open={deleteUserConfirmationDialogOpened}
          onCancel={deleteUserConfirmationDialogCancel}
          onConfirm={deleteCompanyUserDialogConfirm}
        ></DeleteCompanyUserConfirmation>
      </Layout>
    </Fragment>
  );
}
