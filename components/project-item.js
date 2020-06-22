import { Card, Typography, CardContent, Box } from "@material-ui/core";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import { makeStyles } from "@material-ui/styles";
import ProjectItemMenu from "./project-item-menu";
import EditProject from "./dialogs/edit-project";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFetchUser } from "../hooks/user";
import { useFetchCompany } from "../hooks/company";
import { useFetchProjects } from "../hooks/project";
import { route } from "next/dist/next-server/server/router";
const useStyles = makeStyles((theme) => ({
  cardHeaderText: {
    fontSize: 12,
    marginLeft: 0,
    marginBottom: 0,
    display: "flex",
  },
  cardBox: {
    padding: "13px 29px",
    height: 170,
    cursor: "pointer",
  },

  cardBoxHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 20,
    marginTop: -2,
    color: "#b2b0b0",
    height: 15,
    width: "auto",
  },
  cardBoxHeadeText: {
    marginLeft: 8,
    color: "#b2b0b0",
    textTransform: "uppercase",
    fontSize: 10,
    fontWeight: 400,
  },
  cardContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export default function ProjectItem(props) {
  const classes = useStyles();
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { cid } = router.query;
  const { companyFromAPI, companyLoading } = useFetchCompany(user, cid);
  const { projectsFromAPI, projectsLoading } = useFetchProjects(user, cid);
  const [projects, setProjects] = useState(projectsFromAPI);
  const [open, setProjectDialog] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState("");
  const [projectNameToDelete, setProjectNameToDelete] = useState("");
  const [
    deleteConfirmationDialogOpened,
    setDeleteConfirmationDialogOpened,
  ] = useState(false);

  useEffect(() => {
    setProjects(projectsFromAPI);
  }, [projectsFromAPI]);
  useEffect(() => {
    if (props.closeEdit) {
      setEditProjectDialogOpened(false);
    }
  });
  const [editProjectDialogOpened, setEditProjectDialogOpened] = useState(false);
  const handleEditProjectButtonClick = () => {
    props.callClose();
    setEditProjectDialogOpened(true);
  };
  const closeEditProjectDialog = () => {
    setEditProjectDialogOpened(false);
  };
  const closeProjectDialog = () => {
    setProjectDialog(true);
  };
  return (
    <>
      <EditProject
        open={editProjectDialogOpened}
        onCancel={closeEditProjectDialog}
        onSubmit={(projectName, projectDescription) =>
          props.editProject(projectName, projectDescription, props.project)
        }
        projectData={props.project}
      ></EditProject>
      <ProjectItemMenu
        onEdit={handleEditProjectButtonClick}
        onDelete={() => props.onDelete(props.project.p_id, props.project.name)}
      ></ProjectItemMenu>

      <Card
        className={classes.cardBox}
        onClick={() => props.onEdit(props.project.p_id)}
      >
        <div className={classes.cardBoxHeader}>
          <Typography
            className={classes.cardHeaderText}
            color="textSecondary"
            gutterBottom
          >
            <FolderOutlinedIcon className={classes.cardIcon} />
            <span className={classes.cardBoxHeadeText}>Project</span>
          </Typography>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography component="h6" variant="h6" color="primary">
            <Box className="clip-txt">
              {props.project ? props.project.name : ""}
            </Box>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <Box className="clip-txt">
              {props.project ? props.project.description : ""}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
