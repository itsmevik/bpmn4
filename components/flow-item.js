import { Card, Typography, CardContent, Box } from "@material-ui/core";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import { makeStyles } from "@material-ui/styles";
import FlowItemMenu from "./flow-item-menu";

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
  return (
    <Card className={classes.cardBox}>
      <div className={classes.cardBoxHeader}>
        <Typography
          className={classes.cardHeaderText}
          color="textSecondary"
          gutterBottom
        >
          <FolderOutlinedIcon className={classes.cardIcon} />
          <span className={classes.cardBoxHeadeText}>Flow</span>
        </Typography>
        <FlowItemMenu
          onEdit={() => props.onEdit(props.flow.f_id)}
          onDelete={() => props.onDelete(props.flow.f_id, props.flow.name)}
        ></FlowItemMenu>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography component="h6" variant="h6" color="primary">
          <Box className="clip-txt">{props.flow.name}</Box>
        </Typography>
        <Typography variant="caption" color="textSecondary">
          <Box className="clip-txt">{props.flow.description}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
