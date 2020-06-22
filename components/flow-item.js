import { Card, Typography, CardContent, Box } from "@material-ui/core";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import { makeStyles } from "@material-ui/styles";
import FlowItemMenu from "./flow-item-menu";
import EditFlow from "./dialogs/edit-flow";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFetchUser } from "../hooks/user";
import { route } from "next/dist/next-server/server/router";
import { useFetchFlows } from "../hooks/flow";

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

export default function FlowItem(props) {
  const classes = useStyles();
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { flowid } = router.query;
  const { flowsFromAPI, flowsLoading } = useFetchFlows(user, flowid);
  const [flows, setFlows] = useState(flowsFromAPI);

  useEffect(() => {
    setFlows(flowsFromAPI);
  }, [flowsFromAPI]);
  useEffect(() => {
    if (props.closeEdit) {
      setEditFlowDialogOpened(false);
    }
  });
  const [editFlowDialogOpened, setEditFlowDialogOpened] = useState(false);
  const handleEditFlowButtonClick = () => {
    props.callClose();
    setEditFlowDialogOpened(true);
  };
  const closeEditFlowDialog = () => {
    setEditFlowDialogOpened(false);
  };
  return (
    <>
      <EditFlow
        open={editFlowDialogOpened}
        onCancel={closeEditFlowDialog}
        onSubmit={(flowName, flowDescription) =>
          props.editFlow(flowName, flowDescription, props.flow)
        }
        flowData={props.flow}
      ></EditFlow>
      <FlowItemMenu
        // onEdit={() => props.onEdit(props.flow.f_id)}
        onEdit={handleEditFlowButtonClick}
        onDelete={() => props.onDelete(props.flow.f_id, props.flow.name)}
      ></FlowItemMenu>
      <Card
        className={classes.cardBox}
        onClick={() => props.onEdit(props.flow.f_id)}
      >
        <div className={classes.cardBoxHeader}>
          <Typography
            className={classes.cardHeaderText}
            color="textSecondary"
            gutterBottom
          >
            <FolderOutlinedIcon className={classes.cardIcon} />
            <span className={classes.cardBoxHeadeText}>Flow</span>
          </Typography>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography component="h6" variant="h6" color="primary">
            <Box className="clip-txt">{props.flow ? props.flow.name : ""}</Box>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <Box className="clip-txt">
              {props.flow ? props.flow.description : ""}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
