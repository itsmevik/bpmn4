import { Card, Typography, CardContent, Box } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import { makeStyles } from "@material-ui/styles";
import CompanyItemMenu from "./company-item-menu";
import EditCompany from "./dialogs/edit-company";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFetchUser } from "../hooks/user";
import { useFetchCompany } from "../hooks/company";
import { route } from "next/dist/next-server/server/router";
import { useFetchCompanies } from "../hooks/company";

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

export default function CompanyItem(props) {
  const classes = useStyles();
  const { user, userLoading } = useFetchUser();

  const router = useRouter();
  const { cid } = router.query;

  const { companiesFromAPI, companiesLoading } = useFetchCompanies(user, cid);
  const [companies, setCompanies] = useState(companiesFromAPI);

  const [open, setCompanyDialog] = useState(false);

  useEffect(() => {
    setCompanies(companiesFromAPI);
  }, [companiesFromAPI]);
  useEffect(() => {
    if (props.closeEdit) {
      setEditCompanyDialogOpened(false);
    }
  });
  const [editCompanyDialogOpened, setEditCompanyDialogOpened] = useState(false);
  const handleEditCompanyButtonClick = () => {
    props.callClose();
    setEditCompanyDialogOpened(true);
  };
  const closeEditCompanyDialog = () => {
    setEditCompanyDialogOpened(false);
  };
  return (
    <>
      <EditCompany
        open={editCompanyDialogOpened}
        onCancel={closeEditCompanyDialog}
        onSubmit={(companyName, companyDescription) =>
          props.editCompany(companyName, companyDescription, props.company)
        }
        companyData={props.company}
      ></EditCompany>
      <CompanyItemMenu
        //onEdit={() => props.onEdit(props.company.c_id)}
        onEdit={handleEditCompanyButtonClick}
        onDelete={() => props.onDelete(props.company.c_id, props.company.name)}
      ></CompanyItemMenu>
      <Card
        className={classes.cardBox}
        onClick={() => props.onEdit(props.company.c_id)}
      >
        <div className={classes.cardBoxHeader}>
          <Typography
            className={classes.cardHeaderText}
            color="textSecondary"
            gutterBottom
          >
            <BusinessIcon className={classes.cardIcon} />
            <span className={classes.cardBoxHeadeText}>Company</span>
          </Typography>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography component="h6" variant="h6" color="primary">
            <Box className="clip-txt">
              {props.company ? props.company.name : ""}
            </Box>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <Box className="clip-txt">
              {props.company ? props.company.description : ""}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
